import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import {Col, Row, Divider, Space, Typography} from "antd";
import "./item.css";
const { Text} = Typography;

function OrderDetails() {
  const currentOrder = useSelector(state=> state.currentOrder);

  return (
    <div>
      <Divider orientation="left">订单详情</Divider>
      <OrderItem order={currentOrder} />
      <Divider orientation="left">规则说明</Divider>
      {/* <Row justify="space-around" align="middle">
        <Col span={12}>
          <Title level={4}>规则说明</Title>
        </Col>
      </Row> */}
      <Row justify="space-around">
        <Col span={12}>
          <Space direction="vertical">
            <Text>（1）提前30分钟取票，否则失效</Text>
            <Text>（2）3次购票未取，则六个月内无法再次购票</Text>
            <Text>（3）电影放映前出示订单界面进行付款取票，否则失效</Text>
            <Text>（4）该账号3次订票后未取票，则六个月内无法再次订票</Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default OrderDetails;