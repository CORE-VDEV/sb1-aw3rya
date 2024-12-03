import { Prison } from '../../types/prison';

interface PrisonFacilitiesProps {
  facilities: Prison['facilities'];
}

export default function PrisonFacilities({ facilities }: PrisonFacilitiesProps) {
  return (
    <div className="border-t pt-4">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Einrichtungen</h3>
      <div className="flex flex-wrap gap-2">
        {facilities.map((facility, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
          >
            {facility}
          </span>
        ))}
      </div>
    </div>
  );
}