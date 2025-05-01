import '../components/Hero.css'
import icons from '../constants/icons';

const Hero = () => {
    return (
        <>
        <div className="container">
            <div className="hero">
                <div className="text-hero">
                    <h2>Seguranca em CFTV: Proteja o que importa</h2>
                    <p>Bem-vindo ao nosso site, onde a segurança é nossa prioridade. Descubra como nossos serviços de montagem de CFTV podem proporcionar tranquilidade e proteção para sua propriedade.</p>
                    <div className="b-hero">
                        <div className="saiba-mais">
                            <button type="submit">
                                <a href="#">Saiba Mais</a>
                            </button>
                        </div>
                        <div className="orcamento">
                            <button type="submit">
                                <a href="#">
                                    Orcamento 
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="img-hero">
                    <img src={icons.HeroImg} alt="" />
                </div>
            </div>
        </div>
        </>
      );
}
 
export default Hero;