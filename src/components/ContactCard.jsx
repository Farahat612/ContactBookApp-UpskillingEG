// importing PropTypes for typechecking
import PropTypes from 'prop-types'
// importing useContext and the needed contexts
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import { ContactsContext } from '../contexts/ContactsContext'
// importing the styled component
import { Card } from '../styles/components/ContactCard.styled'
// importing the needed icons and images
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import userImgPlaceholder from '../../public/images/users/user.png'

// creating the ContactCard component
const ContactCard = ({ person }) => {
  // destructuring the needed functions from the contexts
  const { openModal } = useContext(ModalContext)
  const { handleDelete } = useContext(ContactsContext)

  // function to delete a contact
  const deleteContact = (person) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to delete ${person.firstName} ${person.lastName}?`
    )
    if (userConfirmed) {
      handleDelete(person.id)
    }
  }

  // function to generate a random phone number for the phone placeholder
  function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100
    const prefix = Math.floor(Math.random() * 900) + 100
    const lineNumber = Math.floor(Math.random() * 9000) + 1000

    return `${areaCode}-${prefix}-${lineNumber}`
  }

  return (
    <Card>
      {/* Contact Details [img and data] */}
      <div className='contact-details'>
        <div
          className='contact-img'
          onClick={() => openModal('person', person)}
        >
          <img
            src={
              person.picture && !person.picture.includes('localhost')
                ? person.picture
                : userImgPlaceholder
            }
            alt={person.name}
          />
        </div>
        <div className='contact-info'>
          <h3>{person.firstName + ' ' + person.lastName}</h3>
          <p>{person.phone ? person.phone : generatePhoneNumber()}</p>
        </div>
      </div>

      {/* Contact Actions [edit and delete] */}
      <div className='contact-actions'>
        <button onClick={() => openModal('edit', person)}>
          <FaEdit className='edit-icon' />
        </button>
        <button onClick={() => deleteContact(person)}>
          <FaTrashAlt className='delete-icon' />
        </button>
      </div>
    </Card>
  )
}

// typechecking the props
ContactCard.propTypes = {
  person: PropTypes.object.isRequired,
}

export default ContactCard
