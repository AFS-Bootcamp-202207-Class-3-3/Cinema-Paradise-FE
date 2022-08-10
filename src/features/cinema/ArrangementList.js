import { List, Tabs, Button } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArrangements } from "../../api/arrangements";
import { addArrangements } from "./arrangementSlice";
import { addContent } from "./OrderSlice";
// import HashMap from "./HashMap";
const { TabPane } = Tabs;

function ArrangementList() {
  const data = useSelector((state) => state.arrangementList);
  const dateTime = new Date();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  // const dataDict=dict();

  // data.forEach(item => {
  //   if(!dataDict.get(item.date)){
  //     dataDict.put(item.date,item);
  //   }else{
  //     dataDict[item.date].push(item);
  //   }
  //   console.log(dataDict);
  // });

  const dispatch = useDispatch();
  useEffect(() => {
    getArrangements().then((response) => {
      dispatch(addArrangements(response.data));
    });
  }, [dispatch]);

  const [date, setDate] = useState(month+"月"+day+"日");

  const onChange = (key) => {
    setDate(key);
  };

  // const onClickItem = (item) => {
  //   dispatch(
  //     addContent({
  //       date: date,
  //       time: item.time,
  //       room: item.room,
  //       price: item.price,
  //     })
  //   );
  // };
  const onClickItem = (e) => {
    dispatch(
      addContent({
        date: date,
        time: e.target.getAttribute("time"),
        room: e.target.getAttribute("room"),
        price: e.target.getAttribute("price"),
      })
    );
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
          {/* <Button onClick={() => onClickItem(item)} href="/purchase">
            Order
          </Button> */}
          <Link to="/purchase">
            <button
              onClick={onClickItem}
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
