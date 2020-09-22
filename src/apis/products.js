const Axios = require("axios");



export const getProducts = async () => {
  var data = await Axios.get().then(resp => {
    return resp;
  }).catch(e => {
    console.log('e =>', e);
  })
  return data;

}
