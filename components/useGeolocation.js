import React, { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };
    // const onError = error => {
    //     setLocation({
    //         loaded: true,
    //         error: {
    //             code: error.code,
    //             message: error.message,
    //         },
    //     });
    // };
    const onError = error => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: 28.612923529782684,
                lng: 77.22951166768763,
            },
        });
        alert("Please on location this may not show correct location ");
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    // const lat, lng
    // const [lat, lng] = [location.coordinates.lat, location.coordinates.lng];
    // location ? [lat, lng] = [location.coordinates.lat, location.coordinates.lng] : [lat, lng] = [0, 0]

    const [lat, lng] = [location.coordinates.lat, location.coordinates.lng];

    // return { lat: location.coordinates.lat, lnt: location.coordinates.lng };
    return { lat: lat, lng: lng };
};

export default useGeoLocation;