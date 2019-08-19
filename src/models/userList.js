import { queryUserList } from '../services/userList';

export default {
  namespace: 'userList',

  state: {
    userList: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryUserList, payload);
      yield put({
        type: 'updateUserList',
        payload: response
      })
    },
  },

  reducers: {
    updateUserList(state, { payload }) {
      return {
        ...state,
        userList: payload
      }
    }
  },
};
