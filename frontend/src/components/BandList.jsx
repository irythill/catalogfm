import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmationModal from './ConfirmationModal';
import '../css/BandList.css';

const BandList = () => {
  const [bands, setBands] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bandToDelete, setBandToDelete] = useState(null);

  const API_URL = 'http://localhost:5000';

  useEffect(() => {
    axios.get(`${API_URL}/bands`)
      .then(response => {
        setBands(response.data);
      })
      .catch(error => {
        console.error('Error fetching the bands!', error);
      });
  }, []);

  const handleDeleteClick = (band) => {
    setBandToDelete(band);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`${API_URL}/bands/${bandToDelete._id}`)
      .then(() => {
        setBands(bands.filter(band => band._id !== bandToDelete._id));
        setIsModalOpen(false);
      })
      .catch(error => {
        console.error('Error deleting the band!', error);
      });
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setBandToDelete(null);
  };

  return (
    <div className="band-list-container">
      <div className="band-list">
        {bands.map(band => (
          <div key={band._id} className="band-card">
            <img src={`${API_URL}/${band.image}`} alt={band.name} className="band-image" />
            <div className="band-info">
              <h3>{band.name}</h3>
              <p>{band.genre}</p>
              <p>{band.year}</p>
              <p>{band.description}</p>
              <div className="band-actions">
                <Link to={`/edit-band/${band._id}`}>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                </Link>
                <button onClick={() => handleDeleteClick(band)} className="delete-button">
                  <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default BandList;