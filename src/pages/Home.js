import React from 'react';
import '../style/Home.css';

function Home() {
  

  return (
    <div className="home">
      <header className="hom-header">
        <div className="header-content">
         
          
          <img 
            src="img1.jpeg" 
            alt="Galerie Header" 
            className="header-image" 
          />
        </div>
      </header>

      <section className="gallery">
        <div className="gallery-item">
          <img src="img1.jpeg" alt="Nature 1" />
        </div>
        <div className="gallery-item">
          <img src="https://source.unsplash.com/300x200/?nature,water" alt="Nature 2" />
        </div>
        <div className="gallery-item">
          <img src="https://source.unsplash.com/300x200/?city" alt="City 1" />
        </div>
      </section>

      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="photo (2).jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="photo (1).jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>


      <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h4>Contactez-nous</h4>
      <p>Email : contact@monprojet.com</p>
      <p>Téléphone : +33 1 23 45 67 89</p>
      <p>Adresse : 123 Rue de la Galerie, Paris, France</p>
    </div>
    <div className="footer-section">
      <h4>Suivez-nous</h4>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
    <div className="footer-section">
      <h4>À propos</h4>
      <p>Notre galerie est dédiée à l'exploration de la beauté du monde à travers des images captivantes.</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 MonProjet. Tous droits réservés.</p>
  </div>
</footer>
    </div>

    
  );

}

export default Home;
