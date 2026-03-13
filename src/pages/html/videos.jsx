import { useParams } from "react-router";

const datas = [
  "https://www.youtube.com/embed/lFjMkUmp_lk?si=pFG-NWCcYmy5rXN2",
  "https://www.youtube.com/embed/toToYvjScho?si=DNEPP-hGHIi8Mq2_",
  "https://www.youtube.com/embed/UOQaUrRQeDo?si=cPmROx0lDlovJaav",
  "https://www.youtube.com/embed/ux2lp0OfkbU?si=mbzsdeu7PzMxjE-Y",
  "https://www.youtube.com/embed/47K23Bo87mk?si=XEBSAJy7ENxmoUkR",
  "https://www.youtube.com/embed/fJRCg_nv9W4?si=AiFy55J0bIcqFVkg",
  "https://www.youtube.com/embed/sW372LA4KPw?si=pWP3zGeRiD10EXhQ",
  "https://www.youtube.com/embed/Bcf0p_eG3k0?si=wIlFPr0_SBCmGyN8",
  "https://www.youtube.com/embed/IfcOMyt5fM0?si=oseFNcICnInczQ0h",
  "https://www.youtube.com/embed/0sU3Tjlb13U?si=qO9Or4hYUG3hhHdf",
  "https://www.youtube.com/embed/O-3SXC5votI?si=v7wKl9IjkIR5cKh8",
];
import { useState } from "react";
function Htmlvideos (){
  const {id}= useParams()
  const getdata = datas[id]
  const [error,seterror] = useState(false)
  console.log(id)

  /*if(error){
    return <>
    <p>Video can not be loaded</p></>
  }*/
    return (
      <div className="flex justify-center mt-15">
          {error ? <p>Video can not be loaded</p> :<iframe
            width="790"
            height="425"
            src={getdata}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            onError={()=> seterror(true)}
          ></iframe>}
      </div>
    );
}


export default Htmlvideos