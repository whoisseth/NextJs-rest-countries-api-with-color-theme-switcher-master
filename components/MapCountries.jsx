import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";


function MapCountries({ cLat, cLong, zoom, pitch, MapStyle }) {
  const [lat, lang, zMap] = [cLat, cLong, zoom];

  let [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lang,
    zoom: zMap,
    pitch: pitch,
  });
  return (
    <div className=' shadow-md rounded-xl overflow-hidden  m-2 '>
      

      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1IjoidXRrYXJzaHNldGgiLCJhIjoiY2t5Y3JxZzhsMHNnMDJ4bzh1azNoYmh2ciJ9.-lfaCZ_sD5EsSRdsOyKOyQ"
        }
        mapStyle={MapStyle}
        width='100vw'
        // width='100%'
        height='90vh'
        className='border-md overflow-hidden'
        {...viewport}
        onViewportChange={newView => setViewport(newView)}
      >
       
        <Marker
          latitude={lat}
          longitude={lang}
          className=' fill-green-400'
          offsetTop={(-viewport.zoom * 5) / 2}
        >
          <img
            src='https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png'
            className='h-10 w-10'
            alt=''
          />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default MapCountries;
