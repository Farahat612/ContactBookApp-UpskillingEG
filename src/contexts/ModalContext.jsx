// import needed hooks from 'react'
import { createContext, useState } from 'react'
// importing prop-types for typechecking
import PropTypes from 'prop-types'

// creating the context for the modal
export const ModalContext = createContext()

// creating the provider for the modal context
export const ModalProvider = ({ children }) => {
  // setting up the necessary states for managing the modal
  const [modalType, setModalType] = useState(null) // 'person' or 'add' or 'edit'
  const [isOpen, setIsOpen] = useState(false) // true or false
  const [modalData, setModalData] = useState({})
  const [formData, setFormData] = useState({})

  // function to open the modal
  const openModal = (type, data) => {
    setModalType(type)
    setIsOpen(true)
    setModalData(data)
  }

  // function to close the modal
  const closeModal = () => {
    setIsOpen(false)
  }

  // function to handle the input change in the forms
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  // returning the provider with the necessary values
  return (
    <ModalContext.Provider
      value={{
        modalType,
        isOpen,
        modalData,
        formData,
        openModal,
        closeModal,
        handleInputChange,
        setFormData,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

// typechecking the children prop
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
