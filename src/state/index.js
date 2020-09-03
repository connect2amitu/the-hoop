import useGlobal from './useGlobal'
import useStore from './useStore'
import useCart from './useCart'
import useAuth from './useAuth'

const containers = {
  global: useGlobal,
  store: useStore,
  cart: useCart,
  userAuth: useAuth,
};

export default containers