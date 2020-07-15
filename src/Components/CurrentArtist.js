import React from 'react';

function CurrentArtist() {
    return(
        <> 
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                      <div className="banner-Artist">
                      <ul className="list-inline artist-banner-list">
                        <li className="list-inline-item">
                            <div className="artist-picture"></div>
                        </li>
                        <li className="list-inline-item">
                            <h1>Boyce Avenue Acoustic Covers</h1>
                            <span>A thousand Years</span>
                        </li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}

export default CurrentArtist;
