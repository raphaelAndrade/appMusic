import React from 'react';
import SearchMusic from './SearchMusic';
import ListMusic from './ListMusic';

function Playlist() {
    return(
            <>
                <div className="background_playlist">
                   <div className="container-fluid">
                       <div className="row">
                           <div className="col-12">
                             <ul className="list-inline">
                                <li className="list-inline-item">
                                    <div className="picture">
                                        <img src="https://ca.slack-edge.com/E27SFGS2W-WU7N48FDK-0fa4dbc7de37-512" alt="Picture of Profile" className="img-fluid"/>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <span className="nameUser">Raphael Santos</span>
                                    <span className="badgeAccount">Premium</span>
                                </li>
                             </ul> 
                           </div>
                       </div>
                       <div className="row">
                          <div className="col-12">
                            <SearchMusic />
                          </div>
                       </div>
                       <div className="row">
                          <div className="col-12">
                            <ListMusic /> 
                          </div>
                       </div>
                   </div> 
                </div>
            </>
        )
}
export default Playlist;




