import { BackTop, Card, Carousel, Col, Layout, Row, Divider } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../api/movie";
import { getAllMovies } from "./movieSlice";

const { Content } = Layout;
const { Meta } = Card;

const CARD_STYLE = {
  background: "#FFFAFA",
  margin: "auto",
  width: "100%",
  height: "auto",
};
const CAROUSEL_STYLE = {
  height: "50vh",
  background: "#000000",
};
const CAROUSEL_IMG_STYLE = {
  height: "50vh",
  margin: "auto",
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
          {movieList
            .filter((rotationMovie) => rotationMovie.rotationImageUrl !== "")
            .map((movie) => (
              <Link to={{ pathname: `/movies/${movie.id}` }} key={movie.id}>
                <img
                  alt="carouselpic"
                  src={movie.rotationImageUrl}
                  style={CAROUSEL_IMG_STYLE}
                />
              </Link>
            ))}
        </Carousel>
        <Divider />
        <Row gutter={[16, 16]} justify="space-evenly">
          {movieList.map((movie) => (
            <Col className="gutter-row" span={3} key={movie.id}>
              <Link to={{ pathname: `/movies/${movie.id}` }}>
                <Card
                  hoverable
                  style={CARD_STYLE}
                  cover={<img alt="pic" src={movie.imageUrl} />}
                >
                  <Meta
                    title={movie.titleChinese}
                    description={movie.titleEnglish}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <BackTop />
      </Content>
    </Layout>
  );
}

export default MovieList;
