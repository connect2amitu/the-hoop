import { useReducer } from "react";
import { fetchBanner } from "../apis/banner";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  banner: [],
  isLoading: false
};

const useStore = () => {
  const [state, setState] = useReducer(reducer, initialArgs);


  const getBanner = async (slug) => {

    setState({
      ...state,
      isLoading: true,
      banner: []
    })
    var banner = await fetchBanner();
    setState({ ...state, banner, isLoading: false })
  }

  return {
    getBanner,
    ...state,
  };
};

export default useStore;
