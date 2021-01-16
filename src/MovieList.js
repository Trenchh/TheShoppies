import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import noImage from './noImage.png';
import './MovieList.css'

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	const NominationList = props.nominations;
	return (
		<>
			{props.movies.map((movie) => (
				<div class="card-deck cardSpacing" >
					<div className="card cardWidth">
						{movie.Poster === 'N/A'
							? <img className="card-img-top posterSize" src={noImage} alt="Card image cap"></img>
							: <img className="card-img-top posterSize" src={movie.Poster} alt="Card image cap"></img>
						}
						<div className="card-body">
							<h5 className="card-title">{movie.Title}</h5>
							<p className="card-text">{movie.Year}</p>
						</div>
						{NominationList.some(nom => nom.imdbID === movie.imdbID)
							?<>
							<span className='linear-wipe'>Nominated</span>
						</> 
							:
							<div
								onClick={() => props.handleNominationClick(movie)}
								className='overlay d-flex align-items-center justify-content-center'>
								<FavouriteComponent />
							</div>
						}

					</div>
				</div>
			))}
		</>
	);
};

function checkNominations(check,nominations) {
	console.log(nominations.some(nom => nom.imdbID === check.imdbID));
	return(nominations.some(nom => nom.imdbID === check.imdbID));
}



export default MovieList;