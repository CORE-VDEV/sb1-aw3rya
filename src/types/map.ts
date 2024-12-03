export interface MapConfig {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  maxZoom: number;
  minZoom: number;
}

export const defaultMapConfig: MapConfig = {
  center: {
    lat: 51.1657,
    lng: 10.4515
  },
  zoom: 6,
  maxZoom: 18,
  minZoom: 4
};