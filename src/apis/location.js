import Axios from "axios";

export const fetchLocation = async () => {

  var data = await Axios.get(`https://thehoop.in/admin/temp/hoop_area.php`).then(resp => {
    return resp.data.data;
  }).catch(e => {
    console.log('await e =>', e);
    return e;
  })
  return data;
}
