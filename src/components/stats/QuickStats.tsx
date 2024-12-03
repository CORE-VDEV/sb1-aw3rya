import { Prison } from '../../types/prison';

interface QuickStatsProps {
  prisons: Prison[];
}

export default function QuickStats({ prisons }: QuickStatsProps) {
  const totalInmates = prisons.reduce((sum, p) => sum + p.inmates, 0);
  const highSecurityCount = prisons.filter(p => p.securityLevel === 'hoch').length;
  const averageOccupancy = (prisons.reduce((sum, p) => sum + p.inmates, 0) / 
    prisons.reduce((sum, p) => sum + p.capacity, 0) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { value: prisons.length, label: 'JVAs' },
        { value: totalInmates.toLocaleString('de-DE'), label: 'Insassen' },
        { value: `${averageOccupancy}%`, label: 'Auslastung' },
        { value: highSecurityCount, label: 'Hochsicherheit' }
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
          <div className="text-xl font-medium text-gray-900">{stat.value}</div>
          <div className="text-xs text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}