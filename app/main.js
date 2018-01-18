import React from 'react';
import ReactDOM from 'react-dom';
import Rockstar from './App';
import Searchbar from './searchbar'
var oneliner=require('one-liner-joke');
var getRandomJoke = oneliner.getRandomJoke();
import request from 'request';
var data;
request({url:' https://www.googleapis.com/youtube/v3/search?part=snippet&q=horzo&key=AIzaSyBjtnBqKIW8aoPpMCw1W1l7SwtCQpXGfxc',

      json:true },
(error,response,body)=>
{

});

console.log(data);
const App=()=>{
  return(
    <div>
    <div>
    <center><h3>"{getRandomJoke.body}"</h3></center>
    </div>
    <Searchbar/>
  <Rockstar/>
  </div>
  );
}
ReactDOM.render(
<App/>,
  document.getElementById('root')
)
