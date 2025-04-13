import React from "react";
import '../style/About.css';

function About() {
  const handleClick = () => {
    alert("Bouton cliqué !");
  };

  return (
    <div className="about">
      <div className="famille">
        <header className="home-header">
          <h1>Bienvenue dans la galerie</h1>
          <p>Explorez nos images magnifiques !</p>
          <button onClick={handleClick}>Voir plus</button>
        </header>

        {/* Section Galerie */}
       

        {/* Section À propos */}
        <section className="about" id="apropos">
          <div className="about-container">
            <div className="about-text">
              <h3>À propos de notre galerie</h3>
              <p>Notre galerie est dédiée à l'exploration de la beauté du monde à travers les yeux de nombreux photographes passionnés. Nous croyons que chaque image a une histoire à raconter et nous voulons partager ces histoires avec vous.</p>
              <p>Nous utilisons une technologie de pointe pour offrir une expérience visuelle de haute qualité. Explorez, découvrez, et laissez-vous inspirer par nos collections.</p>
            </div>
            <div className="about-image">
              <img src="https://source.unsplash.com/500x500/?art" alt="À propos de la galerie" />
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2025 MonSite. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
}

export default About;