import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MapContainer({location}) {
    const [apiKey, setApiKey] = useState('');

    useEffect(() => {
        document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
        async function fetchApiKey() {
            try {
                setApiKey('AIzaSyAcdXBHxBXUJQ3oS_CiWIMcTlMC97wEImE');
            } catch (error) {
                console.error('Error fetching API key:', error);
            }
        }

        fetchApiKey();
    }, []);

    const referer = 'http://localhost:8082/*'; // Replace with your actual referer URL
    const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`;
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '200px';
    iframe.loading = 'lazy';
    iframe.allowFullScreen = true;
    iframe.src = url;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin'; // Set referrer policy
    iframe.setAttribute('referrer', referer); // Set the referer header

    const latitude = 37.7749; // Latitude of the location
    const longitude = -122.4194; // Longitude of the location

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                const address = data.results[0].formatted_address;
                console.log(`Weather at ${address}:`);

                // Fetch weather information using the address
                fetch(`https://maps.googleapis.com/maps/api/weather/${address}&key=${apiKey}`)
                    .then(response => response.json())
                    .then(weatherData => {
                        console.log(weatherData);
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });
            } else {
                console.error('Unable to fetch address:', data.status);
            }
        })
        .catch(error => {
            console.error('Error fetching address:', error);
        });


    return (
        <div>
            {apiKey ? (
                <iframe
                    width="100%"
                    height="200px"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location}`}
                ></iframe>

            ) : (
                <p>fetching...</p>
            )}
        </div>
    );
}

export default MapContainer;
