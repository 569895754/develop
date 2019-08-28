import request from '../utils/request';

export async function queryUserList(payload) {
  return request('http://localhost:3000/user', payload);
}

export async function addUser(payload) {
  return request('http://localhost:3000/user', {
    method: 'POST',
    body: payload,
  })
}

export async function updateUser(payload) {
  return request(`http://localhost:3000/user/${payload.id}`, {
    method: 'PUT',
    body: payload,
  })
}
