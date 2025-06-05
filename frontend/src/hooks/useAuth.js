import { useEffect } from "react";
import useAuthStore from "../store/authStore";

// Custom hook to handle authentication initialization and validation
export const useAuth = () => {
  const {
    isAuthenticated,
    user,
    token,
    login,
    logout,
    register,
    isLoading,
    initializeAuth,
    clearAuth,
  } = useAuthStore();

  // Initialize auth on app start
  useEffect(() => {
    initializeAuth();
  }, []); // Only run once on mount

  // Helper function to get authorization headers
  const getAuthHeaders = () => {
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Helper function to make authenticated requests
  const authenticatedFetch = async (url, options = {}) => {
    const headers = {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
      ...(options.headers || {}),
    };

    return fetch(url, {
      ...options,
      headers,
    });
  };

  return {
    isAuthenticated,
    user,
    token,
    login,
    logout,
    register,
    isLoading,
    getAuthHeaders,
    authenticatedFetch,
  };
};

export default useAuth;
