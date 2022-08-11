import { Steps } from 'antd';
import React from 'react';
const { Step } = Steps;

function Steps1(){

    return (
        <>
        <Steps current={0}>
        <Step title="In Progress" description="选择电影场次" />
        <Step title="Waiting"  description="选择座位" />
        <Step title="Waiting" description="选择支付" />
        </Steps>    
        </>

    )
}

export default Steps1;