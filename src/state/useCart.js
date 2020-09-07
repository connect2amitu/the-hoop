import { useReducer } from "react";
import { CART } from "../shared/dummyData";
import { findIndex, sum, sumBy, reduce } from "lodash";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialArgs = {
  cart: {
    grand_total: 0,
    offer: 0,
    items: [],
    count: 0
  }
  // cart: CART
};

const useCart = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const updateCart = () => {

  }

  const removeCart = () => {
    setState({ ...state, cart: { items: [] } })
  }

  const itemCount = () => {
    var count = 0;
    var total = 0;
    state.cart.items.forEach(element => {
      var subTotal = 0;
      element.items.forEach(prod => {
        var sub_total = prod.price * prod.quantity;
        var discountAmount = sub_total * (prod.discount / 100);
        subTotal += (sub_total - discountAmount)
        total += subTotal
      });
      element.price = subTotal.toFixed(2)
      count += element.items.length
    });
    console.log('state.cart =>', state.cart);

    return { total, count }
  }
  const addToCart = (product, store) => {

    var retailer_list = state.cart.items;
    var index = findIndex(retailer_list, { retailer_id: store.id })
    if (index >= 0) {
      // exist


      var index2 = findIndex(retailer_list[index].items, { product_id: product.id })
      if (index2 >= 0) {
        retailer_list[index].items[index2] = {
          product_id: product.id,
          name: product.name,
          image: product.image,
          quantity: product.quantity,
          discount: product.discount,
          retailer_id: store.id,
          price: Number(product.price),
        }
      } else {
        retailer_list[index].items.push({
          product_id: product.id,
          name: product.name,
          image: product.image,
          quantity: product.quantity,
          discount: product.discount,
          retailer_id: store.id,
          price: Number(product.price),
        })
      }
      var store_total = 0;

      retailer_list[index].items.map(({ price }) => {
        store_total += Number(price);
      })
      retailer_list[index].price = store_total;
    } else {
      retailer_list.push({
        retailer_id: store.id,
        store_name: store.name,
        image: store.image,
        price: Number(product.price) * product.quantity,
        items: [{
          product_id: product.id,
          name: product.name,
          image: product.image,
          quantity: product.quantity,
          discount: product.discount,
          retailer_id: store.id,
          price: Number(product.price),
        }]
      })

      // not exists add new store in list
    }
    var data = {
      ...state,
      count: itemCount().count,
      items: retailer_list,
      grand_total: Number((itemCount().total).toFixed(2))
    }
    console.log('data =>', data);

    setState({
      ...state,
      cart: data
    })
  }

  return {
    addToCart,
    removeCart,
    updateCart,
    ...state,
  };
};

export default useCart;
