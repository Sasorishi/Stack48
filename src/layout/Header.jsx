import Logo from "_images/coding.jpg"

const Header = () =>{
    return(
        <div className="header">
            <img src={Logo} alt="" />
            <h1>STACK 48</h1>
        </div>
    );
}

export default Header;