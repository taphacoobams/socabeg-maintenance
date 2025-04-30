import './App.css';
import { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      gap: '1rem', 
      justifyContent: 'center',
      margin: '2rem 0',
      flexWrap: 'wrap'
    }}>
      <div style={{ 
        background: '#0056A3', 
        padding: '1rem', 
        borderRadius: '8px',
        minWidth: '100px'
      }}>
        <div style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>{timeLeft.days}</div>
        <div style={{ color: 'white', fontSize: '0.9rem' }}>Jours</div>
      </div>
      <div style={{ 
        background: '#0056A3', 
        padding: '1rem', 
        borderRadius: '8px',
        minWidth: '100px'
      }}>
        <div style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>{timeLeft.hours}</div>
        <div style={{ color: 'white', fontSize: '0.9rem' }}>Heures</div>
      </div>
      <div style={{ 
        background: '#0056A3', 
        padding: '1rem', 
        borderRadius: '8px',
        minWidth: '100px'
      }}>
        <div style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>{timeLeft.minutes}</div>
        <div style={{ color: 'white', fontSize: '0.9rem' }}>Minutes</div>
      </div>
      <div style={{ 
        background: '#0056A3', 
        padding: '1rem', 
        borderRadius: '8px',
        minWidth: '100px'
      }}>
        <div style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>{timeLeft.seconds}</div>
        <div style={{ color: 'white', fontSize: '0.9rem' }}>Secondes</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <img 
        src="/logo.png" 
        alt="SOCABEG Logo" 
        style={{ 
          width: '250px',
          marginBottom: '2rem'
        }}
      />
      <h1 style={{ color: '#0056A3', fontSize: '3rem', margin: '0' }}>Site en maintenance</h1>
      <Countdown />
      <img 
        src="/construction.svg" 
        alt="En construction" 
        style={{ width: '200px', margin: '2rem 0' }}
      />
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', color: '#333' }}>
        Le site de <strong style={{ color: '#0056A3' }}>SOCABEG</strong> est actuellement en maintenance. Nous travaillons activement à l'amélioration de nos services.
        Merci de votre patience.
      </p>
      <p style={{ marginTop: '2rem', color: '#555' }}>
        Pour toute information, veuillez nous contacter :<br />
        <strong>Email :</strong> <a href="mailto:contact@socabeg.sn" style={{ color: '#0056A3' }} target="_blank" rel="noopener noreferrer" >contact@socabeg.sn</a><br />
        <strong>Téléphone :</strong><a href="tel:+22133338893535" style={{ color: '#0056A3' }} target="_blank" rel="noopener noreferrer" > +221 33 33 889 35 35</a>
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
        <a href="https://facebook.com/socabeg" target="_blank" rel="noreferrer" style={{ color: '#0056A3' }}>
          <FaFacebook />
        </a>
        <a href="https://linkedin.com/company/socabeg" target="_blank" rel="noreferrer" style={{ color: '#0056A3' }}>
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/socabeg" target="_blank" rel="noreferrer" style={{ color: '#0056A3' }}>
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default App;
