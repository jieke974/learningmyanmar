
const datas =  [
    {
      "id": 1,
      "chinese": "大",
      "pinyin": "dà",
      "myanmar": "ကြီးသော"
    },
    {
      "id": 2,
      "chinese": "小",
      "pinyin": "xiǎo",
      "myanmar": "သေးသော"
    },
    {
      "id": 3,
      "chinese": "多",
      "pinyin": "duō",
      "myanmar": "များသော"
    },
    {
      "id": 4,
      "chinese": "少",
      "pinyin": "shǎo",
      "myanmar": "နည်းသော"
    },
    {
      "id": 5,
      "chinese": "好",
      "pinyin": "hǎo",
      "myanmar": "ကောင်းသော"
    },
    {
      "id": 6,
      "chinese": "冷",
      "pinyin": "lěng",
      "myanmar": "အေးသော"
    },
    {
      "id": 7,
      "chinese": "热",
      "pinyin": "rè",
      "myanmar": "ပူသော"
    },
    {
      "id": 8,
      "chinese": "高兴",
      "pinyin": "gāoxìng",
      "myanmar": "ဝမ်းသာသော/ပျော်ရွှင်သော"
    },
    {
      "id": 9,
      "chinese": "漂亮",
      "pinyin": "piàoliang",
      "myanmar": "လှပသော"
    }
  ]




  function Hsk1adj(){
    return(
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
                          <th className="px-6 py-3 text-left">Hanzi</th>
                          <th className="px-6 py-3 text-left">Pinyin</th>
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
                            <td className="px-6 py-3 text-gray-700">{item.myanmar}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
        </>
    )
  }




  export default Hsk1adj