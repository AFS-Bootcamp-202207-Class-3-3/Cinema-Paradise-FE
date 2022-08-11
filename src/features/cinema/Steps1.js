import { Steps } from "antd";
import React from "react";
import { Col, Row } from "antd";
const { Step } = Steps;

function Steps1() {
  return (
    <Row justify="center" align="top">
      <Col span={10}>
        <Steps current={0}>
          <Step title="In Progress" description="选择电影场次" />
          <Step title="Waiting" description="选择座位" />
          <Step title="Waiting" description="选择支付" />
        </Steps>
      </Col>
    </Row>
  );
}

export default Steps1;
