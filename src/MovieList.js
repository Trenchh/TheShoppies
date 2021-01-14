import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleNominationClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					></div>
					<div className='overlay d-flex align-items-center justify-content-center'>
						Add to Nominations
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;