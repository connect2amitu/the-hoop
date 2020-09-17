import { useReducer, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { COOKIE_OPTION } from "../shared/constants";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  isLoggedIn: localStorage.getItem('token') ? localStorage.getItem('token') : false,
  otp: "",
  phone: "",
  user: ""
};

const useAuth = () => {
  const [state, setState] = useReducer(reducer, initialArgs);
  const [cookies, setCookie] = useCookies();


  useEffect(() => {
    setState({
      ...state,
      otp: cookies.otp ? cookies.otp : 0,
      phone: cookies.phone || "",
      user: cookies.user || false,
    })
  }, [])


  const setLoginUser = () => {
    localStorage.setItem('token', "true")
    setCookie('user', true, COOKIE_OPTION);
    setCookie('isVerified', true, COOKIE_OPTION);
    setState({ ...state, isLoggedIn: true })
  }

  const saveOTP = (otp, phone) => {
    setCookie('phone', phone, COOKIE_OPTION);
    setCookie('otp', otp, COOKIE_OPTION);
    setState({ ...state, otp })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setState({ ...state, isLoggedIn: false })
  }
  return {
    setLoginUser,
    saveOTP,
    logout,
    ...state,
  };
};

export default useAuth;
