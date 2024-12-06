import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BandDelete = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isConfirmed, setIsConfirmed] = useState(false)

  const API_URL = 'http://localhost:5000'

  const handleDelete = () => {
    axios.delete(`${API_URL}/bands/${id}`).then(response => {
      console.log(response.data)
      navigate('/bands')
    }).catch(error => {
      console.error('Deu ruim para excluir a banda!', error)
    })
  }

  const handleConfirm = () => {
    setIsConfirmed(true)
  }

  return (
    <div>
      <h2>Excluindo a banda / artista</h2>
      {!isConfirmed ? (
        <div>
          <p>Tem certeza que deseja excluir essa banda/artista?</p>
          <button onClick={handleConfirm}>Confirmar</button>
          <button onClick={() => navigate('/bands')}>Cancelar</button>
        </div>
      ) : (
        <div>
          <p>Exclusão confirmada!</p>
          {handleDelete()}
        </div>
      )}
    </div>
  )
}

export default BandDelete