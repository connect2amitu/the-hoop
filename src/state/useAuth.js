import { useReducer, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { COOKIE_OPTION } from "../shared/constants";
import jwt from "jsonwebtoken";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  otp: "",
  phone: "",
  user: "",
  token: ""
};

const useAuth = () => {
  const [state, setState] = useReducer(reducer, initialArgs);
  const [cookies, setCookie, removeCookie] = useCookies();


  useEffect(() => {
    setState({
      ...state,
      otp: cookies.otp ? cookies.otp : 0,
      phone: cookies.phone || "",
      user: cookies.user || false,
      token: cookies.token || "false"
    })
  }, [])


  const setLoginUser = () => {
    setCookie('isVerified', true, COOKIE_OPTION);
    setCookie('otp', "", COOKIE_OPTION);
    var token = jwt.sign({ isVerified: true, phoneNumber: state.phone }, 'secret', { expiresIn: "100d" });
    localStorage.setItem('token', token)
    setCookie('token', token, COOKIE_OPTION);
    setState({ ...state, token })
  }

  const saveOTP = (otp, phone) => {
    setCookie('phone', phone, COOKIE_OPTION);
    setCookie('otp', otp, COOKIE_OPTION);
    setState({ ...state, otp })
  }

  const logout = () => {
    removeCookie("token")
    localStorage.clear()
    setState({ ...initialArgs })
  }
  return {
    setLoginUser,
    saveOTP,
    logout,
    ...state,
  };
};

export default useAuth;