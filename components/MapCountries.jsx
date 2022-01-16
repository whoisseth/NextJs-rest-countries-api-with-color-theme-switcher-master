import React, { useState } from "react";
import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";

// const geolocateControlStyle = {
//   right: 10,
//   top: 10,
// };
function MapCountries({ cLat, cLong, zoom, pitch, MapStyle }) {
  const [lat, lang, zMap] = [cLat, cLong, zoom];
  // const [btn, setBtn] = useState(false);

  let [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lang,
    zoom: zMap,
    pitch: pitch,
  });
  return (
    <div className=' shadow-md rounded-xl overflow-hidden  m-2 '>
      {/* <button onClick={setBtn}> Show current location</button> */}

      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1IjoidXRrYXJzaHNldGgiLCJhIjoiY2t5Y3JxZzhsMHNnMDJ4bzh1azNoYmh2ciJ9.-lfaCZ_sD5EsSRdsOyKOyQ"
        }
        mapStyle={MapStyle}
        width='80rem'
        height='90vh'
        className='border-md overflow-hidden'
        {...viewport}
        onViewportChange={newView => setViewport(newView)}
      >
        {/* <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        /> */}
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
