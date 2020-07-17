import React from 'react';
import './App.scss';
import './Components/Playlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playlist from './Components/Playlist';
import CurrentArtist from './Components/CurrentArtist';
import FeatureForYou from './Components/FeatureForYou';
import RecommendedAlbums from './Components/RecommendedAlbums';
import Player from './Components/Player';
import RecentlyListened from './Components/RecentlyListened';

  class App extends React.Component {

    state = {
      height: null
    }


    componentDidMount() { //TODO: Create a callback function
      let heightScreen = window.innerHeight;
      this.setState({
        height: heightScreen
      })
    }

    
    render() {
      const {height} = this.state;
      return (
        <> 
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Playlist height={height} />
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
                <div className="row">
                  <div className="col-12">
                    <Player />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
        </>
      );
    }
  }

export default App;