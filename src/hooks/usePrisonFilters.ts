import { useState, useMemo } from 'react';
import { Prison } from '../types/prison';

interface Filters {
  type?: Prison['type'];
  securityLevel?: Prison['securityLevel'];
}

export function usePrisonFilters(prisons: Prison[]) {
  const [filters, setFilters] = useState<Filters>({});
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrisons = useMemo(() => {
    return prisons.filter(prison => {
      const matchesSearch = !searchTerm || 
        prison.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prison.contact.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = !filters.type || prison.type === filters.type;
      const matchesSecurity = !filters.securityLevel || prison.securityLevel === filters.securityLevel;

      return matchesSearch && matchesType && matchesSecurity;
    });
  }, [prisons, searchTerm, filters]);

  return {
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    filteredPrisons
  };
}