import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
})

// interceptors / transformers / ...

export default instance
