"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import { Location } from "@/app/generated/prisma";

// Optional: Fix default marker icon issue in Leaflet
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

interface MapProps {
  itineraries: Location[];
}

export default function Map({ itineraries }: MapProps) {
  if (typeof window === "undefined") return null; // Ensure no SSR crash

  const center: LatLngExpression =
    itineraries.length > 0 ? [itineraries[0].lat, itineraries[0].lng] : [0, 0];

  return (
    <MapContainer
      center={center}
      zoom={8}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {itineraries.map((location, key) => (
        <Marker key={key} position={[location.lat, location.lng]}>
          <Popup>{location.locationTitle}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
