/**
 *
 * 添加注释
 * Created by SEELE on 2018/1/12
 *
 */
import React, { Component } from 'react';

import StudyMapTable from './components/StudyMapTable'

import { Tabs } from 'antd';

// import styles from './studymap.less';

const TabPane = Tabs.TabPane;
class StudyMapmodule extends Component {
    callback = (key) => {
        console.log(key);
    }
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="选项卡一" key="1">
                    <StudyMapTable />
                </TabPane>
                <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
            </Tabs>
        )
    }
}

export default StudyMapmodule;