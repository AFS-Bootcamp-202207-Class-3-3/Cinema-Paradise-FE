import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {Button, Modal,Col, Row,Divider,Space, Typography} from "antd";
import {
    EditOutlined,
    DeleteOutlined,
  } from '@ant-design/icons';
import "./item.css";
const { Title,Text, Link } = Typography;



function OrderItem(props) {
  return (
    <>
    <Divider orientation="left"/>
    <Row justify="center" >
      <Col span={3}><img  className="img" src="/assets/img/Lightyear.jpg" ></img></Col>
      <Col span={9}>
      <Title level={3}>湄公河行动</Title>
        <Space direction="vertical">
        <Text>1张-总价：￥45</Text>
        <Text>今天10-07 22:50（国语3D)</Text>
        <Text>万达影城-A厅 3排15座</Text>
        <Divider />
        <Text>请到影院柜台支付完成交易</Text>
        </Space>
      </Col>
    </Row>
    <Divider orientation="left"/>
    <Row justify="space-around"  align="middle">
      <Col span={12}>
      <Title level={4}>规则说明</Title>
      </Col>
    </Row>
    <Row justify="space-around"  >
      <Col span={12}>
      <Space direction="vertical">
        <Text>（1）提前30分钟取票，否则失效</Text>
        <Text>（2）3次购票未取，则六个月内无法再次购票</Text>
        <Text>（3）电影放映前出示订单界面进行付款取票，否则失效</Text>
        <Text>（4）该账号3次订票后未取票，则六个月内无法再次订票</Text>
        </Space>
      </Col>
    </Row>

  </>
  );
}

export default OrderItem;
