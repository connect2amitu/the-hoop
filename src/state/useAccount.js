import { useReducer, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { COOKIE_OPTION } from "../shared/constants";
import { SECRET_KEY } from '../shared/constants'
import jwt from "jsonwebtoken";
import { ADDRESSES } from "../shared/dummyData";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  addresses: ADDRESSES,
  isLoading: false
};

const useAuth = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const getAddresses = () => {
    setState({ ...state, isLoading: true })
    setTimeout(() => {
      setState({ ...state, addresses: ADDRESSES, isLoading: false })
    }, 1000);
  }

  return {
    ...state,
    getAddresses,
  };
};

export default useAuth;