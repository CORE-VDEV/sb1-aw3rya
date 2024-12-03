import { Prison } from '../../../types/prison';

interface DetailedStatsTableProps {
  prisons: Prison[];
}

export default function DetailedStatsTable({ prisons }: DetailedStatsTableProps) {
  const calculateStats = () => {
    const stats = {
      totalInmates: 0,
      totalCapacity: 0,
      highSecurity: 0,
      mediumSecurity: 0,
      lowSecurity: 0,
      maleOnly: 0,
      femaleOnly: 0,
      mixed: 0
    };

    prisons.forEach(prison => {
      stats.totalInmates += prison.inmates;
      stats.totalCapacity += prison.capacity;
      
      switch (prison.securityLevel) {
        case 'hoch': stats.highSecurity++; break;
        case 'mittel': stats.mediumSecurity++; break;
        case 'niedrig': stats.lowSecurity++; break;
      }

      switch (prison.type) {
        case 'männlich': stats.maleOnly++; break;
        case 'weiblich': stats.femaleOnly++; break;
        case 'gemischt': stats.mixed++; break;
      }
    });

    return stats;
  };

  const stats = calculateStats();

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Detaillierte Statistiken</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Allgemeine Zahlen</h4>
          <dl className="space-y-3">
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Gesamtanzahl JVAs</dt>
              <dd className="text-sm font-medium text-gray-900">{prisons.length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Gesamtkapazität</dt>
              <dd className="text-sm font-medium text-gray-900">
                {stats.totalCapacity.toLocaleString('de-DE')}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Aktuelle Belegung</dt>
              <dd className="text-sm font-medium text-gray-900">
                {stats.totalInmates.toLocaleString('de-DE')}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Durchschnittliche Auslastung</dt>
              <dd className="text-sm font-medium text-gray-900">
                {((stats.totalInmates / stats.totalCapacity) * 100).toFixed(1)}%
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Verteilung</h4>
          <dl className="space-y-3">
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Hochsicherheit</dt>
              <dd className="text-sm font-medium text-gray-900">{stats.highSecurity}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Mittlere Sicherheit</dt>
              <dd className="text-sm font-medium text-gray-900">{stats.mediumSecurity}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Niedrige Sicherheit</dt>
              <dd className="text-sm font-medium text-gray-900">{stats.lowSecurity}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Männliche JVAs</dt>
              <dd className="text-sm font-medium text-gray-900">{stats.maleOnly}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Weibliche JVAs</dt>
              <dd className="text-sm font-medium text-gray-900">{stats.femaleOnly}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600">Gemischte JVAs</dt>
              <dd className="text-sm font-medium text-gray-900">{stats.mixed}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}