import { React, useContext, useEffect, useState } from 'react'
import { getSuggestedSongs } from '../songs.js';

import Card from './Card.js';
import SongCard from './SongCard.js';
import Loader from './Loader.js';
import Back from './Back.js';
import { SongContext } from '../Context/SongContext.js';


export default function Content() {
    let [songSelected, setSongSelected] = useState(null);
    let { songs, setSongs } = useContext(SongContext);

    useEffect(() => {
        const fetchData = async () => {
            const suggestedSongs = await getSuggestedSongs();
            setSongs(suggestedSongs);
        }
        fetchData();
    }, [setSongs]);
    
    return (
        <>
            {(!songSelected) ?
                !songs?<Loader/>:
                songs.map((song, index) => (
                    <Card
                        key={song.details.id || index}
                        song={song}
                        songSelected={songSelected}
                        setSongSelected={setSongSelected}
                    />)) :
                <>
                    <Back setSongSelected={setSongSelected} songSelected={songSelected} />
                    <SongCard songs={songs} />
                </>
            }
        </>
    );
}
