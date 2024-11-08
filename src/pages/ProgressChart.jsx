import { useRef, useEffect } from 'react';
import { Chart as ChartJS, Bar } from 'react-chartjs-2';

function ProgressChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup existing chart instance before re-render
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const data = {
    labels: ['Label1', 'Label2', 'Label3'],
    datasets: [
      {
        label: 'Sample Data',
        data: [10, 20, 30],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar ref={chartRef} data={data} />;
}

export default ProgressChart;
