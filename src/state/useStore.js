import { useReducer } from "react";
import { DUMMY_DEPARTMENTS, STORES } from "../shared/dummyData";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  stores: STORES,
  store: null,
  openStores: false,
  departments: [],
  isLoading: true
};

const useStore = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const getStoreBySlug = (slug) => {
    var data = STORES.find(data => data.slug === slug) || null;
    setState({ isLoading: true })
    setTimeout(() => {
      setState({ store: data, isLoading: false })
    }, 1000);
  }

  const getStoreDepartment = (slug) => {
    var data = STORES.find(data => data.slug === slug) || null;
    setState({ departments: DUMMY_DEPARTMENTS })
  }

  return {
    getStoreBySlug,
    getStoreDepartment,
    ...state,
  };
};

export default useStore;
