import { createContext, useContext, useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';

// Create context
const AppContext = createContext();

// Custom hook to use app context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

// App Provider Component
export const AppProvider = ({ children }) => {
  // Theme state (light/dark)
  const [theme, setTheme] = useLocalStorage(STORAGE_KEYS.THEME, 'light');
  
  // User preferences
  const [preferences, setPreferences] = useLocalStorage(STORAGE_KEYS.USER_PREFERENCES, {
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    notifications: true,
    autoRefresh: true,
    refreshInterval: 5000, // 5 seconds
  });

  // Dashboard layout state
  const [dashboardLayout, setDashboardLayout] = useLocalStorage(STORAGE_KEYS.DASHBOARD_LAYOUT, null);

  // UI State
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  // Update preferences
  const updatePreferences = useCallback((newPreferences) => {
    setPreferences((prev) => ({ ...prev, ...newPreferences }));
  }, [setPreferences]);

  // Add notification
  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now(),
      ...notification,
      timestamp: new Date(),
    };
    setNotifications((prev) => [newNotification, ...prev]);
  }, []);

  // Remove notification
  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // Clear all notifications
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // Toggle sidebar
  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const value = {
    // Theme
    theme,
    toggleTheme,
    
    // Preferences
    preferences,
    updatePreferences,
    
    // Dashboard
    dashboardLayout,
    setDashboardLayout,
    
    // UI State
    sidebarOpen,
    toggleSidebar,
    
    // Notifications
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

