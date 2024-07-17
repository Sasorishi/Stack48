import coding from "_images/coding.jpg";
import content from "_images/content.jpg";
import acquisition from "_images/acquisition.jpg";

const Business = () =>{
    return(
    <section className="business">
      <div className="head-up">
        <p>Agence digitale : Coding | Online Acquisition | Content Creation</p>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis vero quae error libero alias corporis necessitatibus atque facere ipsum.</p>

      <h2>Notre proposition de valeur</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
            <img src={coding} alt="coding" />
            <img src={content} alt="content" />
            <img src={acquisition} alt="acquisition" />
        </div>
      </div>
    </section>
    )
}

export default Business;