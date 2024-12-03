import { Prison } from '../../types/prison';

interface ComparisonChartProps {
  prisons: Prison[];
}

export default function ComparisonChart({ prisons }: ComparisonChartProps) {
  const totalInmates = prisons.reduce((sum, p) => sum + p.inmates, 0);
  const byType = {
    männlich: prisons.filter(p => p.type === 'männlich').length,
    weiblich: prisons.filter(p => p.type === 'weiblich').length,
    gemischt: prisons.filter(p => p.type === 'gemischt').length,
  };

  const bySecurity = {
    hoch: prisons.filter(p => p.securityLevel === 'hoch').length,
    mittel: prisons.filter(p => p.securityLevel === 'mittel').length,
    niedrig: prisons.filter(p => p.securityLevel === 'niedrig').length,
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-6">Vergleichsanalyse</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Nach Typ</h4>
          <div className="space-y-4">
            {Object.entries(byType).map(([type, count]) => (
              <div key={type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 capitalize">{type}</span>
                  <span className="font-medium">{count}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      type === 'männlich' ? 'bg-blue-500' :
                      type === 'weiblich' ? 'bg-purple-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${(count / prisons.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Nach Sicherheitsstufe</h4>
          <div className="space-y-4">
            {Object.entries(bySecurity).map(([level, count]) => (
              <div key={level} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 capitalize">{level}</span>
                  <span className="font-medium">{count}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      level === 'hoch' ? 'bg-red-500' :
                      level === 'mittel' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${(count / prisons.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="text-center">
          <p className="text-sm text-gray-600">Gesamtanzahl Insassen</p>
          <p className="text-3xl font-bold text-blue-600 mt-1">
            {totalInmates.toLocaleString('de-DE')}
          </p>
        </div>
      </div>
    </div>
  );
}