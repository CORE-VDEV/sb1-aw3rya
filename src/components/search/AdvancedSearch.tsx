import { useState } from 'react';
import { Prison } from '../../types/prison';
import { Search, Filter } from 'lucide-react';

interface AdvancedSearchProps {
  onSearch: (filters: PrisonFilters) => void;
}

interface PrisonFilters {
  searchTerm: string;
  type?: Prison['type'];
  securityLevel?: Prison['securityLevel'];
  minInmates?: number;
  maxInmates?: number;
  facilities?: string[];
}

export default function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<PrisonFilters>({
    searchTerm: '',
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={filters.searchTerm}
            onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
            placeholder="JVA oder Ort suchen..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Typ</label>
              <select
                value={filters.type || ''}
                onChange={(e) => setFilters({ ...filters, type: e.target.value as Prison['type'] || undefined })}
                className="w-full border rounded-lg p-2"
              >
                <option value="">Alle</option>
                <option value="männlich">Männlich</option>
                <option value="weiblich">Weiblich</option>
                <option value="gemischt">Gemischt</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sicherheitsstufe</label>
              <select
                value={filters.securityLevel || ''}
                onChange={(e) => setFilters({ ...filters, securityLevel: e.target.value as Prison['securityLevel'] || undefined })}
                className="w-full border rounded-lg p-2"
              >
                <option value="">Alle</option>
                <option value="niedrig">Niedrig</option>
                <option value="mittel">Mittel</option>
                <option value="hoch">Hoch</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min. Insassen</label>
              <input
                type="number"
                value={filters.minInmates || ''}
                onChange={(e) => setFilters({ ...filters, minInmates: e.target.value ? Number(e.target.value) : undefined })}
                className="w-full border rounded-lg p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max. Insassen</label>
              <input
                type="number"
                value={filters.maxInmates || ''}
                onChange={(e) => setFilters({ ...filters, maxInmates: e.target.value ? Number(e.target.value) : undefined })}
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Suchen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}