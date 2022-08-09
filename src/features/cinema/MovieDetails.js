import React from 'react';
import './MovieDetails.css';
import { Col, Divider, Row, Typography, Space } from 'antd';
import { Link, useParams } from "react-router-dom";

const { Title,Text } = Typography;

function MovieDetails (){

    let { movieId } = useParams();
    console.log(movieId);

    return (
        <>
        <Divider orientation="left">电影详情</Divider>
        <Row justify="center" align="top">
        <Col span={4}>
            <Link to="/">
                <img  className="image" src="/assets/img/MinionsTheRiseofGru.jpg" alt="图片"></img>
            </Link>
                
        </Col>
        <Col span={12}>
                <Link to="/">
                    <Title level={2} className="title">小黄人大眼萌：神偷奶爸前传 Minions: The Rise of Gru (2022)</Title>
                </Link>
                <Space direction="vertical">
                <Text>导演: 凯尔·巴尔达 / 布拉德·埃布尔森 / 乔纳森·德尔瓦尔</Text>
                <Text>Ant Design (default)</Text>
                <Text>主演: 史蒂夫·卡瑞尔 / 皮埃尔·柯芬 / 艾伦·阿金 / 塔拉吉·P·汉森 / 杨紫琼</Text>
                <Text>类型: 喜剧 / 科幻 / 动画 / 犯罪 / 冒险</Text>
                <Text>上映日期: 2022-06-13(安锡国际动画节) / 2022-07-01(美国)</Text>
                <Text>片长: 87分钟</Text>
                </Space>
                <Divider orientation="left" orientationMargin="2%">影片介绍</Divider>
                <Text>这部新片将是2015年推出的小黄人独立电影《小黄人大眼萌》的直接续集。它作为《神偷奶爸》的衍生作品，讲述了小黄人们在“前格鲁”时代为其他主人服务的经历，不过少年格鲁曾经出现在这部衍生电影里，续集将围绕他与小黄人们结缘的过程展开剧情。</Text>
                
        </Col>
        <Col span={4}>
            <div className="score">7.2</div>
        </Col>
        
        </Row>


        </>
    )

}

export default MovieDetails;