import React, { useState }  from 'react';
function SearchMusic() {
  const [query,setQuery] = useState("album");
  const [textSearch,setTextSearch] = useState("");

  const onChange = event => {
    setQuery({ value: event.target.value })
  }

  const onSubmit = (dispatch, e) => {
    e.preventDefault();
    const newSearch = {
      query,
      textSearch
    }
    dispatch({type: "SEARCH", payload: newSearch});
  }

    return (
        <>
          <h4>Search</h4>
          {/* <input type="text" class="form-control" aria-describedby="Search" placeholder=" Artists, Songs, or podcasts"/> */}
          <div className="list-select">
            <select
              onChange={onChange}
              className="ant-input selectBox"
              style={{ width: 200 }}
              placeholder="Select a person"
            >
              <option value="album">Album</option>
              <option value="track">Music</option>
              ...
            </select>
          </div>
        </>
    )
}
export default SearchMusic;

