import Modal from 'react-modal'
import {
  Box
} from './styles'


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(90, 90, 90, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface CardsModalProps {
  modalIsOpen: boolean
  closeModal: () => void
}

export const CardsModal = ({ modalIsOpen, closeModal }: CardsModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}

    >

    </Modal>
  )
}
