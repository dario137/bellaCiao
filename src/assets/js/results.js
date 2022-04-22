import axios from 'axios';
export default axios.create(
{
    baseURL: 'https://ptldev-3d9d6.firebaseio.com/'
}
)