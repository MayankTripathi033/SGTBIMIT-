import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-grid">
          <img src={require('../images/socials/facebook.png')} alt="cant load"></img>
          <img src={require('../images/socials/instagram.png')} alt="cant load"></img>
          <img src={require('../images/socials/linkedin.png')} alt="cant load"></img>
          <img src={require('../images/socials/pinterest.png')} alt="cant load"></img>
          <img src={require('../images/socials/twitter.png')} alt="cant load"></img>
          <img src={require('../images/socials/youtube.png')} alt="cant load"></img>
        </div>
        <p className="footer-text">
        © Copyright 2023 Sri Guru Tegh Bahadur Institute Of Management and Information Technology. All Rights Reserved.
        </p>
    </footer>
  )
}
