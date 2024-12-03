import { Prison } from '../../types/prison';
import PrisonListItem from './PrisonListItem';

interface PrisonListProps {
  prisons: Prison[];
  selectedPrison: Prison | null;
  onPrisonSelect: (prison: Prison) => void;
}

export default function PrisonList({ prisons, selectedPrison, onPrisonSelect }: PrisonListProps) {
  if (prisons.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Keine JVAs gefunden</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {prisons.map((prison) => (
        <PrisonListItem
          key={prison.id}
          prison={prison}
          isSelected={selectedPrison?.id === prison.id}
          onSelect={onPrisonSelect}
        />
      ))}
    </div>
  );
}