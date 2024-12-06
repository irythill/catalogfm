import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/BandForm.css'

const BandEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [description, setDescription] = useState('')

  const API_URL = 'http://localhost:5000'

  useEffect(() => {
    axios.get(`${API_URL}/bands/${id}`).then(response => {
      const band = response.data
      setName(band.name)
      setGenre(band.genre)
      setYear(band.year)
      setDescription(band.description)
    }).catch(error => {
      console.error('Deu ruim pra achar a banda!', error)
    })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${API_URL}/bands/${id}`, {
      name,
      genre,
      year,
      description
    }).then(response => {
      console.log(response.data)
      navigate('/bands')
    }).catch(error => {
      console.error('Deu ruim pra terminar de editar a banda', error)
    })
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='band-form'>
        <h2>{name}</h2>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Band or artist name'
          className='form-input'
          required
        />
        <input 
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder='Band or artist genre'
          className='form-input'
          required
        />
        <input 
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder='Band or artist year'
          className='form-input'
          required
        />
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='A small bio of your band / artist'
          className='form-textarea'
          required
        />
        <button type='submit' className='form-button'>Confirmar edição</button>
      </form>
    </div>
  )
}

export default BandEdit