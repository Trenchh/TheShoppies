import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div className="container">
                <input
                    type="text"
                    value={props.value}
                    placeholder="Search for your favourite movies to nominate..."
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    />
                <i className="fa fa-search search-icon"/>
        </div>
    );
};

export default Search;

// import React, { useState, useEffect } from 'react';
// import useDebounce from './use-debounce';
// import './Search.css';
// function Search() {
// 	// State and setter for search term
//     const [searchTerm, setSearchTerm] = useState('');
//     // State and setter for search results
//     const [results, setResults] = useState([]);
//     // State for search status (whether there is a pending API request)
//     const [isSearching, setIsSearching] = useState(false);

//     const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   // Here's where the API call happens
//   // We use useEffect since this is an asynchronous action
//   useEffect(
//     () => {
//       // Make sure we have a value (user has entered something in input)
//       if (debouncedSearchTerm) {
//         // Set isSearching state
//         setIsSearching(true);
//         // Fire off our API call
//         searchCharacters(debouncedSearchTerm).then(results => {
//           // Set back to false since request finished
//           setIsSearching(false);
//           // Set results state
//           setResults(results);
//         });
//       } else {
//         setResults([]);
//       }
//     },
//     // This is the useEffect input array
//     // Our useEffect function will only execute if this value changes ...
//     // ... and thanks to our hook it will only change if the original ...
//     // value (searchTerm) hasn't changed for more than 500ms.
//     [debouncedSearchTerm]
//   );
		// return (
		// 	<div className="container">
		// 			<input
        //                 type="text"
        //                 placeholder="Search for your favourite movies to nominate..."
        //                 onChange={e => setSearchTerm(e.target.value)}
		// 			/>
		// 			<i className="fa fa-search search-icon"/>

        //             {isSearching && <div>Searching ...</div>}

        //             {results.map(result => (
        //             <div key={result.imdbID}>
        //                 <h4>{result.Title}</h4>
        //             </div>
        //         ))}
		// 	</div>
        //     );
            
//         }
//         function searchCharacters(search) {
//             const apiKey = '6c8d3168';
//             const queryString = `type=movie&s=${search}&apikey=${apiKey}`;
//             return fetch(`http://www.omdbapi.com/?${queryString}`,
//             {
//               method: 'GET'
//             })
//               .then(r => r.json()) 
//               .then(r => r.data.results)
//               .catch(error => {
//                 console.error(error);
//                 return [];
//               },
//               );
//           }
// export default Search;