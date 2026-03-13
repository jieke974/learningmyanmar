import {main} from "./n4data"

export default function N4voca() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        {/* Modern N1 Title Header */}
        <div className="relative mb-8 flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {/* N1 Badge with Red Gradient */}
          <div className="flex-shrink-0 bg-gradient-to-br from-red-500 to-rose-700 text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-red-200 shadow-lg font-black text-2xl -rotate-3">
            N4
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-tight">
              N4
            </h1>
            <p className="text-rose-600 font-medium flex items-center gap-2 text-sm md:text-base">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              ဝေါဟာရများ
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200 bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-wider">
                <th className="px-6 py-4 text-left">No.</th>
                <th className="px-6 py-4 text-left">Kanji</th>
                <th className="px-6 py-4 text-left">Hiragana / Reading</th>
                <th className="px-6 py-4 text-left">Myanmar Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {main.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-rose-50/50 transition-all duration-200"
                >
                  <td className="px-6 py-4 text-gray-400 font-mono text-sm group-hover:text-rose-500 transition-colors">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-bold text-lg tracking-wide">
                    {item.kanji}
                  </td>
                  <td className="px-6 py-4 text-rose-600 font-medium italic">
                    {item.hiragana}
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-medium leading-relaxed">
                    {item.myanmar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
