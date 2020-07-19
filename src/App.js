import React, { useEffect } from 'react';
import './App.scss';
import './Components/Playlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playlist from './Components/Playlist';
import CurrentArtist from './Components/CurrentArtist';
import FeatureForYou from './Components/FeatureForYou';
import RecommendedAlbums from './Components/RecommendedAlbums';
import Player from './Components/Player';
import RecentlyListened from './Components/RecentlyListened';
import { Provider } from './Components/Context';


  function App() {
    return(
      <Provider>
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <Playlist />
              </div>
              <div className="col-10">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-9">
                      <CurrentArtist />
                      <FeatureForYou />
                    </div>
                    <div className="col-3">
                      <RecentlyListened />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <RecommendedAlbums />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <footer>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-2">
                        <ul className="listMusic">
                        <li>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <div className="albumMusic">
                                <img src="https://images.squarespace-cdn.com/content/v1/56d1077e8a65e2c2b911c5fa/1524683962396-IP8LREI9L95WV6JEYWLU/ke17ZwdGBToddI8pDm48kNgFyjlEyNHlSWEjE-QCU1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdLKTLgsLX9_T7LnpaostY9WYLb0IFNaX6bgMhY2dUNBWIB-7cQgYKo_bDpR6cEVkg/BA_ART_NoLimits%28tunecore%29.jpg" alt="Picture of Profile" className="img-fluid"/>
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="description">
                                <span>Photograph</span>
                                <label>Boyce Avenue</label>
                              </div>
                            </li>
                          </ul>
                        </li>
                        </ul>
                      </div>
                      <div className="col-10">
                        <Player /> 
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div> 
        </>
      </Provider>
    )
  }

  export default App;