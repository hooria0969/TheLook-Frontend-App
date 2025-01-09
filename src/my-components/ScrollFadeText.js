import React, { useEffect } from "react";

const ScrollFadeText = () => {
    useEffect(() => {
      const handleScroll = () => {
        const fadeTexts = document.querySelectorAll(".fade-text");
  
        fadeTexts.forEach((fadeText) => {
          const rect = fadeText.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
  
          if (inView) {
            fadeText.classList.add("visible");
          } else {
            fadeText.classList.remove("visible");
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <>
        <p className="fade-text" id="head1">
          THE LOOK
        </p>
        <p className="fade-text" id="head2">
        Where Art Meets the Soul 
        </p>
        <p className="fade-text" id="head3">
          Discover the Beauty, Emotion, and Inspiration that only ART can provide.
        </p>
      </>
    );
  };
  
  export default ScrollFadeText;