import { useState, useEffect } from 'react'
// import admin from 'firebase-admin';
import { GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth'
import { getDatabase, ref,onValue,set } from "firebase/database";
import uuid from 'react-uuid';

import  '../utils/firebase';
import 'react-calendar/dist/Calendar.css';
import './App.css'
import { Nav } from './components/Nav';
import { LinkButtons } from './components/LinkButtons';
import { ModalMap } from './components/ModalMap';
import { GuestList } from './components/GuestList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Fire } from './components/Fireworks';
const auth = getAuth();


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
console.log(db,'countref')
const googleProvider = new GoogleAuthProvider();


function App() {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  const [guests, setModalGuests] = useState(false);

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data,'DATAAAAA')
      setData(data)
    });
  },[])

  function writeUserData(name,imageUrl,email) {
        set(ref(db,`users/${uuid()}`), {
          name,
          imageUrl,
          email,
        }).catch((e) => {
          console.log(e)
        })
  }

  async function googleLogin() {
    googleProvider.setCustomParameters({
      prompt: "select_account"
    });
    const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider)
    
    try {
      const result = await signInWithGooglePopup();
      // window.teste = result;

      if(result) {
        setSuccess(!success);
        setTimeout(() => {
          setSuccess(previous => {
            return !previous
          });
        },5000)

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
        {success && <Fire style={{position:'absolute'}}/>}
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
