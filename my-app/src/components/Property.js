import React from 'react';
import type_img1 from "../assets/hotels.png"
import type_img2 from "../assets/apartaments.png"
import type_img3 from "../assets/resorts.png"
import type_img4 from "../assets/villas.png"
import type_img5 from "../assets/cottages.png"
import numbers from "../assets/2018-2024.png"

const Property = () => {

  const types = [
    {
      name: 'Hotels',
      img: type_img1,
    },
    {
      name: 'Apartments',
      img: type_img2,
    },
    {
      name: 'Resorts',
      img: type_img3,
    },
    {
      name: 'Villas',
      img: type_img4,
    },
    {
      name: 'Cottages',
      img: type_img5,
    },
  ];



  return (
    <section className="property">
        <div className="container">
          <div className="property_text">
            <h3>Browse by property type</h3>
            <p>You can easily browse and filter your search by property type. This feature allows you to select hotels or alternative options, such as hostels, vacation rentals, or bed and breakfasts, based on your preferences and specific needs for your stay.</p>
            <img src={numbers} alt="2018-2024"/>
          </div>
          <div className="property_cards">
            {types.map((type, index) => (
              <div key={index} className="property_cards_card">
                <h5>{type.name}</h5>
                <img src={type.img} alt={type.name} />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Property;
