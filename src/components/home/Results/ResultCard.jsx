import React from "react";

const ResultCard = ({
  index,
  cover,
  category,
  location,
  name,
  price,
  type,
}) => {
  return (
    <div className='box shadow' key={index}>
      {/* image */}
      <div className='img'>
        <img src={cover} alt='' />
      </div>
      {/* about */}
      <div className='text'>
        <div className='category flex'>
          {/* display price */}
          <div>
            <button className='btn2'>{price}</button>{" "}
            <label htmlFor=''>/month</label>
          </div>

          <i className='fa fa-heart'></i>
        </div>
        {/* display name */}
        <h4>{name}</h4>
        <p>
          <i className='fa fa-location-dot'></i> {location}
        </p>
      </div>
      {/* category and type*/}
      <div className='button flex'>
        <span
          style={{
            background: "#6f64ef36",
            color: "#6f64ef",
            padding: "0 6px",
          }}>
          {category}
        </span>
        <span>{type}</span>
      </div>
    </div>
  );
};

export default ResultCard;
