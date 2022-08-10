import { Col, Row, Radio, Button, Space, Typography } from 'antd';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./PurchasePage.css"

const { Text } = Typography;

function PurchasePage() {
    const currentOrder = useSelector(state=> state.currentOrder);
    console.log(currentOrder);
    const costValue = currentOrder.price;

    const [payMethod, setPayMethod] = useState("PayOnline");

    const changePayMethod = (e) => {
        setPayMethod(e.target.value);
    }


    return (
        <>
            <Row justify="center">
                <Col>
                    <Radio.Group onChange={changePayMethod} defaultValue="PayOnline">
                        <Radio.Button value="PayOnline">Pay Online</Radio.Button>
                        <Radio.Button value="PayOffline">Pay Offline</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
                <Col>
                    <Text>Payment</Text>
                </Col>
                <Col>
                    <Text className='pay-cost-value'>{costValue}</Text>
                </Col>
                {/* <Col>
                    <Text>Order</Text>
                </Col>
                <Col>
                    <Text className='pay-serial-number'>{serialNumber}</Text>
                </Col> */}
            </Row>
            <Row justify="center" hidden={payMethod==="PayOnline"?"":"hidden"}>
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
                            <Link to="/sucess"><Button type="primary" disabled={costValue===undefined}>Pay Order</Button></Link>
                        </Text>
                    </Space>
                </Col>
            </Row>
            <Row justify="center" hidden={payMethod==="PayOffline"?"":"hidden"}>
                <Col>
                    <Text>Please pay your order at least 20 minutes before the movie start.</Text>
                    <Link to="/orderdetails"><Button type="primary">Checkout Order</Button></Link>
                </Col>
            </Row>
        </>
    )
}

export default PurchasePage;