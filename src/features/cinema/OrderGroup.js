import OrderItem from "./OrderItem";
import "./group.css"

function OrderGroup(props) {
  const { orderList } = props;
  return (
    <div>
      {orderList.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderGroup;