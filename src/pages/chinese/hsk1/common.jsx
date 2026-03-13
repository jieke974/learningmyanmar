import datas from "./commonfile"

function Hsk1common(){
    return (
      <div>
        <div>
         
          {
            datas.map((item)=>{
             return (
               <div className="mt-4 flex justify-between  overflow-x-scroll">
                 <div>
                   <h1>{item.chinese}</h1>
                   <h1>{item.pinyin}</h1>
                   <h1>{item.myanmar}</h1>
                 </div>
               </div>
             );
            })
          }
        </div>
      </div>
    );
}


export default Hsk1common

