const datas =  [
    { "id": 1, "chinese": "是", "pinyin": "shì", "myanmar": "ဖြစ်သည်/ဟုတ်သည်" },
    { "id": 2, "chinese": "有", "pinyin": "yǒu", "myanmar": "ရှိသည်" },
    { "id": 3, "chinese": "看", "pinyin": "kàn", "myanmar": "ကြည့်သည်/ဖတ်သည်" },
    { "id": 4, "chinese": "听", "pinyin": "tīng", "myanmar": "နားထောင်သည်" },
    { "id": 5, "chinese": "说话", "pinyin": "shuōhuà", "myanmar": "စကားပြောသည်" },
    { "id": 6, "chinese": "读", "pinyin": "dú", "myanmar": "ဖတ်သည်" },
    { "id": 7, "chinese": "写", "pinyin": "xiě", "myanmar": "ရေးသည်" },
    { "id": 8, "chinese": "看见", "pinyin": "kànjiàn", "myanmar": "မြင်သည်" },
    { "id": 9, "chinese": "听见", "pinyin": "tīngjiàn", "myanmar": "ကြားသည်" },
    { "id": 10, "chinese": "叫", "pinyin": "jiào", "myanmar": "ခေါ်သည် (အမည်)" },
    { "id": 11, "chinese": "买", "pinyin": "mǎi", "myanmar": "ဝယ်သည်" },
    { "id": 12, "chinese": "开", "pinyin": "kāi", "myanmar": "ဖွင့်သည်/မောင်းသည်" },
    { "id": 13, "chinese": "坐", "pinyin": "zuò", "myanmar": "ထိုင်သည်" },
    { "id": 14, "chinese": "住", "pinyin": "zhù", "myanmar": "နေထိုင်သည်" },
    { "id": 15, "chinese": "来", "pinyin": "lái", "myanmar": "လာသည်" },
    { "id": 16, "chinese": "去", "pinyin": "qù", "myanmar": "သွားသည်" },
    { "id": 17, "chinese": "回", "pinyin": "huí", "myanmar": "ပြန်သည်" },
    { "id": 18, "chinese": "想", "pinyin": "xiǎng", "myanmar": "ချင်သည်/စဉ်းစားသည်" },
    { "id": 19, "chinese": "吃", "pinyin": "chī", "myanmar": "စားသည်" },
    { "id": 20, "chinese": "喝", "pinyin": "hē", "myanmar": "သောက်သည်" },
    { "id": 21, "chinese": "睡觉", "pinyin": "shuìjiào", "myanmar": "အိပ်စက်သည်" },
    { "id": 22, "chinese": "打电话", "pinyin": "dǎ diànhuà", "myanmar": "ဖုန်းဆက်သည်" },
    { "id": 23, "chinese": "做", "pinyin": "zuò", "myanmar": "လုပ်သည်" },
    { "id": 24, "chinese": "工作", "pinyin": "gōngzuò", "myanmar": "အလုပ်လုပ်သည်" },
    { "id": 25, "chinese": "学习", "pinyin": "xuéxí", "myanmar": "လေ့လာသင်ယူသည်" },
    { "id": 26, "chinese": "会", "pinyin": "huì", "myanmar": "တတ်မြောက်သည်/လိမ့်မည်" },
    { "id": 27, "chinese": "能", "pinyin": "néng", "myanmar": "နိုင်သည်/တတ်နိုင်သည်" },
    { "id": 28, "chinese": "认识", "pinyin": "rènshi", "myanmar": "သိကျွမ်းသည်" },
    { "id": 29, "chinese": "谢谢", "pinyin": "xièxie", "myanmar": "ကျေးဇူးတင်ပါတယ်" },
    { "id": 30, "chinese": "再见", "pinyin": "zàijiàn", "myanmar": "နှုတ်ဆက်ပါတယ်/နောက်မှတွေ့မယ်" }
  ]
import StudyNotice from "../../note";

  function Hsk1verbs() {
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

  export default Hsk1verbs;

