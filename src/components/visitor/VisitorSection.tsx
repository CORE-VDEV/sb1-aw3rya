import { Prison } from '../../types/prison';
import VisitorPlanner from './VisitorPlanner';
import VisitChecklist from './VisitChecklist';
import DirectionsInfo from './DirectionsInfo';

interface VisitorSectionProps {
  prison: Prison;
}

export default function VisitorSection({ prison }: VisitorSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VisitorPlanner prison={prison} />
        <VisitChecklist />
      </div>
      <DirectionsInfo prison={prison} />
    </div>
  );
}