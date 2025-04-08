import { useState, useContext } from 'react';
import { SongContext } from '../Context/SongContext.js';
import searchIcon from '../images/search.svg';
import Content from './Content.js';
import NotFound from './NotFound.js';
import { searchSongs } from '../songs.js';

export default function Home() {
    let { songs, setSongs } = useContext(SongContext);
    const [searchTerm, setSearchTerm] = useState("");

    const getSearchedSongs = async () => {
        if (searchTerm.trim()) {
            setSongs(null);
            setSongs((songs = await searchSongs(searchTerm)));
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            getSearchedSongs();
        }
    };

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search songs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyPress} 
                />
                <img src={searchIcon} alt="search" onClick={getSearchedSongs} />
            </div>
            <div className="songs-container">
                {songs && songs.length === 0 ? <NotFound /> : <Content />}
            </div>
        </>
    );
}
