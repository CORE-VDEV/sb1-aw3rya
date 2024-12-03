import { useState } from 'react';
import { useMap, Circle } from 'react-leaflet';
import { Search } from '../icons';
import L from 'leaflet';

export default function RadiusSearch() {
  const [searchRadius, setSearchRadius] = useState(50);
  const [searchCenter, setSearchCenter] = useState<[number, number] | null>(null);
  const [postcode, setPostcode] = useState('');
  const map = useMap();

  const handleSearch = async () => {
    if (!postcode) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?country=germany&postalcode=${postcode}&format=json`
      );
      const data = await response.json();

      if (data && data[0]) {
        const { lat, lon } = data[0];
        const center: [number, number] = [parseFloat(lat), parseFloat(lon)];
        setSearchCenter(center);
        map.flyTo(center, 10);
      }
    } catch (error) {
      console.error('Fehler bei der PLZ-Suche:', error);
    }
  };

  return (
    <div className="absolute top-3 left-3 z-[1000] bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 p-3">
      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder="PLZ eingeben..."
          className="px-3 py-1.5 text-sm bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400"
        />
        <button
          onClick={handleSearch}
          className="p-1.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <label className="flex items-center justify-between text-sm text-gray-300">
          <span>Umkreis: {searchRadius} km</span>
        </label>
        <input
          type="range"
          min="10"
          max="100"
          value={searchRadius}
          onChange={(e) => setSearchRadius(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      {searchCenter && (
        <Circle
          center={searchCenter}
          radius={searchRadius * 1000}
          pathOptions={{
            color: '#4B5563',
            fillColor: '#4B5563',
            fillOpacity: 0.2
          }}
        />
      )}
    </div>
  );
}