import React, { useEffect, useState } from "react";
import {
  MapContainer,
  WMSTileLayer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";

import axios from "axios";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import MarkerPlacement from "./MarkerPlacement";
import { DefaultIcon } from "./icon";

function Map({ units }) {
  //console.log(units);

  // http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3Acountries&outputFormat=application%2Fjson&maxFeatures=50
  const [countries_wat, setCountries_wat] = useState();
  const [parki, setParki] = useState();
  const [wojewodztwa, setWojewodztwa] = useState();
  const [powiaty, setPowiaty] = useState();

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3Awat-countries&outputFormat=application%2Fjson"
        ) //!!! TU POPRAWIC NA WLASNE(WFS link z geoserver)
        .then((dane) => {
          //console.log(dane);
          setCountries_wat(dane.data);
        });
    };
    const getData_Parki = () => {
      axios
        .get(
          "http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3Aparki_n&outputFormat=application%2Fjson"
        ) //!!! TU POPRAWIC NA WLASNE(WFS link z geoserver)
        .then((dane) => {
          // console.log(dane);
          setParki(dane.data);
        });
    };
    const getData_wojewodztwa = () => {
      axios
        .get(
          "http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3Awat_wojewodztwa&outputFormat=application%2Fjson"
          //"http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3AA01_Granice_wojewodztw&outputFormat=application%2Fjson"
        ) //!!! TU POPRAWIC NA WLASNE(WFS link z geoserver)
        .then((dane) => {
          // console.log(dane);
          setWojewodztwa(dane.data);
        });
    };
    const getData_powiaty = () => {
      axios
        .get(
          "http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3Awat_powiaty&outputFormat=application%2Fjson"
          //"http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3Awat_powiaty&outputFormat=application%2Fjson"
          //"http://localhost:9000/geoserver/wat-geoservices/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=wat-geoservices%3AA02_Granice_powiatow&outputFormat=application%2Fjson"
        ) //!!! TU POPRAWIC NA WLASNE(WFS link z geoserver)
        .then((dane) => {
          //console.log(dane);
          setPowiaty(dane.data);
        });
    };
    getData_wojewodztwa();
    getData_Parki();
    getData();
    getData_powiaty();
  }, []);

  return (
    <div
      className="map"
      // onClick={(event) => console.log("kliknieto", event.latlng)}
    >
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

          <LayersControl.BaseLayer name="countries">
            <WMSTileLayer
              layers="wat-countries" //!!! TU POPRAWIC NA WLASNE(WMS nazwa warstwy  z Qgis)
              url="http://localhost:9000/geoserver/wat-geoservices/wms?"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="parki">
            <WMSTileLayer
              layers="parki_n" //!!! TU POPRAWIC NA WLASNE(WMS z Qgis (nazwa warstwy))
              url="http://localhost:9000/geoserver/wat-geoservices/wms?"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="wat_wojewodztwa">
            <WMSTileLayer
              layers="wat_wojewodztwa" //!!! TU POPRAWIC NA WLASNE(WMS z Qgis (nazwa warstwy))
              url="http://localhost:9000/geoserver/wat-geoservices/wms?"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="wat_powiaty">
            <WMSTileLayer
              layers="wat_powiaty" //!!! TU POPRAWIC NA WLASNE(WMS z Qgis (nazwa warstwy))
              url="http://localhost:9000/geoserver/wat-geoservices/wms?"
            />
          </LayersControl.BaseLayer>

          {/* http://localhost:9000/geoserver/wat_geoservices/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX=10.74408153829550017%2C47.92452277506534131%2C10.7543589256090435%2C47.93709594618378844&CRS=CRS%3A84&WIDTH=598&HEIGHT=732&LAYERS=ne_10m_admin_0_countries&STYLES=&FORMAT=image%2Fjpeg&DPI=120&MAP_RESOLUTION=120&FORMAT_OPTIONS=dpi%3A120           */}

          <LayersControl.Overlay name="Countries">
            {countries_wat ? <GeoJSON data={countries_wat} /> : ""}
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Parks">
            {parki ? <GeoJSON data={parki} /> : ""}
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Wojewodztwa">
            {wojewodztwa ? <GeoJSON data={wojewodztwa} /> : ""}
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Powiaty">
            {powiaty ? <GeoJSON data={powiaty} /> : ""}
          </LayersControl.Overlay>

          {/* <MarkerPlacement /> */}
        </LayersControl>

        {units.map((unit) => {
          return (
            <Marker key={unit.id} position={[unit.lat, unit.lng]}>
              <Popup key={unit.id}>
                <h5>{unit.name}</h5>
                <br />
                <strong> Adres:</strong>
                {unit.adress}
                <br />
                <strong> Telefon:</strong>
                {unit.phone}
                <br />
                <strong> Powierzchnia:</strong>
                {unit.area}
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
