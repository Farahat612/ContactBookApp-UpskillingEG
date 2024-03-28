// importing necessary hooks from react
import { createContext, useState, useEffect } from 'react'
// importing prop-types for typechecking
import PropTypes from 'prop-types'
// importing the axios API object
import api from '../assets/data/API'

// creating the context for the contacts
export const ContactsContext = createContext()

// creating the provider for the contacts context
export const ContactsProvider = ({ children }) => {
  // setting up the necessary states for displaying the contacts
  const [contacts, setContacts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  //  setting up the necessary states for searching and filtering the contacts
  const [filteredContacts, setFilteredContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  // setting up the necessary state for loading --> for conditional rendering of loading spinner
  const [loading, setLoading] = useState(false)
  // setting up the necessary state for success or failure of the API request for toastify alerts
  const [alert, setAlert] = useState({})
  // setting up the necessary state for refreshing the contacts after adding, editing, or deleting a contact
  const [refreshContacts, setRefreshContacts] = useState(false)

  // fetching the contacts from the API --> GET request with pagination
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true)
      try {
        const response = await api.get(`?limit=5&page=${currentPage}`)
        const fetchedContacts = response.data.data
        setContacts(fetchedContacts)
        setFilteredContacts(fetchedContacts)
        setTotalPages(Math.ceil(response.data.total / 5))
      } catch (error) {
        console.error(error.response.data.data)
      }
      setLoading(false)
    }
    fetchContacts()
  }, [currentPage, refreshContacts])

  // handling the search input change in search bar
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }
  // filtering the contacts based on the search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredContacts(contacts)
    } else {
      setFilteredContacts(
        contacts.filter(
          (contact) =>
            contact.firstName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }
  }, [searchTerm, contacts])

  // handling the form submission for editing a contact
  const handleEditFormSubmit = async (event, id, formData) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await api.put(`/${id}`, formData)
      setContacts(
        contacts.map((contact) => (contact.id === id ? response.data : contact))
      )
      setAlert({ type: 'success', message: 'Contact updated successfully' })
      setRefreshContacts(!refreshContacts)
    } catch (error) {
      console.error(error.response.data.data)
      setAlert({ type: 'error', message: 'Failed to update contact' })
    }
    setLoading(false)
  }

  // handling the form submission for adding a new contact
  const handleAddFormSubmit = async (event, formData) => {
    event.preventDefault()
    // Create a copy of formData and remove the picture
    const data = { ...formData }
    // Check if there is a picture in the formData to handle the issue --> API does not accept form data
    if (formData.picture) {
      // deleting the picture from the form data
      delete data.picture
      // creating ObjectURL for the image
      const image = formData.picture
      const imageUrl = URL.createObjectURL(image)
      // adding that URL to the data object as picture
      data.picture = imageUrl
    }
    setLoading(true)
    try {
      const response = await api.post('/create', data)
      setContacts([...contacts, response.data])
      setAlert({ type: 'success', message: 'Contact added successfully' })
      setRefreshContacts(!refreshContacts)
    } catch (error) {
      console.error(error.response.data.data)
      setAlert({ type: 'error', message: 'Failed to add contact' })
    }
    setLoading(false)
  }

  // handling the deletion of a contact
  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`)
      setContacts(contacts.filter((contact) => contact.id !== id))
      setAlert({ type: 'success', message: 'Contact deleted successfully' })
      setRefreshContacts(!refreshContacts)
    } catch (error) {
      console.error(error.response.data.data)
      setAlert({ type: 'error', message: 'Failed to delete contact' })
    }
  }

  // returning the provider with the necessary values and functions
  return (
    <ContactsContext.Provider
      value={{
        totalPages,
        currentPage,
        searchTerm,
        filteredContacts,
        loading,
        alert,
        setCurrentPage,
        setContacts,
        handleSearchChange,
        handleEditFormSubmit,
        handleAddFormSubmit,
        handleDelete,
      }}
    >
      {children}
    </ContactsContext.Provider>
  )
}

// setting up the prop types for the provider for typechecking
ContactsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
