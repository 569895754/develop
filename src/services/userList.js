import request from '../utils/request';

export async function queryUserList(payload) {
  return request('http://localhost:3000/user', payload);
}
