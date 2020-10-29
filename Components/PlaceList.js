import React, { useState } from 'react'
import data from '../stays'
import Start from  '../start.png'



function PlaceList() {

  return (
    <div className="places" >
      {data.map(place=> {
        data.length = 6
        return (
          <section className="list_of_palce" key={place.id} >
          <img src={place.photo} />
            <article className="information">
          <div>{place.superHost}<button className="host">Super host</button></div>
          <div>
              <div className="type">{place.type}:<div className="beds">{place.beds}beds</div></div>
          </div>
          <div className="rating"><img className="star" src={Start} /> {place.rating}</div>
          </article>
          </section>
        )
      })}
    </div>
  )
}

export default PlaceList