import React, { PureComponent } from 'react';
import { Form, InputNumber, Input, Row, Button } from 'antd';

@Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
          test: Form.createFormField({
            ...props.test,
            value: props.test.value,
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
                <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="test">
                    { getFieldDecorator('test')(<Input />) }
                </Form.Item>
              <Button onClick={() => this.handleOk()}>确定</Button>
            </div>
        );
    }
}
export default Test;
