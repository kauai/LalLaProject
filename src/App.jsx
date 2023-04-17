import { useState, useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDatabase, ref, child, get,onValue,set } from "firebase/database";
import uuid from 'react-uuid';

import { app,auth } from '../utils/firebse';
import 'react-calendar/dist/Calendar.css';
import './App.css'
import { Nav } from './components/Nav';
import { LinkButtons } from './components/LinkButtons';
import { ModalMap } from './components/ModalMap';
import { GuestList } from './components/GuestList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log('esta logado',user)
    // Se o usuário estiver autenticado, mostre a área protegida.
    // Exemplo:
    // document.getElementById("areaProtegida").style.display = "block";
  } else {
    console.log('nao esta logado')
    // Se o usuário não estiver autenticado, redirecione-o para a página de login.
    // Exemplo:
    // window.location.href = "login.html";
  }
});

// Initialize Realtime Database and get a reference to the service
const db = getDatabase();
const starCountRef = ref(db, '/');
const googleProvider = new GoogleAuthProvider();


function App() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [guests, setModalGuests] = useState(false);

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data,'DATA')
      setData(data)
    });
  },[])

  function writeUserData(name,imageUrl,email) {
    const db = getDatabase();
    set(ref(db,'users/'+uuid()), {
      name,
      imageUrl,
      email,
    });
  }

  async function googleLogin() {
    try {
      const result = await signInWithPopup(auth,googleProvider);
      window.teste = result;
      if(result) {
        const { photoURL, displayName,email } = result.user
        if(!data) {
          writeUserData(displayName, photoURL,email)
          return;
        }
        
        const value = Object.values(data).some(item => item.email == email);
        if(!value) {
          writeUserData(displayName, photoURL,email)
          return;
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="App">
        <Nav guests={guests} setModalGuests={setModalGuests}/>

        {modal && <ModalMap modal={modal} setModal={setModal}/>}
        <Header/>
      
        <LinkButtons googleLogin={googleLogin} setModal={setModal} modal={modal}/>
        <GuestList data={data} guests={guests} setModalGuests={setModalGuests}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
