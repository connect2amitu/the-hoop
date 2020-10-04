import Axios from "axios";


export const fetchOTP = async (mobile_no) => {
  return await Axios.post(`https://thehoop.in/admin/temp/hoop_otp.php`, { mobile_no })

}

export const resendOTP = async (data) => {
  return await Axios.post(`https://thehoop.in/admin/temp/hoop_resend_otp.php`, data)

}