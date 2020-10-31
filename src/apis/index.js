import Axios from 'axios';
import { HOST_API } from '../shared/constants'




const instance = Axios.create({
  baseURL: `${HOST_API}/`,
  headers: { 'content-type': "application/json" }
});

export default instance