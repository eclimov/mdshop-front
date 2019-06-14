import axios from 'axios'

export default axios.create({
  baseURL: `${'https://cors-anywhere.herokuapp.com/'}http://www.bnm.md/md/official_exchange_rates`
})
