import { Col, Row, Radio, Button, Space, Typography } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addContent } from "./OrderSlice";
import "./PurchasePage.css"

const { Text } = Typography;

function PurchasePage() {
    const currentOrder = useSelector(state=> state.currentOrder);
    console.log(currentOrder);
    const costValue = currentOrder.price;

    const [payMethod, setPayMethod] = useState("PayOnline");

    const dispatch = useDispatch();

    const changePayMethod = (e) => {
        setPayMethod(e.target.value);
    }

    const submitPaymentPaid = () => {
        dispatch(addContent({paid: true}));
    }

    const submitPaymentNotPaid = () => {
        dispatch(addContent({paid: false}));
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
                    </Space>
                </Col>
            </Row>
            <Row justify="center" hidden={payMethod==="PayOnline"?"":"hidden"}>
                <Link to="/sucess"><Button type="primary" disabled={costValue===undefined} onClick={submitPaymentPaid}>Pay Order</Button></Link>
            </Row>
            <Row justify="center" hidden={payMethod==="PayOffline"?"":"hidden"}>
                <Col>
                    <Text>Please pay your order at least 20 minutes before the movie start.</Text>
                </Col>
            </Row>
            <Row justify="center" hidden={payMethod==="PayOffline"?"":"hidden"}>
                <Link to="/orderdetails"><Button type="primary" disabled={costValue===undefined} onClick={submitPaymentNotPaid}>Checkout Order</Button></Link>
            </Row>
        </>
    )
}

export default PurchasePage;