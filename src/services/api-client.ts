import axios from 'axios'

export default axios.create ({
 baseURL: 'https://api.rawg.io/api', 
 params: {
    key: '7be868fc9560430f9cf3f8a5552412f0'
 }
})