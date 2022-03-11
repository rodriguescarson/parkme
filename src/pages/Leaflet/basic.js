import React, { useState } from "react";
import Header from "components/Header";

import { Map, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 15.29199431, lng: 73.96915277 });
    const ZOOM_LEVEL = 20;
    const mapRef = useRef();

    return (
        <>
            <Header title="ParkMe" />

            <div className="row">
                <div className="col text-center">
                    <h2>ParkMe - Basic Openstreet Maps</h2>
                    <p>Loading basic map using layer from maptiler</p>
                    <div className="col">
                        <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </Map>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicMap;
