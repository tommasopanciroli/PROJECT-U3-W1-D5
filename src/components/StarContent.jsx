import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

const StarLink = 'http://www.omdbapi.com/?apikey=16b4ae61&s=star wars'

class StarContent extends Component {
  state = {
    films: [],
  }

  getMovies = () => {
    fetch(StarLink)
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
      <div className="bg-container">
        <h2 className="ms-5 mt-5 text-white"> May the force be with you! </h2>

        <Row className="g-4 justify-content-center mx-5">
          {this.state.films.map((film) => (
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
}

export default StarContent
