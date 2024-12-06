import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ConfirmationModal from './ConfirmationModal'
import '../css/BandForm.css'

const BandForm = () => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const API_URL = 'http://localhost:5000'

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleConfirm = () =>  {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('genre', genre)
    formData.append('year', year)
    formData.append('description', description)
    formData.append('image', image)

    axios.post(`${API_URL}/bands`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data)
      navigate('/bands')
    }).catch(error => {
      console.error('Error when adding band / artist', error)
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    navigate('/add-band')
  }
  
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='band-form'>
        <h2>Add your band / artist</h2>
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
        <input 
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className='form-input'
        required
        />
        <button type='submit' className='form-button'>Register!</button>
      </form>
      <ConfirmationModal
      isOpen={isModalOpen}
      onRequestClose={handleCancel}
      onConfirm={handleConfirm}
      />
    </div>
  )
}

export default BandForm