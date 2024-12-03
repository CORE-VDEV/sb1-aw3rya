import { Users } from 'lucide-react';
import { Prison } from '../../../types/prison';

interface TypeDistributionChartProps {
  distribution: Record<Prison['type'], number>;
  total: number;
}

export default function TypeDistributionChart({ distribution, total }: TypeDistributionChartProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-gray-700" />
        <h3 className="font-medium text-gray-900">Nach Typ</h3>
      </div>
      <div className="space-y-3">
        {Object.entries(distribution).map(([type, count]) => (
          <div key={type}>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span className="capitalize">{type}</span>
              <span>{count}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-700 rounded-full"
                style={{ width: `${(count / total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}