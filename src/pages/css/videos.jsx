import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { useState} from "react";

const datas = [
  {
    id: "p5q1Ipp164Y",
    title: "Myanmar Web Developer - Episode 12 - Cascading Style Sheets (CSS)",
    embedUrl: "https://www.youtube.com/embed/p5q1Ipp164Y",
  },
  {
    id: "s0Se0NXROTQ",
    title: "Myanmar Web Developer - Episode 13 - External CSS",
    embedUrl: "https://www.youtube.com/embed/s0Se0NXROTQ",
  },
  {
    id: "wlNo7IXVHoA",
    title: "Myanmar Web Developer - Episode 14 - Inline CSS, Cascading",
    embedUrl: "https://www.youtube.com/embed/wlNo7IXVHoA",
  },
  {
    id: "BhhmXHNLhDE",
    title: "Myanmar Web Developer - Episode 15 - CSS selectors",
    embedUrl: "https://www.youtube.com/embed/BhhmXHNLhDE",
  },
  {
    id: "vCExBJsOtB0",
    title:
      "Myanmar Web Developer - Episode 16 - Installing Visual Studio Code (Mac & Windows)",
    embedUrl: "https://www.youtube.com/embed/vCExBJsOtB0",
  },
  {
    id: "jOClId8fZBw",
    title:
      "Myanmar Web Developer - Episode 17 - Build Messenger Website (Part 1)",
    embedUrl: "https://www.youtube.com/embed/jOClId8fZBw",
  },
  {
    id: "Eki3h_EWYF0",
    title:
      "Myanmar Web Developer - Episode 18 - Build Messenger Website (Part 2)",
    embedUrl: "https://www.youtube.com/embed/Eki3h_EWYF0",
  },
  {
    id: "hCWfDGsnwmA",
    title:
      "Myanmar Web Developer - Episode 19 - Build Messenger Website (Part 3)",
    embedUrl: "https://www.youtube.com/embed/hCWfDGsnwmA",
  },
  {
    id: "yPvCFT61VEw",
    title: "Myanmar Web Developer - Episode 20 - CSS Box Model (Part 1)",
    embedUrl: "https://www.youtube.com/embed/yPvCFT61VEw",
  },
  {
    id: "KDi_-hI7w4A",
    title: "Myanmar Web Developer - Episode 21 - CSS Box Model (Part 2)",
    embedUrl: "https://www.youtube.com/embed/KDi_-hI7w4A",
  },
  {
    id: "3XNiRqFKC7c",
    title:
      "Myanmar Web Developer - Episode 22 - Build Messenger Website (Part 4)",
    embedUrl: "https://www.youtube.com/embed/3XNiRqFKC7c",
  },
  {
    id: "b_VenJq1Spw",
    title:
      "Myanmar Web Developer - Episode 23 - Build Messenger Website (Part 5)",
    embedUrl: "https://www.youtube.com/embed/b_VenJq1Spw",
  },
  {
    id: "9t_rMuGjAjs",
    title: "Myanmar Web Developer - Episode 24 - Flexbox",
    embedUrl: "https://www.youtube.com/embed/9t_rMuGjAjs",
  },
  {
    id: "9BmHF_hmLls",
    title: "Myanmar Web Developer - Episode 25 - Responsive Website (Part 1)",
    embedUrl: "https://www.youtube.com/embed/9BmHF_hmLls",
  },
  {
    id: "A9nQJPf1N1Y",
    title: "Myanmar Web Developer - Episode 26 - Responsive Website (Part 2)",
    embedUrl: "https://www.youtube.com/embed/A9nQJPf1N1Y",
  },
  {
    id: "V2EJyxEV8to",
    title: "Myanmar Web Developer - Episode 27 - Responsive Website (Part 3)",
    embedUrl: "https://www.youtube.com/embed/V2EJyxEV8to",
  },
  {
    id: "D1cfmtIfxxk",
    title: "Myanmar Web Developer - Episode 28 - Responsive Website (Part 4)",
    embedUrl: "https://www.youtube.com/embed/D1cfmtIfxxk",
  },
  {
    id: "-_ffPQTFogE",
    title: "Myanmar Web Developer - Episode 29 - Responsive Website (Part 5)",
    embedUrl: "https://www.youtube.com/embed/-_ffPQTFogE",
  },
  {
    id: "cyqkVD2TjA4",
    title: "Myanmar Web Developer - Episode 30 - Responsive Website (Part 6)",
    embedUrl: "https://www.youtube.com/embed/cyqkVD2TjA4",
  },
  {
    id: "JUXkC6I-SIs",
    title: "Myanmar Web Developer - Episode 31 - Responsive Website (Part 7)",
    embedUrl: "https://www.youtube.com/embed/JUXkC6I-SIs",
  },
  {
    id: "pgyHhwstvb8",
    title:
      "Myanmar Web Developer - Episode 32 - External CSS Library (Bootstrap, Semantic UI, Material UI)",
    embedUrl: "https://www.youtube.com/embed/pgyHhwstvb8",
  },
  {
    id: "te3YyxiHAYg",
    title: "Myanmar Web Developer - Episode 33 - CSS Summary (Part 1)",
    embedUrl: "https://www.youtube.com/embed/te3YyxiHAYg",
  },
  {
    id: "XHzrn9LSFzg",
    title: "Myanmar Web Developer - Episode 34 - CSS Summary (Part 2)",
    embedUrl: "https://www.youtube.com/embed/XHzrn9LSFzg",
  },
  {
    id: "jaMmQWJv1yg",
    title: "Myanmar Web Developer - Episode 35 - YouTube Studio (Part 1)",
    embedUrl: "https://www.youtube.com/embed/jaMmQWJv1yg",
  },
  {
    id: "0hT1thkjMLw",
    title: "Myanmar Web Developer - Episode 36 - YouTube Studio (Part 2)",
    embedUrl: "https://www.youtube.com/embed/0hT1thkjMLw",
  },
];


function Cssvideos (){
  const {id}= useParams()
  const [error,seterror] = useState(false)
  //const [data,setdata] = useState([])
 const data = useLoaderData()
    return (
      <div className="flex justify-center mt-15">
        {error ? (
          <p>Video can not be loaded</p>
        ) : (
          <iframe
            width="790"
            height="425"
            src={datas[id].embedUrl}
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


export default Cssvideos