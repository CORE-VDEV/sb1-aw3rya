import { Prison } from '../../types/prison';
import { MapPin } from '../icons';

interface PrisonListItemProps {
  prison: Prison;
  isSelected: boolean;
  onSelect: (prison: Prison) => void;
}

export default function PrisonListItem({ prison, isSelected, onSelect }: PrisonListItemProps) {
  return (
    <div
      className={`bg-white rounded-lg border p-4 cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
      }`}
      onClick={() => onSelect(prison)}
    >
      <div className="flex items-start space-x-3">
        <img
          src={prison.imageUrl}
          alt={prison.name}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="font-medium text-gray-900">{prison.name}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{prison.contact.address}</span>
          </div>
          <div className="mt-2 text-sm">
            <span className="text-blue-600 font-medium">
              {prison.inmates.toLocaleString('de-DE')}
            </span>
            <span className="text-gray-600"> Insassen</span>
          </div>
        </div>
      </div>
    </div>
  );
}