import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Card, Tooltip } from 'antd';
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
    this.props.dispatch({
      type: 'datasets/fetchChartData',
    });
  }
  componentWillMount() {}
  componentDidMount() {
    var mySepalChart = echarts.init(document.getElementById('Sepal'));
    var myPetalChart = echarts.init(document.getElementById('Petal'));
    var mylabel = {
      show: true,
      position: 'top',
      formatter: function(param) {
        return param.data.value[2];
      },
    };
    mySepalChart.setOption({
      title: {
        text: 'SepalChart',
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        name: 'Sepal_Length',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20,
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        name: 'Sepal_Length',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20,
        },
      },
      series: [
        {
          symbolSize: 5,
          data: this.props.datasets.SepalData,
          type: 'scatter',
          label: {
            emphasis: mylabel,
          },
        },
      ],
    });
    myPetalChart.setOption({
      title: {
        text: 'PetalChart',
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        name: 'Petal_Length',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20,
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        name: 'Petal_Width',
        nameLocation: 'center',
        nameTextStyle: {
          padding: 20,
        },
      },
      series: [
        {
          symbolSize: 5,
          data: this.props.datasets.PetalData,
          type: 'scatter',
          label: {
            emphasis: mylabel,
          },
        },
      ],
    });
  }
  render() {
    return (
      <div>
        <Card title="Chart">
          <Row type="flex">
            <div id="Sepal" style={{ width: 480, height: 480 }} />

            <div id="Petal" style={{ width: 480, height: 480 }} />
          </Row>
        </Card>
      </div>
    );
  }
}
export default Monitor;
