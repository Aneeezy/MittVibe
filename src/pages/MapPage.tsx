import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import "./MapPages.css";
import AddPostButton from "../components/AddPostButton";

// Mittenwalde districts with coordinates (approximate)
const districts: { name: string; coords: [number, number] }[] = [
  { name: "Mittenwalde", coords: [52.26007, 13.53945] },
  { name: "Gallun", coords: [52.25, 13.5667] },
  { name: "Ragow", coords: [52.2833, 13.55] },
  { name: "Brusendorf", coords: [52.3167, 13.5167] },
  { name: "Schenkendorf-Krummensee", coords: [52.278056, 13.596111] },
  { name: "Telz", coords: [52.25, 13.5] },
  { name: "Motzen", coords: [52.2, 13.5833] },
  { name: "Töpchin", coords: [52.1719, 13.5792] },
];

const mapCenter: LatLngExpression = [52.246, 13.517]; // Center on Mittenwalde

type MapPageProps = {
  userPosts: any[];
};

const MapPage: React.FC<MapPageProps> = ({ userPosts }) => {
  const [weather, setWeather] = useState<{
    temp: number;
    description: string;
    city: string;
  } | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "5a163f0da7bcbcbf7a86e65703c76265";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=52.246&lon=13.517&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (data && data.main && data.weather) {
          setWeather({
            temp: data.main.temp,
            description: data.weather[0].description,
            city: data.name,
          });
        }
      } catch (error) {
        setWeather(null);
      }
    };
    fetchWeather();
  }, []);

  // No userPosts available, so no eventMarkers
  // Only show markers for districts with events
  const eventMarkers = userPosts
    .map((post) => {
      const district = districts.find((d) => d.name === post.location);
      if (district) {
        return { ...district, post };
      }
      return null;
    })
    .filter(
      (
        marker
      ): marker is { name: string; coords: [number, number]; post: any } =>
        marker !== null
    );

  return (
    <div className="map-page">
      <MapContainer center={mapCenter} zoom={12} className="full-map">
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Only show event markers if there are events */}
        {eventMarkers.length > 0 &&
          eventMarkers.map((marker, idx) => (
            <Marker
              position={marker.coords}
              key={marker.post.id || `${marker.name}-${idx}`}
            >
              <Popup>
                <strong>{marker.post.title || "Event"}</strong>
                <br />
                {marker.post.content}
                <br />
                <em>{marker.name}</em>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
      {weather && (
        <div className="weather-info">
          <p>
            <strong>{weather.city}</strong>: {weather.temp}°C,{" "}
            {weather.description}
          </p>
        </div>
      )}
      <div className="add-post-btn-wrapper">
        <AddPostButton />
      </div>
    </div>
  );
};

export default MapPage;
