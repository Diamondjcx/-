
import React, { Component } from 'react';
import { Button } from 'antd';

import CustomColum from './CustomColum.js'

class ActionDiv extends Component {
    
    render() {
        return (
            <div>
                <span>这是标题</span>
                <CustomColum style={{ float: 'right' }} />
                <Button type="ghost" style={{ float:'right' }}>导出表格</Button>
            </div>
        )
    }
}
export default ActionDiv;