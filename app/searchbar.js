import React from 'react';
import Search from'./search';
import Button from './button';
class Searchbar extends React.Component
{
render()
{
  return(

<div className="row">
<Search/>
<Button/>

</div>



  )
}

}
export default Searchbar;
