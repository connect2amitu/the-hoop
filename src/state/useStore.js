import { useReducer } from "react";
import { STORES } from "../shared/dummyData";
import { getProducts } from "../apis/products";
import { mapValues, groupBy, omit } from "lodash";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  stores: STORES,
  store: null,
  openStores: false,
  departments: [],
  isLoading: false
};

const useStore = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const getStoreBySlug = (slug) => {
    var data = STORES.find(data => data.slug === slug) || null;
    setState({ ...state, store: data })
  }

  // const getStoreDepartment = (slug) => {
  //   var data = STORES.find(data => data.slug === slug) || null;
  //   setState({ ...state, store: data, departments: data.departments })
  // }
  const getStoreDepartment = async (slug) => {

    // var data = STORES.find(data => data.slug === slug) || null;
    setState({
      ...state,
      isLoading: true,
      departments: []
    })
    var products = await getProducts();

    setState({ ...state, departments: products, isLoading: false })
  }

  return {
    getStoreBySlug,
    getStoreDepartment,
    ...state,
  };
};

export default useStore;
