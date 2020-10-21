import React from 'react'
import ReactDOM from 'react-dom';
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
        toggle: false
      }

    }


    toggle(e) {
      this.setState((prevState) => ({
        toggle: !prevState.toggle
        
      }));
      console.log(e);
    }
  

   render() {

    var modal = [];
    modal.push(<div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal_content">
        <section>
          <h1>Edit your search</h1>
          <button>
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="guests"/>
          </button>
          <form>
          <input type="checkbox" />
          <label>{data.city}</label>
          </form>
        </section>
      </div>
    </div>
    
    );

    return (
      <section className="container">
        <img src={Logo} className="logo" alt="logo" />
    <button className="button_container"><input className="town" placeholder='Helsinki, Finland ' /> <input className="add" placeholder=" Add guests" /> <button className="icon_button" onClick={this.toggle}>{this.state.toggle}</button></button>
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


ReactDOM.render(<Main />, document.getElementById('root'));