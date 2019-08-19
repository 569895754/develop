import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';

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
      }]
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'userList/fetch'
    });
  }

  render() {

    const { columns } = this.state;
    const { userList: { userList } } = this.props;
    return (
      <Card
        title='用户信息'
      >
        <Table
          columns={columns}
          dataSource={userList}
        />
      </Card>
    );
  }
}

export default UserList;
