'use client';

import { useDashboard } from '@/context/dashboard_context';
import { Widget } from '@/types';
import dynamic from 'next/dynamic';

const WidgetComponents = {
  weather: dynamic(() => import('./widgets/weather_widget')),
  tasks: dynamic(() => import('./widgets/task_list_widget')),
  news: dynamic(()=>import('./widgets/news_widget'))
};

export default function WidgetContainer({ widget }: { widget: Widget }) {
  const { dispatch } = useDashboard();
  const WidgetComponent = WidgetComponents[widget.type];

  return (
    <div className="relative">
      <button
        onClick={() => dispatch({ type: 'REMOVE_WIDGET', payload: widget.id })}
        className="absolute top-2 right-2 text-red-500"
      >
        ×
      </button>
      <WidgetComponent />
    </div>
  );
}