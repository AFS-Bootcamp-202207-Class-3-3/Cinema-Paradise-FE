import { Avatar, Button, List } from 'antd';
import React, { useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getCinemas } from "../../api/cinema"; 
import { initData } from './OrderSlice';

const data = [
  {
    name: 'Cinema One',
    location: '490 2nd St, Suite 300',
  },
  {
    name: 'Cinema Two',
    location: '490 2nd St, Suite 300',
  },
  {
    name: 'Cinema Three',
    location: '490 2nd St, Suite 300',
  },
  {
    name: 'Cinema Four',
    location: '490 2nd St, Suite 300',
  },
];

function CinemaList() {
  const [cinemas,setCinemas]=useState([]);
  const dispatch=useDispatch();
  useEffect(() => {
    getCinemas().then(response=>{
      setCinemas(response.data);
  });
}, [])

  const onInitOrder=(e) =>{
    dispatch(initData({"cinema": e.target.getAttribute("cinema")}));
  }

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
                <button onClick={onInitOrder} cinema={item.name}>Order</button>
            </List.Item>
            )}
        />
    )

}

export default CinemaList;