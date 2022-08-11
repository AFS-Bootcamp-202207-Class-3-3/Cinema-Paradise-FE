import { Steps } from 'antd';
import React from 'react';
const { Step } = Steps;

function Steps3(){

    return (
        <>
        <Steps current={2}>
        <Step title="Finished" description="选择电影场次" />
        <Step title="Finished"  description="选择座位" />
        <Step title="In Progress" description="选择支付" />
        </Steps>    
        </>

    )
}

export default Steps3;