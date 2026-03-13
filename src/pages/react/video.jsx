const videos = [
  {
    id: 0,
    video_id: "dSAtdVwO1I8",
    title: "React အခြေခံ - 01: ReactJs ကို ဘယ်လို install လုပ်မလဲ",
    embedUrl: "https://www.youtube.com/embed/dSAtdVwO1I8",
  },
  {
    id: 1,
    video_id: "tiULJKnIqw0",
    title: "React အခြေခံ - 02: ReactJs Components အကြောင်း",
    embedUrl: "https://www.youtube.com/embed/tiULJKnIqw0",
  },
  {
    id: 2,
    video_id: "_F8onpxkwBk",
    title: "React အခြေခံ - 03 : React Component in More Details",
    embedUrl: "https://www.youtube.com/embed/_F8onpxkwBk",
  },
  {
    id: 3,
    video_id: "gppEmVOThfg",
    title: "React အခြေခံ - 04 : JSX Rules",
    embedUrl: "https://www.youtube.com/embed/gppEmVOThfg",
  },
  {
    id: 4,
    video_id: "WTfJugu7BpE",
    title: "React အခြေခံ - 05 : JSX-CSS And JSX-Javascript",
    embedUrl: "https://www.youtube.com/embed/WTfJugu7BpE",
  },
  {
    id: 5,
    video_id: "BxnWwUwoeK8",
    title: "React အခြေခံ - 06 : React Props",
    embedUrl: "https://www.youtube.com/embed/BxnWwUwoeK8",
  },
  {
    id: 6,
    video_id: "o2QTjsdhCjo",
    title: "React အခြေခံ - 07 : Destructuring Props in React",
    embedUrl: "https://www.youtube.com/embed/o2QTjsdhCjo",
  },
  {
    id: 7,
    video_id: "G3W4BNF7goA",
    title: "React အခြေခံ - 08 : Rendering Lists in React",
    embedUrl: "https://www.youtube.com/embed/G3W4BNF7goA",
  },
  {
    id: 8,
    video_id: "SiDB0Ij7MSk",
    title: "React အခြေခံ - 09 : React Events",
    embedUrl: "https://www.youtube.com/embed/SiDB0Ij7MSk",
  },
  {
    id: 9,
    video_id: "rCXT0FBIUJo",
    title: "React Hook Tutorial - 01 : useState",
    embedUrl: "https://www.youtube.com/embed/rCXT0FBIUJo",
  },
  {
    id: 10,
    video_id: "Iwu0oz9Ipbc",
    title: "React Hook Tutorial - 02 : Use Effect",
    embedUrl: "https://www.youtube.com/embed/Iwu0oz9Ipbc",
  },
  {
    id: 11,
    video_id: "MUDaJEBzlIs",
    title: "React Hook Tutorial - 04 : Use Reducer",
    embedUrl: "https://www.youtube.com/embed/MUDaJEBzlIs",
  },
  {
    id: 12,
    video_id: "v8vPaXCDl1w",
    title: "React Hook Tutorial - 05 : useContext / Context Api",
    embedUrl: "https://www.youtube.com/embed/v8vPaXCDl1w",
  },
  {
    id: 13,
    video_id: "HBOCa5lKhPw",
    title: "React Router v6 Myanmar: The Complete Guide",
    embedUrl: "https://www.youtube.com/embed/HBOCa5lKhPw",
  },
  {
    id: 14,
    video_id: "2ZMRVbgVS3k",
    title: "React Custom Hooks ကိုဘယ်လိုဖန်တီးမလဲ",
    embedUrl: "https://www.youtube.com/embed/2ZMRVbgVS3k",
  },
  {
    id: 15,
    video_id: "DDHTwDNuA3k",
    title: "ReactJs: React Memo ကိုအသုံးပြုနည်း",
    embedUrl: "https://www.youtube.com/embed/DDHTwDNuA3k",
  },
  {
    id: 16,
    video_id: "_mvlgZ49UEo",
    title: "ReactJs: useCallBack Hook ကို ဘယ်လို အသုံးပြုမလဲ",
    embedUrl: "https://www.youtube.com/embed/_mvlgZ49UEo",
  },
  {
    id: 17,
    video_id: "BYkdJT7VYm0",
    title: "ReactJs: useMemo Hook ကို ဘယ်လို အသုံးပြုမလဲ",
    embedUrl: "https://www.youtube.com/embed/BYkdJT7VYm0",
  },
  {
    id: 18,
    video_id: "PsEFBVqD2MQ",
    title: "React Hook Tutorial - 03 : useRef",
    embedUrl: "https://www.youtube.com/embed/PsEFBVqD2MQ",
  },
  {
    id: 19,
    video_id: "sb7qxjPEcwg",
    title: "Redux Toolkit နှင့် React ကို ကောင်းမွန်စွာ သုံးပြုခြင်း",
    embedUrl: "https://www.youtube.com/embed/sb7qxjPEcwg",
  },
];

import { useState } from "react";
import { useParams } from "react-router";
function Reactvideos() {
  const { id } = useParams();
  const [error, seterror] = useState(false);

  return (
    <div className="flex justify-center mt-15">
      {error ? (
        <p>Video can not be loaded</p>
      ) : (
        <iframe
          width="790"
          height="425"
          src={videos[id].embedUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          onError={() => seterror(true)}
        ></iframe>
      )}
    </div>
  );
}

export default Reactvideos;