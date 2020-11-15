import { playAudio } from "../util";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add Active State
    const newSongs = songs.map((songClicked) => {
      if (songClicked.id === song.id) {
        return {
          ...songClicked,
          active: true,
        };
      } else {
        return {
          ...songClicked,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
