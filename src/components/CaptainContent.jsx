import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

const MarvelLink = 'http://www.omdbapi.com/?apikey=16b4ae61&s=captain america'

class CaptainContent extends Component {
  state = {
    films: [],
  }

  getMovies = () => {
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
        this.setState({ films: data.Search })
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }
  componentDidMount() {
    this.getMovies()
  }
  render() {
    return (
      <>
        <h2 className="ms-5 text-white">Goditi tutti i Captain America</h2>
        <div className="bg-container d-flex">
          <Row className="justify-content-center">
            {this.state.films.map((film) => (
              <Col
                className="mb-2"
                style={{ width: '20rem', height: '28rem' }}
                key={film.imdbID}
                xs={6}
                sm={4}
                md={3}
                lg={2}
              >
                <img
                  src={film.Poster}
                  alt={film.Title}
                  style={{ objectFit: 'cover' }}
                />
              </Col>
            ))}
          </Row>
        </div>
      </>
    )
  }
}

export default CaptainContent
