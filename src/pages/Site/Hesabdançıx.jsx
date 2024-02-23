import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Hesabdancix.css'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const Hesabdançıx = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleExit = () => {
    setShowModal(true);
  };
  const handleConfirmExit = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (

    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src="https://limak.az/new_front/assets/img/SehifeYuklenmedi.png" alt="Sehife Yuklenmedi" />
            <p>Çıxış etməyə əminsiniz?</p>
            <div style={{ display: "flex", gap: "70px", padding: "30px" }}>
              <button style={{ width: "100px" }} onClick={handleConfirmExit}>XEYR</button>
              <button style={{ width: "100px" }} onClick={handleCloseModal}>BƏLİ</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={handleExit}>cixxxxxxx </button>
    </div>

  );
}


export default Hesabdançıx;
