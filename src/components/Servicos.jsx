import icons from "../constants/icons";
import '../components/Servicos.css'

const Servicos = () => {
    return ( <>
        <section>   
            <div className="box-servicos">
                <div className="title-Servicos">
                    <p className="seguranca">Segurança</p>
                    <h2>Nossos Serviços de CFTV para Sua Proteção</h2>
                    <p>Oferecemos soluções completas em CFTV, garantindo a segurança que você precisa. Nossos serviços incluem instalação, manutenção e consultoria especializada.</p>
                </div>
                <div className="card-servicos">
                    <div className="cards-servicos">
                        <img src={icons.BeneficiosCftv} alt="" />
                        <h4>Instalação de CFTV de Alta Qualidade</h4>
                        <p>Realizamos a instalação de sistemas de CFTV  com tecnologia de ponta.</p>
                    </div>
                    <div className="cards-servicos">
                        <img src={icons.BeneficiosCftv} alt="" />
                        <h4>Manutenção de CFTV  para Desempenho Ideal</h4>
                        <p>Oferecemos serviços de manutenção para garantir a eficiência do seu sistema.</p>
                    </div>
                    <div className="cards-servicos">
                        <img src={icons.BeneficiosCftv} alt="" />
                        <h4>Consultoria de Segurança Personalizada para Você</h4>
                        <p>Nossos especialistas ajudam a criar um plano de segurança sob medida
                            <br /> .</p>
                    </div>
                </div>
                <div className="button-servicos">
                    <button type="submit">
                        <a href="">Saiba Mais</a>
                    </button>
                    <div className="contato">
                        <p className="p-contato">Contato</p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    
    </> );
}
 
export default Servicos;