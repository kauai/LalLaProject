import { useState, useEffect } from 'react'
import { FiXCircle } from "react-icons/fi";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDatabase, ref, child, get,onValue,set } from "firebase/database";
import uuid from 'react-uuid';

import { app,auth } from '../utils/firebse';
import 'react-calendar/dist/Calendar.css';
import './App.css'

// Initialize Realtime Database and get a reference to the service
const db = getDatabase();
const starCountRef = ref(db, '/');
const googleProvider = new GoogleAuthProvider();


function App() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data)
    });
  },[])

  function writeUserData(name,imageUrl,email) {
    const db = getDatabase();
    set(ref(db, uuid()), {
      name,
      imageUrl,
      email,
    });
  }

  async function googleLogin() {
    try {
      const result = await signInWithPopup(auth,googleProvider);
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

        {modal && <div className="modal" style={{display:modal ? 'block': 'none'}}>
           <span onClick={() => setModal(!modal)}><FiXCircle className='text-2xl'/></span>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.366410445583!2d-46.6540934!3d-23.6628512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ab65bbb9f19%3A0x54b8f1f86fddd3e3!2sPar%C3%B3quia%20Nossa%20Senhora%20Ref%C3%BAgio%20dos%20Pecadores!5e0!3m2!1sen!2sbr!4v1681697837411!5m2!1sen!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>}
        <header>
          <div className="container-img">
            <img src="Lala.png" alt=""/>
          </div>
          <h1>Lalá</h1>

        </header>
        <section>
          {/* <Calendar onChange={onChange} value={value}  minDetail="year"/> */}
          <button onClick={() => setModal(!modal)} className="content-link">
            Local
          </button>
          <button className="content-link">
            24/09/2023
          </button>
          <button style={{ padding:0 }} onClick={googleLogin} className="content-link confirmar">
            <span>
              <FcGoogle className='text-2xl'/>  
            </span>
            Confirmar
          </button>
        </section>
        <ul>
          {data && Object.values(data).map(item => <li>
            <img src={item.imageUrl} referrerpolicy="no-referrer"/> <span>{item.name}</span></li>)}
        </ul>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </div>
  )
}

export default App
