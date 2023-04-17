import { useState, useEffect } from 'react'
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
        <header>
          <div className="container-img">
            <img src="Lala.png" alt=""/>
          </div>
          <h1>Lalá</h1>

        </header>
        <section>
          {/* <Calendar onChange={onChange} value={value}  minDetail="year"/> */}
          <button className="content-link">
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
