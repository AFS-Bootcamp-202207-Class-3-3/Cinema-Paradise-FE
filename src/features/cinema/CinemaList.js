import { List } from 'antd';
import React, { useState,useEffect} from 'react';
// import { useDispatch } from 'react-redux';
import { getCinemas } from "../../api/cinema"; 
// import { initData } from './OrderSlice';
import {Link} from "react-router-dom";

function CinemaList() {
  const [cinemas,setCinemas]=useState([]);
  // const dispatch=useDispatch();
  useEffect(() => {
    getCinemas().then(response=>{
      setCinemas(response.data);
  });
}, [])

  // const onInitOrder=(e) =>{
  //   dispatch(initData({"cinema": e.target.getAttribute("cinema")}));
  // }

    return (
        <List
            className='cinema-list'
            itemLayout="horizontal"
            dataSource={cinemas}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.location}
                />
               <Link to="/arrangement">
                <button >Order</button>
                </Link>
            </List.Item>
            )}
        />
    )

}

export default CinemaList;