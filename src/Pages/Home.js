import React from 'react';

export default function Home() {
  return (
    <div className="home" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#333' }}>COOKIE CRAVINGS</h1>
        <p style={{ fontSize: '18px', textAlign: 'center' }}>
          Order your favorite Cookies, Cakes and Brownies online!
        </p>
      </header>

      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000"
      >

        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./cookieslider1.png" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="./cookieslider2.png" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="./cookieslider3.png" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>

      </div>
    </div>
  );
}
