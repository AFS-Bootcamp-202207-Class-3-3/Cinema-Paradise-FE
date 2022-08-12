import { Col, Row, Radio, Button, Space, Typography, Divider } from "antd";
import { useState } from "react";
import { createOrder } from "../../api/order";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addContent } from "./OrderSlice";
import "./PurchasePage.css";
import Steps3 from "./Steps3";

const { Text } = Typography;

function PurchasePage() {
  const currentOrder = useSelector((state) => state.currentOrder);
  const costValue = currentOrder.price;

  const [payMethod, setPayMethod] = useState("PayOnline");

  const dispatch = useDispatch();

  const changePayMethod = (e) => {
    setPayMethod(e.target.value);
    dispatch(
      addContent({ paid: e.target.value === "PayOnline" ? true : false })
    );
  };

  const submitPaymentPaid = () => {
    dispatch(addContent({ paid: true }));
  };

  const submitPaymentNotPaid = () => {
    createOrder(currentOrder).then((response) => {
      dispatch(addContent({ id: response.data.id }));
    });
  };

  return (
    <>
      <Steps3 />
      <Row justify="center">
        <Col>
          <Radio.Group onChange={changePayMethod} defaultValue="PayOnline">
            <Space size="large">
              <Radio.Button value="PayOnline">线上支付</Radio.Button>
              <Radio.Button value="PayOffline">线下支付</Radio.Button>
            </Space>
          </Radio.Group>
        </Col>
      </Row>
      <Row justify="center" gutter={16}>
        <Divider />
        <Col span={8}>
          <Text strong>支付金额：</Text>
          <Text className="pay-cost-value">￥{costValue}</Text>
        </Col>
        <Divider />
        {/* <Col>
                    <Text>Order</Text>
                </Col>
                <Col>
                    <Text className='pay-serial-number'>{serialNumber}</Text>
                </Col> */}
      </Row>
      <Row
        justify="center"
        gutter={16}
        hidden={payMethod === "PayOnline" ? "" : "hidden"}
      >
        <Col span={8}>
          <Space direction="vertical">
            <Text strong>支付方式：</Text>
          </Space>
        </Col>
      </Row>
      <Row justify="center" hidden={payMethod === "PayOnline" ? "" : "hidden"}>
        <Radio.Group defaultValue="paypal">
          <Radio value="paypal">
            <img
              className="payment-logo"
              src="/assets/img/Paypal-Logo.png"
              alt="paypal-logo"
            />
          </Radio>
          <Radio value="visa">
            <img
              className="payment-logo"
              src="/assets/img/Visa-Logo.png"
              alt="visa-logo"
            />
          </Radio>
        </Radio.Group>
      </Row>
      <Row justify="center" hidden={payMethod === "PayOnline" ? "" : "hidden"}>
        <Link to="/sucess">
          <Button
            type="primary"
            disabled={costValue === undefined}
            onClick={submitPaymentPaid}
          >
            支付订单
          </Button>
        </Link>
      </Row>
      <Row justify="center" hidden={payMethod === "PayOffline" ? "" : "hidden"}>
        <Col>
          <Text>请在电影开场前20分钟支付你的订单</Text>
        </Col>
      </Row>
      <Row
        justify="center"
        gutter={16}
        hidden={payMethod === "PayOffline" ? "" : "hidden"}
      >
        <Link to="/orderdetails">
          <Button
            type="primary"
            disabled={costValue === undefined}
            onClick={submitPaymentNotPaid}
          >
            确认订单
          </Button>
        </Link>
      </Row>
    </>
  );
}

export default PurchasePage;
