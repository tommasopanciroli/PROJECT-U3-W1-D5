import NetflixNavbar from './components/NetflixNavbar'
import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CaptainContent from './components/CaptainContent'
function App() {
  return (
    <div className="App">
      <header className="">
        <NetflixNavbar />
      </header>
      <main>
    <CaptainContent />
      </main>
    </div>
  )
}

export default App
