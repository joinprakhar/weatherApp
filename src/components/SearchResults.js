import React, { useRef } from "react";
import PropTypes from 'prop-types';

const SearchResults = ({ selectLocation, data }) => {
  const divRef = useRef(null);
  const handleClick = (id) => {
    selectLocation(id);
  };
  return (
    <div className="search-results" ref={divRef}>
      {data.map((e) => (
        <div className="search-option" key={e.id}>
          <div onClick={() => handleClick(e.id)}>{e.name}</div>
        </div>
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  selectLocation: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default SearchResults;

// import React from "react";
// import PropTypes from 'prop-types';

// const SearchResults = ({ selectLocation, data }) => {

//   return <div className="search-results">
//     {data.map((e, i) => {
//       return (
//         <div className="search-option" key={e.id}>
//           <div onClick={() => selectLocation(e.id)}>{e.name}
//           </div>
//         </div>
//       )
//     })}

//   </div>;
// };

// SearchResults.propTypes = {
//   selectLocation: PropTypes.func,
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//     })
//   ),
// };
// export default SearchResults;


