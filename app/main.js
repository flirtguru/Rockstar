import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './searchbar'
var oneliner=require('one-liner-joke');
var getRandomJoke = oneliner.getRandomJoke();
import request from 'request';
import Musiclist from './music_list';
//import Audiostream from './audio-stream';
const App=()=>{
return(
<div >
<div>

<center><h3>"{getRandomJoke.body}"</h3></center>
</div>

</div>
);
};

 class Final extends React.Component{

constructor (props)
{
  super(props);
this.state={data:[],
            videoid:null,
             term:"rockstar"};
this.Search(this.state.term);
}

Search(term)
{
  request({url:`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&key=AIzaSyBjtnBqKIW8aoPpMCw1W1l7SwtCQpXGfxc`,
json:true},
  (error,response,body)=>{
    console.log(body.items[0].id.videoId);
  this.setState({data:body.items});

  });


}

render(){
  return(
    <div>

    <App/>
    <Searchbar onButtonclick={(term)=>{this.Search(term)}} />
    <Musiclist list={this.state.data}/>
    </div>
  );
}

 }  /*<Audiostream videoid={this.state.videoid}/>
    onMusicselect={(videoid)=>{ this.state.videoid=videoid } } */
ReactDOM.render(
<Final/>,
  document.getElementById('root')
)
