import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
const slideImages = [
  'https://images.squarespace-cdn.com/content/v1/56d1077e8a65e2c2b911c5fa/1524683962396-IP8LREI9L95WV6JEYWLU/ke17ZwdGBToddI8pDm48kNgFyjlEyNHlSWEjE-QCU1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdLKTLgsLX9_T7LnpaostY9WYLb0IFNaX6bgMhY2dUNBWIB-7cQgYKo_bDpR6cEVkg/BA_ART_NoLimits%28tunecore%29.jpg',
  'https://images.squarespace-cdn.com/content/v1/56d1077e8a65e2c2b911c5fa/1524683962396-IP8LREI9L95WV6JEYWLU/ke17ZwdGBToddI8pDm48kNgFyjlEyNHlSWEjE-QCU1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdLKTLgsLX9_T7LnpaostY9WYLb0IFNaX6bgMhY2dUNBWIB-7cQgYKo_bDpR6cEVkg/BA_ART_NoLimits%28tunecore%29.jpg',
  'https://images.squarespace-cdn.com/content/v1/56d1077e8a65e2c2b911c5fa/1524683962396-IP8LREI9L95WV6JEYWLU/ke17ZwdGBToddI8pDm48kNgFyjlEyNHlSWEjE-QCU1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdLKTLgsLX9_T7LnpaostY9WYLb0IFNaX6bgMhY2dUNBWIB-7cQgYKo_bDpR6cEVkg/BA_ART_NoLimits%28tunecore%29.jpg'
//   './img/slide_3.jpg',
//   './img/slide_4.jpg',
//   './img/slide_5.jpg',
//   './img/slide_6.jpg',
//   './img/slide_7.jpg'
];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;