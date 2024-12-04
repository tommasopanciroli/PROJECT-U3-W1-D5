import { useEffect, useState } from 'react'
import { Col, Carousel } from 'react-bootstrap'

const MarvelLink = 'http://www.omdbapi.com/?apikey=16b4ae61&s=captain america'

const CaptainContent = () => {
  const [films, setFilms] = useState([])

  const getMovies = () => {
    fetch(MarvelLink)
      .then((response) => {
        console.log(response)

        if (response.ok) {
          return response.json()
        } else {
          throw new Error('ERRORE NEL RECUPERO DEI FILM')
        }
      })
      .then((data) => {
        console.log('Dati ricevuti', data)
        setFilms(data.Search)
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <h2 className="ms-5 mt-5 text-white"> At your left </h2>
      <div className="bg-container">
        <Carousel className="mx-5">
          {films.map((film) => (
            <Carousel.Item>
              <Col
                key={film.imdbID}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                className="mb-4"
              >
                <img
                  className="img-fluid custom-image"
                  src={film.Poster}
                  alt="Captain America"
                  style={{ objectFit: 'cover' }}
                />
              </Col>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default CaptainContent
