const datas = [
  {
    id: "Qj14NdWadaA",
    title: "Myanmar Web Developer - Episode 37 - JavaScript Introduction",
    embedUrl: "https://www.youtube.com/embed/Qj14NdWadaA",
  },
  {
    id: "ZOK4M8Z9x4s",
    title: "Myanmar Web Developer - Episode 38 - Variables",
    embedUrl: "https://www.youtube.com/embed/ZOK4M8Z9x4s",
  },
  {
    id: "4wNLYvCJVmQ",
    title: "Myanmar Web Developer - Episode 39 - Operators",
    embedUrl: "https://www.youtube.com/embed/4wNLYvCJVmQ",
  },
  {
    id: "UcFCRS3A-wQ",
    title: "Myanmar Web Developer - Episode 40 - Logical Operators",
    embedUrl: "https://www.youtube.com/embed/UcFCRS3A-wQ",
  },
  {
    id: "RzIIzvrnWls",
    title:
      "Myanmar Web Developer - Episode 41 - Conditional Statements (Part 1)",
    embedUrl: "https://www.youtube.com/embed/RzIIzvrnWls",
  },
  {
    id: "wZ8SfAM-O_U",
    title:
      "Myanmar Web Developer - Episode 42 - Conditional Statements (Part 2)",
    embedUrl: "https://www.youtube.com/embed/wZ8SfAM-O_U",
  },
  {
    id: "HOw6tvq3Tjc",
    title: "Myanmar Web Developer - Episode 43 - Function (Part 1)",
    embedUrl: "https://www.youtube.com/embed/HOw6tvq3Tjc",
  },
  {
    id: "Z2w5HPLDSIQ",
    title: "Myanmar Web Developer - Episode 44 - Function (Part 2)",
    embedUrl: "https://www.youtube.com/embed/Z2w5HPLDSIQ",
  },
  {
    id: "dX0gy4fmo90",
    title: "Myanmar Web Developer - Episode 45 - Object (Part 1)",
    embedUrl: "https://www.youtube.com/embed/dX0gy4fmo90",
  },
  {
    id: "2AisJ4G7dV4",
    title: "Myanmar Web Developer - Episode 46 - Object (Part 2)",
    embedUrl: "https://www.youtube.com/embed/2AisJ4G7dV4",
  },
  {
    id: "aNuIMmoZLNE",
    title: "Myanmar Web Developer - Episode 47 - Array",
    embedUrl: "https://www.youtube.com/embed/aNuIMmoZLNE",
  },
  {
    id: "pIKKzcJaekI",
    title: "Myanmar Web Developer - Episode 48 - Loops (for loop)",
    embedUrl: "https://www.youtube.com/embed/pIKKzcJaekI",
  },
  {
    id: "TY-_TDivWH4",
    title: "Myanmar Web Developer - Episode 49 - Loops (for in loop)",
    embedUrl: "https://www.youtube.com/embed/TY-_TDivWH4",
  },
  {
    id: "V_IcbrLwwaU",
    title: "Myanmar Web Developer - Episode 50 - Loops (while loop)",
    embedUrl: "https://www.youtube.com/embed/V_IcbrLwwaU",
  },
  {
    id: "TfzH6F_UoaQ",
    title: "Myanmar Web Developer - Episode 51 - Error Handling (try...catch)",
    embedUrl: "https://www.youtube.com/embed/TfzH6F_UoaQ",
  },
  {
    id: "vmRxWvwVTuo",
    title: "Myanmar Web Developer - Episode 52 - Scopes",
    embedUrl: "https://www.youtube.com/embed/vmRxWvwVTuo",
  },
  {
    id: "tRa1xZQ1r68",
    title: "Myanmar Web Developer - Episode 53 - Continue, Break",
    embedUrl: "https://www.youtube.com/embed/tRa1xZQ1r68",
  },
  {
    id: "EQKpD4Quj_8",
    title: "Myanmar Web Developer - Episode 54 - 2 Dimensional Array",
    embedUrl: "https://www.youtube.com/embed/EQKpD4Quj_8",
  },
  {
    id: "fM25xlBtico",
    title:
      "Myanmar Web Developer - Episode 55 - Destructuring, Spread Operator, Rest Parameter",
    embedUrl: "https://www.youtube.com/embed/fM25xlBtico",
  },
  {
    id: "SsGVAkEsT2Y",
    title: "Myanmar Web Developer - Episode 56 - Callback Function",
    embedUrl: "https://www.youtube.com/embed/SsGVAkEsT2Y",
  },
  {
    id: "YLjPg3uXR9I",
    title: "Myanmar Web Developer - Episode 57 - Array Filter",
    embedUrl: "https://www.youtube.com/embed/YLjPg3uXR9I",
  },
  {
    id: "eEShzNYd3Fc",
    title: "Myanmar Web Developer - Episode 58 - Array Map",
    embedUrl: "https://www.youtube.com/embed/eEShzNYd3Fc",
  },
  {
    id: "PZY4ebdWrfg",
    title:
      "Myanmar Web Developer - Episode 59 - Useful Built-in Methods And Properties",
    embedUrl: "https://www.youtube.com/embed/PZY4ebdWrfg",
  },
  {
    id: "piFE4NGY1BQ",
    title: "Myanmar Web Developer - Episode 60 - JavaScript Summary",
    embedUrl: "https://www.youtube.com/embed/piFE4NGY1BQ",
  },
];


console.log(datas.length)

import { useState } from "react";
import { useParams } from "react-router";
function Javasciptvideos() {
  const { id } = useParams();
  const getdata = datas[id].embedUrl;
  const [error, seterror] = useState(false);
  console.log(id);

  /*if(error){
    return <>
    <p>Video can not be loaded</p></>
  }*/
  return (
    <div className="flex justify-center mt-15">
      {error ? (
        <p>Video can not be loaded</p>
      ) : (
        <iframe
          width="790"
          height="425"
          src={getdata}
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

export default Javasciptvideos;

