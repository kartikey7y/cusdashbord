'use client';

import { useDashboard } from '@/context/dashboard_context';
import { WidgetType } from '@/types';
import WidgetContainer from './widget_container';

const WIDGET_CONFIG: Record<WidgetType, { title: string }> = {
  weather: { title: 'Weather' },
  tasks: { title: 'Tasks' },
  news: {title:"News"}
};

export default function Dashboard() {
  const { state, dispatch } = useDashboard();

  const addWidget = (type: WidgetType) => {
    dispatch({
      type: 'ADD_WIDGET',
      payload: {
        id: Math.random().toString(36).substr(2, 9),
        type,
        title: WIDGET_CONFIG[type].title
      }
    });
  };

  return (
    <div className="p-4">
      <div className="mb-4 space-x-2">
        {Object.entries(WIDGET_CONFIG).map(([type, config]) => (
          <button
            key={type}
            onClick={() => addWidget(type as WidgetType)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add {config.title}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.widgets.map((widget) => (
          <WidgetContainer key={widget.id} widget={widget} />
        ))}
      </div>
    </div>
  );
}