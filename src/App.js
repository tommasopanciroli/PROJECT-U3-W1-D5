import NetflixNavbar from './components/NetflixNavbar'
import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CaptainContent from './components/CaptainContent'
import MissionContent from './components/MissionContent'
import { Container, Row } from 'react-bootstrap'
import StarContent from './components/StarContent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="">
          <NetflixNavbar />
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/tvshows" element={<StarContent />} />
            </Routes>
            <Routes>
              <Route
                path="/home"
                element={
                  <Row className=" d-flex flex-wrap">
                    <CaptainContent />
                    <MissionContent />
                  </Row>
                }
              />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
