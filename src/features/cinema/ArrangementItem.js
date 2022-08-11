import { Link } from "react-router-dom";
import { List, Button } from "antd";
import { addContent } from "./OrderSlice";
import { useDispatch } from "react-redux";

function ArrangementItem(props) {
  const { arrange, date } = props;
  const dispatch = useDispatch();

  const onClickItem = (item) => {
    dispatch(
      addContent({
        date: date,
        time: item.time,
        room: item.room,
        price: item.price,
      })
    );
  };

  return (
    <List
      bordered
      dataSource={arrange}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href={item.href}>放映时间</a>}
            description={item.time}
          />
          <List.Item.Meta
            title={<a href={item.href}>放映厅</a>}
            description={item.room}
          />
          <List.Item.Meta
            title={<a href={item.href}>票价</a>}
            description={item.price}
          />
          <Link to="/selectseat">
            <Button onClick={() => onClickItem(item)}>选座购票</Button>
          </Link>
        </List.Item>
      )}
    />
  );
}

export default ArrangementItem;
