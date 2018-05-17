
import React, { Component } from 'react';
import { Select, Radio, Button, Form, Input, Icon } from 'antd';

const Option = Select.Option;
const RadioGroup = Radio.Group;
// const createForm = Form.create;
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 },
};

class SearchDivForm extends Component {
    state = {
        value: 1,
    }
    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    handleChange(value){
        console.log(`selected ${value}`)
    }

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
        const { getFieldDecorator } = this.props.form;
        const { getFieldProps } = this.props.form;
        const selectProps = getFieldProps('select', {
            rules: [
                { required: true, message: '请选择您的国籍' },
            ],
        });
        const radioProps = getFieldProps('radio', {
            rules: [
                { required: true, message: '请选择您的选项' },
            ],
        });
        return (
            
            <Form form={this.props.form}>
                <FormItem  
                    {...formItemLayout}
                    label="用户名"
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )}
                </FormItem>
               
                <FormItem
                    {...formItemLayout}
                    label="国籍"
                >
                    <Select {...selectProps} placeholder="请选择国家" style={{ width: '100%' }}>
                        <Option value="china">中国</Option>
                        <Option value="use">美国</Option>
                        <Option value="japan">日本</Option>
                        <Option value="korean">韩国</Option>
                        <Option value="Thailand">泰国</Option>
                    </Select>
                </FormItem>

              
                <FormItem
                    {...formItemLayout}
                    label="选项"
                >
                    <RadioGroup defaultValue="b" {...radioProps}>
                        <Radio value="a">A</Radio>
                        <Radio value="b">B</Radio>
                        <Radio value="c">C</Radio>
                        <Radio value="d">D</Radio>
                    </RadioGroup>
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
const SearchDiv = Form.create()(SearchDivForm);
export default SearchDiv;