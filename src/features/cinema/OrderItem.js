import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import {Col, Row, Divider, Space, Typography} from "antd";
import "./item.css";
const {Title, Text} = Typography;

function OrderItem(props) {
  const order=props.order;
  const orderJson={"id":order.id,
"cinemaId":order.cinemaId,
"movieId":order.movieId,
"arrangementId":order.arrangementId,
"paid":order.paid,}
  const QRcodeValue=JSON.stringify(orderJson)
  return (
    <>
      <Row justify="center">
        <Col span={4}>
        <img alt="orderPic" className="img" src={order.imgUrl} />
        </Col>
        <Col span={4} justify="center">
          <Title level={3}>{order.title}</Title>
          <Space direction="vertical">
            <Text>1张-总价：￥{order.price}</Text>
            <Text>{order.date} {order.time}（国语3D)</Text>
            <Text>{order.cinema}</Text>
            <Text>{order.room}-{order.seat}</Text>
            <QRCodeCanvas value={QRcodeValue} />
            <Divider />
            <Title level={5} > 请凭借二维码到影院自助机{order.paid ? '取票' : '或柜台支付'}</Title>
            <Title level={3}>注意妥善保管此票据！</Title>
          </Space>
        </Col>
      </Row>
    </>
  );
}

export default OrderItem;
