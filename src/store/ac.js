export const increase = () => ({
  type: "INCREMENT"
});

export const decrease = () => ({
  type: "DECREMENT"
});

export const addDish = id => ({
  type: "ADD_DISH",
  payload: {
    id
  }
});

export const removeDish = (id, need_delete = false) => ({
  type: "REMOVE_DISH",
  payload: {
    id,
    need_delete
  }
});
