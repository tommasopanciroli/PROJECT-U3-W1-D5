import NetflixNavbar from './components/NetflixNavbar'
import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CaptainContent from './components/CaptainContent'
import MissionContent from './components/MissionContent'
import { Row } from 'react-bootstrap'
import StarContent from './components/StarContent'
function App() {
  return (
    <div className="App">
      <header className="">
        <NetflixNavbar />
      </header>
      <main>
        <Row className=" d-flex flex-wrap">
          <CaptainContent />
        </Row>
        <Row className="d-flex flex-wrap">
          <MissionContent />
        </Row>
        <StarContent />
      </main>
    </div>
  )
}

export default App
