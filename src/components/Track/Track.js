import React from 'react';
import Tracklist from '../TrackList/TrackList';

const Track = () => {
    
    const renderAction = () => {
        {isRemoval && <button className="Track-action">-</button>};
        {!isRemoval && <button className="Track-action">+</button>};        
    }
    
    return (
        <div className="Track">
            <div className="Track-information">
                {tracks.map(track => {
                    <h3>{track.name}</h3>
                    <p>{track.artist} | {track.album} </p>
                })}
                
            </div>
            <button class="Track-action">+ or - will go here </button>
        </div>
    );
}

export default Track;
