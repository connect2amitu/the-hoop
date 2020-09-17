import Axios from "axios";

export const getProducts = async () => {
  var data = await Axios.get(`https://thehoop.in/admin/temp/hoop_product_new.php`).then(resp => {
    return resp.data.data;
  }).catch(e => {
    console.log('await e =>', e);
    return e;
  })
  return data;
}
