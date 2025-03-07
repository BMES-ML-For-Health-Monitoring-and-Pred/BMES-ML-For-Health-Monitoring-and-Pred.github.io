import { useState } from 'react'
import logo from './assets/file.png'
import './App.css'

function App() {
  return (
    <>
      <div className="logos">
        <a href="https://www.kwohealth.com">
          <img src={logo} className="logo" alt="kwo logo" />
        </a>
        
      </div>

      <h1>kwo health</h1>

      <div className="card">
        <button 
          onClick={() => window.open("http://form.kwohealth.com", "_blank")}
        >
          Sign Up to Test kwo!
        </button>
        <p className="development-text">Website in Development</p>
      </div>

      <p className="read-the-docs">
  <a href="mailto:admin@kwohealth.com">Contact Us</a>
</p>
    </>
  )
}

export default App