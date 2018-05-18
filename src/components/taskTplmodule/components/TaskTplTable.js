/**
 * Created by hao.cheng on 2017/4/15.
 */
import React, { Component } from 'react';

import SearchDiv from './SearchDiv'
import ActionDiv from './ActionDiv'
import { Table, Icon } from 'antd';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a>Action 一 {record.name}</a>&nbsp;&nbsp;
            <span className="ant-divider" />
            <Link to={{ pathname: "/app/taskTplModule/detail" }} replace>detail</Link> &nbsp;&nbsp;
            <span className="ant-divider" />
            <a className="ant-dropdown-link">
                More actions <Icon type="down" />
            </a>
        </span>
    ),
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}


class TaskTplTable extends Component {
    callback = (key) => {
        console.log(key);
    }
    render() {
        return (
           <div>
                <SearchDiv />
                <ActionDiv />
                <Table columns={columns} dataSource={data} />
           </div>
        )
    }
}


export default TaskTplTable;