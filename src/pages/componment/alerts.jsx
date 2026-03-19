
export const Alert1ForestGreen = () => {
  return (
    <>
      <div className="max-w-md mx-auto  my-4 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
            ✨
          </div>
          <div>
            <h3 className="font-medium text-emerald-800">
              Forest Notification
            </h3>
            <p className="text-sm text-emerald-700 mt-1">
              New growth spotted in the woodland area — thriving ecosystem!
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
};

// ------------------------------
// 2. Earthy Terracotta Alert (Clay/Soil)
// ------------------------------
export const Alert2Terracotta = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-orange-50 border-t-4 border-orange-600 rounded-b-lg shadow-md">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-tl-full rounded-br-full bg-orange-100 flex items-center justify-center text-orange-700">
          🌱
        </div>
        <div>
          <h3 className="font-medium text-orange-800">Soil Update</h3>
          <p className="text-sm text-orange-700 mt-1">
            Soil moisture levels optimal for planting seasonal vegetables.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 3. Ocean Blue Alert (Water/Coastal)
// ------------------------------
export const Alert3OceanBlue = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-sky-50 rounded-lg shadow-md border border-sky-200 relative overflow-hidden">
      {/* Subtle water wave texture */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-300 to-sky-500"></div>
      <div className="flex items-start gap-3 relative z-10 pt-2">
        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700">
          🌊
        </div>
        <div>
          <h3 className="font-medium text-sky-800">Coastal Alert</h3>
          <p className="text-sm text-sky-700 mt-1">
            Gentle tide expected — perfect for morning beach walks.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 4. Sunset Pink Alert (Dusk/Sunset)
// ------------------------------
export const Alert4SunsetPink = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 rounded-lg shadow-md bg-gradient-to-r from-pink-50 to-rose-50 border border-rose-100">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-700">
          🌅
        </div>
        <div>
          <h3 className="font-medium text-rose-800">Sunset Reminder</h3>
          <p className="text-sm text-rose-700 mt-1">
            Sunset at 7:42 PM tonight — clear skies for viewing.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 5. Stone Gray Alert (Rock/Stone)
// ------------------------------
export const Alert5StoneGray = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-slate-50 rounded-lg shadow-md border border-slate-200">
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 bg-slate-200 flex items-center justify-center text-slate-700"
          style={{ borderRadius: "8px" }}
        >
          🪨
        </div>
        <div>
          <h3 className="font-medium text-slate-800">Trail Update</h3>
          <p className="text-sm text-slate-700 mt-1">
            Stone path cleared — safe hiking conditions today.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 6. Wildflower Purple Alert (Meadow)
// ------------------------------
export const Alert6WildflowerPurple = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-purple-50 rounded-lg shadow-md border-r-4 border-purple-500">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
          🌸
        </div>
        <div>
          <h3 className="font-medium text-purple-800">Meadow Bloom</h3>
          <p className="text-sm text-purple-700 mt-1">
            Wildflowers in full bloom — peak viewing this week.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 7. Honey Yellow Alert (Bee/Honeycomb)
// ------------------------------
export const Alert7HoneyYellow = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-amber-50 rounded-lg shadow-md border border-amber-200">
      {/* Honeycomb texture detail */}
      <div className="absolute top-2 right-2 text-amber-200 text-xs">⬢⬢⬢</div>
      <div className="flex items-start gap-3 relative z-10">
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
          🐝
        </div>
        <div>
          <h3 className="font-medium text-amber-800">Hive Update</h3>
          <p className="text-sm text-amber-700 mt-1">
            Bee colony thriving — honey production up 15%.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 8. Moss Green Alert (Forest Floor)
// ------------------------------
export const Alert8MossGreen = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-green-50 rounded-lg shadow-md border border-green-200">
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 bg-green-100 flex items-center justify-center text-green-700"
          style={{ borderRadius: "10px 2px 10px 2px" }}
        >
          🍃
        </div>
        <div>
          <h3 className="font-medium text-green-800">Moss Growth</h3>
          <p className="text-sm text-green-700 mt-1">
            Moss thriving in shaded areas — natural insulation.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 9. Sand Beige Alert (Desert/Beach)
// ------------------------------
export const Alert9SandBeige = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-yellow-50 rounded-lg shadow-md border border-yellow-200">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700">
          🏜️
        </div>
        <div>
          <h3 className="font-medium text-yellow-800">Desert Conditions</h3>
          <p className="text-sm text-yellow-700 mt-1">
            Cooler temperatures expected — ideal for desert hikes.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 10. Misty Blue A

export const Alert10MistyBlue = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-blue-50 rounded-lg shadow-md border border-blue-100">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 opacity-80">
          💨
        </div>
        <div>
          <h3 className="font-medium text-blue-800">Morning Mist</h3>
          <p className="text-sm text-blue-700 mt-1 opacity-80">
            Light fog this morning — clears by 10 AM.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 11. Autumn Orange Alert (Fall Leaves)
// ------------------------------
export const Alert11AutumnOrange = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-orange-50 rounded-lg shadow-md border border-orange-200">
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 bg-orange-100 flex items-center justify-center text-orange-700"
          style={{ borderRadius: "0 8px 0 8px" }}
        >
          🍂
        </div>
        <div>
          <h3 className="font-medium text-orange-800">Fall Update</h3>
          <p className="text-sm text-orange-700 mt-1">
            Leaves starting to change — peak color in 2 weeks.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 12. Pine Green Alert (Evergreen)
// ------------------------------
export const Alert12PineGreen = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-teal-50 rounded-lg shadow-md border-l-4 border-teal-700">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
          🎄
        </div>
        <div>
          <h3 className="font-medium text-teal-800">Pine Forest</h3>
          <p className="text-sm text-teal-700 mt-1">
            Evergreen trees healthy — no pest activity detected.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 13. Berry Red Alert (Wild Berries)
// ------------------------------
export const Alert13BerryRed = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-red-50 rounded-lg shadow-md border border-red-100">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700">
          🍒
        </div>
        <div>
          <h3 className="font-medium text-red-800">Berry Harvest</h3>
          <p className="text-sm text-red-700 mt-1">
            Wild berries ripe for picking — sustainable harvest only.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 14. Mushroom Brown Alert (Fungi)
// ------------------------------
export const Alert14MushroomBrown = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-brown-50 rounded-lg shadow-md border border-brown-200">
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 bg-brown-100 flex items-center justify-center text-brown-700"
          style={{ borderRadius: "50% 50% 2px 2px" }}
        >
          🍄
        </div>
        <div>
          <h3 className="font-medium text-brown-800">Fungi Spotting</h3>
          <p className="text-sm text-brown-700 mt-1">
            Edible mushrooms growing in damp woodland areas.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 15. Dew Drop Alert (Morning Dew)
// ------------------------------
export const Alert15DewDrop = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-cyan-50 rounded-lg shadow-md border border-cyan-100">
      {/* Dew drop detail */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-300"></div>
      <div className="flex items-start gap-3 relative z-10">
        <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
          💧
        </div>
        <div>
          <h3 className="font-medium text-cyan-800">Morning Dew</h3>
          <p className="text-sm text-cyan-700 mt-1">
            Heavy dew overnight — water plants less today.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 16. Lavender Lilac Alert (Herbs)
// ------------------------------
export const Alert16LavenderLilac = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-lilac-50 rounded-lg shadow-md border border-lilac-100">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-lilac-100 flex items-center justify-center text-lilac-700">
          💜
        </div>
        <div>
          <h3 className="font-medium text-lilac-800">Lavender Harvest</h3>
          <p className="text-sm text-lilac-700 mt-1">
            Lavender ready for cutting — best time is morning.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 17. Volcano Red Alert (Warning/Nature Danger)
// ------------------------------
export const Alert17VolcanoRed = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-red-50 rounded-lg shadow-md border-l-4 border-red-600">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700">
          🌋
        </div>
        <div>
          <h3 className="font-medium text-red-800">Weather Warning</h3>
          <p className="text-sm text-red-700 mt-1">
            Strong winds expected — secure outdoor items.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 18. Bamboo Green Alert (Tropical)
// ------------------------------
export const Alert18BambooGreen = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-lime-50 rounded-lg shadow-md border border-lime-200">
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 bg-lime-100 flex items-center justify-center text-lime-700"
          style={{ borderRadius: "2px" }}
        >
          🎍
        </div>
        <div>
          <h3 className="font-medium text-lime-800">Bamboo Growth</h3>
          <p className="text-sm text-lime-700 mt-1">
            Bamboo shoots sprouting — trim to control spread.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 19. Glacier Blue Alert (Ice/Snow)
// ------------------------------
export const Alert19GlacierBlue = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-cold-50 rounded-lg shadow-md border border-cold-100">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-cold-100 flex items-center justify-center text-cold-700">
          ❄️
        </div>
        <div>
          <h3 className="font-medium text-cold-800">Mountain Update</h3>
          <p className="text-sm text-cold-700 mt-1">
            Light snowfall at higher elevations — traction advised.
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// 20. Garden Mint Alert (Herb Garden)
// ------------------------------
export const Alert20GardenMint = () => {
  return (
    <div className="max-w-md mx-auto my-4 p-4 bg-mint-50 rounded-lg shadow-md border-t-4 border-mint-500">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center text-mint-700">
          🌿
        </div>
        <div>
          <h3 className="font-medium text-mint-800">Herb Garden</h3>
          <p className="text-sm text-mint-700 mt-1">
            Mint overgrowing — harvest and dry for later use.
          </p>
        </div>
      </div>
    </div>
  );
};




export const Allalert =()=>{
  return (
    <>
    <div className="columns-1 md:columns-2">
      <Alert1ForestGreen/>
      <Alert2Terracotta />
      <Alert3OceanBlue />
      <Alert4SunsetPink />
      <Alert5StoneGray />
      <Alert6WildflowerPurple />
      <Alert7HoneyYellow />
      <Alert8MossGreen />
      <Alert9SandBeige />
      <Alert10MistyBlue />
      <Alert10MistyBlue />
      <Alert11AutumnOrange />
      <Alert12PineGreen />
      <Alert13BerryRed />
      <Alert14MushroomBrown />
      <Alert15DewDrop />
      <Alert16LavenderLilac />
      <Alert17VolcanoRed />
      <Alert18BambooGreen />
      <Alert19GlacierBlue />
      <Alert20GardenMint />
    
    </div>
    </>
  );
}