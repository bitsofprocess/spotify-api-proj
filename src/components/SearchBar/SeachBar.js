import React from 'react';

//styles
import styles from './SearchBar.css';

const SeachBar = () => {
    return (
        <div>
            <div class="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button class="SearchButton">SEARCH</button>
            </div>
        </div>
    );
}

export default SeachBar;
