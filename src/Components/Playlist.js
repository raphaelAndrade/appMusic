import React from 'react';
import SearchMusic from './SearchMusic';
import ListMusic from './ListMusic';

function Playlist(props) {
    const {height} = props;
    return(
            <>
                <div className="background_playlist" style={{height: height}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="picture">
                                                <img src="https://ca.slack-edge.com/E27SFGS2W-WU7N48FDK-0fa4dbc7de37-512" alt="Picture of Profile" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <span className="nameUser">Raphael</span>
                                            <span className="badgeAccount">Premium</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <SearchMusic />
                                        </div>
                                        <div className="col-12">
                                            <ListMusic />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default Playlist;




