import { find, findIndex } from "lodash";
import { useReducer } from "react";
import { ADDRESSES } from "../shared/dummyData";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  addresses: ADDRESSES,
  isLoading: false,
  address: null
};

const useAuth = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const getAddresses = () => {
    setState({ ...state, isLoading: true })
    setTimeout(() => {
      setState({ ...state, isLoading: false })
    }, 1000);
  }

  const getAddress = (id) => {
    console.log('state.addresses =>', state.addresses);
    console.log('id =>', id);

    var addr = state.addresses.find(data => String(data.id) === String(id))
    console.log('addr =>', addr);

    setState({ ...state, isLoading: true })
    setTimeout(() => {
      setState({ ...state, address: addr, isLoading: false })
    }, 1000);
  }

  const editAddress = (data, id) => {
    var index = state.addresses.findIndex(data => String(data.id) === String(id))
    setState({ ...state, isLoading: true })
    setTimeout(() => {
      var _addresses = Object.assign([], state.addresses);
      _addresses[index] = data
      setState({ ...state, addresses: _addresses, isLoading: false })
    }, 1000);
  }

  const deleteAddress = (id) => {
    setState({ ...state, isLoading: false })
    setTimeout(() => {
      var index = findIndex(state.addresses, { id });
      console.log('index =>', index);
      var _addresses = Object.assign([], state.addresses);
      _addresses.splice(index, 1);
      setState({ ...state, addresses: _addresses, isLoading: false })
    }, 1000);
  }

  const addNewAddress = (data) => {
    setState({ ...state, isLoading: true })
    setTimeout(() => {
      var _addresses = Object.assign([], state.addresses);
      _addresses.push({ id: state.addresses.length + 1, ...data });
      console.log('_addresses =>', _addresses);

      setState({ ...state, addresses: _addresses, isLoading: false })
    }, 1000);
  }

  return {
    ...state,
    getAddresses,
    editAddress,
    addNewAddress,
    deleteAddress,
    getAddress
  };
};

export default useAuth;