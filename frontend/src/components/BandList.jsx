import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../css/BandList.css'

const BandList = () => {
  const [bands, setBands] = useState([])
  
  const API_URL = 'http://localhost:5000'

  useEffect(() => {
    axios.get(`${API_URL}/bands`)
    .then(response => {
      setBands(response.data)
    })
    .catch(error => {
      console.log('Error fetching the bands!', error)
    })
  }, [])

  return (
    <div className='band-list-container'>
      <div className="band-list">
        {bands.map(band => (
          <div key={band._id} className='band-card'>
            <img 
            src={`${API_URL}/${band.image}`} 
            alt={band.name} 
            className='band-image'
            />
            <div className="band-info">
              <h3>{band.name}</h3>
              <p>{band.genre}</p>
              <p>{band.year}</p>
              <p>{band.description}</p>
              <div className="band-actions">
                <Link to={`/edit-band/${band._id}`}>
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <Link to={`/delete-band/${band._id}`}>
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BandList