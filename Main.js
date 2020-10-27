import React, { useState } from 'react'
import PlaceList from './Components/PlaceList'
import Logo from './logo.png'
import data from './stays'





function Main()  {

  const [isopen, setIsopen] = useState(false)
  const [ismodal, setIsmodal] = useState(false)
  const [filter, setFilter] = useState([])
  const [count, setCount] = useState(0)
  const [countchild, setCountchild] = useState(0)


  function filterData (e) {
      setFilter(e.target.value)
  }

  function handleChange () {
    setIsopen(!isopen);
  }

  function handClick () {
    setIsmodal(!ismodal)
  }

  function increment() {

  }

    return (
      <div>
      <section className="container">
        <img src={Logo} className="logo" alt="logo" />
        <form>
          <div className="button_container">
            <button className="town" type="button" onClick={handleChange} > Helsinki, Finland</button>
            <button className="add" type="button" onClick={handClick} >Add guests</button>
            <button className="icon_button">
            </button>
          </div>
        </form>
        
        <h1> Stay in finland </h1>
        <div className="stays">12+ stays</div>
        <div className="buttons">
        </div>
        <div className="displayed">
          <PlaceList />
        </div>
      </section>
        {isopen &&
          <div className="modal_content">
            <div >
              <button className="close_button" onClick={handleChange}>X</button>
              <section>
                <h1>Edit your search</h1>
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Location"
                    className="location"
                    onChange={(e) => setFilter(e.target.value)} />
                  <input type="text" placeholder="guests" className="guest" />
                </div>
                <form >
                  {data.filter((datas) => {
                    return datas.city.toLowerCase().includes(filter)}).map(datas => {
                    return (
                      <fieldset className="form">
                        <input type="checkbox" />
                        <label>{datas.city} {datas.country}</label>
                      </fieldset>
                    )
                  })}

                <button className="search_button">Search</button>
                </form>
              </section>
            </div>
          </div>}
        {ismodal &&
          <div className="modal_content">
            <div >
            <button className="close_button" onClick={handClick}>X</button>
              <section>
                <h1>Edit your search</h1>
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="Location"
                    className="location" />
                  <input type="text" placeholder="guests" className="guest" />
                </div>
                <div className="side" >
                  <div>
                  <h2>Adults</h2>
                  <p>Age 13 or above</p>
                  <div>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    {count}
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                </div>
              <div >
                <h2>Children</h2>
                <p>Age 2 - 12</p>
                <div>
                    <button onClick={() => setCountchild(countchild - 1)}>-</button>
                    {countchild}
                    <button onClick={() => setCountchild(countchild + 1)}>+</button>
                </div>
                </div>
              </div>
              <button className="search_button">Search</button>
              </section>
            </div>
          </div>}
      </div>
    );
  }

// }

export default Main