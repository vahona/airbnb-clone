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
    this.handleChange = this.handleChange.bind(this)
    
  }

  toggle(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      toggle: !prevState.toggle

    }));
    
  }

  handleChange(event) {
    this.setState(event.target.value);
    PlaceList()
  }

  filter(PlaceList) {
    if(!this.props.filter) {
      return PlaceList
    }
    return PlaceList.filter((PlaceLists) => PlaceList.toLowerCase().indexOf(this.props.filter.toLowerCase()))
  }

  updateSearch(inputValue) {
   let filter = this.state.fielter;
   this.setState({fielter: inputValue});

  }

  render() {

    var modal = [];
    modal.push(<div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal_content">
        <button className="close_button" onClick={this.toggle}>X</button>
        <section>
          <h1>Edit your search</h1>
          <div className="inputs">
            <input 
             type="text"
             placeholder="Location" 
             className="location"
             onChange={this.handleChange.bind(this)} 
             value={this.props.searchText} />
            <input type="text" placeholder="guests" className="guest" onChange={this.handleChange} value={this.props.searchText} />
          </div>
          <form >
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
          <div className="button_container">
            <input className="town" placeholder='Helsinki, Finland ' onChange={this.handleChange} value={this.props.searchText} />
            <input className="add" placeholder=" Add guests" onChange={this.handleChange} value={this.props.searchText} />
            <button className="icon_button" onClick={this.toggle}>
              {this.toggle}
            </button>
          </div>
        </form>
        {modal}
        <h1> Stay in finland </h1>
        <div className="stays">12+ stays</div>
        <div className="buttons">
        </div>
        <div className="displayed">
          <PlaceList />
        </div>
      </section>
    );
  }

}

export default Main