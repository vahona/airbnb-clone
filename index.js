import React from 'react'
import ReactDOM from 'react-dom';
import PlaceList from './Components/PlaceList'
import Logo from './logo.png'
import Icon from './searchicon.png'


class Main extends React.Component {
  render() {
    return (
      <section className="container">
        <h1> Stay in finland </h1>
        <button>Helsinki, Finland</button>
        <button>Add guests</button>
        <button><img src={Icon} className="search" /> </button>
        <img src={Logo} className="logo" alt="logo" />
        <div className="displayed">
        <PlaceList />
        </div>
      </section>
    )

  }

}


ReactDOM.render(<Main />, document.getElementById('root'));