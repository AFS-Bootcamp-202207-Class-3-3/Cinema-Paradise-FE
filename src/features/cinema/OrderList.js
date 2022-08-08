import OrderGroup from "./OrderGroup";
import CONTENT from "./CONTENT";

function OrderList() {
  const orderList=CONTENT;

  return (
    <div>
      <h1>OrderList</h1>
      <OrderGroup orderList={orderList}/>
    </div>
  );
}

export default OrderList;