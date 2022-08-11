import React from "react";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../features/cinema/OrderSlice";
import { createOrder } from "../api/order";


const SucessPaidment = () => {
  const dispatch=useDispatch()
  const currentOrder = useSelector(state=> state.currentOrder);
  const onSubmitPaidOrder= () => {
    createOrder(currentOrder).then((response) => {
      dispatch(addContent({id: response.data.id}));
      });
}
  return (
    <Result
      status="success"
      title="Successfully Purchased ticket!"
      extra={[
        <Link to="/orderdetails">
          <Button type="primary" key="datail" onClick={onSubmitPaidOrder}>
            Check Detail
          </Button>
        </Link>,
         <Link to="/">
          <Button key="back" >Back to home</Button>
        </Link>,
      ]}
    />
  );
};

export default SucessPaidment;
