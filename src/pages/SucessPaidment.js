import React from 'react';
import { Button, Result } from 'antd';

const SucessPaidment = () => {
  return (
    <Result
    status="success"
    title="Successfully Purchased ticket!"
    subTitle="Order number: 2017182818828182881."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
  );
};

export default SucessPaidment;