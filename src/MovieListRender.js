import React from 'react';
import MovieList from './MovieList';

const MovieListRender = (props) => {
    const Movies = props.movies;
    const InitialDetails = props.initialDetails;
    const Nominations = props.nominations;
    const FavouriteComponent = props.favouriteComponent;
    const MaxNominationsFix = props.maxNominationsFix;
    const SearchValue = props.searchValue;
    const ClickAdd = props.handleNominationClick;
    const ClickNothing = props.handleNominationClick2;

    if(SearchValue !== '' && Nominations.length < 5){
        return(<MovieList movies={Movies} nominations={Nominations} favouriteComponent={FavouriteComponent} handleNominationClick={ClickAdd}/>);
    } else if (SearchValue === '' && Nominations.length < 5) {
        return(<MovieList movies={InitialDetails} nominations={Nominations} favouriteComponent={FavouriteComponent} handleNominationClick={ClickAdd}/>);
    } else if (SearchValue !== '' && Nominations.length === 5) {
        return(<MovieList movies={Movies} nominations={Nominations} favouriteComponent={MaxNominationsFix} handleNominationClick={ClickNothing}/>);
    } else {
        return(<MovieList movies={InitialDetails} nominations={Nominations} favouriteComponent={MaxNominationsFix} handleNominationClick={ClickNothing}/>);
    }
}

export default MovieListRender;