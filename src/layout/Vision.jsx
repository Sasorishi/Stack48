import DongHanh from "_images/DongHanh.png"
import Folere from "_images/Folere.png"
import Numery from "_images/Numery.png"
import Vwd from "_images/VWD.png"
import Sakana from "_images/Sakana.png"
import Map from "_images/Map.png"

const Vision =() =>{
    return (
    <section className="vision">

      <div className="head-up" id="head-up">
        <div className="head-up-container">
          <div className="text">
            <p>Agence digitale :</p>
            <p>Coding | Online Acquisition | Content Creation</p>
          </div>
        </div>
      </div>

        <div className="quote" id="quote">
            <div className="quote-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus sunt hic nemo sit neque veritatis voluptas natus voluptate voluptates asperiores quod quae illum quidem maxime autem, eius delectus excepturi.</p>
            </div>
        </div>

        <div className="Map">
            <div className="Map-container">
                <img src={Map} alt="map" />
            </div>
        </div>


        <div className="projets-recents">
            <div className="w:4/12">
                <div className="TitleProject">
                    <h2>NOS PROJETS RECENTS</h2>
                </div>
            </div>
            
            <div className="cards">
                <div className="Cardscontainer">
                    <img src={DongHanh} alt="dong hanh" />
                    <img src={Folere} alt="folere" />
                    <img src={Numery} alt="numery" />
                    <img src={Vwd} alt="vwd" />
                    <img src={Sakana} alt="sakana" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Vision;