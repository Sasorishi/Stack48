import Header from "_layout/Header.jsx";
import Footer from "_layout/Footer.jsx"

function App() {
  return (
    <div>
      <section className="nav">
        <div className="container mx-auto px-4">
          <nav>
            <p>l&apos;agence qui agence</p>
           <ul>
              <li>Home</li>
              <li>Nos services</li>
              <li>A propos</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </section>

      <Header />
      <div className="valeur">
        <div className="titre">
          <p>Agence digitale : Coding | Online Acquisition | Content Creation</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis vero quae error libero alias corporis necessitatibus atque facere ipsum.</p>
        <h2>Notre proposition de valeur</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
          <img src="" alt="coding" />
          <img src="" alt="content" />
          <img src="" alt="acquisition" />
          </div>
        </div>

        <div className="vision">
          <div className="titre">
            <p>Agence digitale : Coding | Online Acquisition | Content Creation</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus sunt hic nemo sit neque veritatis voluptas natus voluptate voluptates asperiores quod quae illum quidem maxime autem, eius delectus excepturi.</p>
          <img src="" alt="map" />
        </div>

        <div className="projets-recents">
          <h2>NOS PROJETS RECENTS</h2>
          <img src="" alt="dong hanh" />
          <img src="" alt="folere" />
          <img src="" alt="numery" />
          <img src="" alt="vwd" />
          <img src="" alt="sakana" />
        </div>
      </div>

      <div className="clients">
        <div className="titre">
          <p>Agence digitale : Coding | Online Acquisition | Content Creation</p>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, iusto error labore ea illum eligendi expedita.</p>
        <h2>Voici leurs histoires</h2>
        <div className="caroussel"></div>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
