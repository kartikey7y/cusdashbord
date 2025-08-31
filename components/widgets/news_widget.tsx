'use client';

import useNewsData from '@/hooks/useNews';

export default function NewsWidgets() {
  const { article, isLoading, } = useNewsData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Today news</h3>
      {article && (
        <div>
          <h1 className='font-bold'>{article.title}</h1>
          <p>{article.description}°C</p>
          <a href={article.url}>learn more</a>
        </div>
      )}
    </div>
  );
}