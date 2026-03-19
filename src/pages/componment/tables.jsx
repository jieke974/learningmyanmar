import React from "react";

// ------------------------------
// 1. Forest Canopy Table (Soft Green + Rounded Corners)
// ------------------------------
export const Table1ForestCanopy = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-xl shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-emerald-50 border-b border-emerald-200">
            <th className="px-6 py-4 text-left text-base font-medium text-emerald-900 tracking-tight">
              Tree Species
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-emerald-900 tracking-tight">
              Height (m)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-emerald-900 tracking-tight">
              Age (yrs)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-emerald-100">
          <tr className="hover:bg-emerald-50/70 transition-colors">
            <td className="px-6 py-3 text-sm text-emerald-800">Redwood</td>
            <td className="px-6 py-3 text-sm text-emerald-800">75</td>
            <td className="px-6 py-3 text-sm text-emerald-800">500+</td>
          </tr>
          <tr className="hover:bg-emerald-50/70 transition-colors">
            <td className="px-6 py-3 text-sm text-emerald-800">Oak</td>
            <td className="px-6 py-3 text-sm text-emerald-800">28</td>
            <td className="px-6 py-3 text-sm text-emerald-800">120</td>
          </tr>
          <tr className="hover:bg-emerald-50/70 transition-colors">
            <td className="px-6 py-3 text-sm text-emerald-800">Pine</td>
            <td className="px-6 py-3 text-sm text-emerald-800">42</td>
            <td className="px-6 py-3 text-sm text-emerald-800">85</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 2. Ocean Tide Table (Gradient Blue + Soft Shadows)
// ------------------------------
export const Table2OceanTide = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-lg">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-gradient-to-r from-sky-50 to-blue-50 border-b border-sky-200">
            <th className="px-6 py-4 text-left text-base font-medium text-sky-900">
              Beach Name
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-sky-900">
              Tide Time
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-sky-900">
              Wave Height
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sky-100">
          <tr className="hover:bg-sky-50 transition-colors">
            <td className="px-6 py-3 text-sm text-sky-800">Coral Cove</td>
            <td className="px-6 py-3 text-sm text-sky-800">08:15 AM</td>
            <td className="px-6 py-3 text-sm text-sky-800">1.2m</td>
          </tr>
          <tr className="hover:bg-sky-50 transition-colors">
            <td className="px-6 py-3 text-sm text-sky-800">Silver Sands</td>
            <td className="px-6 py-3 text-sm text-sky-800">07:40 PM</td>
            <td className="px-6 py-3 text-sm text-sky-800">0.8m</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 3. Sunset Blush Table (Warm Orange/Pink + Accent Lines)
// ------------------------------
export const Table3SunsetBlush = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-amber-50">
            <th className="px-6 py-4 text-left text-base font-medium text-amber-900 border-b-2 border-amber-300">
              Sunset Spot
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-amber-900 border-b-2 border-amber-300">
              Duration (mins)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-amber-900 border-b-2 border-amber-300">
              Best Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-rose-50/50 transition-colors">
            <td className="px-6 py-3 text-sm text-rose-800">Cliff View</td>
            <td className="px-6 py-3 text-sm text-rose-800">45</td>
            <td className="px-6 py-3 text-sm text-rose-800">October</td>
          </tr>
          <tr className="hover:bg-rose-50/50 transition-colors">
            <td className="px-6 py-3 text-sm text-rose-800">Lake Shore</td>
            <td className="px-6 py-3 text-sm text-rose-800">60</td>
            <td className="px-6 py-3 text-sm text-rose-800">September</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 4. Wildflower Meadow Table (Purple/Lilac + Soft Hover)
// ------------------------------
export const Table4WildflowerMeadow = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-xl shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-purple-50 border-r-4 border-purple-300">
            <th className="px-6 py-4 text-left text-base font-medium text-purple-900">
              Flower Type
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-purple-900">
              Bloom Time
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-purple-900">
              Color
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-purple-100">
          <tr className="hover:bg-purple-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-purple-800">Lavender</td>
            <td className="px-6 py-3 text-sm text-purple-800">June-August</td>
            <td className="px-6 py-3 text-sm text-purple-800">Lilac</td>
          </tr>
          <tr className="hover:bg-purple-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-purple-800">Poppy</td>
            <td className="px-6 py-3 text-sm text-purple-800">May-July</td>
            <td className="px-6 py-3 text-sm text-purple-800">Crimson</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 5. Mountain Stone Table (Neutral Gray + Textured Rows)
// ------------------------------
export const Table5MountainStone = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-left text-base font-medium text-slate-900">
              Mountain Peak
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-slate-900">
              Elevation (m)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-slate-900">
              Difficulty
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-50/50 hover:bg-slate-100 transition-colors">
            <td className="px-6 py-3 text-sm text-slate-800">North Peak</td>
            <td className="px-6 py-3 text-sm text-slate-800">2850</td>
            <td className="px-6 py-3 text-sm text-slate-800">Moderate</td>
          </tr>
          <tr className="bg-white hover:bg-slate-100 transition-colors">
            <td className="px-6 py-3 text-sm text-slate-800">Eagle Ridge</td>
            <td className="px-6 py-3 text-sm text-slate-800">3200</td>
            <td className="px-6 py-3 text-sm text-slate-800">Difficult</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 6. Honeycomb Table (Golden Yellow + Hex Accents)
// ------------------------------
export const Table6Honeycomb = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-full shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-yellow-50 border-b border-yellow-200">
            <th className="px-6 py-4 text-left text-base font-medium text-yellow-900">
              Bee Hive
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-yellow-900">
              Honey Production (kg)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-yellow-900">
              Queen Bee Age
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow-100">
          <tr className="hover:bg-yellow-50 transition-colors">
            <td className="px-6 py-3 text-sm text-yellow-800">Hive #12</td>
            <td className="px-6 py-3 text-sm text-yellow-800">45</td>
            <td className="px-6 py-3 text-sm text-yellow-800">2 yrs</td>
          </tr>
          <tr className="hover:bg-yellow-50 transition-colors">
            <td className="px-6 py-3 text-sm text-yellow-800">Hive #8</td>
            <td className="px-6 py-3 text-sm text-yellow-800">38</td>
            <td className="px-6 py-3 text-sm text-yellow-800">1.5 yrs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 7. Berry Bush Table (Crimson Red + Soft Rounded Edges)
// ------------------------------
export const Table7BerryBush = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-red-50 border-t-2 border-red-300">
            <th className="px-6 py-4 text-left text-base font-medium text-red-900">
              Berry Type
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-red-900">
              Harvest Season
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-red-900">
              Sweetness Level
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-red-100">
          <tr className="hover:bg-red-50/70 transition-colors">
            <td className="px-6 py-3 text-sm text-red-800">Strawberry</td>
            <td className="px-6 py-3 text-sm text-red-800">June-July</td>
            <td className="px-6 py-3 text-sm text-red-800">9/10</td>
          </tr>
          <tr className="hover:bg-red-50/70 transition-colors">
            <td className="px-6 py-3 text-sm text-red-800">Raspberry</td>
            <td className="px-6 py-3 text-sm text-red-800">July-August</td>
            <td className="px-6 py-3 text-sm text-red-800">8/10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 8. Mushroom Grove Table (Earthy Brown + Organic Shapes)
// ------------------------------
export const Table8MushroomGrove = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-stone-50 border-b border-stone-200">
            <th className="px-6 py-4 text-left text-base font-medium text-stone-900">
              Mushroom Type
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-stone-900">
              Growing Season
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-stone-900">
              Edible
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          <tr className="hover:bg-stone-50 transition-colors">
            <td className="px-6 py-3 text-sm text-stone-800">Shiitake</td>
            <td className="px-6 py-3 text-sm text-stone-800">Spring-Autumn</td>
            <td className="px-6 py-3 text-sm text-stone-800">Yes</td>
          </tr>
          <tr className="hover:bg-stone-50 transition-colors">
            <td className="px-6 py-3 text-sm text-stone-800">Chanterelle</td>
            <td className="px-6 py-3 text-sm text-stone-800">Summer</td>
            <td className="px-6 py-3 text-sm text-stone-800">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 9. Dew Drop Table (Cyan + Light Hover)
// ------------------------------
export const Table9DewDrop = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-xl shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-cyan-50 border-b border-cyan-200">
            <th className="px-6 py-4 text-left text-base font-medium text-cyan-900">
              Plant Type
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-cyan-900">
              Water Needs
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-cyan-900">
              Sunlight
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-cyan-100">
          <tr className="hover:bg-cyan-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-cyan-800">Fern</td>
            <td className="px-6 py-3 text-sm text-cyan-800">High</td>
            <td className="px-6 py-3 text-sm text-cyan-800">Shade</td>
          </tr>
          <tr className="hover:bg-cyan-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-cyan-800">Moss</td>
            <td className="px-6 py-3 text-sm text-cyan-800">Very High</td>
            <td className="px-6 py-3 text-sm text-cyan-800">Full Shade</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 10. Lavender Field Table (Lilac + Soft Gradient)
// ------------------------------
export const Table10LavenderField = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-gradient-to-r from-lilac-50 to-violet-50 border-b border-violet-200">
            <th className="px-6 py-4 text-left text-base font-medium text-violet-900">
              Lavender Variety
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-violet-900">
              Height (cm)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-violet-900">
              Fragrance Strength
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-violet-100">
          <tr className="hover:bg-violet-50 transition-colors">
            <td className="px-6 py-3 text-sm text-violet-800">
              English Lavender
            </td>
            <td className="px-6 py-3 text-sm text-violet-800">60</td>
            <td className="px-6 py-3 text-sm text-violet-800">Strong</td>
          </tr>
          <tr className="hover:bg-violet-50 transition-colors">
            <td className="px-6 py-3 text-sm text-violet-800">
              French Lavender
            </td>
            <td className="px-6 py-3 text-sm text-violet-800">45</td>
            <td className="px-6 py-3 text-sm text-violet-800">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 11. Volcano Rock Table (Rose + Bold Accents)
// ------------------------------
export const Table11VolcanoRock = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-rose-50 border-l-4 border-rose-400">
            <th className="px-6 py-4 text-left text-base font-medium text-rose-900">
              Volcano Site
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-rose-900">
              Last Eruption
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-rose-900">
              Activity Level
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-rose-100">
          <tr className="hover:bg-rose-50/70 transition-colors">
            <td className="px-6 py-3 text-sm text-rose-800">Mount Hale</td>
            <td className="px-6 py-3 text-sm text-rose-800">1987</td>
            <td className="px-6 py-3 text-sm text-rose-800">Low</td>
          </tr>
          <tr className="hover:bg-rose-50/70 transition-colors">
            <td className="px-6 py-3 text-sm text-rose-800">Red Crater</td>
            <td className="px-6 py-3 text-sm text-rose-800">2001</td>
            <td className="px-6 py-3 text-sm text-rose-800">Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 12. Bamboo Grove Table (Lime Green + Clean Lines)
// ------------------------------
export const Table12BambooGrove = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-xl shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-lime-50 border-b border-lime-200">
            <th className="px-6 py-4 text-left text-base font-medium text-lime-900">
              Bamboo Type
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-lime-900">
              Growth Rate (cm/day)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-lime-900">
              Max Height (m)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-lime-100">
          <tr className="hover:bg-lime-50 transition-colors">
            <td className="px-6 py-3 text-sm text-lime-800">Moso Bamboo</td>
            <td className="px-6 py-3 text-sm text-lime-800">91</td>
            <td className="px-6 py-3 text-sm text-lime-800">28</td>
          </tr>
          <tr className="hover:bg-lime-50 transition-colors">
            <td className="px-6 py-3 text-sm text-lime-800">Black Bamboo</td>
            <td className="px-6 py-3 text-sm text-lime-800">30</td>
            <td className="px-6 py-3 text-sm text-lime-800">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 13. Glacier Ice Table (Cool Blue + Frosty Hover)
// ------------------------------
export const Table13GlacierIce = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-blue-50 border-b border-blue-200">
            <th className="px-6 py-4 text-left text-base font-medium text-blue-900">
              Glacier Name
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-blue-900">
              Size (km²)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-blue-900">
              Temperature (°C)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-100">
          <tr className="hover:bg-blue-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-blue-800">Arctic Glacier</td>
            <td className="px-6 py-3 text-sm text-blue-800">1200</td>
            <td className="px-6 py-3 text-sm text-blue-800">-12</td>
          </tr>
          <tr className="hover:bg-blue-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-blue-800">Alpine Glacier</td>
            <td className="px-6 py-3 text-sm text-blue-800">450</td>
            <td className="px-6 py-3 text-sm text-blue-800">-8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 14. Mint Herb Table (Fresh Green + Soft Rounded)
// ------------------------------
export const Table14MintHerb = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-teal-50 border-t-2 border-teal-300">
            <th className="px-6 py-4 text-left text-base font-medium text-teal-900">
              Herb Type
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-teal-900">
              Uses
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-teal-900">
              Growing Zone
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-teal-100">
          <tr className="hover:bg-teal-50 transition-colors">
            <td className="px-6 py-3 text-sm text-teal-800">Peppermint</td>
            <td className="px-6 py-3 text-sm text-teal-800">Tea, Flavoring</td>
            <td className="px-6 py-3 text-sm text-teal-800">3-7</td>
          </tr>
          <tr className="hover:bg-teal-50 transition-colors">
            <td className="px-6 py-3 text-sm text-teal-800">Basil</td>
            <td className="px-6 py-3 text-sm text-teal-800">Cooking, Pesto</td>
            <td className="px-6 py-3 text-sm text-teal-800">4-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 15. Autumn Maple Table (Orange + Warm Hues)
// ------------------------------
export const Table15AutumnMaple = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-xl shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-orange-50 border-b border-orange-200">
            <th className="px-6 py-4 text-left text-base font-medium text-orange-900">
              Maple Tree
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-orange-900">
              Leaf Color
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-orange-900">
              Sap Production (L)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-100">
          <tr className="hover:bg-orange-50 transition-colors">
            <td className="px-6 py-3 text-sm text-orange-800">Sugar Maple</td>
            <td className="px-6 py-3 text-sm text-orange-800">Red/Orange</td>
            <td className="px-6 py-3 text-sm text-orange-800">40</td>
          </tr>
          <tr className="hover:bg-orange-50 transition-colors">
            <td className="px-6 py-3 text-sm text-orange-800">Red Maple</td>
            <td className="px-6 py-3 text-sm text-orange-800">Bright Red</td>
            <td className="px-6 py-3 text-sm text-orange-800">25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 16. Pine Forest Table (Deep Teal + Earthy)
// ------------------------------
export const Table16PineForest = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-teal-50 border-r-4 border-teal-400">
            <th className="px-6 py-4 text-left text-base font-medium text-teal-900">
              Pine Species
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-teal-900">
              Needle Length (cm)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-teal-900">
              Cone Size (cm)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-teal-100">
          <tr className="hover:bg-teal-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-teal-800">Ponderosa Pine</td>
            <td className="px-6 py-3 text-sm text-teal-800">20</td>
            <td className="px-6 py-3 text-sm text-teal-800">15</td>
          </tr>
          <tr className="hover:bg-teal-50/80 transition-colors">
            <td className="px-6 py-3 text-sm text-teal-800">Scots Pine</td>
            <td className="px-6 py-3 text-sm text-teal-800">5</td>
            <td className="px-6 py-3 text-sm text-teal-800">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 17. Desert Bloom Table (Fuchsia + Arid Tones)
// ------------------------------
export const Table17DesertBloom = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-fuchsia-50 border-b border-fuchsia-200">
            <th className="px-6 py-4 text-left text-base font-medium text-fuchsia-900">
              Desert Flower
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-fuchsia-900">
              Bloom Time
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-fuchsia-900">
              Water Needs
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-fuchsia-100">
          <tr className="hover:bg-fuchsia-50 transition-colors">
            <td className="px-6 py-3 text-sm text-fuchsia-800">Desert Rose</td>
            <td className="px-6 py-3 text-sm text-fuchsia-800">Spring</td>
            <td className="px-6 py-3 text-sm text-fuchsia-800">Very Low</td>
          </tr>
          <tr className="hover:bg-fuchsia-50 transition-colors">
            <td className="px-6 py-3 text-sm text-fuchsia-800">
              Cactus Flower
            </td>
            <td className="px-6 py-3 text-sm text-fuchsia-800">Summer</td>
            <td className="px-6 py-3 text-sm text-fuchsia-800">Low</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 18. Misty Valley Table (Indigo + Soft Haze)
// ------------------------------
export const Table18MistyValley = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-xl shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-indigo-50 border-b border-indigo-200">
            <th className="px-6 py-4 text-left text-base font-medium text-indigo-900">
              Valley Name
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-indigo-900">
              Mist Frequency
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-indigo-900">
              Best Visit Time
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-indigo-100">
          <tr className="hover:bg-indigo-50 transition-colors">
            <td className="px-6 py-3 text-sm text-indigo-800">Blue Valley</td>
            <td className="px-6 py-3 text-sm text-indigo-800">Daily</td>
            <td className="px-6 py-3 text-sm text-indigo-800">Morning</td>
          </tr>
          <tr className="hover:bg-indigo-50 transition-colors">
            <td className="px-6 py-3 text-sm text-indigo-800">Green Hollow</td>
            <td className="px-6 py-3 text-sm text-indigo-800">3x/week</td>
            <td className="px-6 py-3 text-sm text-indigo-800">Evening</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 19. Sand Dune Table (Amber + Warm Earth)
// ------------------------------
export const Table19SandDune = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-amber-100 border-b border-amber-300">
            <th className="px-6 py-4 text-left text-base font-medium text-amber-900">
              Dune System
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-amber-900">
              Height (m)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-amber-900">
              Wind Direction
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-amber-200">
          <tr className="hover:bg-amber-50 transition-colors">
            <td className="px-6 py-3 text-sm text-amber-800">Coastal Dunes</td>
            <td className="px-6 py-3 text-sm text-amber-800">15</td>
            <td className="px-6 py-3 text-sm text-amber-800">West</td>
          </tr>
          <tr className="hover:bg-amber-50 transition-colors">
            <td className="px-6 py-3 text-sm text-amber-800">Inland Dunes</td>
            <td className="px-6 py-3 text-sm text-amber-800">30</td>
            <td className="px-6 py-3 text-sm text-amber-800">North</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// 20. Rainy Meadow Table (Azure + Fresh Wet)
// ------------------------------
export const Table20RainyMeadow = () => {
  return (
    <div className="max-w-3xl my-6 overflow-hidden rounded-lg shadow-sm">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-sky-50 border-t-2 border-sky-300">
            <th className="px-6 py-4 text-left text-base font-medium text-sky-900">
              Meadow Area
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-sky-900">
              Annual Rainfall (mm)
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-sky-900">
              Grass Type
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sky-100">
          <tr className="hover:bg-sky-50 transition-colors">
            <td className="px-6 py-3 text-sm text-sky-800">Green Pasture</td>
            <td className="px-6 py-3 text-sm text-sky-800">1200</td>
            <td className="px-6 py-3 text-sm text-sky-800">
              Kentucky Bluegrass
            </td>
          </tr>
          <tr className="hover:bg-sky-50 transition-colors">
            <td className="px-6 py-3 text-sm text-sky-800">Wild Meadow</td>
            <td className="px-6 py-3 text-sm text-sky-800">950</td>
            <td className="px-6 py-3 text-sm text-sky-800">Mixed Native</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ------------------------------
// Combined Component (All 20 Tables)
// ------------------------------
export default function AllTheTables() {
  return (
    <>
      <div>
        <Table1ForestCanopy />
        <Table2OceanTide />
        <Table3SunsetBlush />
        <Table4WildflowerMeadow />
        <Table5MountainStone />
        <Table6Honeycomb />
        <Table7BerryBush />
        <Table8MushroomGrove />
        <Table9DewDrop />
        <Table10LavenderField />
        <Table11VolcanoRock />
        <Table12BambooGrove />
        <Table13GlacierIce />
        <Table14MintHerb />
        <Table15AutumnMaple />
        <Table16PineForest />
        <Table17DesertBloom />
        <Table18MistyValley />
        <Table19SandDune />
        <Table20RainyMeadow />
      </div>
    </>
  );
}
