import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const addresses = [
  { position: [51.505, -0.09], text: "Address 1" },
  { position: [51.51, -0.1], text: "Address 2" },
  { position: [51.515, -0.1], text: "Address 3" }
];

const MultiAddressMap = () => {
  // Calculate the bounds of the map
  const bounds = addresses.map(address => address.position);

  return (
    <MapContainer bounds={bounds} style={{ height: "400px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {addresses.map((address, index) => (
        <Marker key={index} position={address.position}>
          <Popup>
            {address.text}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MultiAddressMap;
