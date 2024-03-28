import loadingBook from '../../public/images/loading.gif'
import { LoadingSpinner } from '../styles/components/LoadingSpinner.styled'

const Loading = () => {
  return (
    <LoadingSpinner>
      <h4>Loading Contacts ....</h4>
      <img src={loadingBook} alt='loading' />
    </LoadingSpinner>
  )
}

export default Loading
