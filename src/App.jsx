import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'

function App() {
  const [value, setDate] = useState(new Date('2023-04-23'));
  function onChange(newDate) {
    setDate(newDate);
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
          <button className="content-link">Cofirmar</button>
        </section>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </div>
  )
}

export default App
