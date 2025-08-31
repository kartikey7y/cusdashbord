import { URLS } from '@/constants/urls';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  condition: string;
  location: string;
}

export function useWeather() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        const response = await axios.get(
          URLS.WEATHERAPIURL
        );
        setData(response.data.current_weather);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  return { data, loading, error };
}