import React from 'react';

function Player() {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 offset-2">
                    <div className="background-player">
                        <div className="container-fluid noPadding">
                            <div className="row">
                                <div className="col-2">
                                    <span className="previous">Previous<label>Photograph</label></span>
                                </div>
                                <div className="col-8">
                                    <ul className="list-inline list-icon-player">
                                        <li className="list-inline-item"><a href="#"><i class="fa fa-step-backward" aria-hidden="true"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i class="fa fa-play" aria-hidden="true"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i class="fa fa-step-forward" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <ul className="list-inline list-time-line">
                                        <li className="list-inline-item">
                                            <span>01:19</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="bg-timeline">
                                                <span></span>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>01:19</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2">
                                    <span className="previous">Up next <label>Rise</label></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}   

export default Player;


