import React from'react';
const Videoitem=(props)=>{

return (<li>
    <div>
    <div className="row">
   <img src={props.img}  className="img-rounded"/>
    <h6 color="red">{props.info}</h6>
    </div>
    </div>
     </li>


);//onClick={()=>{props.onVideoselect(props.id)}


};
export default Videoitem;
