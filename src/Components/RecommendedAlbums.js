import React from 'react';
import Slide from './Slide';

function RecommendedAlbums() {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 ">
                        <h2>Recommended Albums</h2>
                    </div>
                    <div className="col-2">
                        <span className="linkMore">Browse</span>
                    </div>
                </div>
                <ul className="list-recommended-albuns list-inline">
                    <li className="list-inline-item">
                        <img src="https://edmlife.com/wp-content/uploads/2020/02/IMG_2051.jpg" alt="Picture of Profile" className="img-fluid"/>
                        <span>Alone - <label>Alan Walker</label></span>
                    </li>
                     <li className="list-inline-item">
                        <img src="https://edmlife.com/wp-content/uploads/2020/02/IMG_2051.jpg" alt="Picture of Profile" className="img-fluid"/>
                        <span>Alone - <label>Alan Walker</label></span>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://edmlife.com/wp-content/uploads/2020/02/IMG_2051.jpg" alt="Picture of Profile" className="img-fluid"/>
                        <span>Alone - <label>Alan Walker</label></span>
                    </li>
                     <li className="list-inline-item">
                        <img src="https://i.pinimg.com/originals/d2/29/8d/d2298d3eaadd15d3800bbd14f605e5a9.jpg" alt="Picture of Profile" className="img-fluid"/>
                        <span>Alone - <label>Alan Walker</label></span>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://edmlife.com/wp-content/uploads/2020/02/IMG_2051.jpg" alt="Picture of Profile" className="img-fluid"/>
                        <span>Alone - <label>Alan Walker</label></span>
                    </li>
                    <li className="list-inline-item">
                        <img src="https://i.pinimg.com/originals/d2/29/8d/d2298d3eaadd15d3800bbd14f605e5a9.jpg" alt="Picture of Profile" className="img-fluid"/>
                        <span>Alone - <label>Alan Walker</label></span>
                    </li>
                     {/* <li className="list-inline-item">
                        <img src="https://i.pinimg.com/originals/d2/29/8d/d2298d3eaadd15d3800bbd14f605e5a9.jpg" alt="Picture of Profile" className="img-fluid"/>
                        <span>Alone - <label>Alan Walker</label></span>
                    </li> */}
                </ul>
                {/* <Slide /> */}
            </div>
        </>
    )
}
export default RecommendedAlbums;