import { Col, Row, Radio, Button } from 'antd';
import { useState } from 'react';
import "./PurchasePage.css"

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
                    <span>Payment</span>
                </Col>
                <Col>
                    <span className='pay-cost-value'>{costValue}</span>
                </Col>
                <Col>
                    <span>Order</span>
                </Col>
                <Col>
                    <span className='pay-serial-number'>{serialNumber}</span>
                </Col>
            </Row>
            <Row hidden={payMethod==="PayOnline"?"":"hidden"}>
                <Col>
                    <div>Payment Method:</div>
                    <Radio.Group defaultValue="paypal">
                        <Radio value="paypal">
                            <img className="payment-logo" src="Paypal-logo.png" alt="paypal-logo" />
                        </Radio>
                        <Radio value="visa">
                            <img className="payment-logo" src="Visa-logo.png" alt="visa-logo" />
                        </Radio>
                    </Radio.Group>
                    <div>
                        <Button type="primary">Pay Order</Button>
                    </div>
                </Col>
            </Row>
            <Row hidden={payMethod==="PayOffline"?"":"hidden"}>
                <Col>
                    <div>Please pay your order at least 20 minutes before the movie start.</div>
                    <Button type="primary">Checkout Order</Button>
                </Col>
            </Row>
        </>
    )
}

export default PurchasePage;