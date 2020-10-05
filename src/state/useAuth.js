import { useReducer, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { COOKIE_OPTION } from "../shared/constants";
import { SECRET_KEY } from '../shared/constants'
import jwt from "jsonwebtoken";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  otp: "",
  phone: "",
  user: "",
  token: "",
  isLoggedIn: false
};

const useAuth = () => {
  const [state, setState] = useReducer(reducer, initialArgs);
  const [cookies, setCookie, removeCookie] = useCookies();


  useEffect(() => {
    console.log('use auth verifyToken() =>', verifyToken());
    console.log('state =>', state);

    setState({
      ...state,
      otp: cookies.otp ? cookies.otp : 0,
      phone: cookies.phone || "",
      user: cookies.user || false,
      isLoggedIn: verifyToken() || false,
      token: cookies.token || "false"
    })
  }, [])


  const setLoginUser = (phoneNumber) => {
    console.log('amittttttttttttttt =>', state);

    var token = jwt.sign({ isVerified: true, phoneNumber }, SECRET_KEY, { expiresIn: "100d" });
    removeCookie("otp");
    setCookie("token", token, COOKIE_OPTION);
    setState({ ...state, token })
  }

  const saveOTP = (otp, phone) => {
    setCookie('phone', phone, COOKIE_OPTION);
    setCookie('otp', otp, COOKIE_OPTION);
    setState({ ...state, otp, phone })
  }

  const verifyToken = () => {
    try {
      var decoded = jwt.verify(cookies.token, SECRET_KEY);
      console.log('123decoded =>', decoded);
      return true;
    } catch (error) {
      console.log('error =>', error);
      return false
    }
  }

  const logout = () => {
    removeCookie("token")
    removeCookie("otp")
    localStorage.clear()
    setState({ ...initialArgs })
  }
  return {
    ...state,
    setLoginUser,
    verifyToken,
    saveOTP,
    logout,
  };
};

export default useAuth;