const datas =[
    { "id": 1, "character": "あ", "romaji": "a", "myanmar_pronunciation": "အာ" },
    { "id": 2, "character": "い", "romaji": "i", "myanmar_pronunciation": "အီ" },
    { "id": 3, "character": "う", "romaji": "u", "myanmar_pronunciation": "အု" },
    { "id": 4, "character": "え", "romaji": "e", "myanmar_pronunciation": "အေး" },
    { "id": 5, "character": "お", "romaji": "o", "myanmar_pronunciation": "အို" },
    { "id": 6, "character": "か", "romaji": "ka", "myanmar_pronunciation": "ခါ" },
    { "id": 7, "character": "き", "romaji": "ki", "myanmar_pronunciation": "ခီ" },
    { "id": 8, "character": "く", "romaji": "ku", "myanmar_pronunciation": "ခု" },
    { "id": 9, "character": "け", "romaji": "ke", "myanmar_pronunciation": "ခေး" },
    { "id": 10, "character": "こ", "romaji": "ko", "myanmar_pronunciation": "ခို" }
  ]



const data =  [
    { "id": 1, "character": "ア", "romaji": "a", "myanmar_pronunciation": "အာ" },
    { "id": 2, "character": "イ", "romaji": "i", "myanmar_pronunciation": "အီ" },
    { "id": 3, "character": "ウ", "romaji": "u", "myanmar_pronunciation": "အု" },
    { "id": 4, "character": "エ", "romaji": "e", "myanmar_pronunciation": "အေး" },
    { "id": 5, "character": "オ", "romaji": "o", "myanmar_pronunciation": "အို" },
    { "id": 6, "character": "カ", "romaji": "ka", "myanmar_pronunciation": "ခါ" },
    { "id": 7, "character": "キ", "romaji": "ki", "myanmar_pronunciation": "ခီ" },
    { "id": 8, "character": "ク", "romaji": "ku", "myanmar_pronunciation": "ခု" },
    { "id": 9, "character": "ケ", "romaji": "ke", "myanmar_pronunciation": "ခေး" },
    { "id": 10, "character": "コ", "romaji": "ko", "myanmar_pronunciation": "ခို" }
  ]

export default function N5alphabet() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-gray-700 text-center">
          <h1 className="text-gray-700 font-semibold">Hsk - 1</h1>
        </div>
        <div className="overflow-x-auto rounded-lg ">
          <table className="w-full bg-white">
            <thead>
              <tr className=" text-gray-700">
                <th className="px-4 py-3 text-left">No.</th>
                <th className="px-6 py-3 text-left">Japanese</th>
                <th className="px-6 py-3 text-left">Hiragana</th>
                <th className="px-6 py-3 text-left">Burmese</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-700">{item.id}</td>
                  <td className="px-6 py-3 text-gray-800 font-medium">
                    {item.chinese}
                  </td>
                  <td className="px-6 py-3 text-gray-700">{item.character}</td>
                  <td className="px-6 py-3 text-gray-700">{item.romaji}</td>
                  <td className="px-6 py-3 text-gray-700">
                    {item.myanmar_pronunciation}
                  </td>
                </tr>
              ))}
            </tbody>

            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-700">{item.id}</td>
                  <td className="px-6 py-3 text-gray-800 font-medium">
                    {item.chinese}
                  </td>
                  <td className="px-6 py-3 text-gray-700">{item.character}</td>
                  <td className="px-6 py-3 text-gray-700">{item.romaji}</td>
                  <td className="px-6 py-3 text-gray-700">
                    {item.myanmar_pronunciation}
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