import StudyNotice from "../../note";
import data from "./hsk4file";

const items = data.filter(
  (i) =>
    i.category.toLowerCase() === "action"
);

function Hsk4verbs() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-gray-700 text-center">
        <h1 className="text-gray-700 font-semibold">Hsk - 4</h1>
      </div>
      <div className="overflow-x-auto rounded-lg ">
        <table className="w-full bg-white">
          <thead>
            <tr className=" text-gray-700">
              <th className="px-6 py-3 text-left">Hanzi</th>
              <th className="px-6 py-3 text-left">Pinyin</th>
              <th className="px-6 py-3 text-left">Burmese</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3 text-gray-800 font-medium">
                  {item.hanzi}
                </td>
                <td className="px-6 py-3 text-gray-700">{item.pinyin}</td>
                <td className="px-6 py-3 text-gray-700">{item.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer>
        <StudyNotice/>
      </footer>
    </div>
  );
}

export default Hsk4verbs;
