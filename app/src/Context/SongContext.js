import React, { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [songs,setSongs] = useState(null);
    
    return (
        <SongContext.Provider value={{ currentSong, setCurrentSong,songs,setSongs }}>
            {children}
        </SongContext.Provider>
    );
};
