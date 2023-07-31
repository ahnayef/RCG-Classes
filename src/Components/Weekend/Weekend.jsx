import React from 'react'
import './weekend.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord, FaFacebookMessenger } from "react-icons/fa";
import party from 'party-js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga4'


export default function Weekend() {

  const today= new Date().toLocaleDateString("en-US", { weekday: 'long' });

  const handleConfetti = () => {
    party.confetti(document.querySelector('.weekBox'), {
      count: party.variation.range(50, 100)
    });

    ReactGa.event({
      category: 'Weekend Page',
      action: 'Click Confetti',
      label: "Clicked Confetti",
    })

  }

  useEffect(() => {
    if (today === "Friday" || today === "Saturday") {
      handleConfetti();
      ReactGa.event({
        category: 'Weekend Page',
        action: 'Confetti on Weekend',
        label: 'Confetti on Weekend',
      })
    }
  }, []);


  const handleCrClickWeekEnd = () => {
    
    ReactGa.event({
      category: 'Weekend Page',
      action: 'CR Click Weekend',
      label: 'Contact CR Link Clicked',
    });
    
  }

  return (

    <div className="weekBox" onClick={handleConfetti}>
      {/* <h2>Unleashed!</h2> */}
      {/* <h2 className='gre-text'>Freedom!</h2> */}
      <h2>🎉</h2>
      <h4>Weekend is here!</h4>
      <h4>Seize the Day: No Class, Pure Play! 👊</h4>
      <Link to="/cr" className='btn' onClick={handleCrClickWeekEnd}>Contact CR</Link>
      <div className="socialIcons">
        <ul>
          <li><a href="https://chat.whatsapp.com/BS21WmPyPat8GkyFgiRw0V" target='_'><IoLogoWhatsapp /></a></li>
          <li><a href="https://www.messegner.com/" target='_'><FaFacebookMessenger /></a></li>
          <li><a href="https://discord.com/invite/jCVgCr37nJ" target='_'><FaDiscord /></a></li>
        </ul>
      </div>
    </div>

  )
}
