import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import '../css/BandForm.css'
import ConfirmationModal from '../components/ConfirmationModal'

const EditBand = () => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const API_URL = 'http://localhost:5000'

  useEffect(() => {
    axios.get(`${API_URL}/bands/${id}`)
      .then(response => {
        const band = response.data
        setName(band.name)
        setGenre(band.genre)
        setYear(band.year)
        setDescription(band.description)
        setImage(band.image)
      })
      .catch(error => {
        console.error('Error fetching the band', error)
      })
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('genre', genre)
    formData.append('year', year)
    formData.append('description', description)
    if (image) {
      formData.append('image', image)
    }

    axios.put(`${API_URL}/bands/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data)
      navigate('/bands')
    }).catch(error => {
      console.error('Error when updating band / artist', error)
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    navigate('/')
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
          required
          className='form-input'
        />
        <input 
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder='Genre'
          required
          className='form-input'
        />
        <input 
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder='Year'
          required
          className='form-input'
        />
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description'
          required
          className='form-textarea'
        />
        <input 
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className='form-input'
        />
        <button type="submit" className='form-button'>Update</button>
      </form>
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  )
}

export default EditBand