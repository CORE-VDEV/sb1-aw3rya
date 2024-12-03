import { useState, useMemo } from 'react';
import { Prison } from '../types/prison';

export function usePrisonSearch(prisons: Prison[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrisons = useMemo(() => {
    if (!searchTerm.trim()) return prisons;
    
    const searchLower = searchTerm.toLowerCase();
    return prisons.filter(prison => 
      prison.name.toLowerCase().includes(searchLower) ||
      prison.contact.address.toLowerCase().includes(searchLower)
    );
  }, [prisons, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredPrisons
  };
}