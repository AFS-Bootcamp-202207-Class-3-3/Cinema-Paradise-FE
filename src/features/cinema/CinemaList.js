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
    dispatch(addContent({cinema: item.name,cinemaId:item.id,title:currentMovie.titleChinese,imgUrl:currentMovie.imageUrl,movieId:currentMovie.id}));
  };

  return (
    <List
      className="cinema-list"
      itemLayout="horizontal"
      dataSource={cinemas}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description={item.location}
          />
          <Link to={{ pathname: `/arrangement?movieId=${currentMovie.id}&cinemaId=${item.id}` }}>
          <Button onClick={() => onInitOrder(item)}>
            选座购票
          </Button>
          </Link>
        </List.Item>
      )}
    />
  );
}

export default CinemaList;
