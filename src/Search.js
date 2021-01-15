import React from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props) => {
    return (
        <div className="container">
                <input
                    type="text"
                    value={props.value}
                    placeholder="Search for your favourite movies to nominate..."
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    />
                <i className="glyphicon glyphicon-search search-icon"/>
        </div>
    );
};

export default Search;