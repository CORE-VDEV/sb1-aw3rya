import { Prison } from '../../types/prison';

interface StatisticsChartProps {
  prisons: Prison[];
}

export default function StatisticsChart({ prisons }: StatisticsChartProps) {
  const securityLevels = {
    niedrig: prisons.filter(p => p.securityLevel === 'niedrig').length,
    mittel: prisons.filter(p => p.securityLevel === 'mittel').length,
    hoch: prisons.filter(p => p.securityLevel === 'hoch').length,
  };

  const maxCount = Math.max(...Object.values(securityLevels));
  const getWidth = (count: number) => `${(count / maxCount) * 100}%`;

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm">
      <h3 className="text-sm font-medium text-gray-700 mb-4">Verteilung nach Sicherheitsstufen</h3>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Niedrig</span>
            <span>{securityLevels.niedrig}</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: getWidth(securityLevels.niedrig) }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Mittel</span>
            <span>{securityLevels.mittel}</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: getWidth(securityLevels.mittel) }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Hoch</span>
            <span>{securityLevels.hoch}</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 rounded-full transition-all duration-500"
              style={{ width: getWidth(securityLevels.hoch) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}