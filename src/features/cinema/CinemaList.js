import {List,Button} from "antd";
import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
// import { Link } from "react-router-dom";
import {getCinemas} from "../../api/cinema";
import {addContent} from "./OrderSlice";

function CinemaList() {
  const [cinemas, setCinemas] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getCinemas().then((response) => {
      setCinemas(response.data);
    });
  }, []);

  const onInitOrder = (item) => {
    console.log(item);
    // dispatch(addContent({cinema: e.target.getAttribute("cinema")}));
    dispatch(addContent({cinema: item.name}));
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
          <Button href="/arrangement" onClick={() => onInitOrder(item)}>
            Order
          </Button>
          {/* <Link to="/arrangement">
          <button  onClick={onInitOrder} cinema={item.name}>
            Order
          </button>
          </Link> */}
        </List.Item>
      )}
    />
  );
}

export default CinemaList;
