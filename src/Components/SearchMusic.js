import React, { useState }  from 'react';
import { Consumer } from './Context';
function SearchMusic() {
  const [query,setQuery] = useState("album");
  const [textSearch,setTextSearch] = useState("");
  const [resultSearch,setResultSearch] = useState({});

 
  const onChangeQuery = event => {
    setQuery({ value: event.target.value })
  }

  const onChangeText = event => {
    setTextSearch({ value: event.target.value })
  }

  const onSubmit = (dispatch, e) => {
    e.preventDefault();
    const newSearch = {
      query,
      textSearch
    }
    dispatch({type: "SEARCH", payload: newSearch});
  }

  const fetchSearch = (dispatch, query, textSearch) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}:'${textSearch}'`).then(response => {
      response
        .json()
        .then(data => {
          setResultSearch(data.data)
        })
        .catch(erro => {
          console.log(`this is a error ${erro}`);
        });
    });
    dispatch({type: "SEARCHQUERY", payload: resultSearch});
  }
    return (
        <Consumer>
          {value => {
            const {query, valueSearch, dispatch} = value;
            return(
              <>
                <h4>Search</h4>
                <form onSubmit={onSubmit.bind(this, dispatch)}> 
                  <ul className="list-unstyled filterList">
                    <li>
                      <div className="list-select">
                        <select
                          onChange={onChangeQuery}
                          className="custom-select"
                          placeholder="Select a person"
                        >
                          <option value="album">Album</option>
                          <option value="track">Music</option>
                          <option value="artist">Artist</option>
                          ...
                        </select>
                      </div>
                    </li>
                    <li>
                      <input 
                        type="text" 
                        className="form-control" 
                        aria-describedby="Search" 
                        placeholder={`Search for ${query.value}`}
                        onChange={onChangeText}
                      />
                    </li>
                    <li>
                      <input type="submit" className="btn btn-primary btnSearch" value="Search" onClick={fetchSearch.bind(this, dispatch, query, valueSearch)}/>
                    </li>
                  </ul>
                </form>
              </>
            )
          }}
        </Consumer>
    )
}
export default SearchMusic;
