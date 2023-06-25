import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Chart = () => {
    const options = {
        chart: {
          id: "area-datetime",
          type: 'area',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ["21 JAN", "22 JAN", "23 JAN", "24 JAN", "25 JAN"]
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            colors: ["#002F6B"],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
              }
        },
        colors:['#002F6B'],
      }
    const series = [
        {
          data: [200, 150, 180, 160, 250]
        }
      ]
  return (
    <div className="chart-timeline">
        <ReactApexChart options={options} series={series} type="area" />
    </div>
  )
}

export default Chart