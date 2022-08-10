import { List, Tabs, Button } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentArrangements } from "../../api/arrangements";
import { addArrangements } from "./arrangementSlice";
import { addContent } from "./OrderSlice";
import { useSearchParams } from "react-router-dom";
const { TabPane } = Tabs;

function ArrangementList() {
  const data = useSelector((state) => state.arrangementList);
  const [searchParams] = useSearchParams();
  const dateTime = new Date();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  const movieId=searchParams.get("movieId");
  const cinemaId=searchParams.get("cinemaId")

  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentArrangements(movieId,cinemaId).then((response) => {
      dispatch(addArrangements(response.data));
    });
  }, [dispatch]);

  const [date, setDate] = useState(month + "月" + day + "日");

  const onChange = (key) => {
    setDate(key);
  };

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

  
  const arrangeFirstDay = [];
  const arrangeSecondDay = [];
  const arrangeThirdDay = [];
  const arrangeFourthDay = [];
  const arrangeFifthDay = [];

  for (var i = 0; i < data.length; i++) {
    switch (data[i].arrangeDate) {
      case month + "月" + day + "日":
        arrangeFirstDay.push(data[i]);
        break;
      case month + "月" + (day + 1) + "日":
        arrangeSecondDay.push(data[i]);
        break;
      case month + "月" + (day + 2) + "日":
        arrangeThirdDay.push(data[i]);
        break;
      case month + "月" + (day + 3) + "日":
        arrangeFourthDay.push(data[i]);
        break;
      case month + "月" + (day + 4) + "日":
        arrangeFifthDay.push(data[i]);
        break;
      default:
    }
  }

  return (
    <>
      <Tabs defaultActiveKey="1" centered onChange={onChange}>
        <TabPane
          tab={month + "月" + day + "日"}
          key={month + "月" + day + "日"}
        >
          <List
            bordered
            dataSource={arrangeFirstDay}
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
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 1) + "日"}
          key={month + "月" + (day + 1) + "日"}
        >
          <List
            bordered
            dataSource={arrangeSecondDay}
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
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 2) + "日"}
          key={month + "月" + (day + 2) + "日"}
        >
          <List
            bordered
            dataSource={arrangeThirdDay}
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
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 3) + "日"}
          key={month + "月" + (day + 3) + "日"}
        >
          <List
            bordered
            dataSource={arrangeFourthDay}
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
        </TabPane>
        <TabPane
          tab={month + "月" + (day + 4) + "日"}
          key={month + "月" + (day + 4) + "日"}
        >
          <List
            bordered
            dataSource={arrangeFifthDay}
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
        </TabPane>
      </Tabs>
    </>
  );
}

export default ArrangementList;
