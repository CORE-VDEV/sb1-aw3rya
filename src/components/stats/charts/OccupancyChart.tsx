import { ChartBar } from '../../icons';

interface OccupancyChartProps {
  occupancyRate: number;
}

export default function OccupancyChart({ occupancyRate }: OccupancyChartProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <ChartBar className="w-5 h-5 text-gray-700" />
        <h3 className="font-medium text-gray-900">Auslastung</h3>
      </div>
      <div className="relative pt-2">
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-700 rounded-full transition-all"
            style={{ width: `${occupancyRate}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {Math.round(occupancyRate)}% belegt
        </div>
      </div>
    </div>
  );
}