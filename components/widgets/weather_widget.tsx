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
          <p>{new Date(data.time).toLocaleString()}</p>
          <div>
            <p><b>tempture:</b>{data.temperature}°C</p>
            <p><b>wind speed:</b>{data.windspeed}km/h</p>
          </div>
        </div>
      )}
    </div>
  );
}