import coding from "_images/coding.jpg";
import content from "_images/content.jpg";
import acquisition from "_images/acquisition.jpg";

const Business = () =>{
    return(
    <section className="business">

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis vero quae error libero alias corporis necessitatibus atque facere ipsum.</p>
        </div>
      </div>


      <h2>Notre proposition de valeur</h2>
      {/* <div className="container mx-auto px-4"> */}
        <div className="cards">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-4/12 md:w-full sm:w-full">
              <img src={coding} alt="coding" />
            </div>
            <div className="lg:w-4/12 md:w-full sm:w-full">
              <img src={content} alt="content" />
            </div>
            <div className="lg:w-4/12 md:w-full sm:w-full">
              <img src={acquisition} alt="acquisition" />
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
    )
}

export default Business;