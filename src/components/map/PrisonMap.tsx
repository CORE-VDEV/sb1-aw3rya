import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Prison } from '../../types/prison';
import MapMarker from './MapMarker';
import RadiusSearch from './RadiusSearch';
import 'leaflet/dist/leaflet.css';

interface PrisonMapProps {
  prisons: Prison[];
  onPrisonSelect: (prison: Prison) => void;
  selectedPrison: Prison | null;
}

export default function PrisonMap({ prisons, onPrisonSelect, selectedPrison }: PrisonMapProps) {
  return (
    <div className="relative h-[600px] bg-gray-900 rounded-lg border border-gray-800">
      <div className="absolute top-3 right-3 z-[1000] bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 text-sm">
        <span className="text-gray-300">
          {prisons.length} JVAs • {prisons.reduce((sum, prison) => sum + prison.inmates, 0).toLocaleString('de-DE')} Insassen
        </span>
      </div>
      
      <MapContainer
        center={[51.1657, 10.4515]}
        zoom={6}
        className="w-full h-full rounded-lg"
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          maxZoom={20}
        />
        
        <RadiusSearch />

        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={50}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={false}
        >
          {prisons.map((prison) => (
            <MapMarker
              key={prison.id}
              prison={prison}
              onSelect={onPrisonSelect}
              isSelected={selectedPrison?.id === prison.id}
            />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}