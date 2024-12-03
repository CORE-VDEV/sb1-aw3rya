import { Prison } from '../../types/prison';
import OccupancyTrend from './OccupancyTrend';

interface StatisticsOverviewProps {
  prisons: Prison[];
}

export default function StatisticsOverview({ prisons }: StatisticsOverviewProps) {
  const totalInmates = prisons.reduce((sum, prison) => sum + prison.inmates, 0);
  const totalCapacity = prisons.reduce((sum, prison) => sum + prison.capacity, 0);
  const averageOccupancy = (totalInmates / totalCapacity) * 100;
  
  const securityLevelCount = prisons.reduce((acc, prison) => {
    acc[prison.securityLevel] = (acc[prison.securityLevel] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Gesamt JVAs</span>
            <span className="text-2xl font-bold text-gray-900 mt-1">
              {prisons.length}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Gesamt Insassen</span>
            <span className="text-2xl font-bold text-blue-600 mt-1">
              {totalInmates.toLocaleString('de-DE')}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Durchschn. Auslastung</span>
            <span className={`text-2xl font-bold mt-1 ${
              averageOccupancy > 95 ? 'text-red-600' : 
              averageOccupancy > 85 ? 'text-yellow-600' : 
              'text-emerald-600'
            }`}>
              {averageOccupancy.toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Hohe Sicherheit</span>
            <span className="text-2xl font-bold text-red-600 mt-1">
              {securityLevelCount['hoch'] || 0}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OccupancyTrend prisons={prisons} />
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Verteilung nach Typ</h3>
          <div className="space-y-4">
            {(['männlich', 'weiblich', 'gemischt'] as const).map(type => {
              const count = prisons.filter(p => p.type === type).length;
              const percentage = (count / prisons.length) * 100;
              
              return (
                <div key={type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 capitalize">{type}</span>
                    <span className="text-gray-900 font-medium">{count}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        type === 'männlich' ? 'bg-blue-500' :
                        type === 'weiblich' ? 'bg-purple-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}