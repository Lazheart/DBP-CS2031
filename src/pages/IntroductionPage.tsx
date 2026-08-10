const IntroductionPage = () => {
    return (
        <main className="introduction-page">
            {/* ============================================
                INTRODUCCIÓN AL CURSO
            ============================================ */}

            <section className="course-introduction">
                <h1>Introducción</h1>

                <h2>¿Qué es el Desarrollo Basado en Plataformas (DBP)?</h2>

                <p>
                    El Desarrollo Basado en Plataformas (DBP) es un enfoque en el
                    desarrollo de software que busca aprovechar diferentes
                    herramientas, servicios y tecnologías para construir
                    aplicaciones de manera organizada, eficiente y escalable.
                </p>

                <p>
                    A lo largo del curso se estudiarán diferentes tecnologías y
                    conceptos relacionados con el desarrollo de aplicaciones
                    modernas, prestando especial atención a la comunicación
                    entre sistemas, el almacenamiento de información y el uso
                    de herramientas que facilitan el proceso de desarrollo.
                </p>

                <h2>¿Qué temas se tratarán en el curso?</h2>

                <p>
                    Durante el curso se abordarán diferentes conceptos y
                    herramientas fundamentales para el desarrollo de
                    aplicaciones web:
                </p>

                <ul>
                    <li>
                        <strong>APIs:</strong> para permitir la comunicación
                        entre diferentes aplicaciones y servicios.
                    </li>

                    <li>
                        <strong>Bases de datos relacionales:</strong> para
                        almacenar y organizar información de manera
                        estructurada.
                    </li>

                    <li>
                        <strong>Frameworks:</strong> para facilitar y
                        estructurar el desarrollo de aplicaciones.
                    </li>

                    <li>
                        <strong>APIs de terceros:</strong> para integrar
                        servicios y funcionalidades desarrolladas por otras
                        plataformas.
                    </li>

                    <li>
                        <strong>Aplicaciones web:</strong> para integrar los
                        diferentes componentes y construir aplicaciones
                        funcionales.
                    </li>
                </ul>

                <p>
                    Estos conceptos no se estudian de manera aislada. La
                    finalidad es comprender cómo pueden trabajar juntos para
                    construir aplicaciones que respondan a necesidades reales.
                </p>

                <h2>¿Qué se espera que los estudiantes aprendan?</h2>

                <p>
                    Al finalizar el curso, se espera que los estudiantes
                    tengan una base sólida para desarrollar aplicaciones
                    utilizando APIs, bases de datos y frameworks.
                </p>

                <p>
                    Además, se busca que puedan comprender cómo se comunican
                    los diferentes componentes de una aplicación, integrar
                    servicios externos y seleccionar las herramientas
                    adecuadas según las necesidades de un proyecto.
                </p>
            </section>

            {/* ============================================
                INTRODUCCIÓN AL CONTENIDO
            ============================================ */}

            <section className="content-introduction">
                <h1>Introducción al contenido</h1>

                <p>
                    Antes de comenzar con los módulos principales, es
                    importante conocer algunos conceptos fundamentales del
                    desarrollo web.
                </p>

                <p>
                    Estos conceptos servirán como base para comprender los
                    temas que se desarrollarán posteriormente y permitirán
                    entender mejor cómo funcionan las aplicaciones web y cómo
                    se comunican sus diferentes componentes.
                </p>

                <h2>Conceptos básicos</h2>

                <h3>¿Qué es una API?</h3>

                <p>
                    Una API (Application Programming Interface) es un conjunto
                    de reglas y mecanismos que permite que diferentes
                    aplicaciones o componentes se comuniquen entre sí.
                </p>

                <p>
                    En el desarrollo web, las APIs permiten que un cliente
                    solicite información o ejecute determinadas acciones en
                    un servidor.
                </p>

                <p>
                    Por ejemplo, una aplicación web puede utilizar una API
                    para obtener información de usuarios, registrar nuevos
                    datos o consultar información almacenada en una base de
                    datos.
                </p>

                <p>
                    Imaginemos una aplicación como un Restaurante. La
                    comida que se sirve en el restaurante es el recurso
                    que los clientes desean obtener.
                </p>

                 <p>
                    El <strong>mesero</strong> sería el encargado de recibir
                    los pedidos de los clientes y entregarlos a la cocina.
                </p>

                <p>
                    La <strong>cocina</strong> sería la encargada de procesar
                    la información y preparar los platos.
                </p>

                <p>
                    La <strong>API</strong> sería el encargado de recibir los
                    pedidos de los clientes y llevarlos a la cocina, además de
                    entregar los platos servidos a los clientes.
                </p>

                <p>
                    Una API permite a tus clientes o comensales solicitar
                    determinados recursos o ejecutar acciones en tu aplicación,
                    sin necesidad de conocer su estructura interna.
                </p>

                

                <h3>¿Qué es un framework?</h3>

                <p>
                    Un framework es un conjunto de herramientas, bibliotecas y
                    estructuras que proporciona una base para desarrollar
                    aplicaciones.
                </p>

                <p>
                    Los frameworks permiten evitar tener que construir
                    determinadas funcionalidades desde cero y ayudan a
                    organizar el código de una aplicación.
                </p>

                <p>
                    Dependiendo de su propósito, existen frameworks orientados
                    al desarrollo del frontend, backend y otras áreas del
                    desarrollo de software.
                </p>

                <h3>¿Qué es una base de datos relacional?</h3>

                <p>
                    Una base de datos relacional es un sistema utilizado para
                    almacenar información de manera estructurada mediante
                    tablas relacionadas entre sí.
                </p>

                <p>
                    Cada tabla está compuesta por filas y columnas y puede
                    relacionarse con otras tablas mediante identificadores.
                </p>

                <p>
                    Por ejemplo, una aplicación podría tener una tabla de
                    usuarios y otra de pedidos, donde cada pedido está
                    relacionado con el usuario que lo realizó.
                </p>

                <h3>¿Qué es una aplicación web?</h3>

                <p>
                    Una aplicación web es un software al que se puede acceder
                    mediante un navegador web.
                </p>

                <p>
                    Una aplicación web normalmente está compuesta por
                    diferentes componentes que trabajan en conjunto. Por
                    ejemplo, puede existir una interfaz que se ejecuta en el
                    navegador, un servidor encargado de procesar las
                    solicitudes y una base de datos donde se almacena la
                    información.
                </p>

                {/* ============================================
                    CONCEPTOS ÚTILES PARA EL DESARROLLO WEB
                ============================================ */}

                <h2>Conceptos útiles para el desarrollo web</h2>

                <h3>¿Qué es una URI?</h3>

                <p>
                    Una URI (Uniform Resource Identifier) es un identificador
                    utilizado para identificar un recurso dentro de un
                    contexto determinado.
                </p>

                <p>
                    Las URI son un concepto fundamental para comprender cómo
                    se identifican los recursos en la web.
                </p>

                <h3>¿Qué es una URL?</h3>

                <p>
                    Una URL (Uniform Resource Locator) es un tipo de URI que,
                    además de identificar un recurso, proporciona información
                    sobre cómo localizarlo.
                </p>

                <p>
                    Por ejemplo:
                </p>

                <pre>
                    <code>
                        https://example.com/usuarios
                    </code>
                </pre>

                <p>
                    En este caso, <strong>https</strong> indica el protocolo
                    utilizado, mientras que <strong>example.com/usuarios</strong>
                    representa la ubicación del recurso.
                </p>

                <h3>¿Qué es HTTP?</h3>

                <p>
                    HTTP (HyperText Transfer Protocol) es uno de los
                    principales protocolos utilizados para la comunicación
                    en la web.
                </p>

                <p>
                    Permite que un cliente, como un navegador, envíe
                    solicitudes a un servidor y reciba respuestas.
                </p>

                <p>
                    Algunos de los métodos HTTP más utilizados son:
                </p>

                <ul>
                    <li>
                        <strong>GET:</strong> obtener información.
                    </li>

                    <li>
                        <strong>POST:</strong> enviar o crear información.
                    </li>

                    <li>
                        <strong>PUT:</strong> actualizar información.
                    </li>

                    <li>
                        <strong>PATCH:</strong> modificar parcialmente
                        información.
                    </li>

                    <li>
                        <strong>DELETE:</strong> eliminar información.
                    </li>
                </ul>

                <p>
                    Estos métodos serán especialmente importantes al trabajar
                    posteriormente con APIs.
                </p>

                <h3>¿Qué es un cliente y qué es un servidor?</h3>

                <p>
                    En una aplicación web es común encontrar una arquitectura
                    basada en la comunicación entre un cliente y un servidor.
                </p>

                <p>
                    El <strong>cliente</strong> es el componente que realiza
                    una solicitud. Por ejemplo, un navegador puede solicitar
                    información a una API.
                </p>

                <p>
                    El <strong>servidor</strong> recibe dicha solicitud,
                    procesa la información necesaria y devuelve una respuesta
                    al cliente.
                </p>

                <pre>
                    <code>
                        Cliente → Solicitud → Servidor{"\n"}
                        Cliente ← Respuesta ← Servidor
                    </code>
                </pre>

                <h3>¿Qué es JSON?</h3>

                <p>
                    JSON (JavaScript Object Notation) es un formato utilizado
                    frecuentemente para representar e intercambiar
                    información entre aplicaciones.
                </p>

                <p>
                    Debido a su estructura sencilla y fácil de interpretar,
                    JSON es uno de los formatos más utilizados para el
                    intercambio de información mediante APIs web.
                </p>

                <pre>
                    <code>
{`{
    "nombre": "Juan",
    "edad": 20
}`}
                    </code>
                </pre>

                {/* ============================================
                    RELACIÓN ENTRE CONCEPTOS
                ============================================ */}

                <h2>¿Cómo se relacionan estos conceptos?</h2>

                <p>
                    Los conceptos presentados anteriormente forman parte de
                    diferentes componentes del desarrollo web y se
                    complementan entre sí.
                </p>

                <p>
                    Una aplicación web puede utilizar un{" "}
                    <strong>framework</strong> para organizar su código,
                    comunicarse con un servidor mediante <strong>HTTP</strong>,
                    utilizar una <strong>API</strong> para acceder a
                    determinados recursos, intercambiar información mediante{" "}
                    <strong>JSON</strong> y almacenar dicha información en una{" "}
                    <strong>base de datos relacional</strong>.
                </p>

                <p>
                    Comprender cómo se relacionan estos conceptos permitirá
                    abordar los siguientes módulos con una base conceptual
                    más sólida.
                </p>
            </section>

            {/* ============================================
                CUESTIONARIO
            ============================================ */}

            <section className="introduction-quiz">
                <h1>Comprueba tus conocimientos</h1>

                <p>
                    Antes de continuar con los siguientes módulos, comprueba
                    cuánto has aprendido sobre los conceptos fundamentales del
                    desarrollo web.
                </p>

                <div className="quiz-container">
                    {/* Pregunta 1 */}

                    {/* Pregunta 2 */}

                    {/* Pregunta 3 */}

                    {/* Pregunta 4 */}

                    {/* Pregunta 5 */}
                </div>
            </section>
        </main>
    );
};

export default IntroductionPage;
