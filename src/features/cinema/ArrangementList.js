import { List, Tabs } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArrangements } from "../../api/arrangements";
import { addArrangements } from "./arrangementSlice";
const { TabPane } = Tabs;

function ArrangementList() {
  const data = useSelector((state) => state.arrangementList);
  const dispatch = useDispatch();
  useEffect(() => {
    getArrangements().then((response) => {
      dispatch(addArrangements(response.data));
    });
  }, [dispatch]);

  const [date, setDate] = useState("8月9日");
  const [time, setTime] = useState();
  const [room, setRoom] = useState();
  const [price, setPrice] = useState();

  const onChange = (key) => {
    setDate(key);
  };

  const onClickItem = (e) => {
    setTime(e.target.getAttribute("time"));
    setRoom(e.target.getAttribute("room"));
    setPrice(e.target.getAttribute("price"));
    console.log(date);
    console.log(time);
    console.log(room);
    console.log(price);
  };

  const arrangeContent = (
    <List
      bordered
      dataSource={data}
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
          <Link to="/purchase">
            <button
              onClick={onClickItem}
              //   href="/order"
              time={item.time}
              room={item.room}
              price={item.price}
            >
              Order
            </button>
          </Link>
        </List.Item>
      )}
    />
  );

  return (
    <>
      <Tabs defaultActiveKey="1" centered onChange={onChange}>
        <TabPane tab="8月9日" key="8月9日">
          {arrangeContent}
        </TabPane>
        <TabPane tab="8月10日" key="8月10日">
          {arrangeContent}
        </TabPane>
        <TabPane tab="8月11日" key="8月11日">
          {arrangeContent}
        </TabPane>
        <TabPane tab="8月12日" key="8月12日">
          {arrangeContent}
        </TabPane>
        <TabPane tab="8月13日" key="8月13日">
          {arrangeContent}
        </TabPane>
      </Tabs>
    </>
  );
}

export default ArrangementList;
