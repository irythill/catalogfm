import Modal from 'react-modal'
import PropTypes from 'prop-types'
import '../css/ConfirmationModal.css'

Modal.setAppElement('#root')

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className='modal'
    overlayClassName='overlay'
    >
      <h2>Confirm your action</h2>
      <p>Are you sure you want to proceed?</p>
      <div className='modal-buttons'>
        <button onClick={onConfirm} className='confirm-button'>Yes</button>
        <button onClick={onRequestClose} className='cancel-button'>No</button>
      </div>
    </Modal>
  )
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
}

export default ConfirmationModal