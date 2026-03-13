import { AlertCircle } from "lucide-react";

export default function StudyNotice() {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded shadow-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-amber-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider">
            Important Notice / သတိပေးချက်
          </h3>
          <div className="mt-2 text-sm text-amber-800 space-y-2">
            <p className="leading-relaxed">
              ဤ Website ရှိ သင်ခန်းစာများသည် လေ့လာသူများအတွက် အထောက်အကူဖြစ်စေရန်
              ပြုစုထားခြင်းဖြစ်သော်လည်း အောက်ပါအချက်များကို သတိပြုပေးစေလိုပါသည်။
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1 font-medium">
              <li>
                <span className="text-red-700">Missing Characters:</span>{" "}
                အချို့သော **Hanzi (တရုတ်စာ)** နှင့် **Japanese (ဂျပန်စာ)**
                လက္ခဏာများ၊ စာလုံးများ ကျန်ရှိနေခြင်း သို့မဟုတ် အမှားအယွင်းများ
                ရှိနိုင်ပါသည်။
              </li>
              <li>
                <span className="text-red-700">Translation Accuracy:</span>{" "}
                မြန်မာဘာသာပြန်ဆိုချက်များသည် စက်ဖြင့်ပြန်ဆိုထားခြင်း
                ဖြစ်၍ အဓိပ္ပာယ်အနည်းငယ်
                လွဲမှားမှုရှိနိုင်ပါသည်။
              </li>
              <li>
                <span className="text-red-700">Code Stability:</span>{" "}
                Programming code နမူနာများကို အသုံးပြုရာတွင် သတိထားပါ။
                အချို့နေရာများတွင် syntax အမှားများ ပါဝင်နေနိုင်ပါသည်။
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
