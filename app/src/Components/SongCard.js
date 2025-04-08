import './SongCard.css';
import playIcon from '../images/play.svg';
import pauseIcon from '../images/pause.svg';
import downloadIcon from '../images/download.svg';
import previousIcon from "../images/previous.svg";
import nextIcon from "../images/next.svg";
import { useContext, useState, useEffect } from 'react';
import { SongContext } from '../Context/SongContext.js';
import Loader from './Loader.js';
import { getLyrics } from '../songs.js';

export default function SongCard(props) {
  const { songs } = props;
  const totalSongs = songs.length;

  let { currentSong, setCurrentSong } = useContext(SongContext);
  const [isPlaying, setIsPlaying] = useState(false);
  let [lyrics, setLyrics] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const fetchLyrics = async () => {
    if (!currentSong["lyrics"])
      currentSong["lyrics"] = await getLyrics(currentSong.details.id);
    setLyrics(lyrics = !lyrics);
  };

  const handlePlaybarClick = (e) => {
    if (currentSong.audio) {
      const playbar = e.currentTarget;
      const playbarRect = playbar.getBoundingClientRect();
      const clickX = e.clientX - playbarRect.left;
      const newTime = (clickX / playbarRect.width) * currentSong.audio.duration;
      currentSong.audio.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (currentSong.audio) {
      const updatePlayingState = () => setIsPlaying(!currentSong.audio.paused);

      const updateProgress = () => {
        const currentTime = currentSong.audio.currentTime;
        const duration = currentSong.audio.duration;
        setProgress((currentTime / duration) * 100);
      };

      currentSong.audio.addEventListener('play', updatePlayingState);
      currentSong.audio.addEventListener('pause', updatePlayingState);
      currentSong.audio.addEventListener('timeupdate', updateProgress);

      return () => {
        currentSong.audio.removeEventListener('play', updatePlayingState);
        currentSong.audio.removeEventListener('pause', updatePlayingState);
        currentSong.audio.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [currentSong.audio]);

  const playSong = (event) => {
    event.preventDefault();

    // Pause any currently playing audio before playing the new one
    if (currentSong.audio) {
      if (currentSong.audio.paused) {
        currentSong.audio.play();
        setIsPlaying(true);
      } else {
        currentSong.audio.pause();
        setIsPlaying(false);
      }
    } else {
      const newAudio = new Audio(currentSong.downloadUrl.url);
      newAudio.play();
      setCurrentSong({ audio: newAudio, ...currentSong });
      setIsPlaying(true);
    }
  };

  const changeSong = async (newIndex) => {
    try {
      if (currentSong.audio) {
        currentSong.audio.pause();
      }

      const newSong = songs[newIndex];
      const newAudio = new Audio(newSong.downloadUrl.url);
      setCurrentSong({ audio: newAudio, ...newSong });

      await newAudio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error playing the song:", error);
    }
  };

  const getPreviousSong = (event) => {
    event.preventDefault();
    const index = currentSong.details.index;
    const newIndex = index >= 0 ? index - 1 : index;
    if (newIndex >= 0)
      changeSong(newIndex);
  };

  const getNextSong = (event) => {
    event.preventDefault();
    const index = currentSong.details.index;
    const newIndex = index < totalSongs ? index + 1 : index;
    if (newIndex < totalSongs)
      changeSong(newIndex);
  };

  const handleDownload = async () => {
    if (isDownloading) return;
    try {
      if (currentSong.audio && currentSong.audio.src) {
        setIsDownloading(true);
        const response = await fetch(currentSong.audio.src);
        const blob = await response.blob();
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `${currentSong.details.name}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setTimeout(() => {
          setIsDownloading(false);
        }, 5000);
      } else {
        console.error("Audio source is not available for download.");
      }
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className='songCard'>
      <div className='image'>
        <img src={currentSong.image.url} alt='' />
        <img src={downloadIcon} alt='download' className={!isDownloading ? 'download' : "disabled"} onClick={handleDownload} />
      </div>
      <div className='content-container'>
        <div className='playbar' onClick={(e) => handlePlaybarClick(e)}>
          <div
            className='fill'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className='button'>
          <img src={previousIcon} alt='previous' onClick={getPreviousSong} />
          <img
            src={isPlaying ? pauseIcon : playIcon}
            alt={isPlaying ? 'pause' : 'play'}
            onClick={playSong}
          />
          <img src={nextIcon} alt='next' onClick={getNextSong} />
        </div>
        <div className='content'>
          <div className='song-name'>{currentSong.details.name}</div>
          <div className='author-name'>{currentSong.artists[0].name}
            <button className='lyrics' onClick={fetchLyrics} disabled={!currentSong.details.hasLyrics}>
              Lyrics
            </button>
          </div>
          <div className='details'>
            {(!lyrics) ?
              <>
                <li>{currentSong.details.year}</li>
                <li>{currentSong.details.playCount} plays</li>
                <li>Lang: {currentSong.details.language || "UnKnown"}</li>
                <li>Lyrics: {currentSong.details.hasLyrics ? "yes" : "no"}</li>
              </> :
              <>
                {(currentSong.lyrics) ?
                  <div className="song-lyrics" dangerouslySetInnerHTML={{ __html: currentSong.lyrics }} /> :
                  <Loader />}
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
