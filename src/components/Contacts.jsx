// importing useContext and the needed contexts
import { useContext, useEffect } from 'react'
import { ModalContext } from '../contexts/ModalContext'
import { ContactsContext } from '../contexts/ContactsContext'
// importing the styled components
import {
  Container,
  TopBar,
  ContactsList,
  BottomBar,
} from '../styles/components/Contacts.styled'
// importing the toast function from toastify for alerts
import { toast } from 'react-toastify'
// importing the needed child components
import ContactCard from './ContactCard'
import Loading from './Loading'
// importing the needed icons
import { FaSearch, FaPlus } from 'react-icons/fa'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

// creating the Contacts component
const Contacts = () => {
  // destructuring the needed functions from the contexts
  const { openModal } = useContext(ModalContext)
  const {
    filteredContacts,
    currentPage,
    setCurrentPage,
    totalPages,
    handleSearchChange,
    loading,
    alert,
  } = useContext(ContactsContext)

  // Using useEffect to listen for changes in alert to fire the toast upon alert state change
  useEffect(() => {
    if (alert) {
      toast(alert.message, { type: alert.type })
    }
  }, [alert])

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TopBar>
            <div className='search-bar'>
              <input
                type='text'
                placeholder='Search contact by name'
                onChange={handleSearchChange}
              />
              <FaSearch className='search-icon' />
            </div>
            <div className='add-contact'>
              <button onClick={() => openModal('add')}>
                <FaPlus />
                <span>Add Contact</span>
              </button>
            </div>
          </TopBar>
          <ContactsList>
            {filteredContacts &&
              filteredContacts.map((person, index) => (
                <ContactCard key={index} person={person} />
              ))}
          </ContactsList>
          <BottomBar>
            <div className='pagination'>
              <button
                className='btn'
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
              >
                <HiChevronLeft className='pagination-icon' />
              </button>
              <div className='pagination-pages'>
                <span>{currentPage + 1}</span>
                <span>{' / '}</span>
                <span> {totalPages} </span>
              </div>
              <button
                className='btn'
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage + 1 === totalPages}
              >
                <HiChevronRight className='pagination-icon' />
              </button>
            </div>
          </BottomBar>
        </>
      )}
    </Container>
  )
}

export default Contacts
