import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing">
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Explora nuestro catálogo de libros</p>
    </div>
  );
}

export default LandingPage;
