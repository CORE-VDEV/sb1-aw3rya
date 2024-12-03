import { Prison } from '../../types/prison';
import { Filter } from '../icons';

interface FilterBarProps {
  onFilterChange: (filters: {
    type?: Prison['type'];
    securityLevel?: Prison['securityLevel'];
  }) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-gray-600">
        <Filter className="w-4 h-4" />
        <span className="text-sm">Filter:</span>
      </div>
      
      <select
        onChange={(e) => onFilterChange({ type: e.target.value as Prison['type'] || undefined })}
        className="px-3 py-1.5 text-sm rounded-lg text-gray-600 border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
      >
        <option value="">Alle Typen</option>
        <option value="männlich">Männlich</option>
        <option value="weiblich">Weiblich</option>
        <option value="gemischt">Gemischt</option>
      </select>

      <select
        onChange={(e) => onFilterChange({ securityLevel: e.target.value as Prison['securityLevel'] || undefined })}
        className="px-3 py-1.5 text-sm rounded-lg text-gray-600 border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
      >
        <option value="">Alle Sicherheitsstufen</option>
        <option value="niedrig">Niedrig</option>
        <option value="mittel">Mittel</option>
        <option value="hoch">Hoch</option>
      </select>
    </div>
  );
}