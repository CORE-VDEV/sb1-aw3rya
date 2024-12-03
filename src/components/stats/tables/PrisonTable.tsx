import { Prison } from '../../../types/prison';

interface PrisonTableProps {
  prisons: Prison[];
}

export default function PrisonTable({ prisons }: PrisonTableProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Detaillierte Übersicht</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sicherheitsstufe</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insassen</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auslastung</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {prisons.map((prison) => (
              <tr key={prison.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{prison.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{prison.type}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{prison.securityLevel}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{prison.inmates.toLocaleString('de-DE')}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {Math.round((prison.inmates / prison.capacity) * 100)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}