import React from 'react';

import { FiMap } from 'react-icons/fi';
import { Container } from './styles';

const CrimeComponent = ({ data }) => {
  return (
    <Container>
      <span>
        <strong>Crime: </strong> {data.title}
      </span>
      <span>
        <strong>Descrição: </strong>
        {data.location_type}
      </span>
      <span>
        <strong>Data:</strong>
        {data.date}
      </span>
      <span>
        <strong>Horário</strong>
        {data.time}
      </span>
      <span>
        <strong>Reportado por: </strong>
        {data.name}
      </span>
      <span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps/dir/?api=1&destination=${data.latitude}, ${data.longitude}`}
        >
          <FiMap size={24} color="#fff" />
          Ver rota no Google Maps
        </a>
      </span>
    </Container>
  );
};

export default CrimeComponent;
