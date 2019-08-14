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

export function searchAllocate(payload, option = {}) {
  const params = destructuring(payload);
  try {
    Object.entries(option).forEach(([name, allocated]) => {
      let value = params[name];
      if (value && value.length > 0) {
        value = [
          moment(value[0]).format('YYYY-MM-DD HH:mm:SS'),
          moment(value[1]).format('YYYY-MM-DD HH:mm:SS'),
          // moment(Date.parse(`${value[0].format('YYYY-MM-DD')} 00:00:00`)),
          // moment(Date.parse(`${value[1].format('YYYY-MM-DD')} 23:59:59`)),
        ];
        // TODO: 数组验证 适用性扩充
        allocated.forEach((item, el) => {
          params[item] = value[el];
        });
        params[name] = null;
      }
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('搜索项配置异常!请检查 Effects 配置', e);
  }
  return doParseMomentType(params);
}

export function doParseMomentType(params) {
  const noParamReassign = params;
  Object.entries(params).forEach(([key, value]) => {
    value instanceof moment && (noParamReassign[key] = value.format(MOMENT_PATTERN));
  });
  return noParamReassign;
}