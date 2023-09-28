import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEnterKeyPress);

        return () => {
            window.removeEventListener('keydown', handleEnterKeyPress);
        };
    }, [handleEnterKeyPress]);

    return (
        <div className='caixaPesquisa'>
            <input className='inputPesquisa' placeholder='Pesquisar' value={searchTerm} onChange={handleInputChange} />
            <button className='botaoPesquisa' onClick={handleSearch}>
                <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
            </button>
        </div>
    );
}

export { SearchBar };