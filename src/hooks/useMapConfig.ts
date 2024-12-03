import { useState, useCallback } from 'react';
import { MapConfig, defaultMapConfig } from '../types/map';

export function useMapConfig(initialConfig: MapConfig = defaultMapConfig) {
  const [config, setConfig] = useState<MapConfig>(initialConfig);

  const updateZoom = useCallback((zoom: number) => {
    setConfig(prev => ({
      ...prev,
      zoom: Math.min(Math.max(zoom, prev.minZoom), prev.maxZoom)
    }));
  }, []);

  const updateCenter = useCallback((lat: number, lng: number) => {
    setConfig(prev => ({
      ...prev,
      center: { lat, lng }
    }));
  }, []);

  return {
    config,
    updateZoom,
    updateCenter
  };
}