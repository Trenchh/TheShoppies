import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './shoppiesLogo.png';
import voteBanner from './voteNow.png'
import MovieList from './MovieList';
import Search from './Search';
//import AddNomination from './AddNomination';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [nominations, setNominations] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=6c8d3168`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const addNomination = (movie) => {
		const newNominationList = [...nominations, movie];
		setNominations(newNominationList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className="headerUnderline"></div>
        <div className="voteNow"> <img src={voteBanner}  alt="voteNowLogo" /></div>
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='container-fluid movie-row'>
			<div className='row movieListSpacing'>
				<MovieList movies={movies} /*favouriteComponent={AddNomination}*/ handleNominationClick={addNomination}/>
			</div>
		</div>
      </body>
    </div>
	);
};

export default App;


// import logo from './shoppiesLogo.png';
// import voteBanner from './voteNow.png'
// import './App.css';
// import Search from './Search';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       <body>
//         <div className="headerUnderline"></div>
//         <div> <img src={voteBanner} className="voteNow" alt="voteNowLogo" /></div>
//         <div>
//           <Search/>
//         </div>
        
//       </body>
//     </div>
//   );
// }

// export default App;
