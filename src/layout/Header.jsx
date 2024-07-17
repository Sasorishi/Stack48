import Logo from "_images/Logo.png"

const Header = () =>{
    return(
        <header className="header">
            <img src={Logo} alt="" className="Logo"/>
            <h1>STACK 48</h1>
        </header>
    );
}

export default Header;