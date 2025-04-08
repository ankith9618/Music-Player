import React, { useContext, useState,useEffect } from 'react';
import './Card.css';
import playIcon from '../images/play.svg';
import pauseIcon from '../images/pause.svg';
import { SongContext } from '../Context/SongContext';

export default function Card({ song, setSongSelected }) {
    const { currentSong, setCurrentSong } = useContext(SongContext);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudioEvents = (audio) => {
        audio.addEventListener('play', () => setIsPlaying(true));
        audio.addEventListener('pause', () => setIsPlaying(false));
    };

    const openSongCard = (event) => {
        event.preventDefault();
        if (currentSong &&
            currentSong.audio &&
            !currentSong.audio.paused) {
            currentSong.audio.pause();
        }
        song["audio"] = new Audio(song["downloadUrl"]["url"]);
         setCurrentSong(song);
        setSongSelected(song);
    }

    const changeSongState = (event) => {
        event.stopPropagation();
        if (currentSong?.audio) {
            if (currentSong.audio.src === song.downloadUrl.url) {
                if (currentSong.audio.paused) {
                    currentSong.audio.play();
                } else {
                    currentSong.audio.pause();
                }
                return;
            } else {
                currentSong.audio.pause();
            }
        }

        const newAudio = new Audio(song.downloadUrl.url);
        handleAudioEvents(newAudio);
        newAudio.play();
        setCurrentSong({ audio: newAudio, ...song });

    };

    useEffect(() => {
        if (currentSong?.audio && currentSong.details.id === song.details.id) {
            setIsPlaying(!currentSong.audio.paused);
        } else {
            setIsPlaying(false);
        }
    }, [currentSong, song.details.id]);

    return (
        <div className="card" onClick={openSongCard}>
            <div className="card-image">
                <img className="layer" src={song.image.url} alt={song.details.name} />
            </div>
            <div className="card-info">
                <h3 className="song-name">{song.details.name}</h3>
                <img
                    className="play-icon"
                    onClick={changeSongState}
                    src={isPlaying ? pauseIcon : playIcon}
                    alt={isPlaying ? "Pause" : "Play"}
                />
                <p className="singer">Artist : {song.artists[0]["name"] || "Unknown"}</p>
                <li className="plays">
                    <span>{song.details.playCount}</span> plays
                </li>
            </div>
        </div>
    );
}
