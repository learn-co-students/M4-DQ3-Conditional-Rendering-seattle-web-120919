import React from 'react'

const MenuBar = (props) => {

  return (
    <div className="ui four item menu">
      <a className="item active" id="profile" onClick={props.changeDisplay}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo">
        <i className="photo large icon" id="photo" onClick={props.changeDisplay}/>
      </a>

      <a className="item" id="cocktail">
        <i className="cocktail large icon" id="cocktail" onClick={props.changeDisplay}/>
      </a>

      <a className="item" id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon" onClick={props.changeDisplay}/>
      </a>
    </div>
  )

}

export default MenuBar
