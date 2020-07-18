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


  function App() {
    return(
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Playlist height={"height"} />
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
                    <div className="col-2">asdfasdf</div>
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
    )
  }

  export default App;