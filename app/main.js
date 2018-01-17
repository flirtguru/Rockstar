import React from 'react';
import ReactDOM from 'react-dom';
import Rockstar from './App';
import Searchbar from './searchbar'
var oneliner=require('one-liner-joke');
var getRandomJoke = oneliner.getRandomJoke();

const url = 'http://youtube.com/watch?v=34aQNMvGEZQ';
const decoder = require('lame').Decoder;
const speaker = require('speaker');

var music= youtube(url)
.pipe(decoder())
.pipe(speaker());

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
