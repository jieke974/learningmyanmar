import StudyNotice from "../../note";
  const datas =  [
    { "id": 1, "chinese": "家", "pinyin": "jiā", "myanmar": "အိမ်/မိသားစု" },
    { "id": 2, "chinese": "学校", "pinyin": "xuéxiào", "myanmar": "ကျောင်း" },
    { "id": 3, "chinese": "饭馆", "pinyin": "fànguǎn", "myanmar": "စားသောက်ဆိုင်" },
    { "id": 4, "chinese": "商店", "pinyin": "shāngdiàn", "myanmar": "ဆိုင်" },
    { "id": 5, "chinese": "医院", "pinyin": "yīyuàn", "myanmar": "ဆေးရုံ" },
    { "id": 6, "chinese": "火车站", "pinyin": "huǒchēzhàn", "myanmar": "မီးရထားဘူတာ" },
    { "id": 7, "chinese": "中国", "pinyin": "zhōngguó", "myanmar": "တရုတ်နိုင်ငံ" },
    { "id": 8, "chinese": "北京", "pinyin": "běijīng", "myanmar": "ပေကျင်း" },
    { "id": 9, "chinese": "老师", "pinyin": "lǎoshī", "myanmar": "ဆရာ/ဆရာမ" },
    { "id": 10, "chinese": "学生", "pinyin": "xuéshēng", "myanmar": "ကျောင်းသား" },
    { "id": 11, "chinese": "同学", "pinyin": "tóngxué", "myanmar": "အတန်းဖော်" },
    { "id": 12, "chinese": "朋友", "pinyin": "péngyou", "myanmar": "သူငယ်ချင်း" },
    { "id": 13, "chinese": "医生", "pinyin": "yīshēng", "myanmar": "ဆရာဝန်" },
    { "id": 14, "chinese": "爸爸", "pinyin": "bàba", "myanmar": "အဖေ" },
    { "id": 15, "chinese": "妈妈", "pinyin": "māma", "myanmar": "အမေ" },
    { "id": 16, "chinese": "儿子", "pinyin": "érzi", "myanmar": "သား" },
    { "id": 17, "chinese": "女儿", "pinyin": "nǚ'ér", "myanmar": "သမီး" },
    { "id": 18, "chinese": "衣服", "pinyin": "yīfu", "myanmar": "အဝတ်အစား" },
    { "id": 19, "chinese": "水", "pinyin": "shuǐ", "myanmar": "ရေ" },
    { "id": 20, "chinese": "菜", "pinyin": "cài", "myanmar": "ဟင်း/ဟင်းသီးဟင်းရွက်" },
    { "id": 21, "chinese": "米饭", "pinyin": "mǐfàn", "myanmar": "ထမင်း" },
    { "id": 22, "chinese": "水果", "pinyin": "shuǐguǒ", "myanmar": "အသီးအနှံ" },
    { "id": 23, "chinese": "苹果", "pinyin": "píngguǒ", "myanmar": "ပန်းသီး" },
    { "id": 24, "chinese": "茶", "pinyin": "chá", "myanmar": "လက်ဖက်ရည်" },
    { "id": 25, "chinese": "杯子", "pinyin": "bēizi", "myanmar": "ခွက်" },
    { "id": 26, "chinese": "钱", "pinyin": "qián", "myanmar": "ပိုက်ဆံ" },
    { "id": 27, "chinese": "飞机", "pinyin": "fēijī", "myanmar": "လေယာဉ်ပျံ" },
    { "id": 28, "chinese": "出租车", "pinyin": "chūzūchē", "myanmar": "တက္ကစီ" },
    { "id": 29, "chinese": "电视", "pinyin": "diànshì", "myanmar": "တီဗွီ" },
    { "id": 30, "chinese": "电脑", "pinyin": "diànnǎo", "myanmar": "ကွန်ပျူတာ" },
    { "id": 31, "chinese": "电影", "pinyin": "diànyǐng", "myanmar": "ရုပ်ရှင်" },
    { "id": 32, "chinese": "猫", "pinyin": "māo", "myanmar": "ကြောင်" },
    { "id": 33, "chinese": "狗", "pinyin": "gǒu", "myanmar": "ခွေး" },
    { "id": 34, "chinese": "书", "pinyin": "shū", "myanmar": "စာအုပ်" },
    { "id": 35, "chinese": "字", "pinyin": "zì", "myanmar": "စာလုံး" },
    { "id": 36, "chinese": "桌子", "pinyin": "zhuōzi", "myanmar": "စားပွဲ" },
    { "id": 37, "chinese": "椅子", "pinyin": "yǐzi", "myanmar": "ကုလားထိုင်" },
    { "id": 38, "chinese": "今天", "pinyin": "jīntiān", "myanmar": "ဒီနေ့" },
    { "id": 39, "chinese": "明天", "pinyin": "míngtiān", "myanmar": "မနက်ဖြန်" },
    { "id": 40, "chinese": "昨天", "pinyin": "zuótiān", "myanmar": "မနေ့က" }
  ]


function Hsk1nouns() {
  return (
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
      <footer>
        <StudyNotice />
      </footer>
    </div>
  );
}

export default Hsk1nouns;

