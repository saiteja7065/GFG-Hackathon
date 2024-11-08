// src/components/ProgressChart.jsx
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

function ProgressChart({ data }) {
  // Bar chart data for progress (e.g., workouts completed)
  const barData = {
    labels: data.progressLabels,
    datasets: [{
      label: 'Workout Progress',
      data: data.progressValues,
      backgroundColor: 'rgba(75,192,192,1)',
    }],
  };

  // Line chart data for daily calorie intake
  const lineData = {
    labels: data.calorieLabels,
    datasets: [{
      label: 'Daily Calorie Intake',
      data: data.calorieValues,
      fill: false,
      borderColor: 'rgba(255,99,132,1)',
      tension: 0.3,
    }],
  };

  // Pie chart data for macronutrient distribution
  const pieData = {
    labels: ['Protein', 'Carbohydrates', 'Fats'],
    datasets: [{
      data: data.macroValues,  // Assuming data like [30, 50, 20] for protein, carbs, and fats
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
    }],
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ width: '30%' }}>
        <h3>Workout Progress</h3>
        <Bar data={barData} />
      </div>
      <div style={{ width: '30%' }}>
        <h3>Daily Calorie Intake</h3>
        <Line data={lineData} />
      </div>
      <div style={{ width: '30%' }}>
        <h3>Macronutrient Distribution</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default ProgressChart;
