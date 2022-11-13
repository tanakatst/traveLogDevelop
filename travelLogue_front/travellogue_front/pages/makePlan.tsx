import React from 'react';
import NavbarLayout from '../src/components/Navigation/NavbarLayout';
import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// google map のapiキー
const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!

const MakePlan = () => {
    // google map表示設定
    const defaultLatLng = {
        lat: 35.7022589,
        lng: 139.7744733,
      };

    const containerStyle = {
        width: '1600px',
        height: '900px'
    };

    return (
        <>
            <NavbarLayout />
            <LoadScript googleMapsApiKey={key}>
                <GoogleMap
                     mapContainerStyle={containerStyle}
                      center={defaultLatLng}
                      zoom={8}
                >
                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default MakePlan;
