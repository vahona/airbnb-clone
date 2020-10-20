import React, { useState } from 'react'
import data from '../stays'


function PlaceList() {

  const [stay, setStay] = useState('');

  

  return (
    <div>
      {data.map(place => {
        data.length = 6
        return (
          <section className="list_of_palce">
          <div>{place.city}</div>
          <div>{place.country}</div>
          <div>{place.superHost}</div>
          <div>{place.title}</div>
          <div>{place.type}</div>
          <div>{place.beds}</div>
          <div>{place.rating}</div>
          <div>{place.maxGuests}</div>
          <img src={place.photo} />
          </section>
        )
      })}
    </div>
  )
}

export default PlaceList