import DongHanh from "_images/DongHanh.png"
import Folere from "_images/Folere.png"
import Numery from "_images/Numery.png"
import Vwd from "_images/VWD.png"
import Sakana from "_images/Sakana.png"

const Vision =() =>{
    return (
    <section className="vision">
        <div className="head-up">
        <p>Agence digitale : Coding | Online Acquisition | Content Creation</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellendus sunt hic nemo sit neque veritatis voluptas natus voluptate voluptates asperiores quod quae illum quidem maxime autem, eius delectus excepturi.</p>
        <img src="" alt="map" />

        <div className="projets-recents">
            <h2>NOS PROJETS RECENTS</h2>
            <img src={DongHanh} alt="dong hanh" />
            <img src={Folere} alt="folere" />
            <img src={Numery} alt="numery" />
            <img src={Vwd} alt="vwd" />
            <img src={Sakana} alt="sakana" />
        </div>
    </section>
    )
}

export default Vision;