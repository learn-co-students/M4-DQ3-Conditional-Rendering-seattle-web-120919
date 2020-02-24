import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentDisplay: <Profile/>
  }

  changeDisplay = (event) => {
    console.log(event.target.id)
    this.setState({
      ...this.state,
      currentDisplay: this.changeCurrentDisplay(event)
    })
  }

  changeCurrentDisplay = (event) => {
    if(event.target.id === "profile"){
      event.target.className = "item active"
      return <Profile/>
    } else if (event.target.id === "photo") {
      event.target.className = "item active"
      return <Photos/>
    } else if (event.target.id === "cocktail") {
      event.target.className = "item active"
      return <Cocktails/>
    } else if (event.target.id === "pokemon") {
      event.target.className = "item active"
      return <Pokemon/>
    }
  }

  render() {

    const detailsToDisplay = <div>{this.state.currentDisplay}</div>

    return (
      <div>
        <MenuBar changeDisplay={this.changeDisplay}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
