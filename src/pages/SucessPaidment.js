import React from "react";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";

const SucessPaidment = () => {
  return (
    <Result
      status="success"
      title="Successfully Purchased ticket!"

      extra={[
        <Link to="/orderdetails">
          <Button type="primary" key="datail">
            Check Detail
          </Button>
        </Link>,
        <Link to="/">
          <Button key="buy">Buy Again</Button>
        </Link>,
      ]}
    />
  );
};

export default SucessPaidment;
