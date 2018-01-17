
function Search()
{

  return(

    <form class="form-inline">
  <div class="form-group">
    <label class="sr-only" >Search</label>
    <input type="text" class="form-control" id="search" placeholder="Songs,Artists...."/>
  </div>


  <button type="submit" class="btn btn-default">Search</button>
</form>
);

}

import React from 'react';
import ReactPlayer from 'react-player';


class Searchbar extends React.Component {


  render () {
      return (
         <Search/>

   );
    }





}

export default Searchbar;
