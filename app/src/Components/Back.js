
import React, { useContext } from 'react'
import backIcon from '../images/back.svg';
import './Back.css';
import { SongContext } from '../Context/SongContext';
export default function Back(props) {
    const {currentSong,setCurrentSong} = useContext(SongContext);
    const goBack=(event)=>{
        event.preventDefault();
        if(currentSong.audio && !currentSong.audio.paused){
            currentSong.audio.pause();
        }
        setCurrentSong(null);
        props.setSongSelected(null);
    }
  return (
    <div onClick={goBack} className='back-button'>
       <img src={backIcon} alt='back'/>
    </div>
  )
}
