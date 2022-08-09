import React from "react";
import {Col, Row, Divider, Space, Typography} from "antd";
import "./item.css";
const {Title, Text} = Typography;

function OrderItem(props) {
  const order=props.order;
  
  console.log(order);
  return (
    <>
      <Divider orientation="left" />
      <Row justify="center">
        <Col span={3}>
          <img alt="orderPic" className="img" src="/assets/img/Lightyear.jpg" />
        </Col>
        <Col span={9}>
          <Title level={3}>{order.title}</Title>
          <Space direction="vertical">
            <Text>1张-总价：￥{order.price}</Text>
            <Text>今天{order.date} {order.time}（国语3D)</Text>
            <Text>{order.cinema}-{order.room} {order.seat}</Text>
            <Divider />
            <Text>请到影院柜台支付完成交易</Text>
          </Space>
        </Col>
      </Row>
    </>
  );
}

export default OrderItem;
