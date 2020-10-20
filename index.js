import React from 'react'
import ReactDOM from 'react-dom';
import PlaceList from './Components/PlaceList'
import Logo from './logo.png'
import Icon from './searchicon.png'


class Main extends React.Component {
  render() {
    return (
      <section className="container">
        <img src={Logo} className="logo" alt="logo" />
        <button className="button_container"><button className="town">Helsinki, Finland </button> <button className="add"> Add guests</button> <button className="icon_button"> <img src={Icon} className="search" /> </button></button>
        <h1> Stay in finland </h1>
        <div className="stays">12+ stays</div>
        <div className="buttons">
        </div>
        <div className="displayed">
        <PlaceList />
        </div>
      </section>
    )

  }

}


ReactDOM.render(<Main />, document.getElementById('root'));