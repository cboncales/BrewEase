export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white rounded-lg p-6 shadow-xl flex items-center space-x-3">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-500"></div>
        <span className="text-gray-700 font-medium">{text}</span>
      </div>
    </div>
  );
}
