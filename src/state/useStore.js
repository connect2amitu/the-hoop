import { useReducer } from "react";
import { DUMMY_DEPARTMENTS, STORES } from "../shared/dummyData";
import { fetchStoreCategories, fetchStores } from '../apis/store'
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
  // const { location } = useAppState("useGlobal");


  const getStoreBySlug = (slug) => {
    console.log('getStoreBySlug slug =>', slug);

    var data = STORES.find(data => data.slug === slug) || null;
    console.log('data =>', data);

    setState({ isLoading: true })
    setTimeout(() => {
      setState({ store: data, isLoading: false })
    }, 1000);
  }

  const getStores = (location) => {
    setState({ isLoading: true })
    fetchStores(location).then(resp => {
      setState({ ...state, stores: resp, isLoading: false })
      // setState({ isLoading: false })
    }).catch(error => {
      setState({ ...state, stores: [], isLoading: false })
      // setState({ isLoading: false })
      console.log('getStores error =>', error);
    })
  }

  const getStoreDepartment = (slug) => {

    setState({ isLoading: true })
    fetchStoreCategories(slug).then(resp => {
      console.log('getStores categories  resp =>', resp);
      setState({ ...state, store: STORES[0], departments: resp, isLoading: false })
    }).catch(error => {
      setState({ ...state, store: STORES[0], departments: [], isLoading: false })
      console.log('getStores categories error =>', error);
    })
  }
  const getStoreCategory = (slug, categoryId = "") => {
    var data = STORES.find(data => data.slug === slug) || null;

    if (data && categoryId) {
      data = data.categories.find(data => data.category_id === categoryId)
    }
    setState({ departments: DUMMY_DEPARTMENTS })
  }

  return {
    getStores,
    getStoreBySlug,
    getStoreCategory,
    getStoreDepartment,
    ...state,
  };
};

export default useStore;
