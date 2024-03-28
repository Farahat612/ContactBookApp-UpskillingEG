// importing necessary react hooks
import { useState, useContext } from 'react'
// importing necessary context
import { ModalContext } from '../contexts/ModalContext'
import { ContactsContext } from '../contexts/ContactsContext'
// importing the styled components
import { Backdrop, Person, Add, Edit } from '../styles/components/Modals.styled'
// importing necessary modules from react-spring for modal animations
import { useSpring, animated } from 'react-spring'
// importing necessary icons and images
import { IoClose } from 'react-icons/io5'
import userImgPlaceholder from '../../public/images/users/user.png'

const Modal = () => {
  // destructuring the needed functions and states from the contexts
  const {
    modalType,
    isOpen,
    closeModal,
    modalData,
    formData,
    setFormData,
    handleInputChange,
  } = useContext(ModalContext)
  const { handleEditFormSubmit, handleAddFormSubmit } =
    useContext(ContactsContext)

  // state to store the selected image for the add contact modal
  const [selectedImage, setSelectedImage] = useState(null)
  const handleFileChange = (event) => {
    setFormData({ ...formData, picture: event.target.files[0] })
    setSelectedImage(URL.createObjectURL(event.target.files[0]))
  }

  // function to generate a random phone number for the phone placeholder
  function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100
    const prefix = Math.floor(Math.random() * 900) + 100
    const lineNumber = Math.floor(Math.random() * 9000) + 1000

    return `${areaCode}-${prefix}-${lineNumber}`
  }

  // creating the animations for the modals using react-spring
  const animations = {
    person: useSpring({
      config: { duration: 250 },
      opacity: modalType === 'person' && isOpen ? 1 : 0,
      transform:
        modalType === 'person' && isOpen
          ? `translateY(0%)`
          : `translateY(-100%)`,
    }),
    edit: useSpring({
      config: { duration: 250 },
      opacity: modalType === 'edit' && isOpen ? 1 : 0,
      transform:
        modalType === 'edit' && isOpen ? `translateX(0%)` : `translateX(100%)`,
    }),
    add: useSpring({
      config: { duration: 250 },
      opacity: modalType === 'add' && isOpen ? 1 : 0,
      transform: modalType === 'add' && isOpen ? `scale(1)` : `scale(0)`,
    }),
  }

  return (
    <div>
      {modalType === 'person' && isOpen && (
        <Backdrop>
          <animated.div style={animations.person}>
            <Person>
              <div className='person-img'>
                <img
                  src={
                    modalData.picture &&
                    !modalData.picture.includes('localhost')
                      ? modalData.picture
                      : userImgPlaceholder
                  }
                  alt={modalData.firstName}
                />
              </div>
              <div className='person-info'>
                <h3> {modalData.firstName + ' ' + modalData.lastName} </h3>
                <p>
                  {' '}
                  {modalData.email
                    ? modalData.email
                    : `${modalData.firstName}@example.com`}{' '}
                </p>
                <p>
                  {' '}
                  {modalData.phone
                    ? modalData.phone
                    : generatePhoneNumber()}{' '}
                </p>
              </div>
              <IoClose
                className='close-icon'
                onClick={() => closeModal('person')}
              />
            </Person>
          </animated.div>
        </Backdrop>
      )}
      {modalType === 'edit' && isOpen && (
        <Backdrop>
          <animated.div style={animations.edit}>
            <Edit>
              <div className='left'>
                <div className='person-img'>
                  <img
                    src={
                      modalData.picture &&
                      !modalData.picture.includes('localhost')
                        ? modalData.picture
                        : userImgPlaceholder
                    }
                    alt='test person'
                  />
                </div>
              </div>
              <div className='right'>
                <form
                  onSubmit={(event) => {
                    handleEditFormSubmit(event, modalData.id, formData)
                    closeModal()
                    setFormData()
                  }}
                >
                  <div className='form-input'>
                    <label htmlFor='firstName'>First Name :</label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      value={formData?.firstName || modalData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-input'>
                    <label htmlFor='lastName'>Last Name :</label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      value={formData?.lastName || modalData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className='form-input'>
                    <button type='submit'>Save</button>
                  </div>
                </form>
              </div>
              <IoClose
                className='close-icon'
                onClick={() => closeModal('edit')}
              />
            </Edit>
          </animated.div>
        </Backdrop>
      )}
      {modalType === 'add' && isOpen && (
        <Backdrop>
          <animated.div style={animations.add}>
            <Add>
              <form
                className='form'
                onSubmit={(event) => {
                  handleAddFormSubmit(event, formData)
                  closeModal()
                  setFormData()
                }}
              >
                <div className='upload-img'>
                  <img
                    src={selectedImage ? selectedImage : userImgPlaceholder}
                    alt='placeholder'
                  />
                  <label htmlFor='picture'>Upload photo</label>
                  <input
                    type='file'
                    id='picture'
                    name='picture'
                    accept='image/*'
                    onChange={handleFileChange}
                  />
                </div>
                <div className='fullName'>
                  <div className='input-group'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      value={formData?.firstName || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      value={formData?.lastName || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='contact'>
                  <div className='input-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData?.email || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='input-group'>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData?.phone || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='btns'>
                  <button className='cancel' onClick={() => closeModal('add')}>
                    Cancel
                  </button>
                  <button className='save'>Save</button>
                </div>
              </form>
            </Add>
          </animated.div>
        </Backdrop>
      )}
    </div>
  )
}

export default Modal
