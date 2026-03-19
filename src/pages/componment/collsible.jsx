import React, { useState } from 'react';

// ------------------------------
// 1. Forest Emerald Collapsible
// ------------------------------
export const Collapsible1Emerald = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-emerald-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-emerald-50 text-left flex justify-between items-center hover:bg-emerald-100 transition-colors"
      >
        <span className="font-medium text-emerald-900">Ancient Forest Trails</span>
        <span className={`text-emerald-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-emerald-800 text-sm">
            Explore 50+ km of well-maintained trails through old-growth forests. The trails feature wooden boardwalks over wet areas and interpretive signs about local flora.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 2. Ocean Sky Collapsible
// ------------------------------
export const Collapsible2Sky = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-xl shadow-md border border-sky-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gradient-to-r from-sky-50 to-blue-50 text-left flex justify-between items-center hover:bg-sky-100 transition-colors"
      >
        <span className="font-medium text-sky-900">Coastal Tide Information</span>
        <span className={`text-sky-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-sky-800 text-sm">
            Daily tide charts for 12 coastal locations. High tide today is at 08:15 AM (1.2m) and 07:40 PM (0.9m). Best swimming times are 2 hours after low tide.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 3. Sunset Amber Collapsible
// ------------------------------
export const Collapsible3Amber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-amber-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-amber-50 text-left flex justify-between items-center hover:bg-amber-100 transition-colors border-b-2 border-amber-300"
      >
        <span className="font-medium text-amber-900">Golden Hour Photography Tips</span>
        <span className={`text-amber-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-amber-800 text-sm">
            For the best sunset photos, arrive 45 minutes early to set up. Use a tripod and shoot at f/8 with a 50mm lens. The cliff overlook at Sunset Point offers unobstructed views until mid-October.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 4. Wildflower Purple Collapsible
// ------------------------------
export const Collapsible4Purple = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-xl shadow-md border border-purple-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-purple-50 text-left flex justify-between items-center hover:bg-purple-100 transition-colors border-r-4 border-purple-300"
      >
        <span className="font-medium text-purple-900">Wildflower Bloom Schedule</span>
        <span className={`text-purple-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-purple-800 text-sm">
            Lavender blooms June-August, poppies May-July, and daisies April-September. The meadow at the end of Pine Trail is the best viewing spot — bring pollinator-friendly snacks!
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 5. Mountain Stone Collapsible
// ------------------------------
export const Collapsible5Slate = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-slate-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-slate-50 text-left flex justify-between items-center hover:bg-slate-100 transition-colors"
      >
        <span className="font-medium text-slate-900">Mountain Hiking Difficulty</span>
        <span className={`text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-slate-800 text-sm">
            North Peak (2850m) - Moderate (4-5 hours round trip), Eagle Ridge (3200m) - Difficult (6-7 hours), and Valley Trail - Easy (2 hours). All trails require sturdy hiking boots.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 6. Honeycomb Yellow Collapsible
// ------------------------------
export const Collapsible6Yellow = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-full shadow-md border border-yellow-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-yellow-50 text-left flex justify-between items-center hover:bg-yellow-100 transition-colors"
      >
        <span className="font-medium text-yellow-900">Bee Hive Maintenance</span>
        <span className={`text-yellow-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-yellow-800 text-sm">
            Hive #12 produces 45kg of honey annually (queen age 2yrs), Hive #8 produces 38kg (1.5yrs). We harvest honey in late summer and feed bees sugar water in winter months.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 7. Berry Bush Red Collapsible
// ------------------------------
export const Collapsible7Red = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-md border border-red-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-red-50 text-left flex justify-between items-center hover:bg-red-100 transition-colors border-t-2 border-red-300"
      >
        <span className="font-medium text-red-900">Berry Harvest Guidelines</span>
        <span className={`text-red-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-red-800 text-sm">
            Strawberries (June-July, sweetness 9/10) and raspberries (July-August, 8/10) can be picked daily 9AM-5PM. Only pick ripe berries and leave 10% for wildlife.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 8. Mushroom Grove Brown Collapsible
// ------------------------------
export const Collapsible8Brown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-stone-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-stone-50 text-left flex justify-between items-center hover:bg-stone-100 transition-colors"
      >
        <span className="font-medium text-stone-900">Edible Mushroom Identification</span>
        <span className={`text-stone-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-stone-800 text-sm">
            Shiitake (spring-autumn) have brown caps with white gills; chanterelles (summer) are yellow/orange with wrinkled caps. Never eat wild mushrooms without expert verification.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 9. Dew Drop Cyan Collapsible
// ------------------------------
export const Collapsible9Cyan = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-xl shadow-md border border-cyan-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-cyan-50 text-left flex justify-between items-center hover:bg-cyan-100 transition-colors"
      >
        <span className="font-medium text-cyan-900">Shade Plant Care Tips</span>
        <span className={`text-cyan-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-cyan-800 text-sm">
            Ferns need high water and full shade; moss requires very high moisture and no direct sunlight. Water in the morning to avoid fungal growth and mist leaves 2x/week.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 10. Lavender Field Lilac Collapsible
// ------------------------------
export const Collapsible10Lilac = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-violet-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gradient-to-r from-lilac-50 to-violet-50 text-left flex justify-between items-center hover:bg-violet-100 transition-colors"
      >
        <span className="font-medium text-violet-900">Lavender Uses & Benefits</span>
        <span className={`text-violet-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-violet-800 text-sm">
            English lavender (60cm, strong fragrance) is best for essential oils; French lavender (45cm, medium fragrance) for decoration. Both repel mosquitoes and attract pollinators.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 11. Volcano Rock Rose Collapsible
// ------------------------------
export const Collapsible11Rose = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-md border border-rose-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-rose-50 text-left flex justify-between items-center hover:bg-rose-100 transition-colors border-l-4 border-rose-400"
      >
        <span className="font-medium text-rose-900">Volcano Safety Information</span>
        <span className={`text-rose-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-rose-800 text-sm">
            Mount Hale (last eruption 1987, low activity) is safe for hiking; Red Crater (2001, moderate activity) requires park ranger escort. Always check activity levels before visiting.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 12. Bamboo Grove Lime Collapsible
// ------------------------------
export const Collapsible12Lime = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-xl shadow-sm border border-lime-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-lime-50 text-left flex justify-between items-center hover:bg-lime-100 transition-colors"
      >
        <span className="font-medium text-lime-900">Bamboo Growth Facts</span>
        <span className={`text-lime-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-lime-800 text-sm">
            Moso bamboo grows 91cm/day (max 28m) — fastest growing plant on Earth! Black bamboo grows 30cm/day (max 6m) and has decorative black stems. Harvest in late winter for best quality.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 13. Glacier Ice Blue Collapsible
// ------------------------------
export const Collapsible13Cold = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-md border border-blue-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-blue-50 text-left flex justify-between items-center hover:bg-blue-100 transition-colors"
      >
        <span className="font-medium text-blue-900">Glacier Conservation Tips</span>
        <span className={`text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-blue-800 text-sm">
            Arctic Glacier (1200km², -12°C) is shrinking 2% annually; Alpine Glacier (450km², -8°C) 1.5%. Stay on marked trails, avoid touching ice, and carry reusable water bottles.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 14. Mint Herb Teal Collapsible
// ------------------------------
export const Collapsible14Mint = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-teal-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-teal-50 text-left flex justify-between items-center hover:bg-teal-100 transition-colors border-t-2 border-teal-300"
      >
        <span className="font-medium text-teal-900">Herb Garden Care</span>
        <span className={`text-teal-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-teal-800 text-sm">
            Peppermint (growing zone 3-7) is great for tea and flavoring; basil (4-10) for cooking/pesto. Both need well-drained soil and 4-6 hours of sunlight daily.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 15. Autumn Maple Orange Collapsible
// ------------------------------
export const Collapsible15Orange = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-xl shadow-md border border-orange-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-orange-50 text-left flex justify-between items-center hover:bg-orange-100 transition-colors"
      >
        <span className="font-medium text-orange-900">Maple Syrup Production</span>
        <span className={`text-orange-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-orange-800 text-sm">
            Sugar maple produces 40L of sap/year (red/orange leaves); red maple 25L (bright red leaves). Sap is collected February-March and boiled down 40:1 to make syrup.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 16. Pine Forest Teal Collapsible
// ------------------------------
export const Collapsible16Teal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-teal-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-teal-50 text-left flex justify-between items-center hover:bg-teal-100 transition-colors border-r-4 border-teal-400"
      >
        <span className="font-medium text-teal-900">Pine Tree Facts</span>
        <span className={`text-teal-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-teal-800 text-sm">
            Ponderosa pine has 20cm needles and 15cm cones; Scots pine 5cm needles/6cm cones. Both are fire-resistant and provide habitat for woodpeckers and squirrels.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 17. Desert Bloom Fuchsia Collapsible
// ------------------------------
export const Collapsible17Fuchsia = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-md border border-fuchsia-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-fuchsia-50 text-left flex justify-between items-center hover:bg-fuchsia-100 transition-colors"
      >
        <span className="font-medium text-fuchsia-900">Desert Plant Care</span>
        <span className={`text-fuchsia-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-fuchsia-800 text-sm">
            Desert rose (spring bloom, very low water) and cactus flower (summer, low water) store water in their stems. Water once every 2-3 weeks in summer, monthly in winter.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 18. Misty Valley Indigo Collapsible
// ------------------------------
export const Collapsible18Indigo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-xl shadow-sm border border-indigo-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-indigo-50 text-left flex justify-between items-center hover:bg-indigo-100 transition-colors"
      >
        <span className="font-medium text-indigo-900">Misty Valley Viewing Tips</span>
        <span className={`text-indigo-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-indigo-800 text-sm">
            Blue Valley has daily mist (best viewed morning); Green Hollow 3x/week (evening). Bring a light jacket and waterproof shoes — trails get slippery in mist.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 19. Sand Dune Amber Collapsible
// ------------------------------
export const Collapsible19AmberDark = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-md border border-amber-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-amber-100 text-left flex justify-between items-center hover:bg-amber-200 transition-colors border-b border-amber-300"
      >
        <span className="font-medium text-amber-900">Sand Dune Safety</span>
        <span className={`text-amber-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-amber-800 text-sm">
            Coastal dunes (15m, west wind) are best for sandboarding; inland dunes (30m, north wind) for hiking. Always carry water and wear UV-protective clothing — no shade available.
          </p>
        </div>
      )}
    </div>
  );
};

// ------------------------------
// 20. Rainy Meadow Azure Collapsible
// ------------------------------
export const Collapsible20Azure = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl my-4 overflow-hidden rounded-lg shadow-sm border border-sky-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-sky-50 text-left flex justify-between items-center hover:bg-sky-100 transition-colors border-t-2 border-sky-300"
      >
        <span className="font-medium text-sky-900">Meadow Grass Care</span>
        <span className={`text-sky-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white animate-fadeIn">
          <p className="text-sky-800 text-sm">
            Green Pasture (1200mm rainfall) has Kentucky bluegrass; Wild Meadow (950mm) mixed native grasses. Mow native meadows once/year in late autumn to support pollinators.
          </p>
        </div>
      )}
    </div>
  );
};

export default function AllTheCollapsibles() {
  return (
    <>
      <Collapsible1Emerald />
      <Collapsible2Sky />
      <Collapsible3Amber />
      <Collapsible4Purple />
      <Collapsible5Slate />
      <Collapsible6Yellow />
      <Collapsible7Red />
      <Collapsible8Brown />
      <Collapsible9Cyan />
      <Collapsible10Lilac />
      <Collapsible11Rose />
      <Collapsible12Lime />
      <Collapsible13Cold />
      <Collapsible14Mint />
      <Collapsible15Orange />
      <Collapsible16Teal />
      <Collapsible17Fuchsia />
      <Collapsible18Indigo />
      <Collapsible19AmberDark />
      <Collapsible20Azure />
    </>
  );
}