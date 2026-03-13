
import { Link } from "react-router";

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            အနာဂတ်အတွက် <span className="text-green-600">ပညာစွမ်းအား</span>{" "}
            <br />
            ဒီမှာစတင်လေ့လာစို့
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-1 max-w-2xl mx-auto">
            တရုတ်စာ၊ ဂျပန်စာနဲ့ နည်းပညာဘာသာရပ်တွေကို အခြေခံမှစပြီး စနစ်တကျ
            လေ့လာနိုင်ဖို့ ကျွန်ုပ်တို့ရဲ့ ဝက်ဘ်ဆိုက်မှ ကြိုဆိုပါတယ်။
          </p>
         
        </div>

        {/* Decorative background circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">ဘာသာရပ်များ</h2>
            <div className="h-1 w-20 bg-green-500 mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Chinese Card */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">🇨🇳</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              တရုတ်စာ (HSK)
            </h3>
            <p className="text-gray-600 mb-6">
              HSK 1 မှ 4 အထိ စနစ်တကျ ဗီဒီယိုများ၊ ဝေါဟာရများနှင့်
              လေ့လာနိုင်ပါသည်။
            </p>
            <Link
              to="/hsk1"
              className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              လေ့လာမယ် <span>→</span>
            </Link>
          </div>

          {/* Japanese Card */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">🇯🇵</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ဂျပန်စာ (JLPT)
            </h3>
            <p className="text-gray-600 mb-6">
              N5 မှ N1 အထိ သဒ္ဒါ၊ ဝေါဟာရနှင့် နားထောင်မှု စွမ်းရည်များကို
              မြှင့်တင်ပါ။
            </p>
            <Link
              to="/japan"
              className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              လေ့လာမယ် <span>→</span>
            </Link>
          </div>

          {/* Tech Card */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Programming
            </h3>
            <p className="text-gray-600 mb-6">
              HTML, CSS, JavaScript နှင့် Python ဘာသာရပ်များကို
              လက်တွေ့လုပ်ဆောင်ရင်း လေ့လာပါ။
            </p>
            <Link
              to="/html"
              className="text-green-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              လေ့လာမယ် <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
            <div className="text-gray-400">Videos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">1000+</div>
            <div className="text-gray-400">Vocabularies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
            <div className="text-gray-400">Free Access</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">5+</div>
            <div className="text-gray-400">Courses</div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <p className="text-sm">
              Free learning platform for HSK, JLPT, and Programming in Myanmar.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <p className="text-sm">Email: likeyou1389@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
