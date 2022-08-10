import {List,Button} from "antd";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {getCinemas} from "../../api/cinema";
import {addContent} from "./OrderSlice";

function CinemaList() {
  const [cinemas, setCinemas] = useState([]);
  const currentMovie = useSelector(state=> state.movieDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    getCinemas().then((response) => {
      setCinemas(response.data);
    });
  }, []);

  const onInitOrder = (item) => {
    console.log(item);
    dispatch(addContent({cinema: item.name,title:currentMovie.titleChinese,imgUrl:currentMovie.imageUrl}));
  };

  return (
    <List
      className="cinema-list"
      itemLayout="horizontal"
      dataSource={cinemas}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.location}
          />
          <Link to={{ pathname: `/arrangement?movieId=${currentMovie.id}&cinemaId=${item.id}` }}>
          <Button onClick={() => onInitOrder(item)}>
            Order
          </Button>
          </Link>
        </List.Item>
      )}
    />
  );
}

export default CinemaList;
