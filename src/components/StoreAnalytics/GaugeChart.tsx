"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";

// Initialize modules safely (handles both ESM and CJS builds)
const initModule = (mod: any) => {
  const fn = typeof mod === "function" ? mod : mod?.default;
  if (typeof fn === "function") {
    fn(Highcharts);
  }
};

initModule(HighchartsMore);
initModule(SolidGauge);

const GaugeChart = () => {
  const options = {
    chart: {
      type: "solidgauge",
      height: "100%",
      backgroundColor: "transparent",
    },

    title: null,

    pane: {
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: "#E6E9ED", // light grey arc background
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },

    // Disable credits and tooltip
    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },

    yAxis: {
      min: 0,
      max: 200, // adjust to your max value
      stops: [
        [1, "#0B3D1F"], // dark green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: -35,
          borderWidth: 0,
          useHTML: true,
          format:
            '<div style="text-align:center">' +
            '<span style="font-size:22px; font-weight:bold; color:#333">{y}</span><br/>' +
            '<span style="font-size:14px; color:#666">New Users</span>' +
            "</div>",
        },
      },
    },

    series: [
      {
        name: "New Users",
        data: [120], // your value
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default GaugeChart;