import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function OrderDetails() {
  const currentOrder = useSelector(state=> state.currentOrder);

  return (
    <div>
      <h1>OrderList</h1>
      <OrderItem order={currentOrder} />
    </div>
  );
}

export default OrderDetails;