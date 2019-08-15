import React, { PureComponent } from 'react';
import { Form, InputNumber, Input, Row, Button } from 'antd';

@Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
          userName: Form.createFormField({
            ...props.info.userName,
            value: props.info.userName.value,
          }),
          userAccount: Form.createFormField({
            ...props.info.userAccount,
            value: props.info.userAccount.value,
          }),
        };
    },
})

class Test extends PureComponent {

  handleOk = () => {
    const { type } = this.props;
    if (type === 'add') {
      console.log('这是新增！');
    } else if (type === 'update') {
      console.log('这是编辑！');
    }
  };

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
          <div>
            <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="userName">
              { getFieldDecorator('userName')(<Input />) }
            </Form.Item>
            <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="userAccount">
              { getFieldDecorator('userAccount')(<Input />) }
            </Form.Item>
            <Button onClick={() => this.handleOk()}>确定</Button>
          </div>
        );
    }
}
export default Test;
