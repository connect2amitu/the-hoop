import { useReducer } from "react";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  isLoggedIn: localStorage.getItem('token') ? localStorage.getItem('token') : false
};

const useAuth = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const setLoginUser = () => {
    localStorage.setItem('token', "true")
    setState({ ...state, isLoggedIn: true })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setState({ ...state, isLoggedIn: false })
  }
  return {
    setLoginUser,
    logout,
    ...state,
  };
};

export default useAuth;
