import Header from "_layout/Header.jsx";
import Footer from "_layout/Footer.jsx";
import Nav from "_layout/Nav.jsx";
import Business from "_layout/Business.jsx"
import Vision from "_layout/Vision.jsx"
import Clients from "../layout/Clients";


function App() {
  return (
    <>

    <section className="stack48">
      
      <Nav/>
      <Header />
      <Business/>
      <Vision />
      <Clients />
      <Footer/>

    </section>

      
    </>
  );
}

export default App;
