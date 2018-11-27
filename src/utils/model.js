import { Form } from 'antd';
import moment from 'moment';
import mapValues from 'lodash/mapValues';

const isObjectNotMoment = obj =>
  obj && typeof obj === 'object' && !(obj instanceof moment) && 'value' in obj;

/**
 * 用于自动生成@Form.create:mapPropsToFields配置项
 * 自动绑定Form.createFormField
 *
 * @param {string} namespace  -reduce命名空间
 * @param {string} stateName  -store内映射表单值 默认为 formData
 * @return {Function} -可直接放置@Form.create:mapPropsToFields内方法
 */
export const genMapPropsToFields = (namespace, stateName = 'formData') => {
  return function mapPropsToFieldsCore(props) {
    const formData = props[namespace][stateName];
    return mapValues(formData, value =>
      Form.createFormField(isObjectNotMoment(value) ? value : { value })
    );
  };
};
/**
 * 表单验证失败抛出异常
 */
function ValidatorFailException(message, err, values) {
  Object.assign(this, {
    err,
    values,
    message,
    name: 'ValidatorFailException',
  });
}

/**
 * 表单验证工具
 * @return { Promise } --简化调用代码
 */
export const formValid = formRefs =>
  new Promise((resolve, reject) => {
    formRefs.validateFields((err, values) => {
      if (err) {
        reject(new ValidatorFailException('表单数据验证失败！', err, values));
      }
      resolve(values);
    });
  });

export default class Rules {
  constructor() {
    this.rules = new Array(6);
  }

  end() {
    return this.rules;
  }
  required(msg = '此项为必填项！') {
    this.rules.push({
      required: true,
      message: msg,
    });
    return this;
  }
}
