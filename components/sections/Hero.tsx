"use client";
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';

export default function Hero() {
  const [showAnniversaryBadge, setShowAnniversaryBadge] = useState(false);

  useEffect(() => {
    const words = ["Innovators", "Entrepreneurs", "Leaders", "Dreamers"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const changeTextElement = document.getElementById("changetext");

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        if (changeTextElement) 
          changeTextElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
        if (letterIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      } else {
        if (changeTextElement)
          changeTextElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
        if (letterIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 1500);
          return;
        }
      }
      setTimeout(type, isDeleting ? 50 : 150);
    }
    type();

    setTimeout(() => setShowAnniversaryBadge(true), 1000);

    let counter = 0;
    const targetNumber = 10;
    const counterElement = document.getElementById("yearCounter");
    
    const animateCounter = () => {
      if (counter < targetNumber) {
        counter++;
        if (counterElement) counterElement.textContent = counter.toString();
        setTimeout(animateCounter, 200);
      }
    };
    
    animateCounter();
  }, []);

  return (
    <section className="hero-wrapper">
      <div id="bgdots" className="vh-100 position-relative">
        {}
        <div className="anniversary-particles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              ★
            </div>
          ))}
        </div>

        {}
        {showAnniversaryBadge && (
          <div className="anniversary-badge" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            padding: '15px 25px',
            borderRadius: '50px',
            transform: 'rotate(15deg)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 10,
            animation: 'badgePop 0.5s ease-out'
          }}>
            <span className="text-white fw-bold">
              Celebrating 10 Years!
            </span>
          </div>
        )}

        <div id="homepage" className="homepage vh-100">
          <div className="container pt-3">
            <Navbar />
          </div>
          
          <div className="container h-100 d-flex align-items-center">
            <div className="row w-100">
              <div className="col-lg-8">
                <div className="hero-content" style={{ marginTop: '-80px' }}>
                  <h1 className="text-white fw-bolder display-1 mb-2" data-aos="fade-up" data-aos-duration="2000">
                    A Decade of
                  </h1>
                  <div className="mb-2">
                    <span id="changetext" className="greencolor fw-bolder display-1"></span>
                  </div>
                  <h1 className="text-white fw-bolder display-1 mb-5">
                    among us
                  </h1>
                  <div className="mt-4">
                    <h5 className="text-light fw-normal fs-3 mb-5" data-aos="fade-up" data-aos-duration="2500">
                      <span className="greencolor">10 Years</span> of Turning Dreams into Reality
                    </h5>
                    <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
                      <a 
                        href="https://innovate.startupmission.in/#/register" 
                        className="btn btn-outline-light px-5 py-3 position-relative overflow-hidden anniversary-button"
                        style={{ fontSize: '1.25rem' }}
                      >
                        Join our Anniversary Celebration <i className="bi bi-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
            <i id="down-arrow" className="bi bi-chevron-compact-down text-light"></i>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes badgePop {
          0% { transform: scale(0) rotate(15deg); }
          50% { transform: scale(1.2) rotate(15deg); }
          100% { transform: scale(1) rotate(15deg); }
        }

        .particle {
          position: absolute;
          color: #FFD700;
          font-size: 24px;
          animation: float linear infinite;
          opacity: 0.6;
        }

        .anniversary-button {
          background: linear-gradient(45deg, #28a745, #218838);
          border: none;
          transition: all 0.3s ease;
        }

        .anniversary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
        }
      `}</style>
    </section>
  );
}
