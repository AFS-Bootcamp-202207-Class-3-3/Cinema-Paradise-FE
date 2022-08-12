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
      <Divider orientation="left">友情提示</Divider>
      <Row justify="space-around">
        <Col span={8} >
          <Space direction="vertical">
            <Text>（1）购票之后无法退换票</Text>
            <Text>（2）请在电影放映前出示订单界面完成付款</Text>
            <Text>（3）请提前15分钟取票,并在电影放映前5分钟检票入场</Text>
            <Text>（4）如果自助机支付或取票遇到问题，请及时联系柜台工作人员</Text>
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