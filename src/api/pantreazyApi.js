import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-52-90-128-86.compute-1.amazonaws.com:4000'
})