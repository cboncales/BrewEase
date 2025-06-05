import { useState } from "react";
import useAuthStore from "../store/authStore";

export default function AuthModal({
  isLogin,
  toggleForm,
  closeModal,
  onLoginSuccess,
}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Zustand store
  const { login, register, isLoading } = useAuthStore();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", { isLogin, email: formData.email });

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (isLogin) {
      // Handle login
      console.log("Attempting login...");
      const result = await login(formData.email, formData.password);
      console.log("Login result:", result);

      if (result.success) {
        console.log("Login successful, calling onLoginSuccess");
        alert("Login successful!");
        onLoginSuccess();
      } else {
        console.log("Login failed:", result.error);
        alert(result.error);
      }
    } else {
      // Handle registration
      console.log("Attempting registration...");
      const result = await register(formData.email, formData.password);
      console.log("Registration result:", result);

      if (result.success) {
        alert(result.message);
        // Reset form
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        // Switch to login form
        toggleForm();
      } else {
        alert(result.error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative animate-fadeIn">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-amber-600">
          {isLogin ? "Login to BrewEase" : "Register for BrewEase"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
              disabled={isLoading}
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
                disabled={isLoading}
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-amber-600 hover:underline"
                disabled={isLoading}
              >
                Register here
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-amber-600 hover:underline"
                disabled={isLoading}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
