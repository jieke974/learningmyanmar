import StudyNotice from "../../note";
import { data } from "./main";

export default function N1voca() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        {/* Beautiful Title Section */}
        <div className="relative mb-8 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* N1 Badge */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                <span className="text-2xl font-black tracking-tighter">N1</span>
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                  JLPT Vocabulary List
                </h1>
                <p className="text-gray-500 text-sm md:text-base font-medium">
                  Advanced Level • ဂျပန်စာ အဆင့်မြင့် ဝေါဟာရများ
                </p>
              </div>
            </div>

            {/* Total Count Badge (Optional) */}
            <div className="hidden md:block bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
              <span className="text-gray-600 text-sm font-semibold">
                Total: {data.length} Words
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
          <table className="w-full bg-white">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className="text-gray-600 uppercase text-xs tracking-wider">
                <th className="px-4 py-4 text-left font-bold">No.</th>
                <th className="px-6 py-4 text-left font-bold">
                  Japanese (Kanji)
                </th>
                <th className="px-6 py-4 text-left font-bold">
                  Burmese (Meaning)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-red-50/30 transition-all duration-200"
                >
                  <td className="px-4 py-4 text-gray-500 font-mono text-sm">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-bold text-lg">
                    {item.kanji}
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed font-medium">
                    {item.myanmar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="mt-8">
          <StudyNotice />
        </footer>
      </div>
    </>
  );
}
