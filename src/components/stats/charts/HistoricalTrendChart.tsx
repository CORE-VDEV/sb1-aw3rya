import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Prison } from '../../../types/prison';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HistoricalTrendChartProps {
  prisons: Prison[];
}

export default function HistoricalTrendChart({ prisons }: HistoricalTrendChartProps) {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Gesamtbelegung',
        data: [45000, 43500, 42000, 41800, 41500],
        borderColor: 'rgb(75, 85, 99)',
        backgroundColor: 'rgba(75, 85, 99, 0.5)',
      },
      {
        label: 'Kapazität',
        data: [50000, 50000, 49000, 48500, 48000],
        borderColor: 'rgb(209, 213, 219)',
        backgroundColor: 'rgba(209, 213, 219, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-base font-medium text-gray-900 mb-6">Entwicklung über Zeit</h3>
      <Line data={data} options={options} />
    </div>
  );
}