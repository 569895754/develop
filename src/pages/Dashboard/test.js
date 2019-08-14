import React, { PureComponent } from 'react';
import { Form, InputNumber, Input, Row } from 'antd';

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

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div>
                <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="test">
                    { getFieldDecorator('test')(<Input />) }
                </Form.Item>
            </div>
        );
    }
}
export default Test;