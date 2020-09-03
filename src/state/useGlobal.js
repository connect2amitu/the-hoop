import { useReducer } from "react";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  openCart: false,
  openStore: false,
  isDarkTheme: true
};

const useGlobal = (appState) => {
  const [state, setState] = useReducer(reducer, initialArgs);


  const toggleCart = () => {
    setState({ openCart: !state.openCart })
  }

  const toggleStore = () => {
    setState({ openStore: !state.openStore })
  }

  const toggleTheme = () => {
    setState({ isDarkTheme: !state.isDarkTheme })
  }

  return {
    toggleCart,
    toggleStore,
    toggleTheme,
    ...state,
  };
};

export default useGlobal;
