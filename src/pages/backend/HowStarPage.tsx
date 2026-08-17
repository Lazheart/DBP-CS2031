import { Link } from "react-router-dom"

const HowStarPage = () => {
    return (
        <div>
            <div>
            <h1>Iniciando en Spring Boot</h1>
            <p>
                Spring Boot es un framework de Spring que facilita la creación de aplicaciones Java. 
            </p>
            <p> Puedes generar un nuevo proyecto de springboot  <a href="https://start.spring.io/">springboot aquí</a></p>
            <p> Si ya tienes experiencia en springboot y buscar una implementacion basica de API , SMTP , SECURITY <br />
            Puedes encontrar una plantilla <a href="https://github.com/Lazheart/Spring-Boot-REST-API-Template">aquí</a> </p>

            <h2>¿Cómo crear una API con Spring Boot?</h2>
             Si bien ya hemos visto <Link to="/introduction#api"> ¿Qué es una api?</Link> , conceptos como <Link to="/introduction#protocols">Protocolos</Link>,
             <Link to="/introduction#url-uri">URL Y URI</Link> y  <Link to="/introduction#methods-http">Métodos HTTP</Link> .

             <p> 
                En este modulo aprenderemos como configurar un proyecto de Spring Boot a usar un gestor de dependencias como 
                Maven y seguir una arquitectura REST para los endpoints y el patron de diseño Layered Architecture.
             </p>
            
            </div >

            <div id="Maven como Gestor de Dependencias">
                  <p> 
                    Maven es un gestor de dependencias para Java , Un gestor de dependencias es un sistema que nos ayuda a resolver y gestionar <br />
                    las librerias que necesita nuestro proyecto.

                    El archivo <code> pom.xml</code> es un archivo XML que contiene la configuracion del proyecto , 
                    incluyendo las dependencias, plugins y configuraciones del proyecto. 
                                   
                    Para este proyecto usaremos las siguientes dependencias adicionales:
                  <ul>
                    <li>spring-security: Para la seguridad de la aplicación</li>
                    <li>spring-boot-starter-mail: Para el manejo de correos electrónicos</li>
                    <li>spring-driver-postgresql: Para la base de datos PostgreSQL</li>
                    <li>springdoc-openapi-starter-webmvc-ui: Para la documentacion de la API</li>
                  </ul>

                  Springboot tiene alrededor 20 dependencias base y mas de 1000 dependencias mantenidas por la comunidad.
                  Esto permite elegir las adecuadas para tu proyecto e incluir solo las necesarias.
                  Puedes encontrar las dependencias y mucho mas <a href="https://mvnrepository.com/">aquí</a>
                  </p>  
                  
            </div>

            <div id="Application Properties y Variables de Entorno">
                Dentro del proyecto dentro de la carpeta <code> src/main/resources</code> 
                se encuentra el archivo <code> application.properties</code> 
                y es un archivo donde podemos configurar el comportamiento de nuestra aplicacion sin necesidad
                de modificar el codigo fuente. 
                 
                 Imaginemos que nuestro <code>appliation.properties</code>
                 contiene la siguiente informacion:
                 <br />
                 <code> application.name=backend-api</code>
                 <br />
                 <code> server.port=8080</code>
                 <br />

                  Sin embargo nosotros deseamos cambiar el puerto de la aplicacion
                  podriamos hacerlo de la siguiente manera:

                  <br />
                  <code> server.port=8081</code>
                  <br />
                  sin embargo esta manera es poco escalable , por lo que se recomienda usar variables de entorno
                  y crear variables de entorno como:
                  <br />
                  <code> SERVER_PORT=8081</code>
                  <br />
                  y luego en el archivo <code> application.properties</code>
                  hacer referencia a la variable de entorno de la siguiente manera:
                  <br />    
                   <code>server.port="&#123;SERVER_PORT&#125;"
                  </code>               
                  
                  <h3>
                    CUIDADO : Las <Link to="/introduction#variables-de-entorno">variables de entorno</Link> 
                    son informacion sensible y no deben ser compartidas ni subidas a un repositorio publico
                  </h3>

                  <p>
                     Este archivo es de vital importancia ya que sin el no tendriamos una forma de decirle a <br />
                     la aplicacion como debe comportarse,que tipo de gestor de base de datos usar,cual es la url de la base de datos, 
                     cual es el usuario y la contraseña, el puerto, etc.
                  </p>                
            </div>

            <div id="Layered Architecture ">

              <p> 
                En el mundo del desarrollo web , nos toparemos con diferentes arquitecturas y patrones de diseño.
                <br />
                Para este curso emplearemos una arquitectura en capas, donde la responsabilidad de
                cada componente es unica y no depende de otra. 

                <h2>
                  La arquitectura en capas
                </h2>

                La arquitectura en capas es una arquitectura de software que divide la aplicacion en capas, 
                cada capa tiene una responsabilidad unica y no depende de otra. 
                <br />
                <br />
                Las capas son las siguientes:
                <ul>
                  <li>Controladores: Aqui se definen los endpoints de la API</li>
                  <li>Servicios: Aqui se define la logica de negocio</li>
                  <li>Repositorios: Aqui se define la logica de acceso a datos y guardado</li>
                  <li>Modelos: Aqui se definen los modelos de datos</li>
                </ul>
                
                Una forma mas estructurada se veria de la siguiente manera :
                <code>
                src/
                └── main/
                    └── java/
                        └── com/example/project/
                            ├── entity/
                            │   └── Entity.java
                            ├── repository/
                            │   └── EntityRepository.java
                            ├── service/
                            │   └── EntityService.java
                            └── controller/
                                └── EntityController.java
                </code>

                <br />
                <br />
                Priorizamos esta arquitectura ya que nos permite tener una mejor organizacion 
                y un mejor mantenimiento de nuestro codigo de manera individual y colaborativa. <br />

              </p>
            </div>

            <div id="Empaquetamiento y Ejecución">
              <p>
                Ahora que tenemos claro conceptos basicos de spring boot , es momento de hablar de "Empaquetamiento y Ejecución"
                En esta seccion aprenderemos como empaquetar nuestro proyecto y ejecutarlo.

                Usando herramientas como docker y docker-compose , podremos crear un entorno de desarrollo
                consistente y reproducible.
              </p>
              <div className="docker-advice-installation">
                      Aun no tienes Docker? <a href="https://www.docker.com/products/docker-desktop/">Haz clic aquí</a> {/*<code> <Link to="/install">¡Haz clic aquí!</Link> </code>*/} 
              </div>
              
              Para poder empaquetar y ejecutar nuestra aplicacion debemos tener docker corriendo en nuestro sistema. 
              
              <div className="howpackage-content">
               <h2> Como empaquetar nuestra aplicacion con Docker </h2>
               
                  Para poder empaquetar nuestra aplicacion con docker debemos crear un archivo <code>Dockerfile</code> en la raiz de nuestro proyecto. 
                  
                  Un <code>Dockerfile</code> es un archivo que contiene las instrucciones para generar una imagen de nuestra aplicacion. <br />
                  Esta imagen se genera a partir de nuestro codigo fuente , las dependencias necesarias y la configuracion para ejecutarla.
                  Esto nos permite tener un entorno de desarrollo consistente y reproducible e ideal para el trabajo colaborativo. 

                  <br />           
                  Puedes encontrar una plantilla funcional de springboot en el siguiente <a href="https://github.com/Lazheart/Spring-Boot-REST-API-Template/blob/main/Dockerfile">enlace</a>.                                   
              </div>

              <div className="howrun-content">
                <h2> Como ejecutar nuestra aplicacion con Docker </h2>
                <p>
                    Para ejecutar nuestra aplicacion una vez ya construida la imagen utilizaremos la herramienta de docker-compose.
                    Un docker-compose es un archivo que contiene las instrucciones para generar un contenedor(instancia) de nuestra aplicacion.
                    
                    Esta herramienta nos facilita la creacion de entornos de desarrollo y la integracion continua.

                    <br /> 
                    <br />

                    En esencia, un <code>docker-compose.yml</code> le dice a Docker:
                    <br />
                    "Crea una red privada para mis contenedores, lanza uno con mi imagen de Spring Boot, otro con PostgreSQL, y conecta ambos"
                    <br />
                    
                    Sin docker-compose, tendrías que ejecutar comandos `docker run` complejos manualmente para cada servicio, 
                    configurando puertos, volúmenes y redes uno por uno. Docker Compose automatiza todo esto en un solo archivo y comando.

                    Puedes encontrar una plantilla funcional de docker-compose en el siguiente <a href="https://github.com/Lazheart/Spring-Boot-REST-API-Template/blob/main/docker-compose.yml">enlace</a>.                                              
                
                    Para poder ejecutar nuestra aplicacion solo necesitamos ejecutar el comando desde la terminal.                    
                    <code>
                      docker-compose up --build
                    </code>
                    
                    Con esto tendremos nuestra aplicacion ejecutandose en un contenedor y lista para ser usada y probada localmente                                       
                </p>                
              </div>       

              <div className="resume-content">
                <h2>Recapitulando</h2>
                <p> 
                  En resumen, hemos recorrido un camino esencial para iniciar en el desarrollo Backend con Spring Boot y Docker:
                  <br />
                  <ul>
                    <li><strong>Spring Boot:</strong>Framework que facilita la creación de aplicaciones robustas y escalables.</li>
                    <li><strong>Variables y Configuracion de entorno:</strong>Archivos `.env` que configuran el comportamiento de la aplicación sin exponer información sensible.</li>
                    <li><strong>Arquitectura en capas:</strong>Estructura `Controller` -{">"} `Service` -{">"} `Repository` -{">"} `Entity` que organiza el código y facilita el mantenimiento.</li>
                    <li><strong>Docker:</strong>Herramienta para empaquetar la aplicación en contenedores, asegurando un entorno consistente.</li>
                    <li><strong>Docker Compose:</strong>Orquestador que facilita la gestión de múltiples contenedores (como la base de datos y la aplicación) con un solo comando.</li>
                  </ul>

                  Recuerda que la clave está en la práctica constante y en la experimentación. ¡No dudes en modificar, romper y arreglar el código para aprender mejor!
                  
                </p>
              </div>
            </div>

        </div>
    )
}

export default HowStarPage;