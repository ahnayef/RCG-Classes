import React from 'react'
import './weekend.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord, FaFacebookMessenger } from "react-icons/fa";
import party from 'party-js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga4'


export default function Weekend() {

  const today = new Date().toLocaleDateString("en-US", { weekday: 'long' });

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



  return (

    <div className="weekBox" onClick={handleConfetti}>
      <h4>Weekend is here!</h4>
      <h4>No class today</h4>
    </div>

  )
}
