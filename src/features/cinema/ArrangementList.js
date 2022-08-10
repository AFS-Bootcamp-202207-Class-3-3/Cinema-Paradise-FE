import { List, Tabs, Button } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArrangements } from "../../api/arrangements";
import { addArrangements } from "./arrangementSlice";
const { TabPane } = Tabs;

function ArrangementList() {
  const data = useSelector((state) => state.arrangementList);
  const dateTime = new Date();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();

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

  const onClickItem = (item) => {
    console.log(item);
    setTime(item.time);
    setRoom(item.room);
    setPrice(item.price);
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
          <Button onClick={() => onClickItem(item)} href="/purchase">
            Order
          </Button>
        </List.Item>
      )}
    />
  );

  return (
    <>
      <Tabs defaultActiveKey="1" centered onChange={onChange}>
        <TabPane
          tab={month + "月" + day + "日"}
          key={month + "月" + day + "日"}
        >
          {arrangeContent}
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 1) + "日"}
          key={month + "月" + (day + 1) + "日"}
        >
          {arrangeContent}
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 2) + "日"}
          key={month + "月" + (day + 2) + "日"}
        >
          {arrangeContent}
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 3) + "日"}
          key={month + "月" + (day + 3) + "日"}
        >
          {arrangeContent}
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 4) + "日"}
          key={month + "月" + (day + 4) + "日"}
        >
          {arrangeContent}
        </TabPane>
      </Tabs>
    </>
  );
}

export default ArrangementList;
