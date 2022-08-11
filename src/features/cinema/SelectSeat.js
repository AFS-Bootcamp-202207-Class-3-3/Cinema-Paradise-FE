import React from "react";
import { Col, Row, Typography, Button } from "antd";
import { useState } from "react";
import "./SelectSeat.css"
import { useDispatch } from "react-redux";
import { addContent } from "./OrderSlice";
import { Link } from "react-router-dom";
const { Text } = Typography;

function SelectSeat() {
    const [selectedIndex, setselectedIndex] = useState(-1);
    const [hasSelected, sethasSelected] = useState(false);

    const dispatch = useDispatch();

    // This is the example seats Array we want to generate.
    // const seatsArray = [
    //     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //     [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
    //     [200, 201, 202, 203, 204, 205, 206, 207, 208, 209],
    //     [300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311],
    //     [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411],
    // ];

    const rowLens = [10, 10, 10, 12, 14, 14, 14, 14, 14, 16, 16];

    const generateSeatsArray = (rowLens) => {
        return rowLens.map((rowLen, rowNum) => {
            return [...new Array(rowLen).keys()].map(colNum => {
              return colNum+rowNum*100
            })
        });
    }

    const seatsArray = generateSeatsArray(rowLens);

    const toggleSeat = (e) => {
        if (e.target.getAttribute("src") === "/assets/img/seats0.gif" && selectedIndex === -1){
            e.target.setAttribute("src", "/assets/img/seats2.gif")
            setselectedIndex(e.target.getAttribute("seat-key"))
            sethasSelected(true);
        } else if (e.target.getAttribute("src") === "/assets/img/seats2.gif"){
            setselectedIndex(-1)
            e.target.setAttribute("src", "/assets/img/seats0.gif")
            sethasSelected(false);
        }
    }

    const submitSeat = () => {
        const seatStr = `${Math.floor(selectedIndex/100)+ 1}排${Math.floor(selectedIndex%100) + 1}列`;
        console.log(seatStr);
        dispatch(addContent({seat: seatStr}));
    }

    return (
        <>
            {seatsArray.map((row, rowIndex) => (
                <Row justify="center" align="top" key={"row"+rowIndex}>
                    {
                        row.map((seatNumber, colIndex) => (
                            <Col span = {1} className = "block-height-60" key={"row"+rowIndex+"col"+colIndex}>
                                <img key={seatNumber} seat-key = {seatNumber} className="cursor-pointer" src="/assets/img/seats0.gif" alt="emptySeatImage" onClick={toggleSeat}/>
                            </Col>
                        ))
                    }
                </Row>
            ))}
            <Row justify="center">
                <Col>
                    <Text className = "block-height-60">
                        请选择你的座位：{selectedIndex === -1 ? "未选择" : `${Math.floor(selectedIndex/100)+ 1}排${Math.floor(selectedIndex%100) + 1}列`}
                    </Text>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <Text>
                        （只能选择一个座位。如要重新选择，请先点击已选择的座位以取消）
                    </Text>
                </Col>
            </Row>
            <Row justify="center">
                <Col className = "block-height-60">
                    <Link to="/purchase">
                        <Button onClick={submitSeat} disabled={!hasSelected}>提交，选择支付方式</Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default SelectSeat;