import useAuthStore from "../store/authStore";

export default function AuthDebug() {
  const { isAuthenticated, user, token, isLoading, isInitialized } = useAuthStore();

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">Auth Debug:</h3>
      <div>isAuthenticated: {String(isAuthenticated)}</div>
      <div>isLoading: {String(isLoading)}</div>
      <div>isInitialized: {String(isInitialized)}</div>
      <div>hasToken: {String(!!token)}</div>
      <div>hasUser: {String(!!user)}</div>
      <div>userEmail: {user?.email || "none"}</div>
      <div>localStorage: {localStorage.getItem('brewease-auth') ? 'exists' : 'empty'}</div>
    </div>
  );
} 