import React from "react";
import PropTypes from 'prop-types';

const SetUnits = ({ onChange, value }) => {

  return (
    <>
      <div className="set-units">
        <label className="label">UNITS</label>
        <select onChange={e => onChange(e.target.value)} value={value}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </>
  );
};

SetUnits.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SetUnits;
