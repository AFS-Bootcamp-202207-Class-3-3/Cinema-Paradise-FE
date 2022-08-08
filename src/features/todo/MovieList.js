import { Col, Row, Layout, Card } from "antd";
const { Content, Footer } = Layout;
const { Meta } = Card;

const style = {
    background: '#0092ff',
    margin: 'auto',
    width: '15vw',
    height: 'auto',
};

function MovieList() {
    return (
        <Layout>
            <Content>
                <Row gutter={[16, 16]} justify="space-evenly">
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={style}
                            cover={
                                <img alt="example" src="/assets/img/Lightyear.jpg" />}
                        >
                            <Meta title="光年正传" description="Lightyear" />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={style}
                            cover={
                                <img alt="example" src="/assets/img/MinionsTheRiseofGru.jpg" />}
                        >
                            <Meta title="小黄人大眼萌：神偷奶爸前传" description="Minions: The Rise of Gru" />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={style}
                            cover={
                                <img alt="example" src="/assets/img/Lightyear.jpg" />}
                        >
                            <Meta title="光年正传" description="Lightyear" />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={style}
                            cover={
                                <img alt="example" src="/assets/img/Lightyear.jpg" />}
                        >
                            <Meta title="光年正传" description="Lightyear" />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={style}
                            cover={
                                <img alt="example" src="/assets/img/Lightyear.jpg" />}
                        >
                            <Meta title="光年正传" description="Lightyear" />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={style}
                            cover={
                                <img alt="example" src="/assets/img/Lightyear.jpg" />}
                        >
                            <Meta title="光年正传" description="Lightyear" />
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={style}
                            cover={
                                <img alt="example" src="/assets/img/Lightyear.jpg" />}
                        >
                            <Meta title="光年正传" description="Lightyear" />
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer>
                fooooooooooot
            </Footer>
        </Layout>
    );
}

export default MovieList;
