import datas from "./hsk2file";
export default function Hsk2voca(){

   
    return (
      <>
        <div className="max-w-6xl mx-auto p-4">
          <div className="text-gray-700 text-center">
            <h1 className="text-gray-700 font-semibold">Hsk - 2</h1>
          </div>
          <div className="overflow-x-auto rounded-lg ">
            <table className="w-full bg-white">
              <thead>
                <tr className=" text-gray-700">
                  <th className="px-4 py-3 text-left">No.</th>
                  <th className="px-6 py-3 text-left">Hanzi</th>
                  <th className="px-6 py-3 text-left">Pinyin</th>
                  <th className="px-6 py-3 text-left">Types</th>
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
                    <td className="px-6 py-3 text-gray-700">{item.pinyin}</td>
                    <td className="px-6 py-3 text-gray-700">{item.category}</td>
                    <td className="px-6 py-3 text-gray-700">{item.correct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}