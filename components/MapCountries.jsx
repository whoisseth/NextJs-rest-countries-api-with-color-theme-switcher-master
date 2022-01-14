import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { BiCurrentLocation } from "react-icons/bi";
// import { IoLocation } from "react-icons/io";
import { HiLocationMarker}  from 'react-icons/hi'
function MapCountries({ cLat, cLong, zoom, pitch, MapStyle }) {
  const [lat, lang, zMap] = [cLat, cLong, zoom];

  let [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lang,
    zoom: zMap,
    pitch: pitch,
  });
  return (
    <div className=' shadow-md rounded-xl overflow-hidden'>
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1IjoidXRrYXJzaHNldGgiLCJhIjoiY2t5Y3JxZzhsMHNnMDJ4bzh1azNoYmh2ciJ9.-lfaCZ_sD5EsSRdsOyKOyQ"
        }
        // mapStyle='mapbox://styles/mapbox/streets-v11'
        // mapStyle='mapbox://styles/mapbox/dark-v9'
        mapStyle={MapStyle}
        // height={400}
        // width={600}
        height='70vh'
        width='80vw'
        // width='100%'
        {...viewport}
        onViewportChange={newView => setViewport(newView)}
      >
        <Marker
          latitude={lat}
          longitude={lang}
          className=' fill-green-400'
          offsetTop={(-viewport.zoom * 5) / 2}
          // offsetTop={(-viewport.zoom * 10) / 2}
        >
          {/* <BiCurrentLocation /> */}
          {/* <IoLocation /> */}
          {/* <HiLocationMarker className=" fill-red-400 h-10 w-10"  /> */}
          <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png"  className="h-10 w-10" alt="" />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default MapCountries;
