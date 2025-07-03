import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

// Tọa độ trung tâm Đà Nẵng
const DA_NANG_CENTER = {
  lat: 16.0471,
  lng: 108.2068
};

// Khóa API Google Maps - sẽ được cấu hình từ biến môi trường
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

interface DaNangMapProps {
  className?: string;
}

export const DaNangMap: React.FC<DaNangMapProps> = ({ className = '' }) => {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
        style={{
          width: '100%',
          height: '100%',
        }}
        defaultCenter={DA_NANG_CENTER}
        defaultZoom={11}
        gestureHandling="greedy"
        disableDefaultUI={false}
        mapId="DEMO_MAP_ID"
        className={className}
      />
    </APIProvider>
  );
};

export default DaNangMap;
