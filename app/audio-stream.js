/*var ffmpeg = require('fluent-ffmpeg');
const stream = require('youtube-audio-stream')
const decoder = require('lame').Decoder
const speaker = require('speaker')

const Audiostream =(props)=>{
  if(!{props.videoid})
  {
    return <h4>NO SONG IS PLAYING........</h4>;
  }
const url = `http://youtube.com/watch?v=${props.videoid}`;
  return(
  stream(url)
  .pipe(decoder())
  .pipe(speaker())
);


};



export default Audiostream;
*/
