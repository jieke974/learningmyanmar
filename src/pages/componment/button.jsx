import React from "react";
// Optional: Import Font Awesome (add via npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons)
import {
  faArrowRight,
  faCheck,
  faDownload,
  faEdit,
  faHeart,
  faHome,
  faInfo,
  faLock,
  faPlus,
  faSearch,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeautifulButtons = () => {
  // Reusable button base styles for consistency
  const baseButtonStyles =
    "px-6 py-3 font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        20 Beautiful Tailwind Buttons (React)
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* 1. Primary Solid Button */}
        <button
          className={`${baseButtonStyles} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 rounded-md`}
        >
          Primary Button
        </button>

        {/* 2. Secondary Outline Button */}
        <button
          className={`${baseButtonStyles} border border-purple-500 text-purple-600 hover:bg-purple-50 focus:ring-purple-400 rounded-md`}
        >
          Outline Button
        </button>

        {/* 3. Gradient Button */}
        <button
          className={`${baseButtonStyles} bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:from-pink-600 hover:to-orange-500 focus:ring-pink-400 rounded-md`}
        >
          Gradient Button
        </button>

        {/* 4. Pill-Shaped Button */}
        <button
          className={`${baseButtonStyles} bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 rounded-full`}
        >
          Pill Button
        </button>

        {/* 5. Icon Left Button */}
        <button
          className={`${baseButtonStyles} bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 rounded-md flex items-center gap-2`}
        >
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
          Next
        </button>

        {/* 6. Icon Right Button */}
        <button
          className={`${baseButtonStyles} bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 rounded-md flex items-center gap-2`}
        >
          Download
          <FontAwesomeIcon icon={faDownload} size="sm" />
        </button>

        {/* 7. Full Icon Button (Circle) */}
        <button
          className={`${baseButtonStyles} bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 rounded-full w-12 h-12 p-0 flex items-center justify-center`}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </button>

        {/* 8. Warning Button */}
        <button
          className={`${baseButtonStyles} bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400 rounded-md`}
        >
          Warning Action
        </button>

        {/* 9. Danger Button */}
        <button
          className={`${baseButtonStyles} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 rounded-md`}
        >
          Delete Item
        </button>

        {/* 10. Success Button (with check icon) */}
        <button
          className={`${baseButtonStyles} bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 rounded-md flex items-center gap-2`}
        >
          <FontAwesomeIcon icon={faCheck} size="sm" />
          Completed
        </button>

        {/* 11. Minimal Button (No BG) */}
        <button
          className={`${baseButtonStyles} text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-300 rounded-md`}
        >
          Minimal Style
        </button>

        {/* 12. Large Size Button */}
        <button
          className={`${baseButtonStyles} bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500 rounded-md px-8 py-4 text-lg`}
        >
          Large Button
        </button>

        {/* 13. Small Size Button */}
        <button
          className={`${baseButtonStyles} bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 rounded-md px-4 py-2 text-sm`}
        >
          Small Button
        </button>

        {/* 14. Glass Morphism Button */}
        <button
          className={`${baseButtonStyles} bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 focus:ring-blue-300 rounded-md`}
          style={{ backgroundColor: "rgba(59, 130, 246, 0.8)" }}
        >
          Glass Button
        </button>

        {/* 15. Loading State Button (simulated) */}
        <button
          className={`${baseButtonStyles} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 rounded-md flex items-center gap-2`}
          disabled
        >
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Loading...
        </button>

        {/* 16. Shopping Cart Button */}
        <button
          className={`${baseButtonStyles} bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400 rounded-md flex items-center gap-2`}
        >
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          Add to Cart
        </button>

        {/* 17. Lock Button (Outline) */}
        <button
          className={`${baseButtonStyles} border border-gray-400 text-gray-700 hover:bg-gray-50 focus:ring-gray-300 rounded-md flex items-center gap-2`}
        >
          <FontAwesomeIcon icon={faLock} size="sm" />
          Secure
        </button>

        {/* 18. Edit Button (Pill) */}
        <button
          className={`${baseButtonStyles} bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-400 rounded-full flex items-center gap-2`}
        >
          <FontAwesomeIcon icon={faEdit} size="sm" />
          Edit
        </button>

        {/* 19. Home Button (Square) */}
        <button
          className={`${baseButtonStyles} bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700 rounded-md w-14 h-14 p-0 flex items-center justify-center`}
        >
          <FontAwesomeIcon icon={faHome} size="lg" />
        </button>

        {/* 20. Info Button (Soft BG) */}
        <button
          className={`${baseButtonStyles} bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-300 rounded-md flex items-center gap-2`}
        >
          <FontAwesomeIcon icon={faInfo} size="sm" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default BeautifulButtons;
