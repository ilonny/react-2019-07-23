import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../order-item";
import { removeDish } from "../../store/ac";
export default function OrderList(props) {
  const dispatch = useDispatch();
  const { restaurants, cart } = useSelector(state => state);
  const removeDishAction = id => dispatch(removeDish(id, true));
  let all_menu = restaurants.reduce((menu_acc, { menu }) => {
    return menu_acc.concat(menu);
  }, []);
  all_menu = all_menu.reduce(function(acc, cur, i) {
    acc[cur.id] = cur;
    return acc;
  }, {});
  //вот тут нужен совет - как уместить все в один редьюс?

  //тут можно впилить проверку на наличие заказа в принципе и не отображать компонент если корзина пуста
  return (
    <div>
      <h2>Order List</h2>
      {Object.keys(cart).map(id => (
        <OrderItem
          key={id}
          dish_data={all_menu[id]}
          count={cart[id]}
          removeDishAction={removeDishAction}
        ></OrderItem>
      ))}
    </div>
  );
}
