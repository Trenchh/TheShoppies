import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './shoppiesLogo.png';
import voteBanner from './voteNowBanner.png'
import MovieList from './MovieList';
import NominationList from './NominationList';
import Search from './Search';
import AddNomination from './AddNomination';
import RemoveNomination from './RemoveNomination';
import initialDetails from './InitialDetails';


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

	const addNominationsToList = (movie) => {
		const newNominationList = [...nominations, movie];
		setNominations(newNominationList);
	};

	const removeNominationsFromList = (movie) => {
		const newNominationList = nominations.filter(
			(nomination) => nomination.imdbID !== movie.imdbID
		);
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
				<div className="voteNow"> <img src={voteBanner} alt="voteNowLogo" /></div>
				<div>
					<Search searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
				<div className='container-fluid movie-row'>
					{searchValue !== ''
						? <div className="resultsHeading">
							<h1>Results for "{searchValue}"</h1>
						</div>
						: <div className="resultsHeading">
							<h1>Trending</h1>
						</div>
					}
					{searchValue !== '' && nominations.length < 5
						? <div className='row movieListSpacing'>
							<MovieList movies={movies} nominations={nominations} favouriteComponent={AddNomination} handleNominationClick={addNominationsToList} />
						</div>
						: <div className='row movieListSpacing'>
							<MovieList movies={initialDetails} nominations={nominations} favouriteComponent={AddNomination} handleNominationClick={addNominationsToList} />
						</div>
					}
					<div className="nomHeading">
						<h1>Your Nominations</h1>
					</div>
					<div className='row movieListSpacing nomSection'>
						<NominationList movies={nominations} favouriteComponent={RemoveNomination} handleNominationClick={removeNominationsFromList} />
					</div>
				</div>
			</body>
		</div>
	);
};

export default App;

{/* <div className="container">
			<div className="confetti"/>
			<div className="confetti"/>
			<div className="confetti"/>
			<div className="confetti"/>
			<div className="confetti"/>
			<div className="confetti"/>	
			<div className="confetti"/>
			<div className="confetti"/>
			<div className="confetti"/>
			<div className="confetti"/>
		</div>	 */}