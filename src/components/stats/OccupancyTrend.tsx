import { Prison } from '../../types/prison';

interface OccupancyTrendProps {
  prisons: Prison[];
}

export default function OccupancyTrend({ prisons }: OccupancyTrendProps) {
  const totalCapacity = prisons.reduce((sum, prison) => sum + prison.capacity, 0);
  const totalInmates = prisons.reduce((sum, prison) => sum + prison.inmates, 0);
  const occupancyRate = (totalInmates / totalCapacity) * 100;

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Auslastungstrend</h3>
      
      <div className="relative pt-4">
        <div className="flex items-end space-x-2 mb-6">
          <div 
            className="bg-blue-500 rounded-t-lg w-12"
            style={{ height: `${(totalInmates / totalCapacity) * 200}px` }}
          >
            <div className="text-xs text-white text-center mt-2 transform -rotate-90">
              {totalInmates.toLocaleString('de-DE')}
            </div>
          </div>
          <div 
            className="bg-gray-200 rounded-t-lg w-12"
            style={{ height: '200px' }}
          >
            <div className="text-xs text-gray-600 text-center mt-2 transform -rotate-90">
              {totalCapacity.toLocaleString('de-DE')}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Aktuelle Auslastung:</span>
            <span className={`ml-2 font-bold ${
              occupancyRate > 95 ? 'text-red-600' : 
              occupancyRate > 85 ? 'text-yellow-600' : 
              'text-green-600'
            }`}>
              {occupancyRate.toFixed(1)}%
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
              <span className="text-gray-600">Belegt</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-200 rounded-full mr-2" />
              <span className="text-gray-600">Kapazität</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}