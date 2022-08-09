import { Col, Row, Radio, Button, Space, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PurchasePage.css"

const { Text } = Typography;

function PurchasePage(props) {
    const costValue = props.orderValue;
    const serialNumber = props.orderNumber;

    const [payMethod, setPayMethod] = useState("PayOnline");

    const changePayMethod = (e) => {
        setPayMethod(e.target.value);
    }


    return (
        <>
            <Row>
                <Col>
                    <Radio.Group onChange={changePayMethod} defaultValue="PayOnline">
                        <Radio.Button value="PayOnline">Pay Online</Radio.Button>
                        <Radio.Button value="PayOffline">Pay Offline</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col>
                    <Text>Payment</Text>
                </Col>
                <Col>
                    <Text className='pay-cost-value'>{costValue}</Text>
                </Col>
                <Col>
                    <Text>Order</Text>
                </Col>
                <Col>
                    <Text className='pay-serial-number'>{serialNumber}</Text>
                </Col>
            </Row>
            <Row hidden={payMethod==="PayOnline"?"":"hidden"}>
                <Col>
                    <Space direction="vertical">
                        <Text>Payment Method:</Text>
                        <Radio.Group defaultValue="paypal">
                            <Radio value="paypal">
                                <img className="payment-logo" src="/assets/img/Paypal-Logo.png" alt="paypal-logo" />
                            </Radio>
                            <Radio value="visa">
                                <img className="payment-logo" src="/assets/img/Visa-Logo.png" alt="visa-logo" />
                            </Radio>
                        </Radio.Group>
                        <Text>
                            <Link to="/success"><Button type="primary">Pay Order</Button></Link>
                        </Text>
                    </Space>
                </Col>
            </Row>
            <Row hidden={payMethod==="PayOffline"?"":"hidden"}>
                <Col>
                    <Text>Please pay your order at least 20 minutes before the movie start.</Text>
                    <Link to="/order"><Button type="primary">Checkout Order</Button></Link>
                </Col>
            </Row>
        </>
    )
}

export default PurchasePage;