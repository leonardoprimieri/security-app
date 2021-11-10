import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import firebase from '../../services/FirebaseConnection';
import 'leaflet/dist/leaflet.css';

import mapMarker from '../../assets/images/mapMarker.svg';

import { Container, InputGroup } from './styles';

const FormArea = () => {
  const history = useHistory();
  const { addToast } = useToasts();

  const [title, setTitle] = useState('');
  const [location_type, setLocationType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleCrimeDate(e) {
    e.preventDefault();

    const data = {
      title,
      location_type,
      date,
      time,
      name,
      latitude: Number(position.latitude),
      longitude: Number(position.longitude),
    };

    firebase.database().ref(`/crimes`).push(data);

    addToast('Crime registrado!', {
      appearance: 'success',
    });

    setTimeout(() => {
      history.push('/crimes');
    }, 2000);
  }

  function handleMapClick(event) {
    const { lat, lng } = event.latlng;

    setPosition({ latitude: lat, longitude: lng });
  }

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 75],
    iconAnchor: [30, 75],
    popupAnchor: [170, 2],
  });

  return (
    <Container>
      <form onSubmit={handleCrimeDate}>
        <h1>Informações do crime</h1>
        <InputGroup>
          <label htmlFor="title">O que houve?</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="location_type">Descrição do local e do crime</label>
          <textarea
            type="text"
            name="location_type"
            value={location_type}
            onChange={(e) => setLocationType(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="date">Data do crime</label>
          <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="time">Hora do crime</label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="name">Seu nome</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

        <Map
          center={[-27.2092052, -49.6401092]}
          style={{
            width: '80%',
            height: 400,
            borderRadius: 20,
            alignSelf: 'center',
            margin: 20,
          }}
          zoom={15}
          onClick={handleMapClick}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {position.latitude !== 0 && (
            <Marker
              interactive={false}
              icon={mapIcon}
              position={[position.latitude, position.longitude]}
            />
          )}
        </Map>
        <p>Clique no mapa para alterar a localização</p>
        <button type="submit">Enviar dados</button>
      </form>
    </Container>
  );
};

export default FormArea;
