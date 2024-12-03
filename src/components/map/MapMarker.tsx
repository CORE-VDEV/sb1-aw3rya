import { Marker, Popup } from 'react-leaflet';
import { Prison } from '../../types/prison';
import L from 'leaflet';

interface MapMarkerProps {
  prison: Prison;
  onSelect: (prison: Prison) => void;
  isSelected: boolean;
}

const createIcon = (isSelected: boolean) => new L.DivIcon({
  className: 'custom-marker-icon',
  html: `<div class="marker-icon ${isSelected ? 'selected' : ''}">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapMarker({ prison, onSelect, isSelected }: MapMarkerProps) {
  return (
    <Marker
      position={[prison.location.lat, prison.location.lng]}
      icon={createIcon(isSelected)}
      eventHandlers={{
        click: () => onSelect(prison),
      }}
    >
      <Popup>
        <div className="text-center p-2">
          <h3 className="font-bold text-lg mb-1 text-white">{prison.name}</h3>
          <p className="text-sm text-gray-300 mb-2">
            {prison.inmates.toLocaleString('de-DE')} Insassen
          </p>
          <button 
            onClick={() => onSelect(prison)}
            className="text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
          >
            Details anzeigen
          </button>
        </div>
      </Popup>
    </Marker>
  );
}