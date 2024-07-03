"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Kart = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      await loader.load();

      if (mapRef.current) {
        const google = (window as any).google;
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 59.13145897108192, lng: 10.21648019867435 },
          zoom: 10,
        });

        new google.maps.Marker({
          position: { lat: 59.13145897108192, lng: 10.21648019867435 },
          map: map,
        });
      }
    };

    initializeMap();
  }, []);

  return (
    <div className="h-full w-full" ref={mapRef}>
      Google maps
    </div>
  );
};

export default Kart;
