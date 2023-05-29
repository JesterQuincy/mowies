import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInput = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchValue);
    };

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={handleInput}
                placeholder="Какой фильм?"
            />
            <button onClick={handleSearch}>👁</button>
        </div>
    );
};

export default Search;
