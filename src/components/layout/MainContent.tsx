import { useState } from 'react';
import { Prison } from '../../types/prison';
import QuickStats from '../stats/QuickStats';
import FilterBar from '../filters/FilterBar';
import SearchBar from '../search/SearchBar';
import MapSection from '../sections/MapSection';
import InfoSection from '../sections/InfoSection';
import DonationSection from '../donation/DonationSection';
import StatisticsSection from '../sections/StatisticsSection';
import MainNavigation from './MainNavigation';

interface MainContentProps {
  prisons: Prison[];
  selectedPrison: Prison | null;
  onPrisonSelect: (prison: Prison | null) => void;
  onFilterChange: (filters: any) => void;
}

export default function MainContent({
  prisons,
  selectedPrison,
  onPrisonSelect,
  onFilterChange
}: MainContentProps) {
  const [activeView, setActiveView] = useState<'map' | 'statistics' | 'info'>('map');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrisons = prisons.filter(prison => 
    prison.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prison.contact.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container mx-auto py-6 px-4">
      <div className="space-y-6">
        <QuickStats prisons={filteredPrisons} />
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="w-full md:w-64">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row gap-4 items-start md:items-center w-full">
              <FilterBar onFilterChange={onFilterChange} />
              <div className="ml-auto">
                <MainNavigation activeView={activeView} onViewChange={setActiveView} />
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[600px]">
          {activeView === 'map' && (
            <MapSection 
              prisons={filteredPrisons}
              selectedPrison={selectedPrison}
              onPrisonSelect={onPrisonSelect}
            />
          )}

          {activeView === 'statistics' && (
            <StatisticsSection prisons={filteredPrisons} />
          )}

          {activeView === 'info' && (
            <InfoSection prisons={filteredPrisons} />
          )}
        </div>

        <DonationSection />
      </div>
    </main>
  );
}