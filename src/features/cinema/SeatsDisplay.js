import React from 'react';
import { Col, Row, Layout, Card, Carousel } from "antd";


function SeatsDisplay(){

    const moviesLists = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    

    return (
        <>
        <Row justify="center" align="top" >
            {
                moviesLists.map((number) =>(
                    <Col span = {1} key = {number}>
                        <img src= "/assets/img/seats0.jpg"/>
                    </Col>
                    
                )
                
                )
            }
            
        </Row>
        

        </>
    )
}

export default seatsDisplay;