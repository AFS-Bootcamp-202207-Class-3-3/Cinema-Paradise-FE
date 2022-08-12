import OrderItem from "./OrderItem";
import {Col, Row, Divider, Space, Typography,Button} from "antd";
import {Link} from "react-router-dom";
import {  useSelector } from "react-redux";
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
        <Col span={8} >
          <Space direction="vertical">
            <Text>（1）请提前30分钟取票</Text>
            <Text>（2）该账号3次购票未取，则六个月内无法再次购票</Text>
            <Text>（3）请在电影放映前出示订单界面进行付款取票</Text>
            <Text>（4）该账号3次订票后未完成支付，则六个月内无法再次订票</Text>
          </Space>
        </Col>
      </Row>
      <Divider orientation="left">更多操作</Divider>
      <Row justify="center" align="middle">
        <Col span={2} >
         <Link to={{ pathname: `/movies/${currentOrder.movieId}` }}>
          <Button key="again" type="primary">再次购买</Button>
        </Link>
        </Col>
        <Col span={2} >
        <Link to="/">
          <Button key="backToHome"  >返回首页</Button>
        </Link>
          </Col>
      </Row>
    </div>
  );
}

export default OrderDetails;