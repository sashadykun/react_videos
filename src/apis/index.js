import apiKey from '../apis/youtube';
import axios from 'axios';

const KEY = apiKey.API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxRezults: 5,
        key: KEY
    }
})