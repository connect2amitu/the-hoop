import { useReducer } from "react";
import { CART } from "../shared/dummyData";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  cart: CART
};

const useCart = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  return {
    ...state,
  };
};

export default useCart;
