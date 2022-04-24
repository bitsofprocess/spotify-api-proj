import React from 'react';

// styles
import styles from './Playlist.css';

const Playlist = () => {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            {/* <TrackList /> */}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
