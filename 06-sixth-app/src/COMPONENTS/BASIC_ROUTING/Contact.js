import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Contact Page</h1>
        <p>Syrolm turuentelen syrolmom buabeleul hullothya urodum buabeleul kunuel fyodumtul. Fyom leg felleyn hioll ygoz volek, kegulm iunhum scouuo bua fugwa.</p>
        <p>Syrolm turuentelen syrolmom buabeleul hullothya urodum buabeleul kunuel fyodumtul. Fyom leg felleyn hioll ygoz volek, kegulm iunhum scouuo bua fugwa.</p>
        <button onClick={()=>navigate("/")}>Go to home page</button>
    </div>
  )
};

export default Contact;
