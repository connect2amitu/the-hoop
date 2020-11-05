import { HOST_API } from "../shared/constants";

const Axios = require("axios");

export const fetchStores = async (location) => {
  // var data = await Axios.get(`${HOST_API}/Customer/getNearbyStores?lat=${location.latitude}&lon=${location.longitude}`).then(resp => {
  var data = await Axios.get(`${HOST_API}/Customer/getNearbyStores?lat=21.1637734&lon=72.79919720000001`).then(resp => {
    return resp.data.data;
  }).catch(e => {
    console.log('e =>', e);
  })
  return data;

}

export const fetchStoreCategories = async (slug) => {
  var data = await Axios.get(`${HOST_API}/customer/getStoreCategories?store=${slug}`).then(resp => {
    return resp.data.data;
  }).catch(e => {
    console.log('e =>', e);
  })
  return data;

}
