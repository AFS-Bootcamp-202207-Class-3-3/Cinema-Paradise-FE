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

    const seatsArray = [
        [0, 1, 2, 3, 4, 5, 6, 7],
        [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
        [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
        [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91],
        [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111],
        [120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131],
        [140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153],
        [160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173],
    ];

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
        const seatStr = `${Math.floor(selectedIndex/20)+ 1}排${Math.floor(selectedIndex%20) + 1}列`;
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
                        请选择你的座位：{selectedIndex === -1 ? "未选择" : `${Math.floor(selectedIndex/20)+ 1}排${Math.floor(selectedIndex%20) + 1}列`}
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