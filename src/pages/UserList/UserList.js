import React, { PureComponent } from 'react';
import { Button, Card, Table } from 'antd';
import { connect } from 'dva';
import UserListFormModal from './UserListFormModal';

@connect(state => ({
  userList: state.userList,
}))

class UserList extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      columns: [{
        title: '名字',
        key: 'name',
        dataIndex: 'name'
      },{
        title: '年龄',
        key: 'age',
        dataIndex: 'age'
      },{
        title: '性别',
        key: 'sex',
        dataIndex: 'sex'
      },{
        title: '操作',
        width: 150,
        render: (record) => <Button onClick={() => this.editUser(record)}>编辑</Button>
      }]
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'userList/fetch'
    });
  }

  closeModal = () => {
    this.setState({ userModalFlag: false });
  };

  openUserModal = () => {
    this.setState({ userModalFlag: true });
  };

  editUser = (record) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'userList/changeFormFields',
      payload: record,
    });
    this.openUserModal();
  };

  render() {

    const { columns, userModalFlag } = this.state;
    const { userList: { userList } } = this.props;
    return (
      <Card
        title='用户信息'
        extra={<Button onClick={() => this.openUserModal()}>新增</Button>}
      >
        <Table
          columns={columns}
          dataSource={userList}
          bordered
        />
        { userModalFlag && <UserListFormModal visible={userModalFlag} closeModal={this.closeModal} /> }
      </Card>
    );
  }
}

export default UserList;
