import Axios from 'axios';

const api = Axios.create({
    baseURL:'http://ec2-100-25-136-128.compute-1.amazonaws.com/api'
})

export default api;