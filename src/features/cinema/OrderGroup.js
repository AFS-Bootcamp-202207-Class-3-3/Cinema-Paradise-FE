import OrderItem from "./OrderItem";
import "./group.css"
import CONTENT from "./CONTENT";

function OrderGroup() {
  const  orderList  = CONTENT;
  return (
    <div>
      {orderList.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderGroup;