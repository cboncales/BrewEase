import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      isInitialized: false,

      // Actions
      login: async (email, password) => {
        set({ isLoading: true });

        try {
          // Get API base URL from environment or default to development setup
          const apiBaseUrl =
            import.meta.env.VITE_API_URL || "http://localhost:5001";

          const res = await fetch(`${apiBaseUrl}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message || "Login failed");
          }

          // Set authentication state
          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
            isLoading: false,
          });

          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: error.message };
        }
      },

      register: async (email, password) => {
        set({ isLoading: true });

        try {
          // Get API base URL from environment or default to development setup
          const apiBaseUrl =
            import.meta.env.VITE_API_URL || "http://localhost:5001";

          const res = await fetch(`${apiBaseUrl}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message || "Registration failed");
          }

          set({ isLoading: false });
          return {
            success: true,
            message: "Registration successful! Please login.",
          };
        } catch (error) {
          set({ isLoading: false });
          return { success: false, error: error.message };
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      // Initialize authentication from stored data
      initializeAuth: () => {
        const { token, user, isInitialized } = get();

        if (isInitialized) return;

        console.log("Initializing auth with:", {
          token,
          user,
          isAuthenticated: !!token && !!user,
        });

        // Check if we have valid token and user data
        if (token && user) {
          set({
            isAuthenticated: true,
            isLoading: false,
            isInitialized: true,
          });
        } else {
          set({
            isAuthenticated: false,
            isLoading: false,
            isInitialized: true,
          });
        }
      },

      // Clear all auth data (for cleanup)
      clearAuth: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          isInitialized: true,
        });
      },

      // Set initialization complete (for cases where no delay is needed)
      setInitialized: () => {
        set({ isInitialized: true, isLoading: false });
      },
    }),
    {
      name: "brewease-auth", // localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;
