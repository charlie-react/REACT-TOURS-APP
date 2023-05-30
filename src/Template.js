import React, { useState } from "react";
import { data } from "./data";

const Template = ({countries,setCountries}) => {
 
  const removeCountry = (id) => {
    const newCountry = countries.filter((country) => country.id !== id);
    setCountries(newCountry);
  };

  return (
    <>
      {countries.map((ind) => {
        const { id, title, content, img, rate } = ind;
        return (
          <div className="row container">
            <div key={id} className="item text-center my-4 card p-3">
              <img src={img} />
              <span>{rate} </span>
              <h5 className="my-3">{title}</h5>
              <p>{content}</p>
              <button
                className="btn btn-outline-success btn-lg"
                onClick={() => removeCountry(id)}
              >
                Not Interested
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Template;
