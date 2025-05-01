
import '../src/App.css'
import icons from "./constants/icons";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="link-logo">
            <a href="#">
            <img src={icons.Logo}  alt="Logo " className="logo"/>
            </a>
            <p>Wesley CFTV</p>
          </div>
          <div className="nav">
            <nav className="navbar">
              <ul>
                <li><a href="#">Inicio Rapido</a></li>
                <li><a href="#">Servicos CFTV</a></li>
                <li><a href="#">Sobre Nos</a></li>
                <li><a href="#">Mais Opcoes</a></li>
              </ul>
            </nav>
          </div>
          <div className="button-login">
            <button type="submit" className="b-login">
              <a href="#">Entrar</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
