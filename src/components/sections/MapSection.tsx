import { Prison } from '../../types/prison';
import PrisonMap from '../map/PrisonMap';
import PrisonDetail from '../prison/PrisonDetail';
import { Prison as PrisonIcon } from '../icons';

interface MapSectionProps {
  prisons: Prison[];
  selectedPrison: Prison | null;
  onPrisonSelect: (prison: Prison | null) => void;
}

export default function MapSection({
  prisons,
  selectedPrison,
  onPrisonSelect
}: MapSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <PrisonMap 
            prisons={prisons} 
            onPrisonSelect={onPrisonSelect}
            selectedPrison={selectedPrison}
          />
        </div>
      </div>
      
      <div>
        {selectedPrison ? (
          <PrisonDetail prison={selectedPrison} />
        ) : (
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <PrisonIcon className="w-8 h-8 mx-auto text-gray-400 mb-3" />
            <p className="text-sm text-gray-600">
              Wählen Sie eine JVA auf der Karte aus
            </p>
          </div>
        )}
      </div>
    </div>
  );
}