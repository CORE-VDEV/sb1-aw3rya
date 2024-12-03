export const config = {
  mapz: {
    apiKey: import.meta.env.VITE_MAPZ_API_KEY
  }
} as const;

if (!config.mapz.apiKey) {
  throw new Error('VITE_MAPZ_API_KEY is required in .env file');
}