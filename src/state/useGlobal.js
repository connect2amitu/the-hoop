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
  isDarkTheme: true,
  isLoading: false,
  locationBox: false,
  locations: [],
  location: ""
};

const useGlobal = (appState) => {
  const [state, setState] = useReducer(reducer, initialArgs);
  const [cookies, setCookie] = useCookies();


  useEffect(() => {
    setState({ ...state, location: cookies.location })
    console.log('window.location =>', window.location);

  }, [])
  useEffect(() => {
    console.log('window.location =>', window.location);
  })

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

  return {
    toggleCart,
    setLocation,
    toggleLocation,
    getLocations,
    toggleStore,
    toggleTheme,
    ...state,
  };
};

export default useGlobal;