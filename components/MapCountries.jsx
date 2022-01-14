import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { BiCurrentLocation } from "react-icons/bi";
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
          className=' fill-blue-400'
          offsetTop={(-viewport.zoom * 5) / 2}
          // offsetTop={(-viewport.zoom * 10) / 2}
        >
          <BiCurrentLocation
          // height={15}
          // width={15}
          // height={viewport.zoom * 5}
          // width={viewport.zoom * 5}
          />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default MapCountries;
