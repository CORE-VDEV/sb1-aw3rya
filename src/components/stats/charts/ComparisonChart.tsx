import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Prison } from '../../../types/prison';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ComparisonChartProps {
  prisons: Prison[];
}

export default function ComparisonChart({ prisons }: ComparisonChartProps) {
  const topPrisons = [...prisons]
    .sort((a, b) => b.inmates - a.inmates)
    .slice(0, 5);

  const data = {
    labels: topPrisons.map(p => p.name),
    datasets: [
      {
        label: 'Aktuelle Belegung',
        data: topPrisons.map(p => p.inmates),
        backgroundColor: 'rgba(75, 85, 99, 0.8)',
      },
      {
        label: 'Kapazität',
        data: topPrisons.map(p => p.capacity),
        backgroundColor: 'rgba(209, 213, 219, 0.8)',
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
        beginAtZero: true,
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
      <h3 className="text-base font-medium text-gray-900 mb-6">Größte Einrichtungen</h3>
      <Bar data={data} options={options} />
    </div>
  );
}