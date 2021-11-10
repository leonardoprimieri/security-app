import React, { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import firebase from '../../services/FirebaseConnection';

import { FiAlertTriangle } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';
import { Container, Content } from './styles';

import mapMarker from '../../assets/images/mapMarker.svg';
import { Link } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import CrimeComponent from '../../components/CrimeComponent';

const CrimesMap = () => {
  const [crimes, setCrimes] = useState({});

  const [userCoordinates, setUserCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 75],
    iconAnchor: [30, 75],
    popupAnchor: [170, 2],
  });

  useEffect(() => {
    function getUserLocation() {
      if (!('geolocation' in navigator)) {
        alert('Navegador não tem suporte API Geolocation');
      }
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserCoordinates({ latitude: latitude, longitude: longitude });
      });
    }
    getUserLocation();
  }, []);

  useEffect(() => {
    async function getCrimes() {
      firebase
        .database()
        .ref('crimes')
        .on('value', (snapshot) => {
          if (snapshot.val() !== null) {
            setCrimes({ ...snapshot.val() });
          }
        });
    }
    getCrimes();
  }, []);

  return (
    <Container>
      <Content>
        <SideBar />
        <Map
          center={[userCoordinates.latitude, userCoordinates.longitude]}
          style={{ width: '100vw', height: '100vh' }}
          infinite
          zoom={3}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {Object.keys(crimes).map((crime, key) => (
            <Marker
              icon={mapIcon}
              position={[
                Number(crimes[crime].latitude),
                Number(crimes[crime].longitude),
              ]}
              key={key}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map--popup"
              >
                <CrimeComponent data={crimes[crime]} key={key} />
              </Popup>
            </Marker>
          ))}
        </Map>
        <Link to="/crimes/new-crime" className="add-crime">
          <button>
            <FiAlertTriangle size={24} color="#fff" strokeWidth={3} />
            Reportar um crime
          </button>
        </Link>
      </Content>
    </Container>
  );
};

export default CrimesMap;
