const technortalVideoIds = [
  "q8GdtmrELvQ",
  "Zi5530EakfA",
  "XVkANn_Lqeo",
  "dQPw8FxGuJg",
  "EkXaBeDFL-M",
  "zTiiQ1MPEU4",
  "u0e1iAhWdjc",
  "qgCltFEwlhw",
  "Ij_1w3kLSy8",
  "1hWLoeTRGe8",
  "hxhctuyRlrA",
  "vG9GA8HybYw",
  "xceTScVz2xs",
  "63idGBQo_2o",
  "BjRTwC5n8Is",
  "ze65lD1yfJo",
  "HGLrckz4t7k",
  "rHqJgQl5B1w",
  "tVv6fmjAqc8",
  "H2jNj9FC7nM",
  "GeeV33ZB2WQ",
  "nRgX2fjnx5E",
  "fI1PvOguBtc",
  "2Z47SeUxSW4",
  "lSrhaPsvR3k",
  "k786G63pkBs",
  "n2Vngiuhx2E",
  "uvngH6ZJLRo",
  "WXiasTcWE1A",
  "tPTPA-2fxNo",
  "Ry9sV1YW38o",
  "Dqa4Le5cgWU",
  "uLquhzk3EMI",
  "1daOBukHnvM",
  "P1PSR14urGU",
  "j61yl7Dk_XA",
  "buYhNSKpgi4",
  "OcNZtiHMB-A",
  "3klu9A3AsuQ",
  "BqffZGVpBTc",
  "OQSyO679Gdo",
  "WPni6TVUkI8",
  "sQN8Crio3kU",
  "JhH_mLJr54o",
  "Tl6W3XTLog8",
  "y55eT9eU0PM",
  "pfjBOeTPTsg",
  "oqqUAXY7cSo",
  "MFGKAocIIBk",
  "n3suNfCtsZQ",
  "gc8tiKR0IHE",
  "k2SV7YCYLKE",
  "JUQn2tQvG5c",
  "Vu1coHFvo18",
  "B5tuM5qwSow",
  "bbyD8yM5Q0o",
  "0Di9MvyiLrI",
  "VMpUAJqhRaI",
  "m0wVbhe06S0",
  "5WYHcvCShss",
  "dvSzl3BYHU8",
  "q8fU2DPhbKg",
  "3xboMD6cZeU",
  "nF_VxVufzW0",
  "mWXxxqZ4DUs",
  "QsyoVXGhIxU",
  "r2kY1yCJLoI",
  "XeHfbjKEg9w",
  "R2lYCKoQs7w",
  "SsKkJD1FEaM",
  "sL9s5wC5BcU",
  "K9M__CC7am8",
  "oDmj3xLlGwg",
];
import { useState } from "react";
import { useParams } from "react-router";
function Pythonvideos() {
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
          src={`https://www.youtube.com/embed/${technortalVideoIds[id]}`}
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

export default Pythonvideos;