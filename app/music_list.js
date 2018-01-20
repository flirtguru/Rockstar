import React from 'react';
import Videoitem from './videoitem';
import request from 'request';






const Musiclist=(props)=>{

const music=props.list.map((video)=>{
  return (<Videoitem key={video.etag} img={video.snippet.thumbnails.default.url} id={video.id.videoId} info={video.snippet.title}  />);/*onVideoselect=(v)=>{props.onMusicselect(v)}*/

});

return(
 <ul>{music}</ul>
);
};


export default Musiclist;
