import React, {PropTypes, Component} from "react";
export default function TaskTmpTble (props) {
    const cols = [];

    return <TaskTmpTble 
    columns={cols}
    total={props.total}
    current={props.current}
    pageSize={props.pageSize}
    loading={props.loading}
    onChange={props.onChange}
    data={props.data}
    rowKey={record => record.id}/>
}

TaskTmpTble.propTypes = {
    total: PropTypes.number,
    current: PropTypes.number,
    pageSize: PropTypes.number,
    loading: PropTypes.bool,
    data: PropTypes.array,
    onChange: PropTypes.func,
    changeStatus: PropTypes.func
}

TaskTmpTble.defaultProps = {
    total: 0,
    current: 1,
    pageSize: 1,
    loading: false,
    data: []
}