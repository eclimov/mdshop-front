import API from './currencyApi'

export const fetchRate = (params) => API.get('/', { params })
