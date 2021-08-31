import React from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

const Map = ({ center }) => {
  if (typeof window !== "undefined") {
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
  return null
}

export default Map
