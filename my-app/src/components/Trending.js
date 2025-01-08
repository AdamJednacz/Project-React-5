import React from 'react';
import img_1 from '../assets/dubai.jpg'
import img_2 from '../assets/tbilisi.jpg'
import img_3 from '../assets/Istanbul.jpg'
import img_4 from '../assets/paris.jpg'
import img_5 from '../assets/taiwan.jpg'




const Trending = () => {


  const places = [
    {
      name:'Dubai',
      img:img_1,
    },
    {
      name:'Tbilisi',
      img:img_2,
    },
    {
      name:'Istanbul',
      img:img_3,
    },
    {
      name:'Paris',
      img:img_4,
    },
    {
      name:'Taiwan',
      img:img_5,
    }

  ]


  return (
    <div className="trending">
      <h4>Trending destinations</h4>
      <p>Most popular choices for travels from you</p>
      <div className="trending_places">
        {places.map((place,index) => (
          <div key={index} className="trending_places_place" style={{backgroundImage:`url(${place.img})`,backgroundSize:'cover',backgroundPosition:'center'}}>
              <p>{place.name}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Trending;
