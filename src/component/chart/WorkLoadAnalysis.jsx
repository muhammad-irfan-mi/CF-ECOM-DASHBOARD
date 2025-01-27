import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Typography, Tooltip } from "@mui/material";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip as ChartTooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ChartTooltip, Legend);

const WorkLoadAnalysis = () => {
  const data = {
    labels: ["07 Jan, 2025", "08 Jan, 2025", "09 Jan, 2025"],
    datasets: [
      {
        label: "Over Worked",
        data: [1, 0, 0],
        backgroundColor: "#FFD700",
      },
      {
        label: "Healthy",
        data: [0, 0, 0],
        backgroundColor: "#008000",
      },
      {
        label: "Less Utilised",
        data: [0, 0, 0],
        backgroundColor: "#FFA500",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        min: -1,
        max: 1,
      },
    },
  };

  return (
    <Box className="w-full rounded-lg">
      <Box className="flex items-center justify-between mb-4">
        <Typography variant="h6" className="font-semibold">
          Work Load Analysis
        </Typography>
        <Tooltip title="This chart shows the workload analysis for team members.">
          <Typography variant="body2" className="text-gray-400 cursor-pointer">
            ⓘ
          </Typography>
        </Tooltip>
      </Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default WorkLoadAnalysis;
