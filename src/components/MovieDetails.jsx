import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const MovieDetails = () => {
  const [films, setFilms] = useState()
  const params = useParams()
  console.log('params', params)

  const getMovie = () => {
    fetch('http://www.omdbapi.com/?apikey=16b4ae61&s=top gun')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('ERRORE')
        }
      })
      .then((data) => {
        console.log('Ecco i film ottenuti', data)
        setFilms(data.Search)
      })
      .catch((err) => {
        console.log('ERRORE NEL RECUPERO DEI FILM', err)
      })
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className="bg-container">
      <h2 className="ms-5 mt-5 text-white"> Maverick, Iceman! A rapporto</h2>

      <Row className="g-4 justify-content-center mx-5">
        {films.map((film) => (
          <Col key={film.imdbID} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <img
              className="img-fluid custom-image"
              src={film.Poster}
              alt="Spider-Man"
              style={{ objectFit: 'cover' }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MovieDetails
