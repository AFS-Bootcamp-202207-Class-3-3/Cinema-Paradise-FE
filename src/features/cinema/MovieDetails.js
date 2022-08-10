import React from 'react';
import { useEffect } from 'react';
import './MovieDetails.css';
import { Col, Divider, Row, Typography, Space } from 'antd';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from './MovieDetailSlice';
import { getMovieDetailsById } from "../../api/movie";
import CinemaList from './CinemaList';

const { Title, Text } = Typography;

function MovieDetails() {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movieDetail);
    const { movieId } = useParams();
    
    useEffect(() =>{
        getMovieDetailsById(movieId).then((response) => {
            dispatch(getMovie(response.data));
        });
    },[dispatch, movieId]);

    return (
        <>
            <Divider orientation="left">电影详情</Divider>
            <Row justify="center" align="top">
                <Col span={4}>
                        <img className="image" src={movie.imageUrl} alt="图片"></img>

                </Col>
                <Col span={12}>
                        <Title level={2} className="title">{movie.titleChinese}</Title>
                    <Space direction="vertical">
                        <Text>导演：{movie.director}</Text>
                        <Text>主演：{movie.actors}</Text>
                        <Text>类型：{movie.types}</Text>
                        <Text>上映时间：{movie.releaseDate}</Text>
                        <Text>片长: {movie.duration}分钟</Text>
                    </Space>
                    <Divider orientation="left" orientationMargin="2%">影片介绍</Divider>
                    <Text>{movie.introduction}</Text>

                </Col>
                <Col span={4}>
                    <div className="score">{movie.score}</div>
                </Col>

            </Row>
            <Divider orientation="left">上映影院</Divider>
            <Row justify="center" align="top">
                <Col span={12}>
                <CinemaList/>
                </Col>
            </Row>
        </>
    )

}

export default MovieDetails;