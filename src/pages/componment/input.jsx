import React, { useState } from "react";
import {
  faSearch,
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faExclamationCircle,
  faCheckCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledTextInputs = () => {
  // State for demo (password visibility, error states)
  const [showPassword, setShowPassword] = useState(false);
  const [errorInputValue, setErrorInputValue] = useState("");
  const [floatingLabelValue, setFloatingLabelValue] = useState("");

  // Reusable base input styles for consistency
  const baseInputStyles =
    "w-full px-4 py-3 font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Beautiful Styled Text Inputs (React + Tailwind)
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* 1. Default Outlined Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Default Outlined Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} border border-gray-300 hover:border-gray-400 focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Enter your name"
          />
        </div>

        {/* 2. Filled (Solid BG) Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Filled Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} bg-gray-100 border-0 hover:bg-gray-200 focus:ring-green-500 focus:bg-white`}
            placeholder="Enter your email"
          />
        </div>

        {/* 3. Search Input (with icon) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Search Input
          </label>
          <div className="relative">
            <input
              type="text"
              className={`${baseInputStyles} pl-10 border border-gray-300 focus:ring-purple-500 focus:border-purple-500`}
              placeholder="Search..."
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size="sm"
            />
          </div>
        </div>

        {/* 4. Error State Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Error State Input
          </label>
          <input
            type="text"
            value={errorInputValue}
            onChange={(e) => setErrorInputValue(e.target.value)}
            className={`${baseInputStyles} border border-red-500 focus:ring-red-500 focus:border-red-500`}
            placeholder="This field has an error"
          />
          <p className="text-xs text-red-500 flex items-center gap-1">
            <FontAwesomeIcon icon={faExclamationCircle} size="xs" />
            Please enter a valid value
          </p>
        </div>

        {/* 5. Success State Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Success State Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} border border-green-500 focus:ring-green-500 focus:border-green-500`}
            placeholder="This field is valid"
            value="Valid input example"
          />
          <p className="text-xs text-green-500 flex items-center gap-1">
            <FontAwesomeIcon icon={faCheckCircle} size="xs" />
            Input is valid!
          </p>
        </div>

        {/* 6. Disabled Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Disabled Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed`}
            placeholder="This input is disabled"
            disabled
          />
        </div>

        {/* 7. Password Input (toggle visibility) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password Input
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`${baseInputStyles} pr-10 border border-gray-300 focus:ring-amber-500 focus:border-amber-500`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                size="sm"
              />
            </button>
          </div>
        </div>

        {/* 8. Floating Label Input */}
        <div className="space-y-0 relative">
          <input
            type="text"
            value={floatingLabelValue}
            onChange={(e) => setFloatingLabelValue(e.target.value)}
            className={`${baseInputStyles} pt-6 pb-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 peer`}
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 left-4 origin-[0] peer-focus:text-indigo-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-not-empty:-translate-y-3 peer-not-empty:scale-75">
            Floating Label Input
          </label>
        </div>

        {/* 9. Glass Morphism Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Glass Morphism Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 hover:bg-white/30 focus:ring-blue-300`}
            placeholder="Glass style input"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
        </div>

        {/* 10. Rounded (Pill) Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Pill Shaped Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} border border-gray-300 focus:ring-pink-500 focus:border-pink-500 rounded-full`}
            placeholder="Pill-shaped input"
          />
        </div>

        {/* 11. Icon Right Input (Email) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Icon Right Input
          </label>
          <div className="relative">
            <input
              type="email"
              className={`${baseInputStyles} pr-10 border border-gray-300 focus:ring-teal-500 focus:border-teal-500`}
              placeholder="your@email.com"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size="sm"
            />
          </div>
        </div>

        {/* 12. Large Size Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Large Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} border border-gray-300 focus:ring-sky-500 focus:border-sky-500 px-6 py-4 text-lg`}
            placeholder="Large size input"
          />
        </div>

        {/* 13. Small Size Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Small Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} border border-gray-300 focus:ring-gray-500 focus:border-gray-500 px-3 py-2 text-sm`}
            placeholder="Small size input"
          />
        </div>

        {/* 14. Phone Input (Icon Left) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone Input
          </label>
          <div className="relative">
            <input
              type="tel"
              className={`${baseInputStyles} pl-10 border border-gray-300 focus:ring-orange-500 focus:border-orange-500`}
              placeholder="+1 (555) 123-4567"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size="sm"
            />
          </div>
        </div>

        {/* 15. High Contrast Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            High Contrast Input
          </label>
          <input
            type="text"
            className={`${baseInputStyles} bg-gray-900 border border-gray-700 text-white focus:ring-yellow-400 focus:border-yellow-400`}
            placeholder="High contrast (dark mode)"
          />
        </div>
      </div>
    </div>
  );
};

export default StyledTextInputs;
