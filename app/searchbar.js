import React from 'react';


class Searchbar extends React.Component
{constructor(props)
  {
    super(props);
this.state={term:" "}
  }

   OnInputChange(term){
  this.props.onButtonclick(term);
  }


render()
{
  return(

<div className="row">
<form className="form-inline">

<div  className="form-group" >

<input type="text" placeholder="Search name of song"className="form-control" onChange={(event)=>{this.state.term=event.target.value}} />

<input type="Button" value="Search" className="btn btn-default" onClick={()=>{this.OnInputChange(this.state.term)}}/>

</div>

</form>
</div>



);
}

}
export default Searchbar;
