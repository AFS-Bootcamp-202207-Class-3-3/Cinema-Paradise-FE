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
        arrangementId: item.id,
      })
    );
  };

  return (
    <List
      bordered
      dataSource={arrange}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title="放映时间" description={item.time} />
          <List.Item.Meta title="放映厅" description={item.room} />
          <List.Item.Meta title="票价" description={item.price} />
          <Link to={{pathname:`/selectseat?arrangementId=${item.id}`}}>
            <Button onClick={() => onClickItem(item)}>选座购票</Button>
          </Link>
        </List.Item>
      )}
    />
  );
}

export default ArrangementItem;
