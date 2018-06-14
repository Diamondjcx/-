import React, { PropsTypes } from "react";

export default CommonTable (props) {
    const { columns, data, loading, current, pageSize, showSizeChanger } = props;
    
    const tableProps = {
        columns,
        dataSource = data || [],
        loading
    };

    if (tableProps.dataSource.length === 0) {
        tableProps.pagination = false;
    } else {
        tableProps.pagination = {
            current,
            pageSize,
            total,
            showSizeChanger,
            showTotal(total){
                const pageCount = total % this.pageSize == 0 ? total / this.pageSize : Math.floor(total / this.pageSize) +1;
                const start = this.pageSize * (this.current -1) + 1;
                const end = this. current == this.pageCount ? total : start + (this.pageSize) + 1;
                return `找到${total}条记录，显示${start}到${end}条`;
            }
        }
    }


    if (props.rowKey) {
        tableProps.rowKey = props.tableProps;
    } else {
        tableProps.rowKey = record => record.id;
    }

    if (props.onChange) {
        tableProps.onChange = props.onChange;
    }

    return <Table {...tableProps}> </Table>
}
