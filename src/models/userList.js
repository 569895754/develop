import { queryUserList, addUser, updateUser } from '../services/userList';
import { saveModel } from '../utils/model';

const formData = {
  id: '',
  name: '',
  sex: '',
  age: '',
};

export default {
  namespace: 'userList',

  state: {
    userList: [],
    formData
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryUserList, payload);
      yield put({
        type: 'updateUserList',
        payload: response
      })
    },
    *save(_, { call, select, put }) {
      const formInfo = yield select(state => state.userList.formData);
      const response = yield call(saveModel, addUser, updateUser, formInfo);
      yield put({
        type: 'fetch'
      });
      return response;
    },
  },

  reducers: {
    updateUserList(state, { payload }) {
      return {
        ...state,
        userList: payload
      }
    },
    changeFormFields(state, { payload }) {
      const data = payload || formData;
      return {
        ...state,
        formData: {
          ...state.formData,
          ...data,
        },
      };
    },
    replaceFormFields(state) {
      return {
        ...state,
        formData: {
          id: '',
          name: '',
          sex: '',
          age: '',
        }
      }
    }
  },
};
