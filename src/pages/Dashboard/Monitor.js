import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Tooltip } from 'antd';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/scatter';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
@connect(state => ({
  datasets: state.datasets,
}))

class Monitor extends PureComponent {
  constructor(props) {
    super(props);
    
  }
  componentWillMount(){
    this.props.dispatch({
      type: 'datasets/fetchData'
    });
  }
  componentDidMount() {
    var mySepalChart = echarts.init(document.getElementById('Sepal'));
    var myPetalChart = echarts.init(document.getElementById('Petal'));
    mySepalChart.setOption({
      title: {
        text: 'SepalChart'
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        name: 'Sepal_Length',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        name: 'Sepal_Length',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20
        },
      },
      series: [{
        symbolSize: 5,
        data: this.props.datasets.SepalData,
        type: 'scatter',
      }]
    });
    myPetalChart.setOption({
      title: {
        text: 'PetalChart'
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        name: 'Petal_Length',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        name: 'Petal_Width',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20
        },
      },
      series: [{
        symbolSize: 5,
        data: this.props.datasets.PetalData,
        type: 'scatter'
      }],
    });
  };
  render() {
    return (
      <div>
        <Row type="flex">
          <div id="Sepal" style={{ width: 480, height: 480 }} >
          </div>

          <div id="Petal" style={{ width: 480, height: 480 }} >
          </div>
        </Row>
      </div>
    );
  }
}

export default Monitor;
