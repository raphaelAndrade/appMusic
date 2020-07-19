import React from 'react';
import { Consumer } from './Context'
// import React, { useState } from 'react';

function CurrentArtist() {
    // const [contact, setContact] = useState()
    return(
        <Consumer>
            {value => {
                const {contacts} = value
                return (
                    <> 
                        {contacts.map(contact => <div>{contact.name}</div>)}
                        {/* <div className="container-fluid">
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
                        </div> */}
                        </>
                )
            }}
        </Consumer>
    )
}

export default CurrentArtist;
