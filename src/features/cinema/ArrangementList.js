import { Tabs } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentArrangements } from "../../api/arrangements";
import { addArrangements } from "./arrangementSlice";
import { useSearchParams } from "react-router-dom";
import ArrangementItem from "./ArrangementItem";
const { TabPane } = Tabs;

function getDay(day) {
  var today = new Date();
  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds);
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  return tMonth + 1 + "月" + tDate + "日";
}

function ArrangementList() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("movieId");
  const cinemaId = searchParams.get("cinemaId");

  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentArrangements(movieId, cinemaId).then((response) => {
      dispatch(addArrangements(response.data));
    });
  }, [dispatch, movieId, cinemaId]);
  
  const data = useSelector((state) => state.arrangementList);

  const firstDay = getDay(0);
  const secondDay = getDay(1);
  const thirdDay = getDay(2);
  const fourthDay = getDay(3);
  const fifthDay = getDay(4);

  const [date, setDate] = useState(firstDay);
  const onChange = (key) => {
    setDate(key);
  };

  const arrangeFirstDay = [];
  const arrangeSecondDay = [];
  const arrangeThirdDay = [];
  const arrangeFourthDay = [];
  const arrangeFifthDay = [];
  for (var i = 0; i < data.length; i++) {
    switch (data[i].arrangeDate) {
      case firstDay:
        arrangeFirstDay.push(data[i]);
        break;
      case secondDay:
        arrangeSecondDay.push(data[i]);
        break;
      case thirdDay:
        arrangeThirdDay.push(data[i]);
        break;
      case fourthDay:
        arrangeFourthDay.push(data[i]);
        break;
      case fifthDay:
        arrangeFifthDay.push(data[i]);
        break;
      default:
    }
  }

  return (
    <>
      <Tabs defaultActiveKey="1" centered onChange={onChange}>
        <TabPane tab={firstDay} key={firstDay}>
          <ArrangementItem arrange={arrangeFirstDay} date={date} />
        </TabPane>
        <TabPane tab={secondDay} key={secondDay}>
          <ArrangementItem arrange={arrangeSecondDay} date={date} />
        </TabPane>
        <TabPane tab={thirdDay} key={thirdDay}>
          <ArrangementItem arrange={arrangeThirdDay} date={date} />
        </TabPane>
        <TabPane tab={fourthDay} key={fourthDay}>
          <ArrangementItem arrange={arrangeFourthDay} date={date} />
        </TabPane>
        <TabPane tab={fifthDay} key={fifthDay}>
          <ArrangementItem arrange={arrangeFifthDay} date={date} />
        </TabPane>
      </Tabs>
    </>
  );
}

export default ArrangementList;
