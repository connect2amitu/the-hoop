import { useReducer } from "react";
import { STORES } from "../shared/dummyData";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  stores: STORES,
  store: null,
  openStores: false,
  departments: []
};

const useStore = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const getStoreBySlug = (slug) => {
    var data = STORES.find(data => data.slug === slug) || null;
    setState({ ...state, store: data })
  }

  const getStoreDepartment = (slug) => {
    var data = STORES.find(data => data.slug === slug) || null;
    console.log('data =>', data);

    setState({ ...state, departments: data.departments })
  }

  return {
    getStoreBySlug,
    getStoreDepartment,
    ...state,
  };
};

export default useStore;
