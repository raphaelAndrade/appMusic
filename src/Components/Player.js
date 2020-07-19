import React from 'react';

function Player() {
    return(
        <>
            <div className="background-player">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <span className="previous">Previous<label>Photograph</label></span>
                        </div>
                        <div className="col-8">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="list-inline list-icon-player">
                                            <li className="list-inline-item"><a href="#"><i class="fa fa-step-backward" aria-hidden="true" ></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i class="fa fa-play" aria-hidden="true"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i class="fa fa-step-forward" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <span>01:19</span>
                                    </div>
                                    <div className="col-7">
                                        <div className="bg-timeline">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <span>01:19</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-2">
                            <span className="previous">Up next <label>Rise</label></span>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    )
}   

export default Player;


