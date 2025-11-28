// localStorage utility functions with error handling

/**
 * Get item from localStorage
 * @param {string} key - Storage key
 * @param {any} defaultValue - Default value if key doesn't exist
 * @returns {any} Parsed value or default
 */
export const getStorageItem = (key, defaultValue = null) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage key "${key}":`, error);
    return defaultValue;
  }
};

/**
 * Set item in localStorage
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 * @returns {boolean} Success status
 */
export const setStorageItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage key "${key}":`, error);
    // Handle quota exceeded error
    if (error.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded. Consider clearing old data.');
    }
    return false;
  }
};

/**
 * Remove item from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success status
 */
export const removeStorageItem = (key) => {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
    return false;
  }
};

/**
 * Clear all items from localStorage
 * @returns {boolean} Success status
 */
export const clearStorage = () => {
  try {
    window.localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

/**
 * Get storage usage information
 * @returns {object} Storage usage stats
 */
export const getStorageUsage = () => {
  try {
    let total = 0;
    for (let key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        total += window.localStorage[key].length + key.length;
      }
    }
    return {
      used: total,
      available: 5 * 1024 * 1024 - total, // Approximate 5MB limit
      percentage: ((total / (5 * 1024 * 1024)) * 100).toFixed(2),
    };
  } catch (error) {
    console.error('Error calculating storage usage:', error);
    return { used: 0, available: 0, percentage: 0 };
  }
};

// Storage keys constants
export const STORAGE_KEYS = {
  THEME: 'dashboard_theme',
  USER_PREFERENCES: 'user_preferences',
  DASHBOARD_LAYOUT: 'dashboard_layout',
  SAVED_FILTERS: 'saved_filters',
  CUSTOM_REPORTS: 'custom_reports',
  GOALS: 'user_goals',
  EXPORT_HISTORY: 'export_history',
};

