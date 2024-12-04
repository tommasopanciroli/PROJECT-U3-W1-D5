import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailsLink = 'http://www.omdbapi.com/?apikey=16b4ae61&s=top gun'

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
    <div>
      {films.map((film) => {
        return <img src={film.Poster} alt="copertina" />
      })}
    </div>
  )
}

export default MovieDetails
