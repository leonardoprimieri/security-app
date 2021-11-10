import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div`
  position: relative;
  display: flex;
  .map--popup .leaflet-popup-content {
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map--popup .leaflet-popup-tip-container {
    display: none;
  }

  .add-crime {
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 9999;
    button {
      cursor: pointer;
      background: red;
      border: 0;
      padding: 22px;
      border-radius: 20px;
      display: flex;
      justify-items: center;
      align-items: center;
      color: #fff;
      svg {
        margin-right: 12px;
      }
    }
  }
`;
