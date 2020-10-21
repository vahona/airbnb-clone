import React from 'react'
import PlaceList from './Components/PlaceList'
import Logo from './logo.png'
import data from './stays'

const display = {
  display: "block"
};

const hide = {
  display: "none"
};

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false,

    }
    
  }

  toggle(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      toggle: !prevState.toggle

    }));
    console.log(e);
  }



  render() {

    var modal = [];
    modal.push(<div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal_content">
        <button className="close_button" onClick={this.toggle}>X</button>
        <section>
          <h1>Edit your search</h1>
          <button className="inputs">
            <input type="text" placeholder="Location" className="location" />
            <input type="text" placeholder="guests" className="guest" />
          </button>
          <form>
            {data.map(datas => {
              return (
                <fieldset className="form">
                  <input type="checkbox" />
                  <label>{datas.city}  {datas.country}</label>
                </fieldset>
              )
            })}
          </form>
        </section>
      </div>
    </div>

    );

    return (
      <section className="container">
        <img src={Logo} className="logo" alt="logo" />
        <form>
          <button className="button_container">
            <input className="town" placeholder='Helsinki, Finland ' />
            <input className="add" placeholder=" Add guests" />
            <button className="icon_button" onClick={this.toggle}>
              {this.state.toggle}
            </button>
          </button>
        </form>
        <h1> Stay in finland </h1>
        <div className="stays">12+ stays</div>
        <div className="buttons">
        </div>
        <div className="displayed">
          <PlaceList />
        </div>
        {modal}
      </section>
    );
  }

}

export default Main