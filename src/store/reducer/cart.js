export default (cartState = {}, action) => {
  switch (action.type) {
    case "ADD_DISH": {
      const { id } = action.payload;
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1
      };
    }
    case "REMOVE_DISH": {
      const { id, need_delete } = action.payload;
      if (!cartState[id]) {
        console.log("lol?");
        return cartState;
      }
      const newCartState = { ...cartState };
      if (newCartState[id] === 1 || need_delete) {
        delete newCartState[id];
      } else {
        newCartState[id] = newCartState[id] - 1;
      }
      return newCartState;
    }
    default:
      return cartState;
  }
};
