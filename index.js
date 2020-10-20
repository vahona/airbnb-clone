import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import PlaceList from './Components/PlaceList'
import Logo from './logo.png'
import data from './stays'







  const Main =() => {
    const [stay, setStay] = useState('');
    const [stays, setStays] = useState([]);

    const searchPlace = (e) => {
      e.preventDefault();
      console.log("yes");

      const data = data
      console.log(data);
    }

 
    return (
      <section className="container">
        <img src={Logo} className="logo" alt="logo" />
        <button className="button_container"><input className="town" placeholder='Helsinki, Finland ' /> <input className="add" placeholder=" Add guests" /> <button className="icon_button" onClick={searchPlace} ></button></button>
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


ReactDOM.render(<Main />, document.getElementById('root'));