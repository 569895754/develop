import React, { PureComponent } from 'react';
import { Form, InputNumber, Input, Row } from 'antd';
import { connect } from 'dva';
import { genMapPropsToFields } from '../../utils/model';
import Rules from '../../utils/model';
const FormItem = Form.Item;
const mapPropsToFields = genMapPropsToFields('datasets');

@connect(state => ({
  datasets: state.datasets,
}))
@Form.create({
  mapPropsToFields,
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'datasets/changeFormFields',
      payload: fields,
    });
  },
})
export default class AnalysisForm extends PureComponent {
  render() {
    const { form, putFormNode } = this.props;
    const { getFieldDecorator: field } = form;
    putFormNode && putFormNode(form);
    return (
      <div>
        <Row gutter={24}>
          <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="花萼长度">
            {field('Sepal_Length', {
              rules: new Rules().required().end(),
            })(<InputNumber style={{ width: '100%' }} placeholder="请输入Sepal_Length" />)}
          </FormItem>
        </Row>
        <Row gutter={24}>
          <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="花萼宽度">
            {field('Sepal_Width', {
              rules: new Rules().required().end(),
            })(<InputNumber style={{ width: '100%' }} placeholder="Sepal_Width" />)}
          </FormItem>
        </Row>
        <Row gutter={24}>
          <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="花瓣长度">
            {field('Petal_Length', {
              rules: new Rules().required().end(),
            })(<InputNumber style={{ width: '100%' }} placeholder="Petal_Length" />)}
          </FormItem>
        </Row>
        <Row gutter={24}>
          <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="花瓣宽度">
            {field('Petal_Width', {
              rules: new Rules().required().end(),
            })(<InputNumber style={{ width: '100%' }} placeholder="请输入Sepal_Length" />)}
          </FormItem>
        </Row>
        <Row gutter={24}>
          <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="预测的种类">
            {field('Species')(<Input disabled />)}
          </FormItem>
        </Row>
      </div>
    );
  }
}
