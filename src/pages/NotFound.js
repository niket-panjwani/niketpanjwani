import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 0); // redirect to home page after 5 seconds
  }, [navigate]);

  return (
    <div/>
  )
}

export default NotFound;