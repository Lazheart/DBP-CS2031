import ModuleHeader from "../../components/PageHeader";
import IntroAdvice from "../../components/IntroAdvice";
import {Link} from "react-router-dom";


const BackendPage = () => {
  return (
    <div className="tools-page">
      <ModuleHeader
        lesson={{
          topic: "Backend",
          title: "El cerebro de tu aplicación",
        }}
      />
      <IntroAdvice/>
      <div className="backend-title-container">
        <h1 className="backend-title">Backend</h1>
        <p className="backend-description">
          El cerebro de tu aplicación y el proceso <br />
          detrás de cada interacción, el backend es fundamental para el funcionamiento de una aplicación.
          <br />
          En este módulo aprenderás los fundamentos para crear APIs robustas y
          escalables usando el 
          <br />
           framework de <a href="https://spring.io/projects/spring-boot" target="_blank">Spring Boot</a> , adicionalmente utilizaremos <a href="https://www.docker.com/">Docker</a> para 
          <br /> 
          facilitar el entorno de Desarrollo, la integracion continua y el despliegue.
          
          <h5>Puedes obtener documentación detallada del framework <a href="https://docs.spring.io/spring-framework/reference/index.html" target="_blank">aquí</a>.</h5>
          <br />

          <h3>Nota: Modulo de docker disponible <Link to='/tools/docker'>aqui</Link>
          </h3>
           
        </p>
      </div>

      <div className="backend-content-container">
                    {/* Contenedor de topicos */}
            </div>
        </div>
    )
}

export default BackendPage ;