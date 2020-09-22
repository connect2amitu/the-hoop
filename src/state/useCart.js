// import { useReducer } from "react";
// import { CART } from "../shared/dummyData";
// import { findIndex, sum, sumBy, reduce } from "lodash";

// function reducer(state, action) {
//   return { ...state, ...action };
// }

// const initialArgs = {
//   cart: {
//     grand_total: 0,
//     offer: 0,
//     items: [],
//     count: 0
//   }
//   // cart: CART
// };

// const useCart = () => {
//   const [state, setState] = useReducer(reducer, initialArgs);

//   const updateCart = () => {

//   }

//   const removeCart = () => {
//     setState({ ...state, cart: { items: [] } })
//   }

//   const itemCount = () => {
//     var count = 0;
//     var total = 0;
//     state.cart.items.forEach(element => {
//       var subTotal = 0;
//       element.items.forEach(prod => {
//         var sub_total = prod.price * prod.quantity;
//         var discountAmount = sub_total * (prod.discount / 100);
//         subTotal += (sub_total - discountAmount)
//         total += subTotal
//       });
//       element.price = subTotal.toFixed(2)
//       count += element.items.length
//     });
//     console.log('state.cart =>', state.cart);

//     return { total, count }
//   }
//   const addToCart = (product, store) => {

//     var retailer_list = state.cart.items;
//     var index = findIndex(retailer_list, { retailer_id: store.id })
//     if (index >= 0) {
//       // exist


//       var index2 = findIndex(retailer_list[index].items, { product_id: product.id })
//       if (index2 >= 0) {
//         retailer_list[index].items[index2] = {
//           product_id: product.id,
//           name: product.name,
//           image: product.image,
//           quantity: product.quantity,
//           discount: product.discount,
//           retailer_id: store.id,
//           price: Number(product.price),
//         }
//       } else {
//         retailer_list[index].items.push({
//           product_id: product.id,
//           name: product.name,
//           image: product.image,
//           quantity: product.quantity,
//           discount: product.discount,
//           retailer_id: store.id,
//           price: Number(product.price),
//         })
//       }
//       var store_total = 0;

//       retailer_list[index].items.map(({ price }) => {
//         store_total += Number(price);
//       })
//       retailer_list[index].price = store_total;
//     } else {
//       retailer_list.push({
//         retailer_id: store.id,
//         store_name: store.name,
//         image: store.image,
//         price: Number(product.price) * product.quantity,
//         items: [{
//           product_id: product.id,
//           name: product.name,
//           image: product.image,
//           quantity: product.quantity,
//           discount: product.discount,
//           retailer_id: store.id,
//           price: Number(product.price),
//         }]
//       })

//       // not exists add new store in list
//     }
//     var data = {
//       ...state,
//       count: itemCount().count,
//       items: retailer_list,
//       grand_total: Number((itemCount().total).toFixed(2))
//     }
//     console.log('data =>', data);

//     setState({
//       ...state,
//       cart: data
//     })
//   }

//   return {
//     addToCart,
//     removeCart,
//     updateCart,
//     ...state,
//   };
// };

// export default useCart;
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
        grand_total: _cart_items.reduce((a, b) => a + ((b['rate'] * b['qty']) || 0), 0)
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

        // setCookie('cart_items', _cart_items, COOKIE_OPTION);

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
    return cart_items.reduce((a, b) => a + ((b['rate'] * b['qty']) || 0), 0)
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

    //#region 
    // var retailer_list = state.cart.items;
    // var index = findIndex(retailer_list, { retailer_id: store.id })
    // if (index >= 0) {
    //   // exist


    //   var index2 = findIndex(retailer_list[index].items, { product_id: product.id })
    //   if (index2 >= 0) {
    //     retailer_list[index].items[index2] = {
    //       product_id: product.id,
    //       name: product.name,
    //       image: product.image,
    //       quantity: product.quantity,
    //       discount: product.discount,
    //       retailer_id: store.id,
    //       price: Number(product.price),
    //     }
    //   } else {
    //     retailer_list[index].items.push({
    //       product_id: product.id,
    //       name: product.name,
    //       image: product.image,
    //       quantity: product.quantity,
    //       discount: product.discount,
    //       retailer_id: store.id,
    //       price: Number(product.price),
    //     })
    //   }
    //   var store_total = 0;

    //   retailer_list[index].items.map(({ price }) => {
    //     store_total += Number(price);
    //   })
    //   retailer_list[index].price = store_total;
    // } else {
    //   retailer_list.push({
    //     retailer_id: store.id,
    //     store_name: store.name,
    //     image: store.image,
    //     price: Number(product.price) * product.quantity,
    //     items: [{
    //       product_id: product.id,
    //       name: product.name,
    //       image: product.image,
    //       quantity: product.quantity,
    //       discount: product.discount,
    //       retailer_id: store.id,
    //       price: Number(product.price),
    //     }]
    //   })

    //   // not exists add new store in list
    // }
    // var data = {
    //   ...state,
    //   count: itemCount().count,
    //   items: retailer_list,
    //   grand_total: Number((itemCount().total).toFixed(2))
    // }
    // console.log('data =>', data);
    //#endregion

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