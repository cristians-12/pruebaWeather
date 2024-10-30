import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapComponent: React.FC<{ lat: number; lon: number; city: string }> = ({ lat, lon, city }) => {
    return (
        <div className='lg:w-[50%] h-[200px] lg:h-auto'>
            <MapContainer center={[lat, lon]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lon]}>
                    <Popup>{city}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
