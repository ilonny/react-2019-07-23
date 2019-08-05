import React from "react";

export default function OrderItem(props) {
  const { dish_data, count, removeDishAction } = props;
  const { name, price, id } = dish_data;
  return (
    <div style={{ clear: "both" }}>
      <h3 style={{ float: "left" }}>
        {name}, count: {count}, total price: {count * price}
      </h3>
      <button onClick={() => removeDishAction(id, false)}>Remove dish</button>
    </div>
  );
}
