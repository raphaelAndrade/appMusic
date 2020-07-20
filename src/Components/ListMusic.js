import React, {useState} from 'react';
import { Consumer } from './Context';
function ListMusic() {

const [ListSongsAlbum,setListSongsAlbum] = useState({});

const listTrack = (dispatch, trackLink,selectedAlbum, e)=> {
    e.preventDefault();
    fetch(`https://cors-anywhere.herokuapp.com/${trackLink}`).then(response => {
      response
        .json()
        .then(data => {
            setListSongsAlbum(data.data)
        })
        .catch(erro => {
          console.log(`this is a error ${erro}`);
        });
    });
    dispatch({type: "TRACKLIST", payload: ListSongsAlbum});
}

return(
    <Consumer>
        {value => {
            const {valueSearch, resultQuery, dispatch} = value;      
            return(
                <>
                   <h5>{valueSearch}</h5>
                   <div className="resultList">
                        <ul className="listMusic"> 
                            {
                                Object.keys(resultQuery).map((val, index) => (
                                    //console.log(resultQuery[val]),
                                    <li className="list-inline" key={index}>
                                        <a onClick={listTrack.bind(this, dispatch,resultQuery[val].album.tracklist,resultQuery[val].album.cover_big)} >
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <div className="albumMusic">
                                                        <img src={resultQuery[val].album.cover_big} alt="Picture of Profile" className="img-fluid"/>
                                                    </div>
                                                </li>
                                                <li className="list-inline-item">
                                                    <div className="description">
                                                        <span>{resultQuery[val].title}</span>
                                                        <label>{resultQuery[val].artist.name}</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                  </div> 
                </>
            )
        }}
    </Consumer>
    )
}
export default ListMusic;
