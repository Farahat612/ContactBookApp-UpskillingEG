// using axios create a global api instance with all the necessary headers
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/user',
  headers: {
    'app-id': '64fc4a747b1786417e354f31',
  },
})

export default api
