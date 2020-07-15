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
                    <div className="currentMusic">
                        <ul className="listMusic">
                          <li>
                            <div className="albumMusic">
                            <img src="https://images.squarespace-cdn.com/content/v1/56d1077e8a65e2c2b911c5fa/1524683962396-IP8LREI9L95WV6JEYWLU/ke17ZwdGBToddI8pDm48kNgFyjlEyNHlSWEjE-QCU1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdLKTLgsLX9_T7LnpaostY9WYLb0IFNaX6bgMhY2dUNBWIB-7cQgYKo_bDpR6cEVkg/BA_ART_NoLimits%28tunecore%29.jpg" alt="Picture of Profile" className="img-fluid"/>
                            </div>
                            <div className="description">
                                <span>A thousand Years</span>
                                <label>Boyce Avenue</label>
                            </div>
                          </li>
                      </ul>
                    </div>
                </div>
            </>
        )
}
export default Playlist;




