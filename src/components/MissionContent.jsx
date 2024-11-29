import { Component } from 'react'
import { Col, Carousel } from 'react-bootstrap'

const MissionLink =
  'http://www.omdbapi.com/?apikey=16b4ae61&s=mission impossible'

class MissionContent extends Component {
  state = {
    films: [],
  }

  getMovies = () => {
    fetch(MissionLink)
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
        <h2 className="ms-5 mt-5 text-white"> Tom Cruise e i suoi grandi classici </h2>
        <div className="bg-container">
          <Carousel interval={null}>
            {this.state.films.map((film) => (
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
                    alt="Spider-Man"
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
}

export default MissionContent
