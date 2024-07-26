import Logo from "_images/Logo.png"

const Header = () =>{
    return(
        <header className="header" id="header">
            <div className="header-container">
                <img src={Logo} alt="" className="logo w-[60vw] lg:w-[50vw]"/>

                <div className="m-auto">
                            <div className="main-title">
                                <h1>STACK 48</h1>
                            </div>
                </div>
            </div>
        </header>
    );
}

export default Header;