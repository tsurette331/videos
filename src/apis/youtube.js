import axios from 'axios';

const KEY = 'AIzaSyA96IkNdb0cMqA5yqOZK8-5XItIpseklnE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

