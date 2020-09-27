import Axios from "axios";

export const requestForSample = async (data) => {
  return await Axios.post(`https://thehoop.in/admin/temp/hoop_jashoda_fresh.php`, data).then(resp => {
    return resp.data.data
  }).catch(e => {
    console.log('await e =>', e);
    return e;
  })
}
