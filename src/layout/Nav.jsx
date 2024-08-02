const Nav = () =>{
    return(
        <section className="nav" id="nav-menu">
          <div className="container mx-auto px-4">
            <div className="nav-container">
              <div className="nav-title">
                <p>l&apos;agence qui agence</p>
              </div>
              
              <span className="toggle" id="nav-btn">
                <p>Menu</p>
              </span>
            
            <div className="nav-headling">
              <ul>
                <li>Home</li>
                <li>Nos services</li>
                <li>A propos</li>
                <li>Contact</li>
                <button id="nav-action">Prenez place</button>
              </ul>
            </div>

            </div>
          </div>
      </section>
    )
}

export default Nav;