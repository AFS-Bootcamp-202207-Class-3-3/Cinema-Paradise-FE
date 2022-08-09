import { Avatar, Button, List } from 'antd';
import React from 'react';

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
    return (
        <List
            className='cinema-list'
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.location}
                />
                <Button>Order</Button>
            </List.Item>
            )}
        />
    )

}

export default CinemaList;