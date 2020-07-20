import React from 'react';
import { Consumer } from './Context'
// import React, { useState } from 'react';

function CurrentArtist() {
    // const [contact, setContact] = useState()

    return(
        <Consumer>
            {value => {
                const {resultQuery, tracklist,selectedAlbum} = value
               
                return (
                    <> 
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="banner-Artist">
                                    <ul className="list-inline artist-banner-list">
                                        <li className="list-inline-item">
                                            <div className="artist-picture">
                                            {/* <img src="" alt="Picture of Profile" className="img-fluid"/> */}
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <h1>Boyce Avenue Acoustic Covers</h1>
                                            <span>A thousand Years</span>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ul className="listMusicAlbum list-inline">
                                    {
                                        Object.keys(tracklist).map((val, index) => (
                                            
                                            <li className="list-inline" key={index}>
                                                <a href={tracklist[val].preview} target="_blank">
                                                    <div className="container-fluid noPadding">
                                                        <div className="row">
                                                            <div className="col-1">
                                                                <span>{tracklist[val].track_position}</span>
                                                            </div>
                                                            <div className="col-5">
                                                                <span>{tracklist[val].title}</span>
                                                            </div>
                                                            <div className="col-6">
                                                                <span className="timeMusic">{tracklist[val].duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        ))
                                    }   
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </>
                )
            }}
        </Consumer>
    )
}

export default CurrentArtist;