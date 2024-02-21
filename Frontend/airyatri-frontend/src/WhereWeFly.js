import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService } from '@react-google-maps/api';

const WhereWeFlyPage = () => {
    const [directions, setDirections] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const onMapClick = (event) => {
        // Handle map click event to set origin or destination
    };

    const onDirectionsServiceLoad = (directionsResult) => {
        setDirections(directionsResult);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAWFwz_T7mypkke1TuA7Gj9IyG32uJJKgM">
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                center={{ lat: 0, lng: 0 }}
                zoom={4}
                onClick={onMapClick}
            >
                {origin && destination && (
                    <DirectionsService
                        options={{
                            origin,
                            destination,
                            travelMode: 'DRIVING',
                        }}
                        callback={onDirectionsServiceLoad}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default WhereWeFlyPage;
