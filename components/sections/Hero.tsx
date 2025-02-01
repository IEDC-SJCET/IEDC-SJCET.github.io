"use client";

import { useEffect } from 'react';
import Navbar from '../Navbar';

export default function Hero() {
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
  }, []);

  return (
    <section className="hero-wrapper">
      <div id="bgdots" className="vh-100">
        <div id="homepage" className="homepage vh-100">
          <div className="container pt-3">
            <Navbar />
          </div>
          
          <div className="container h-100 d-flex align-items-center">
            <div className="row w-100">
              <div className="col-lg-8">
                <div className="hero-content" style={{ marginTop: '-80px' }}>
                  <h1 className="text-white fw-bolder display-1 mb-2" data-aos="fade-up" data-aos-duration="2000">
                    Discovering
                  </h1>
                  <div className="mb-2">
                    <span id="changetext" className="greencolor fw-bolder display-1"></span>
                  </div>
                  <h1 className="text-white fw-bolder display-1 mb-5">
                    among us
                  </h1>
                  <div className="mt-4">
                    <h5 className="text-light fw-normal fs-3 mb-5" data-aos="fade-up" data-aos-duration="2500">
                      Let Get Your <span className="greencolor">Dreams</span> Incubated
                    </h5>
                    <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
                      <a 
                        href="https://innovate.startupmission.in/#/register" 
                        className="btn btn-outline-light px-5 py-3"
                        style={{ fontSize: '1.25rem' }}
                      >
                        Join us <i className="bi bi-chevron-right"></i>
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
    </section>
  );
} 
