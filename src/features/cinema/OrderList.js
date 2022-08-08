import OrderGroup from "./OrderGroup";
import { useDispatch} from "react-redux";
import {useEffect} from"react";
import CONTENT from "./CONTENT";
import {initData} from "./OrderSlice";

function OrderList() {
  const dispatch = useDispatch();
  const orderList=CONTENT;

  useEffect(() => {
      dispatch(initData(orderList));
  }, [dispatch]);

  return (
    <div>
      <h1>OrderList</h1>
      <OrderGroup orderList={orderList}/>
    </div>
  );
}

export default OrderList;