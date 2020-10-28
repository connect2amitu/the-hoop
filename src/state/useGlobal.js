import { useReducer, useEffect } from "react";
import { fetchLocation } from "../apis/location";
import { useCookies } from "react-cookie";
import { COOKIE_OPTION } from "../shared/constants";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  openCart: false,
  openStore: false,
  openStoreDetailBox: true,
  isDarkTheme: true,
  isLoading: false,
  locationBox: false,
  locations: [],
  location: "",
  glocation: "",
};

const useGlobal = (appState) => {
  const [state, setState] = useReducer(reducer, initialArgs);
  const [cookies, setCookie] = useCookies();


  useEffect(() => {
    setState({ ...state, location: cookies.location, glocation: cookies.glocation })
  }, [])

  const toggleCart = () => {
    setState({ openCart: !state.openCart })
  }

  const getLocations = async () => {
    setState({ ...state, isLoading: true })

    var locations = await fetchLocation();

    setState({ ...state, locations: locations, isLoading: false })
  }

  const toggleStore = () => {
    setState({ openStore: !state.openStore })
  }

  const toggleStoreDetailBox = () => {
    setState({ openStoreDetailBox: !state.openStoreDetailBox })
  }

  const toggleLocation = () => {
    setState({ locationBox: !state.locationBox })
  }

  const toggleTheme = () => {
    setState({ isDarkTheme: !state.isDarkTheme })
  }
  const setLocation = (location) => {
    setCookie('location', location, COOKIE_OPTION);
    setState({ ...state, location: location });
  }

  const setAddress = (glocation) => {
    setCookie('glocation', glocation, COOKIE_OPTION);
    setState({ ...state, glocation });
  }

  return {
    toggleCart,
    toggleStoreDetailBox,
    setLocation,
    setAddress,
    toggleLocation,
    getLocations,
    toggleStore,
    toggleTheme,
    ...state,
  };
};

export default useGlobal;