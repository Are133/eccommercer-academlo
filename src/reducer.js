export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((ammount, item) => item.price + ammount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(
          `No se pudo borrar el producto (id:${action.id}), no esta en el carrito.`
        );
      }
      return {
        ...state,
        basket: newbasket,
      };

    default:
      return state;
  }
};

export default reducer;
