import { Form } from 'antd';
import moment from 'moment';
import mapValues from 'lodash/mapValues';

const isObjectNotMoment = obj => obj && typeof obj === 'object' && !(obj instanceof moment) && 'value' in obj;

/**
 * 用于自动生成@Form.create:mapPropsToFields配置项
 * 自动绑定Form.createFormField
 *
 * @version 2017.12.20
 * @author weiiming
 * @param {string} namespace  -reduce命名空间
 * @param {string} stateName  -store内映射表单值 默认为 formData
 * @return {Function} -可直接放置@Form.create:mapPropsToFields内方法
 */
export const genMapPropsToFields = (namespace, stateName = 'formData') => {
  return function mapPropsToFieldsCore(props) {
    const formData = props[namespace][stateName];
    return mapValues(formData, value =>
      Form.createFormField(
        isObjectNotMoment(value) ? value : { value }
      )
    );
  };
};
