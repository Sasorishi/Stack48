import Logo from "_images/Logo.png"

const Header = () =>{
    return(
        <header className="header" id="header">
            <div className="header-container">
                <img src={Logo} alt="" className="Logo"/>

                <div className="m-auto">
                    <div className="w-screen">
                        <div className="lg:w-full md:w-full sm:w-full">
                            <div className="main-title">
                                <h1>STACK 48</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;