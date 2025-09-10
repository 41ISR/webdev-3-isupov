import { useState } from 'react'
import './Reset.css'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('Драма')
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState('')
  const [filterGenre, setFilterGenre] = useState('Все')

  const genres = ["Драма", "Комедия", "Хентай", "Боевик", "Триллер", "Фантастика", "Ужасы", "Документальный", "Другое"]

  const addMovie = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      genre,
      rating: parseInt(rating),
      review,
      date: new Date().toLocaleDateString('ru-RU')
    }

    setMovies([...movies, newMovie])
    setTitle('')
    setGenre('Драма')
    setRating(5)
    setReview('')
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const filteredAndSortedMovies = movies
    .filter(movie => filterGenre === 'Все' || movie.genre === filterGenre)
    .sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.rating - a.rating
      } else {
        return a.rating - b.rating
      }
    })

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
          <form className='form' onSubmit={addMovie}>
            <div className='group'>
              <label htmlFor="title">
                Название фильма
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Введите название фильма"
              />
            </div>
            <div className="group">
              <label htmlFor="genre">Жанр</label>
              <select
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                {genres.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="group">
              <label htmlFor="rating">Оценка: {rating}</label>
              <input
                type="range"
                id="rating"
                min="1"
                max="10"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <div className="rating-labels">
                <span>1</span>
                <span>10</span>
              </div>
            </div>
            <div className="group">
              <label htmlFor="review">Краткий обзор</label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Ваши впечатления о фильме (до 500 символов)"
                maxLength="500"
                rows="4"
              />
              <div className="count">{review.length}/500</div>
            </div>

            <button type="submit" className="submit-btn">Добавить фильм</button>
          </form>
        </section>
        <section className='filters'>
          <div className='group'>
            <label htmlFor="filter-genre">
              Фильтр по жанру:
            </label>
            <select
              id="filter-genre"
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
            >
              <option value="Все">Все жанры</option>
              {genres.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
