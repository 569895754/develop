import React from 'react';
import { Form, Input, message, Modal, Row } from 'antd';
import { connect } from 'dva';
import Rules, { genMapPropsToFields } from '../../utils/model';

const mapPropsToFields = genMapPropsToFields('userList');

@connect(state => ({
  userList: state.userList,
}))

@Form.create({
  mapPropsToFields,
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'userList/changeFormFields',
      payload: fields,
    });
  },
})

class UserListFormModal extends React.PureComponent {

  closeModal = () => {
    const { closeModal, dispatch } = this.props;
    dispatch({
      type: 'userList/replaceFormFields'
    });
    closeModal();
  };

  handleCancel = () => {
    this.closeModal();
  };

  handleOk = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'userList/save'
    }).then(response => {
      if (response === 'success') {
        message.success('操作成功！')
      } else {
        message.error('操作失败');
      }
    });
    this.closeModal();
  };

  render() {
    const { visible } = this.props;
    const { form, putFormNode } = this.props;
    const { getFieldDecorator: field } = form;
    putFormNode && putFormNode(form);

    return (
      <Modal
        title='用户信息'
        visible={visible}
        onCancel={() => this.handleCancel()}
        onOk={() => this.handleOk()}
      >
        <Row gutter={24}>
          <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="姓名">
            {field('name', {
              rules: new Rules().required().end(),
            })(<Input style={{ width: '100%' }} placeholder="请输入姓名" />)}
          </Form.Item>
        </Row>
        <Row gutter={24}>
          <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="性别">
            {field('sex', {
              rules: new Rules().required().end(),
            })(<Input style={{ width: '100%' }} placeholder="请输入性别" />)}
          </Form.Item>
        </Row>
        <Row gutter={24}>
          <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} label="年龄">
            {field('age', {
              rules: new Rules().required().end(),
            })(<Input style={{ width: '100%' }} placeholder="请输入年龄" />)}
          </Form.Item>
        </Row>
      </Modal>
    );
  }
}

export default UserListFormModal;
