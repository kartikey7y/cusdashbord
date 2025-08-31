'use client';

import React, { createContext, useContext, useReducer } from 'react';
import { DashboardState, DashboardAction } from '@/types';

const DashboardContext = createContext<{
    state: DashboardState;
    dispatch: React.Dispatch<DashboardAction>;
} | null>(null);

function dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {
    switch (action.type) {
        case 'ADD_WIDGET':
            return { widgets: [...state.widgets, action.payload] };
        case 'REMOVE_WIDGET':
            return { widgets: state.widgets.filter(widget => widget.id !== action.payload) };
        default:
            return state;
    }
}

export function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(dashboardReducer, { widgets: [] });

    return (
        <DashboardContext.Provider value={{ state, dispatch }}>
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboard() {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
}