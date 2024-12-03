import { Prison } from '../../../types/prison';
import { MapPin } from '../../icons';

interface RegionalDistributionChartProps {
  prisons: Prison[];
}

export default function RegionalDistributionChart({ prisons }: RegionalDistributionChartProps) {
  const regions = prisons.reduce((acc, prison) => {
    const state = prison.contact.address.split(' ').pop() || 'Unbekannt';
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedRegions = Object.entries(regions)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const maxCount = Math.max(...Object.values(regions));

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-5 h-5 text-gray-700" />
        <h3 className="font-medium text-gray-900">Regionale Verteilung</h3>
      </div>

      <div className="space-y-4">
        {sortedRegions.map(([region, count]) => (
          <div key={region}>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{region}</span>
              <span>{count}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-700 rounded-full transition-all duration-500"
                style={{ width: `${(count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}