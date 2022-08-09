import { Col, Row, Layout, Card } from "antd";
import MOVIES from "./MOVIES";

const { Content, Footer } = Layout;
const { Meta } = Card;

const style = {
    background: '#0092ff',
    margin: 'auto',
    width: '15vw',
    height: 'auto',
};

function MovieList() {

    const movieList = MOVIES;

    return (
        <Layout>
            <Content>
                <Row gutter={[16, 16]} justify="space-evenly">
                    {movieList.map((movie) => (
                        <Col className="gutter-row" span={6} key={movie.id}>
                            <Card
                                hoverable
                                style={style}
                                cover={
                                    <img alt="pic" src={movie.url} />}
                            >
                                <Meta title={movie.title} description={movie.description} />
                            </Card>
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
