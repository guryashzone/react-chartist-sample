import React from 'react';
import ChartistGraph from 'react-chartist';
import chartistPluginAxistitle from 'chartist-plugin-axistitle';
import './Chart.css';

const Chart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    series: [
      [1000, 2000, 1050, 900, 1560, 480, 2900, 910, 1500, 2030, 2900, 3950]
    ]
  };

  const options = {
    high: 4000,
    low: 200,
    chartPadding: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    width: '500px',
    height: '250px',
    plugins: [
      chartistPluginAxistitle({
        axisX: {
          axisTitle: "Months",
          axisClass: "ct-axis-title",
          offset: {
            x: 0,
            y: 35
          },
          textAnchor: "middle"
        },
        axisY: {
          axisTitle: "Sales",
          axisClass: "ct-axis-title",
          offset: {
            x: 0,
            y: -1
          },
          flipTitle: false
        }
      })
    ]
  };

  const type = 'Line'


  return (
    <>
      <ChartistGraph data={data} options={options} type={type} />
    </>
  )
}

export default Chart
