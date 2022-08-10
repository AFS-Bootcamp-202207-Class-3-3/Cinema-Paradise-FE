import { Col, Row, Layout, Card, Carousel, BackTop, Typography } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movie";
import { getAllMovies } from "./movieSlice";

const { Content, Footer } = Layout;
const { Meta } = Card;
const { Text } = Typography;

const CARD_STYLE = {
    background: '#40a9ff',
    margin: 'auto',
    width: '100%',
    height: 'auto',
};
const CAROUSEL_STYLE = {
    height: '50vh',
    background: '#000000',
};
const CAROUSEL_IMG_STYLE = {
    height: '50vh',
    margin: 'auto',
};
const FOOTER_STYLE = {
    color: '#40a9ff',
};

function MovieList() {

    const dispatch = useDispatch();

    const movieList = useSelector((state) => state.movieList);

    useEffect(() => {
        getMovies().then((response) => {
            dispatch(getAllMovies(response.data));
        });
    }, [dispatch]);

    return (
        <Layout>
            <Content>
                <Carousel autoplay className="aaaaaaa" style={CAROUSEL_STYLE}>
                    {movieList.filter((rotationMovie) => rotationMovie.rotationImageUrl !== "").map((movie) => (
                        <Link to={{ pathname: `/movies/${movie.id}` }} key={movie.id}>
                            <img alt="carouselpic" src={movie.rotationImageUrl} style={CAROUSEL_IMG_STYLE} />
                        </Link>
                    ))}
                </Carousel>
                <Row gutter={[16, 16]} justify="space-evenly">
                    {movieList.map((movie) => (
                        <Col className="gutter-row" span={3} key={movie.id}>
                            <Link to={{ pathname: `/movies/${movie.id}` }}>
                                <Card
                                    hoverable
                                    style={CARD_STYLE}
                                    cover={
                                        <img alt="pic" src={movie.imageUrl} />}
                                >
                                    <Meta title={movie.titleChinese} description={movie.titleEnglish} />
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
                <BackTop />
            </Content>
            <Footer>
                <Text style={FOOTER_STYLE}>礼貌点儿我们 Design ©2022 Created by Manner</Text>
            </Footer>
        </Layout>
    );
}

export default MovieList;
