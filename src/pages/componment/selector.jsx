import React, { useState, useRef, useEffect } from 'react';

// ------------------------------
// Shared Utility Hook (Reusable Logic - No Duplication)
// ------------------------------
const useSelectLogic = (initialValue, options) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef };
};

// ------------------------------
// 1. Forest Emerald Select (Standalone Component)
// ------------------------------
export const Select1Emerald = () => {
  const options = ['Forest Trail', 'Mossy Grove', 'Pine Woods'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Forest Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 flex justify-between items-center text-emerald-800 hover:bg-emerald-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-emerald-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-emerald-100 overflow-hidden animate-fadeIn">
          <ul className="divide-y divide-emerald-50">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-emerald-50 text-emerald-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-emerald-500">🌳</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 2. Ocean Sky Select (Standalone Component)
// ------------------------------
export const Select2Sky = () => {
  const options = ['Coastal Beach', 'Calm Bay', 'Rocky Shore'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Beach Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 flex justify-between items-center text-sky-800 hover:bg-sky-100 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-sky-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-xl shadow-lg border border-sky-100 overflow-hidden animate-fadeIn">
          <ul className="space-y-1">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-sky-50 text-sky-800 transition-colors flex items-center gap-2 rounded-lg mx-1 my-1"
                >
                  <span className="text-sky-500">🌊</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 3. Sunset Amber Select (Standalone Component)
// ------------------------------
export const Select3Amber = () => {
  const options = ['Golden Hour', 'Dusk Glow', 'Sunset Peak'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Sunset Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-amber-50 border-t-2 border-amber-500 rounded-b-lg px-4 py-3 flex justify-between items-center text-amber-800 hover:bg-amber-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-amber-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-amber-100 overflow-hidden animate-fadeIn">
          <ul>
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-amber-50 text-amber-800 transition-colors flex items-center gap-2 border-b border-amber-50 last:border-0"
                >
                  <span className="text-amber-500">🌅</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 4. Wildflower Purple Select (Standalone Component)
// ------------------------------
export const Select4Purple = () => {
  const options = ['Lavender Field', 'Wildflower Meadow', 'Iris Garden'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Flower Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-purple-50 border-r-2 border-purple-500 rounded-l-lg px-4 py-3 flex justify-between items-center text-purple-800 hover:bg-purple-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-purple-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-purple-100 overflow-hidden animate-fadeIn">
          <ul className="divide-y divide-purple-50">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-purple-50 text-purple-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-500">🌸</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 5. Stone Slate Select (Standalone Component)
// ------------------------------
export const Select5Slate = () => {
  const options = ['Rocky Trail', 'Stone Canyon', 'Gravel Path'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Stone Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 flex justify-between items-center text-slate-800 hover:bg-slate-100 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-md shadow-sm border border-slate-100 overflow-hidden animate-fadeIn">
          <ul>
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-50 text-slate-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-slate-500">🪨</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 6. Honey Yellow Select (Standalone Component)
// ------------------------------
export const Select6Yellow = () => {
  const options = ['Honeycomb Hive', 'Sunflower Field', 'Wheat Field'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Yellow Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-yellow-50 border border-yellow-200 rounded-full px-4 py-3 flex justify-between items-center text-yellow-800 hover:bg-yellow-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-yellow-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-yellow-100 overflow-hidden animate-fadeIn">
          <ul className="divide-y divide-yellow-50">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-yellow-50 text-yellow-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-500">🐝</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 7. Berry Red Select (Standalone Component)
// ------------------------------
export const Select7Red = () => {
  const options = ['Strawberry Patch', 'Cherry Orchard', 'Raspberry Bush'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Berry Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-red-50 border border-red-200 rounded-lg px-4 py-3 flex justify-between items-center text-red-800 hover:bg-red-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-red-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-red-100 overflow-hidden animate-fadeIn">
          <ul className="space-y-1">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-800 transition-colors flex items-center gap-2 rounded-lg mx-1 my-1"
                >
                  <span className="text-red-500">🍒</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 8. Mushroom Brown Select (Standalone Component)
// ------------------------------
export const Select8Brown = () => {
  const options = ['Mushroom Grove', 'Oak Forest', 'Soil Garden'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Earth Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-brown-50 border border-brown-200 rounded-lg px-4 py-3 flex justify-between items-center text-brown-800 hover:bg-brown-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-brown-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-brown-100 overflow-hidden animate-fadeIn">
          <ul>
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-brown-50 text-brown-800 transition-colors flex items-center gap-2 border-b border-brown-50 last:border-0"
                >
                  <span className="text-brown-500">🍄</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 9. Dew Cyan Select (Standalone Component)
// ------------------------------
export const Select9Cyan = () => {
  const options = ['Dewy Grass', 'Morning Pond', 'Foggy Stream'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Dew Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-cyan-50 border border-cyan-200 rounded-xl px-4 py-3 flex justify-between items-center text-cyan-800 hover:bg-cyan-100 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-cyan-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-xl shadow-lg border border-cyan-100 overflow-hidden animate-fadeIn">
          <ul className="divide-y divide-cyan-50">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-cyan-50 text-cyan-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-500">💧</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 10. Lavender Lilac Select (Standalone Component)
// ------------------------------
export const Select10Lilac = () => {
  const options = ['Lavender Bush', 'Lilac Garden', 'Violet Field'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Lavender Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-lilac-50 border border-lilac-200 rounded-lg px-4 py-3 flex justify-between items-center text-lilac-800 hover:bg-lilac-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-lilac-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-lilac-100 overflow-hidden animate-fadeIn">
          <ul className="space-y-1">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-lilac-50 text-lilac-800 transition-colors flex items-center gap-2 rounded-lg mx-1 my-1"
                >
                  <span className="text-lilac-500">💜</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 11. Volcano Rose Select (Standalone Component)
// ------------------------------
export const Select11Rose = () => {
  const options = ['Volcano Trail', 'Lava Rock Field', 'Ash Meadow'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Volcano Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-rose-50 border-l-2 border-rose-500 rounded-r-lg px-4 py-3 flex justify-between items-center text-rose-800 hover:bg-rose-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-rose-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-rose-100 overflow-hidden animate-fadeIn">
          <ul>
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-rose-50 text-rose-800 transition-colors flex items-center gap-2 border-b border-rose-50 last:border-0"
                >
                  <span className="text-rose-500">🌋</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 12. Bamboo Lime Select (Standalone Component)
// ------------------------------
export const Select12Lime = () => {
  const options = ['Bamboo Grove', 'Lime Orchard', 'Fern Garden'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Bamboo Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-lime-50 border border-lime-200 rounded-lg px-4 py-3 flex justify-between items-center text-lime-800 hover:bg-lime-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-lime-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-lime-100 overflow-hidden animate-fadeIn">
          <ul className="divide-y divide-lime-50">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-lime-50 text-lime-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-lime-500">🎍</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 13. Glacier Cold Select (Standalone Component)
// ------------------------------
export const Select13Cold = () => {
  const options = ['Glacier Peak', 'Snowy Trail', 'Ice Cave'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Glacier Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-cold-50 border border-cold-200 rounded-xl px-4 py-3 flex justify-between items-center text-cold-800 hover:bg-cold-100 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-cold-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-xl shadow-lg border border-cold-100 overflow-hidden animate-fadeIn">
          <ul className="space-y-1">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-cold-50 text-cold-800 transition-colors flex items-center gap-2 rounded-lg mx-1 my-1"
                >
                  <span className="text-cold-500">❄️</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 14. Garden Mint Select (Standalone Component)
// ------------------------------
export const Select14Mint = () => {
  const options = ['Mint Garden', 'Herb Patch', 'Basil Bed'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Herb Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-mint-50 border-t-2 border-mint-500 rounded-b-lg px-4 py-3 flex justify-between items-center text-mint-800 hover:bg-mint-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-mint-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-mint-100 overflow-hidden animate-fadeIn">
          <ul>
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-mint-50 text-mint-800 transition-colors flex items-center gap-2 border-b border-mint-50 last:border-0"
                >
                  <span className="text-mint-500">🌿</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 15. Autumn Orange Select (Standalone Component)
// ------------------------------
export const Select15Orange = () => {
  const options = ['Maple Grove', 'Pumpkin Patch', 'Cider Orchard'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select an Autumn Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-orange-50 border border-orange-200 rounded-full px-4 py-3 flex justify-between items-center text-orange-800 hover:bg-orange-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-orange-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-orange-100 overflow-hidden animate-fadeIn">
          <ul className="divide-y divide-orange-50">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-orange-50 text-orange-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-orange-500">🍂</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 16. Pine Teal Select (Standalone Component)
// ------------------------------
export const Select16Teal = () => {
  const options = ['Pine Forest', 'Cedar Trail', 'Spruce Grove'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Pine Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-teal-50 border-r-2 border-teal-500 rounded-l-lg px-4 py-3 flex justify-between items-center text-teal-800 hover:bg-teal-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-teal-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-teal-100 overflow-hidden animate-fadeIn">
          <ul className="space-y-1">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-teal-50 text-teal-800 transition-colors flex items-center gap-2 rounded-lg mx-1 my-1"
                >
                  <span className="text-teal-500">🎄</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 17. Desert Fuchsia Select (Standalone Component)
// ------------------------------
export const Select17Fuchsia = () => {
  const options = ['Desert Bloom', 'Sage Brush', 'Cactus Garden'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Desert Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-fuchsia-50 border border-fuchsia-200 rounded-lg px-4 py-3 flex justify-between items-center text-fuchsia-800 hover:bg-fuchsia-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-fuchsia-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-fuchsia-100 overflow-hidden animate-fadeIn">
          <ul>
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-fuchsia-50 text-fuchsia-800 transition-colors flex items-center gap-2 border-b border-fuchsia-50 last:border-0"
                >
                  <span className="text-fuchsia-500">🏜️</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 18. Mist Indigo Select (Standalone Component)
// ------------------------------
export const Select18Indigo = () => {
  const options = ['Misty Valley', 'Foggy Hill', 'Cloudy Peak'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Mist Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 flex justify-between items-center text-indigo-800 hover:bg-indigo-100 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-indigo-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-xl shadow-lg border border-indigo-100 overflow-hidden animate-fadeIn">
          <ul className="divide-y divide-indigo-50">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-indigo-50 text-indigo-800 transition-colors flex items-center gap-2"
                >
                  <span className="text-indigo-500">💨</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 19. Sand Amber Select (Standalone Component)
// ------------------------------
export const Select19AmberDark = () => {
  const options = ['Sand Dunes', 'Beach Path', 'Coastal Dunes'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Sand Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-amber-100 border border-amber-300 rounded-lg px-4 py-3 flex justify-between items-center text-amber-900 hover:bg-amber-200 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-amber-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-amber-200 overflow-hidden animate-fadeIn">
          <ul className="space-y-1">
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-amber-50 text-amber-900 transition-colors flex items-center gap-2 rounded-lg mx-1 my-1"
                >
                  <span className="text-amber-700">🏖️</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 20. Rain Azure Select (Standalone Component)
// ------------------------------
export const Select20Azure = () => {
  const options = ['Rainy Meadow', 'Stormy Lake', 'Wetland Trail'];
  const { isOpen, setIsOpen, selectedOption, handleSelect, dropdownRef } = useSelectLogic('Select a Rain Spot', options);
  
  return (
    <div className="max-w-md my-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-azure-50 border border-azure-200 rounded-lg px-4 py-3 flex justify-between items-center text-azure-800 hover:bg-azure-100 transition-colors shadow-sm"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{selectedOption}</span>
        <span className={`text-azure-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="mt-2 w-full bg-white rounded-lg shadow-md border border-azure-100 overflow-hidden animate-fadeIn">
          <ul>
            {options.map((opt, i) => (
              <li key={i}>
                <button
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 hover:bg-azure-50 text-azure-800 transition-colors flex items-center gap-2 border-b border-azure-50 last:border-0"
                >
                  <span className="text-azure-500">🌧️</span> {opt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default function Alltheselector(){
  return (
    <>
      <div className='columns-1 sm:columns-2'>
        <Select1Emerald />
        <Select2Sky />
        <Select3Amber />
        <Select4Purple />
        <Select5Slate />
        <Select6Yellow />
        <Select7Red />
        <Select8Brown />
        <Select9Cyan />
        <Select10Lilac />
        <Select11Rose />
        <Select12Lime />
        <Select13Cold />
        <Select14Mint />
        <Select15Orange />
        <Select16Teal />
        <Select17Fuchsia />
        <Select18Indigo />
        <Select19AmberDark />
        <Select20Azure />
      </div>
    </>
  );
}
// ------------------------------
// Add Custom Tailwind Colors (tailwind.config.js)
// ------------------------------
/*
module.exports = {
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f9f6f2',
          100: '#f3ede3',
          200: '#e8d9c4',
          600: '#8b5d33',
          700: '#785c3e',
          800: '#5c452c',
        },
        lilac: {
          50: '#f9f6fc',
          100: '#f0e9f8',
          200: '#e1d2ee',
          600: '#8a55b8',
          700: '#7c58a0',
          800: '#624482',
        },
        cold: {
          50: '#f0f8fb',
          100: '#e0f0f7',
          200: '#c1e0ee',
          600: '#4a8fb8',
          700: '#3a7ca5',
          800: '#2d6080',
        },
        mint: {
          50: '#f2fbf7',
          100: '#e6f7ef',
          200: '#c9eed9',
          500: '#34d399',
          600: '#28a778',
          700: '#1f9262',
          800: '#18734d',
        },
        azure: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c1dfff',
          600: '#2b8ef0',
          700: '#1a78d0',
          800: '#1560a0',
        },
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(-4px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.2s ease-in-out'
      }
    },
  },
};
*/

