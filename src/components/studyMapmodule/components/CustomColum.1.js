import React, { Component } from 'react';

import { Menu, Dropdown, Icon,Checkbox, Button, Form, } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">第一个菜单项</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">第二个菜单项</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">第三个菜单项</Menu.Item>
    </Menu>
);
const createForm = Form.create;
const FormItem = Form.Item;
class CustomColumForm extends Component {
    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            console.log('Submit!!!');
            console.log(values);
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
                <Form form={this.props.form}>
                <FormItem
                    label="兴趣爱好"
                >
                    <Checkbox {...getFieldProps('eat', {
                        valuePropName: 'checked',
                    })}>吃饭饭</Checkbox>
                    <Checkbox {...getFieldProps('sleep', {
                        valuePropName: 'checked',
                    })}>睡觉觉</Checkbox>
                    <Checkbox {...getFieldProps('beat', {
                        valuePropName: 'checked',
                    })}>打豆豆</Checkbox>
                </FormItem>
                    <FormItem
                        wrapperCol={{ span: 12, offset: 7 }}
                    >
                        <Button type="primary" onClick={this.handleSubmit}>确定</Button>
                        &nbsp;&nbsp;&nbsp;
                 <Button type="ghost" onClick={this.handleReset}>重置</Button>
                    </FormItem>
                </Form>
        )
    }
}
const CustomColum = Form.create()(CustomColumForm);
export default CustomColum;
