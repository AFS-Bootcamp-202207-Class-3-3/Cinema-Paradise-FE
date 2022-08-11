import { Steps } from 'antd';
import React from 'react';
const { Step } = Steps;

function Steps2(){

    return (
        <>
        <Steps current={1}>
        <Step title="Finished" description="选择电影场次" />
        <Step title="In Progress" description="选择座位" />
        <Step title="Waiting" description="选择支付" />
        </Steps>    
        </>

    )
}

export default Steps2;