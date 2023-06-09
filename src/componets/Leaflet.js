import React, { useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkerCluster from "./Clusters";
import { useDispatch, useSelector } from "react-redux";
import { getallEmployees } from "../action/action";


const position = [51.505, -0.09];
const mapStyle = { height: "90vh" };

function Leaflet() {
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getallEmployees())

    }, [])
    let markers;

    // const { employees } = useSelector((state) => state.allEmployees)

    const { employees } = useSelector((state) => state.allEmployees)
    console.log(employees)
    const addMarkers = () => {
        markers = [];
        for (let i = 0; i < 10000; i++) {
            markers.push({
                position: {
                    lng: -122.673447 + Math.random() * 200.0,
                    lat: 45.5225581 - 60 + Math.random() * 80
                }
            });
        }
    };

    addMarkers();

    return (
        <>
            <Map center={position} zoom={2} style={mapStyle} maxZoom={20}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <MarkerCluster markers={employees} addMarkers={addMarkers} />
            </Map>
            <div>
                clearLayers and addLayers used. Look at the console to check performance
            </div>
        </>
    );
};

export default Leaflet;