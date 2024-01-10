import { Chart } from "chart.js";

export const userOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 600,
        beginAtZero: true,
        padding: 15,
        font: {
          size: 14,
          family: "Open Sans",
          style: "normal",
          lineHeight: 2,
        },
        color: "#fff",
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

export const salesOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        borderDash: [5, 5],
      },
      ticks: {
        display: true,
        padding: 10,
        color: "#b2b9bf",
        font: {
          size: 11,
          family: "Open Sans",
          style: "normal",
          lineHeight: 2,
        },
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
        borderDash: [5, 5],
      },
      ticks: {
        display: true,
        color: "#b2b9bf",
        padding: 20,
        font: {
          size: 11,
          family: "Open Sans",
          style: "normal",
          lineHeight: 2,
        },
      },
    },
  },
};
