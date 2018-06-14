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
        age: 321,
        address: `London, Park Lane no. ${i}`,
    });
}

const tablePagnation = {
    showSizeChanger : true,
    pageSizeOption : ['10','50','100'],
    showTotal: function(total) {
        const start = this.pageSize * (this.current - 1) + 1;
        const end = this.current == this.pageCount ? total : start + (this.pageSize) + 1;
        return `找到${total}条记录，显示${start}到${end}条`;
    }
}

class TaskTplTable extends Component {
    callback = (key) => {
        console.log(key);
    }
    render() {
        const pagnation = { ...tablePagnation, ...this.props.pagnation};
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