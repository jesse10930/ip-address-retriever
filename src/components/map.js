import React from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

const map = ({ center }) => {
  return (
    <div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}></Marker>
      </MapContainer>
    </div>
  )
}

export default map
