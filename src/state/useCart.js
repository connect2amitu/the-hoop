import { useReducer, useEffect } from "react";
import { findIndex } from "lodash";
import { useCookies } from "react-cookie";
import { COOKIE_OPTION } from "../shared/constants";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  cart: {
    grand_total: 0,
    offer: 0,
    items: [],
    count: 0
  },
  cart_items: [],
  grand_total: 0,
  discount: 0,
  link: "",
  order_id: ""
  // cart: CART
};

const useCart = () => {
  const [state, setState] = useReducer(reducer, initialArgs);
  const [cookies, setCookie] = useCookies();

  const updateCart = () => {

  }

  useEffect(() => {
    var link = ""
    let order_id = ""
    if (cookies.link) {
      link = cookies.link
    }
    if (cookies.order_id) {
      order_id = cookies.order_id
    }

    if (localStorage.cart_items) {
      var _cart_items = JSON.parse(localStorage.cart_items)
      setState({
        ...state,
        link,
        order_id,
        cart_items: _cart_items,
        grand_total: _cart_items.reduce((a, b) => a + ((b['rate'] * b['qty']) || 0), 0),
      })
    }


  }, [])

  // const removeCart = () => {
  //   setState({ ...state, cart: { items: [] } })
  // }

  const removeCart = (index) => {
    var _cart_items = Object.assign([], state.cart_items);
    _cart_items.splice(index, 1)
    // setCookie('cart_items', _cart_items, COOKIE_OPTION);
    localStorage.setItem("cart_items", JSON.stringify(_cart_items))
    setState({
      ...state,
      cart_items: _cart_items,
      grand_total: countGrandTotal(_cart_items)
    })
  }

  const updateProductQty = (productId, value) => {

    var _cart_items = Object.assign([], state.cart_items);

    var index = findIndex(_cart_items, { sub_prod_id: productId })


    if (index >= 0) {
      var qty = _cart_items[index].qty + value;
      if (qty > 0) {
        _cart_items[index] = {
          ..._cart_items[index],
          qty: qty,
        }

      } else {
        _cart_items.splice(index, 1)
      }
      localStorage.setItem("cart_items", JSON.stringify(_cart_items))
      setState({
        ...state,
        cart_items: _cart_items,
        grand_total: countGrandTotal(_cart_items)
      })
    }

  }

  const countGrandTotal = (cart_items) => {
    var total = cart_items.reduce((a, b) => a + ((b['rate'] * b['qty']) || 0), 0)
    return total
  }

  const setOrderResponse = (resp) => {
    setCookie('link', resp.message, COOKIE_OPTION);
    setCookie('order_id', resp.order_id, COOKIE_OPTION);
    localStorage.setItem("cart_items", JSON.stringify([]))
    setState({
      ...state,
      cart_items: [],
      link: resp.message,
      grand_total: 0,
      order_id: resp.order_id
    })
  }


  const clearCart = () => {
    localStorage.setItem("cart_items", JSON.stringify([]))
    setState({
      ...state,
      cart_items: [],
      grand_total: 0
    })
  }


  const addToCart = (product, sub_prod_id) => {
    var _cart_items = Object.assign([], state.cart_items);
    var index = findIndex(_cart_items, { sub_prod_id: sub_prod_id })

    if (index >= 0) {
      _cart_items[index] = {
        ...product,
        qty: _cart_items[index].qty + 1,
        rate: product.rate
      }
    } else {
      _cart_items.push(product);
    }
    // setCookie('cart_items', _cart_items, COOKIE_OPTION);
    localStorage.setItem("cart_items", JSON.stringify(_cart_items))


    setState({
      ...state,
      cart_items: _cart_items,
      grand_total: countGrandTotal(_cart_items)
    })
  }

  return {
    addToCart,
    clearCart,
    setOrderResponse,
    updateProductQty,
    removeCart,
    updateCart,
    ...state,
  };
};

export default useCart;
