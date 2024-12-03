import { Prison } from '../../../types/prison';
import { ChartBar } from '../../icons';

interface OccupancyTrendChartProps {
  prisons: Prison[];
}

export default function OccupancyTrendChart({ prisons }: OccupancyTrendChartProps) {
  const totalCapacity = prisons.reduce((sum, p) => sum + p.capacity, 0);
  const totalInmates = prisons.reduce((sum, p) => sum + p.inmates, 0);
  const occupancyRate = (totalInmates / totalCapacity) * 100;

  const getStatusColor = (rate: number) => {
    if (rate > 100) return 'bg-gray-800';
    if (rate > 90) return 'bg-gray-600';
    return 'bg-gray-400';
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <ChartBar className="w-5 h-5 text-gray-700" />
        <h3 className="font-medium text-gray-900">Auslastungstrend</h3>
      </div>

      <div className="relative h-48">
        <div className="absolute inset-0 flex items-end justify-center gap-4">
          <div className="w-24 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">Kapazität</div>
            <div className="w-full bg-gray-100 rounded-t-lg" style={{ height: '160px' }}>
              <div className="text-sm text-gray-600 text-center mt-2">
                {totalCapacity.toLocaleString('de-DE')}
              </div>
            </div>
          </div>

          <div className="w-24 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">Belegt</div>
            <div 
              className={`w-full ${getStatusColor(occupancyRate)} rounded-t-lg transition-all duration-500`} 
              style={{ height: `${(totalInmates / totalCapacity) * 160}px` }}
            >
              <div className="text-sm text-white text-center mt-2">
                {totalInmates.toLocaleString('de-DE')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Aktuelle Auslastung</span>
          <span className={`font-medium ${occupancyRate > 100 ? 'text-gray-900' : 'text-gray-700'}`}>
            {occupancyRate.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}