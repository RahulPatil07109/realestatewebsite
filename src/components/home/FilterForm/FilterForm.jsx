import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./filterForm.css";

const FilterForm = (props) => {
  const [allFilters, setAllFilters] = useState({
    location: "",
    property: "",
    price: "",
    date: "",
  });

  // sets all the filter
  const changeHandler = (field) => (event) => {
    const val = event.target.value;
    setAllFilters({
      ...allFilters,
      [field]: val,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // sends required filter so that we can apply them
    props.onApplyFilters(allFilters);
  };

  return (
    <>
      <section className='filterform'>
        <div className='container'>
          <Heading
            title='Search Properties to rent '
            subtitle='Find new & featured property located in your local city.'
          />
          {/* filter form  */}
          <form className='flex' onSubmit={submitHandler}>
            {/* location */}
            <div className='box'>
              <span>Location</span>
              <input
                type='text'
                placeholder='Location'
                onChange={changeHandler("location")}
              />
            </div>
            {/* When you want */}
            <div className='box'>
              <span>When</span>
              <input
                onChange={changeHandler("date")}
                type='date'
                placeholder='Select Move-in Date'
              />
            </div>
            {/* Price */}
            <div className='box'>
              <span>Price</span>
              <select onChange={changeHandler("price")}>
                <option value='All'>All</option>
                <option value='500-1500'>$500 - $1000</option>
                <option value='1500-3000'>$1500 - $3000</option>
                <option value='3000-4500'>$3000 - $4500</option>
                <option value='4500-6000'>$4500 - $6000</option>
                <option value='6000-7500'>$6000 - $7500</option>
              </select>
            </div>
            {/* Property type */}
            <div className='box'>
              <span>Property Type</span>
              <select onChange={changeHandler("property")}>
                <option value='All'>All</option>
                <option value='Apartment'>Apartment</option>
                <option value='Condos'>Condos</option>
                <option value='Homes & Villas'>Homes & Villas</option>
                <option value='Commercial'>Commercial</option>
                <option value='Offices'>Offices</option>
              </select>
            </div>
            {/* Search button */}
            <div className='box'>
              <button className='btn1'>Search</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FilterForm;
