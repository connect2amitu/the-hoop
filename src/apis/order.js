import Axios from "axios";


export const order = async (data) => {
  return await Axios.post(`https://thehoop.in/admin/temp/hoop_order.php`, data)
}

