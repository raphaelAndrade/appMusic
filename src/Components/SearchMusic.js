import React from 'react';


function SearchMusic() {
    return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h4>Search</h4>
              </div>
              <div className="col-12">
              <div class="form-group">
                <input type="text" class="form-control" aria-describedby="Search" placeholder=" Artists, Songs, or podcasts"/>
              </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default SearchMusic;

