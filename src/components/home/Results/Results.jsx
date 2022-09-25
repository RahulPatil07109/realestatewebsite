import React from "react";
import "./results.css";
import ResultCard from "./ResultCard";

const Results = ({ newList }) => {
  // if the list is empty
  if (newList.length === 0) {
    return (
      <>
        <section className='result padding'>
          <div className='container'>
            <div className='content grid3 mtop'>
              <p></p>
              <h1>We couldn't find any matches.</h1>
            </div>
          </div>
        </section>
      </>
    );
  }
  // if the list is not empty then ...
  return (
    <>
      <section className='result padding'>
        <div className='container'>
          <div className='content grid3 mtop'>
            {/* pass data to result card so that we can display results */}
            {newList.map((val, index) => {
              const { cover, category, location, name, price, type } = val;
              return (
                <ResultCard
                  index={index}
                  cover={cover}
                  category={category}
                  location={location}
                  name={name}
                  price={price}
                  type={type}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
