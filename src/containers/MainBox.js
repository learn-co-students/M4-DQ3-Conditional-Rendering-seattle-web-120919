import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    display: <Profile/>
  }

  handleChange = (event) => {
    console.log('firing shit')
    this.setState({
      ...this.state,
      display: this.changeDisplay(event)
    })
  }

  changeDisplay = (event) => {
    if (event.target.id ===  'profile') {
      return <Profile />
    } else if (event.target.id === 'photo') {
      return <Photos />
    } else if (event.target.id === 'cocktail') {
      return <Cocktails />
    } else if (event.target.id === 'pokemon') {
      return <Pokemon />
    }  
  }

  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */

    const detailsToDisplay = <div>{this.state.display}</div>

    return (
      <div>
        <MenuBar handleChange={this.handleChange}/>
        {detailsToDisplay}
      </div>
    )
  }
}

export default MainBox
