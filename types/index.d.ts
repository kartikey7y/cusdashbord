export type WidgetType = 'weather' | 'tasks' | 'news';

export type Widget = {
  id: string;
  type: WidgetType;
  title: string;
}

export type DashboardState = {
  widgets: Widget[];
}

export type DashboardAction = { type: 'ADD_WIDGET'; payload: Widget } | { type: 'REMOVE_WIDGET'; payload: string };

export type NewsArticle = {
    source: { name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export type WeatherData = {
  temperature: number;
  condition: string;
  location: string;
}