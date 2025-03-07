import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//https://docs.google.com/forms/d/e/1FAIpQLScyCtukB3gY_rllMPNBnLejYX4P67auZHlsHK2F8TvXtfOmVg/viewform
function App() {
  return (
    <>
      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
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
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App