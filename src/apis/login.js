import instance from "./index";

export const fetchOTP = async (mobile) => {
  return await instance.post(`Customer/sendRegisterOTP`, { mobile })
}

export const resendOTP = async (mobile) => {
  return await instance.post(`Customer/sendRegisterOTP`, { mobile })
}


export const verifyOTP = async (otp) => {
  return await instance.post(`Customer/verifyRegisterOTP`, { otp }, { headers: { "x-auth": localStorage.getItem("token") } })
}