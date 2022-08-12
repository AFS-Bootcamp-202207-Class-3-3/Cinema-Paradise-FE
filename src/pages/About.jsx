import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Result, Col, Row, Divider, Space, Typography } from "antd";
const { Text} = Typography;
const About = () => {
  return (
    <div>
      <Result
        icon={<SmileOutlined />}
        title="感谢选择天堂电影院进行网上购票！"
        subTitle="Cảm ơn đã chọn ra phim thiên đường để mua vé trực tuyến!"
      />

      <Row justify="center" style={{backgroundColor:"white",marginTop:"280px"}}>
        <Col span={12} style={{textAlign:"center"}}>
          <Space direction="vertical">
            <Text>武莱增值电信业务经营许可证 武B2-20190350 | 营业性演出许可证 武演（机构）（2019）4094号</Text>
          <Text>广播电视节目制作经营许可证 （武）字第08478号 | 网络文化经营许可证 武网文（2022）1334-041号</Text>
          <Text>个人投诉建议，请联系：suggestion@cinemaparadise.com</Text>
          <Text>商业媒体合作，请联系：business@cinemaparadise.com</Text>
          <Text>武公网安备 11010102003232号  武ICP备16022489号-1</Text>
          <Text>礼貌点儿我们传媒有限公司</Text>
          </Space>
          
        </Col>

      </Row>
      
      
    </div>
  );
};

export default About;
