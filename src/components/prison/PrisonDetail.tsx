import { MapPin } from '../icons';
import { Prison } from '../../types/prison';
import PrisonSecurityBadge from './PrisonSecurityBadge';
import PrisonStats from './PrisonStats';
import PrisonFacilities from './PrisonFacilities';
import VisitingInfo from './VisitingInfo';
import RehabilitationInfo from './RehabilitationInfo';

interface PrisonDetailProps {
  prison: Prison;
}

export default function PrisonDetail({ prison }: PrisonDetailProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="relative">
          <img
            src={prison.imageUrl}
            alt={prison.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h2 className="text-xl font-bold text-white mb-1">{prison.name}</h2>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-xs font-medium bg-white/20 text-white rounded-full">
                {prison.type}
              </span>
              <PrisonSecurityBadge level={prison.securityLevel} />
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{prison.contact.address}</span>
          </div>

          <p className="text-sm text-gray-600">{prison.description}</p>
          
          <PrisonStats prison={prison} />
          <PrisonFacilities facilities={prison.facilities} />
        </div>
      </div>

      <RehabilitationInfo programs={prison.programs} />
      <VisitingInfo prison={prison} />
    </div>
  );
}