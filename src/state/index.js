import useGlobal from './useGlobal'
import useStore from './useStore'
import useCart from './useCart'
import useAuth from './useAuth'
import useBanner from './useBanner'

const containers = {
  global: useGlobal,
  store: useStore,
  cart: useCart,
  userAuth: useAuth,
  banner: useBanner,
};

export default containers