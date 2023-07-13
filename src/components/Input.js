import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';

const Input = ({getCity}) => {
  const [place, setPlace] = useState("") 

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
     getCity(place);
     setPlace("");
    }
  };

  return (
    <>
      <span className="input-box">
        <span className="label">LOCATION</span>
        <input
          type="text"
          value={place}
          onChange={(e)=>setPlace(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Search city"
        />
      </span>
    </>
  );
};

Input.propTypes = {
    getCity: PropTypes.func.isRequired,
  };
export default Input;


