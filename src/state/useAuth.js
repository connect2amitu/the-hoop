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


  const setLoginUser = (phoneNumber) => {
    console.log('amittttttttttttttt =>', state);

    var token = jwt.sign({ isVerified: true, phoneNumber }, SECRET_KEY, { expiresIn: "100d" });
    setCookie('otp', "", token);
    setCookie('token', token, COOKIE_OPTION);
    setState({ ...state, token })
  }

  const saveOTP = (otp, phone) => {
    setCookie('phone', phone, COOKIE_OPTION);
    setCookie('otp', otp, COOKIE_OPTION);
    setState({ otp, phone })
  }

  const verifyToken = () => {
    try {
      var decoded = jwt.verify(state.token, SECRET_KEY);
      console.log('decoded =>', decoded);
      return true;
    } catch (error) {
      console.log('error =>', error);

      return false
    }
  }

  const logout = () => {
    setCookie('token', "");
    localStorage.clear()
    setState({ ...initialArgs })
  }
  return {
    setLoginUser,
    verifyToken,
    saveOTP,
    logout,
    ...state,
  };
};

export default useAuth;