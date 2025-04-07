import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";

import { DefaultIcon } from "./icon";

function Map({ units }) {
  console.log(units);
  return (
    <div className="map">
      <MapContainer center={[52.23, 21.0]} zoom={15}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="WMS google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
        </LayersControl>

        {units.map((unit) => {
          return (
            <Marker key={unit.id} position={[unit.lat, unit.lng]}>
              <Popup key={unit.id}>
                <h5>{unit.name}</h5>
                <br />
                <strong>Adres: {unit.address}</strong>
                <br />
                <strong>Telefon: {unit.phone}</strong>
                <br />
                <strong>Fax: {unit.fax}</strong>
                <br />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
