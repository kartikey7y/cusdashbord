'use client';

import { useWeather } from '@/hooks/useWeather';

export default function WeatherWidget() {
  const { data, loading } = useWeather();

  if (loading) return <div>Loading weather...</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Weather</h3>
      {data && (
        <div>
          <p>{data.location}</p>
          <p>{data.temperature}°C</p>
          <p>{data.condition}</p>
        </div>
      )}
    </div>
  );
}