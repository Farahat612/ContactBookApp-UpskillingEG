// importing necessary context providers
import { ModalProvider } from './contexts/ModalContext'
import { ContactsProvider } from './contexts/ContactsContext'
// importing react-toastify css and ToastContainer
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
// importing components and styled component
import Main from './styles/utilities/Main'
import Contacts from './components/Contacts'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <ModalProvider>
        <ContactsProvider>
          <Main>
            <Contacts />
          </Main>
          <Modal />
          <ToastContainer autoClose={1500} />
        </ContactsProvider>
      </ModalProvider>
    </>
  )
}

export default App
