import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Prison } from '../types/prison';
import { MapPin } from 'lucide-react';
import L from 'leaflet';

interface PrisonMapProps {
  prisons: Prison[];
  onPrisonSelect: (prison: Prison) => void;
}

// Custom icon setup
const customIcon = new L.DivIcon({
  className: 'custom-icon',
  html: '<div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function PrisonMap({ prisons, onPrisonSelect }: PrisonMapProps) {
  return (
    <MapContainer
      center={[51.1657, 10.4515]}
      zoom={6}
      className="w-full h-[600px] rounded-lg shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {prisons.map((prison) => (
        <Marker
          key={prison.id}
          position={[prison.location.lat, prison.location.lng]}
          icon={customIcon}
          eventHandlers={{
            click: () => onPrisonSelect(prison),
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{prison.name}</h3>
              <p className="text-sm">Insassen: {prison.inmates}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}