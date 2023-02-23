import * as React from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import Navbar from './components/navbar.js';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=xSDLg1X56HQ4pcNxOvMG"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={77.5199} latitude={17.9104} color='#61dbfb'></Marker>
        <Marker longitude={75.7100} latitude={16.8302} color='#61dbfb'></Marker>
        <Marker longitude={74.4977} latitude={15.8497} color='#61dbfb'></Marker>
        <Marker longitude={75.1247} latitude={15.3647} color='#61dbfb'></Marker>
        <Marker longitude={75.0078} latitude={15.4589} color='#61dbfb'></Marker>
        <Marker longitude={76.839752} latitude={17.320486} color='#61dbfb'></Marker>
        <Marker longitude={74.498703} latitude={15.852792} color='#61dbfb'></Marker>
        <Marker longitude={77.362289} latitude={16.200829} color='#61dbfb'></Marker>


        <Marker longitude={77.697990} latitude={10.170677} color='#61dbfb'></Marker>
        <Marker longitude={78.119385} latitude={12.542751} color='#61dbfb'></Marker>
        <Marker longitude={79.116455} latitude={10.976162} color='#61dbfb'></Marker>
        <Marker longitude={79.269531} latitude={ 11.529566} color='#61dbfb'></Marker>
        <Marker longitude={77.353973} latitude={ 8.159477} color='#61dbfb'></Marker>
        <Marker longitude={77.501740} latitude={ 11.445157} color='#61dbfb'></Marker>
      </Map>
    </div>
  );
}

export default App;
