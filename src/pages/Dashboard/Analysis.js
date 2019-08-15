import React, { Component, Suspense, PureComponent } from 'react';
import { connect } from 'dva';
import { Table, Card, Modal, Button } from 'antd';
import { formValid } from '../../utils/model';
import ModalForm from './AnalysisForm';
import Test from './test'

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j].sum > arr[j + 1].sum) {
        //相邻元素两两对比
        var temp = arr[j + 1]; //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

@connect(state => ({
  datasets: state.datasets,
}))
class Analysis extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalFlag: false,
      saveFlag: false,
      info: {userName: {value: 'xxxxx'},
              userAccount: {value: 'xxxxxx'}},
      type: ''
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.props.dispatch({
      type: 'datasets/fetchTableData',
    });
  }

  test = async data => {
    await formValid(this.modelFormRefs);
    var dataSet = data;
    var testDataSet = [];
    const testdata = this.props.datasets.formData;
    testDataSet = [
      {
        Sepal_Length: Number(testdata.Sepal_Length?.value) || Number(testdata.Sepal_Length),
        Sepal_Width: Number(testdata.Sepal_Width?.value) || Number(testdata.Sepal_Width),
        Petal_Length: Number(testdata.Petal_Length?.value) || Number(testdata.Petal_Length),
        Petal_Width: Number(testdata.Petal_Width?.value) || Number(testdata.Petal_Width),
        sum: 0,
      },
    ];
    // var newTestDataSet = this.autoNorm(testDataSet);
    // var newDataSet = this.autoNorm(dataSet);
    let errorCount = 0;
    let type;
    for (let i = 0; i < testDataSet.length; i++) {
      type = this.knn(testDataSet[i], dataSet, 10);
      // console.log(type);
      if (type !== testDataSet[i].Species) {
        ++errorCount;
      }
    }
    // console.log('错误率' + (errorCount / testDataSet.length) * 100 + '%');
    this.props.dispatch({
      type: 'datasets/changeFormFields',
      payload: { Species: type },
    });
    this.setState({
      saveFlag: true,
    });
  };

  knn = (data, dataset, k) => {
    var aa = dataset;
    for (let i = 0; i < aa.length; i++) {
      var distance = this.calDistance(data, aa[i]);
      aa[i].sum = distance;
    }
    aa = bubbleSort(aa);
    var type1 = 0,
      type2 = 0,
      type3 = 0;
    for (let i = 0; i < k; i++) {
      var d = aa[i];
      if (d.Species === 'setosa') {
        ++type1;
        continue;
      } else if (d.Species === 'versicolor') {
        ++type2;
        continue;
      } else {
        ++type3;
      }
    }
    if (type1 > type2) {
      if (type1 > type3) {
        return 'setosa';
      } else {
        return 'virginica';
      }
    } else {
      if (type2 > type3) {
        return 'versicolor';
      } else {
        return 'virginica';
      }
    }
  };

  autoNorm = oldDataSet => {
    var data = [];
    var map;
    map = this.findMaxAndMin(oldDataSet);
    for (let i = 0; i < oldDataSet.length; i++) {
      data.push({
        ...oldDataSet[i],
        Sepal_Length: this.calNewValue(
          oldDataSet[i].Sepal_Length,
          map.maxSepal_Length,
          map.minSepal_Length
        ),
        Sepal_Width: this.calNewValue(
          oldDataSet[i].Sepal_Width,
          map.maxSepal_Width,
          map.minSepal_Width
        ),
        Petal_Length: this.calNewValue(
          oldDataSet[i].Petal_Length,
          map.maxPetal_Length,
          map.minPetal_Length
        ),
        Petal_Width: this.calNewValue(
          oldDataSet[i].Petal_Width,
          map.maxPetal_Width,
          map.minPetal_Width
        ),
      });
    }
    return data;
  };
  /**
   * 计算两个样本之间的距离
   */
  calDistance = (iris1, iris2) => {
    var sum =
      Math.pow(iris1.Petal_Length - iris2.Petal_Length, 2) +
      Math.pow(iris1.Petal_Width - iris2.Petal_Width, 2) +
      Math.pow(iris1.Sepal_Length - iris2.Sepal_Length, 2) +
      Math.pow(iris1.Sepal_Width - iris2.Sepal_Width, 2);
    return Math.sqrt(sum);
  };
  findMaxAndMin = oldDataSet => {
    var map;
    var minPetal_Length = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.0;
    var maxPetal_Length = 0.0;
    var minPetal_Width = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.0;
    var maxPetal_Width = 0.0;
    var minSepal_Length = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.0;
    var maxSepal_Length = 0.0;
    var minSepal_Width = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.0;
    var maxSepal_Width = 0.0;
    for (let i = 0; i < oldDataSet.length; i++) {
      if (oldDataSet[i].Petal_Length > maxPetal_Length) {
        maxPetal_Length = oldDataSet[i].Petal_Length;
      }
      if (oldDataSet[i].Petal_Length < minPetal_Length) {
        minPetal_Length = oldDataSet[i].Petal_Length;
      }
      if (oldDataSet[i].Petal_Width > maxPetal_Width) {
        maxPetal_Width = oldDataSet[i].Petal_Width;
      }
      if (oldDataSet[i].Petal_Width < minPetal_Width) {
        minPetal_Width = oldDataSet[i].Petal_Width;
      }
      if (oldDataSet[i].Sepal_Length > maxSepal_Length) {
        maxSepal_Length = oldDataSet[i].Sepal_Length;
      }
      if (oldDataSet[i].Sepal_Length < minSepal_Length) {
        minSepal_Length = oldDataSet[i].Sepal_Length;
      }
      if (oldDataSet[i].Sepal_Width > maxSepal_Width) {
        maxSepal_Width = oldDataSet[i].Sepal_Width;
      }
      if (oldDataSet[i].Sepal_Width < minSepal_Width) {
        minSepal_Width = oldDataSet[i].Sepal_Width;
      }
    }
    map = {
      maxPetal_Length: maxPetal_Length,
      minPetal_Length: minPetal_Length,
      maxPetal_Width: maxPetal_Width,
      minPetal_Width: minPetal_Width,
      maxSepal_Length: maxSepal_Length,
      minSepal_Length: minSepal_Length,
      maxSepal_Width: maxSepal_Width,
      minSepal_Width: minSepal_Width,
    };
    return map;
  };
  calNewValue = (oldValue, maxValue, minValue) => {
    return (oldValue - minValue) / (maxValue - minValue);
  };
  /**
   * 打开模态框
   */
  modalClick = () => {
    this.setState({
      modalFlag: true,
      type: 'add',
    });
  };

  update = () => {
    this.setState({
      modalFlag: true,
      type: 'update',
    });
  };
  /**
   * 关闭模态框并清除其中的数据
   */
  closeModal = () => {
    this.setState({
      modalFlag: false,
    });
    this.props.dispatch({
      type: 'datasets/replaceFormData',
    });
  };
  /**
   * 将新建的数据保存
   */
  save = async () => {
    this.props.dispatch({
      type: 'datasets/updateDataToDatasets',
    });
    this.setState({
      saveFlag: false,
    });
    this.closeModal();
  };

  handleTestChange = (changedFields) => {
    this.setState(({ tets }) => ({
      tets: { ...tets, ...changedFields },
    }));
  };

  render() {
    const { data } = this.props.datasets;
    var dataset = [];
    dataset = [...data];
    const dataSource = data.slice(0, 10);
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Sepal_Length',
        dataIndex: 'Sepal_Length',
        key: 'Sepal_Length',
      },
      {
        title: 'Sepal_Width',
        dataIndex: 'Sepal_Width',
        key: 'Sepal_Width',
      },
      {
        title: 'Petal_Length',
        dataIndex: 'Petal_Length',
        key: 'Petal_Length',
      },
      {
        title: 'Petal_Width',
        dataIndex: 'Petal_Width',
        key: 'Petal_Width',
      },
      {
        title: 'Species',
        dataIndex: 'Species',
        key: 'Species',
      },
    ];
    return (
      <div>
        <Card
          title="数据展示"
          extra={
            <div>
              <Button type="primary" onClick={() => this.modalClick()}>
                新建
              </Button>
              <Button type="primary" onClick={() => this.update()}>
                编辑
              </Button>
            </div>
          }
        >
          <Table size="small" rowKey="id" bordered columns={columns} dataSource={data} />
        </Card>
        <Modal
          title="鸢尾花特征值"
          visible={this.state.modalFlag}
          onCancel={this.closeModal}
          footer={
            <div>
              <Button type="primary" onClick={() => this.test(dataset)}>
                预测
              </Button>
              <Button disabled={!this.state.saveFlag} type="primary" onClick={() => this.save()}>
                保存
              </Button>
            </div>
          }
        >
          {/* <ModalForm putFormNode={form => (this.modelFormRefs = form)} /> */}

          <Test type={this.state.type} info={this.state.info} onChange={this.handleTestChange} />
        </Modal>
      </div>
    );
  }
}

export default Analysis;
