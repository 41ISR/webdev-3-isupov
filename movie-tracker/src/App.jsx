import { useState } from 'react'
import './Reset.css'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('Драма')
  const [rating, setRating] = useState(5)
  const [rewiew, setRewiew] = useState('')
  const [filterGenre, setFilterGenre] = useState('Все')

  const genres = ["Драма", "Комедия", "Хентай", "Боевик", "Триллер", "Фантастика", "Ужасы", "Документальный", "Другое"]

  return (
    <div className='App'>
      <header className='header'>
        <h1 className='title'>
          Movie Tracker
        </h1>
        <p className='text'>
          Приложение для отслеживания просмотренных фильмов с возможностью выставления оценок и написания коротких обзоров.
        </p>
        <div className='scroll'>▼</div>
      </header>
      <main className='main'>
        <section className='add__movie'>
          <h2 className='title'>
            Добавить новый фильм
          </h2>
          
        </section>
      </main>
    </div>
  )
}

export default App
