import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="card" style={{width: '18rem',maxWidth: '200px'}}>
					<img className="card-img-top" style={{width: '200px', height: '250px'}} src={movie.Poster} alt="Card image cap"></img>
					<div className="card-body">
						<h5 className="card-title">{movie.Title}</h5>
						<p className="card-text">{movie.Year}</p>
					</div>
					<div 
						onClick={() => props.handleNominationClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;