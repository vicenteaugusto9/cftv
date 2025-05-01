import icons from "../constants/icons";
import "../components/BeneficiosCftv.css";

const BeneficiosCftv = () => {
  return (
    <>
      <section>
        <div className="box">
          <div className="text-beneficio">
            <h2>
              Descubra os benefícios de contratar nossos serviços de montagem de
              CFTV
            </h2>
            <p>
              A segurança da sua propriedade é nossa prioridade. Com nossa
              montagem de CFTV, você garante qualidade e suporte contínuo.
            </p>

            <div className="card-beneficio">
              <div className="cards">
                <img src={icons.Cubo} alt="" />
                <h6>Segurança Garantida</h6>
                <p>
                  Proteja seu patrimônio com sistemas de monitoramento de alta
                  qualidade e tecnologia.
                </p>
              </div>
              <div className="cards">
                <img src={icons.Cubo} alt="" />
                <h6>Suporte Especializado</h6>
                <p>
                  Nossa equipe está sempre pronta para ajudar você a resolver
                  qualquer problema.
                </p>
              </div>
            </div>
          </div>
          <div className="img-beneficio">
            <img src={icons.BeneficiosCftv} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BeneficiosCftv;
