import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSource from './video/Matrix.mp4';
import './components/StartPage.css';

function StartPage() {
  const navigate = useNavigate();
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const goToLogin = () => {
    navigate('/login');
  };

  const goToFinal = () => {
    navigate('/final');
  };

  return (
    <div className='Start__Page'>
      {videoEnded ? (
        <>
          <button onClick={goToLogin}>Red pill</button>
          <button onClick={goToFinal}>Blue pill</button>
        </>
      ) : videoStarted ? (
        <video src={videoSource} autoPlay onEnded={() => setVideoEnded(true)} />
      ) : (
        <button onClick={() => setVideoStarted(true)}>You decide.</button>
      )}
    </div>
  );
}

export default StartPage;