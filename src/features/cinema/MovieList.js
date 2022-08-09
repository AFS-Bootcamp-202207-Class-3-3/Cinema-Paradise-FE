import { Col, Row, Layout, Card, Carousel } from "antd";
import { Link } from "react-router-dom";
import MOVIES from "./MOVIES";

const { Content, Footer } = Layout;
const { Meta } = Card;

const CARD_STYLE = {
    background: '#0092ff',
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

function MovieList() {

    const movieList = MOVIES;
    const rotationMovieList = movieList.filter((rotationMovie) => rotationMovie.rotationurl !== "");

    return (
        <Layout>
            <Content>
                <Carousel autoplay className="aaaaaaa" style={CAROUSEL_STYLE}>
                    {rotationMovieList.map((movie) => (
                        <Link to={{ pathname: `/moviedetails/${movie.id}` }}>
                            <img alt="carouselpic" src={movie.rotationurl} style={CAROUSEL_IMG_STYLE} />
                        </Link>
                    ))}
                </Carousel>
                <Row gutter={[16, 16]} justify="space-evenly">
                    {movieList.map((movie) => (
                        <Col className="gutter-row" span={3} key={movie.id}>
                            <Link to={{ pathname: `/moviedetails/${movie.id}` }}>
                                <Card
                                    hoverable
                                    style={CARD_STYLE}
                                    cover={
                                        <img alt="pic" src={movie.url} />}
                                >
                                    <Meta title={movie.title} description={movie.description} />
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Content>
            <Footer>
                foooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooot
            </Footer>
        </Layout>
    );
}

export default MovieList;
