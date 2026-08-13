import type { QuizQuestion } from '../components/QuizzModal'

export interface ComponentsPropsStateSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const frontendComponentsPropsStateSubModules: ComponentsPropsStateSubModule[] = [
    {
        id: 'que-son-los-componentes',
        title: '¿Qué son los Componentes?',
        color: '#149ECA',
        questions: [
            {
                question: '¿Qué es un componente en React?',
                options: [
                    'Un archivo de estilos CSS',
                    'Una pieza independiente y reutilizable de una interfaz, con su propia lógica y apariencia',
                    'Una base de datos local',
                    'Un tipo de variable de JavaScript',
                ],
                correct: 1,
                explanation: 'Un componente es como una función que retorna una parte de la interfaz (JSX). Permite dividir la UI en piezas independientes y reutilizables.',
            },
            {
                question: '¿Qué es JSX?',
                options: [
                    'Un lenguaje de programación distinto a JavaScript',
                    'Una extensión de sintaxis que permite escribir código similar a HTML dentro de JavaScript',
                    'Un framework de CSS',
                    'Una base de datos para React',
                ],
                correct: 1,
                explanation: 'JSX permite describir cómo debería verse la interfaz usando una sintaxis parecida a HTML, que luego se transforma en llamadas de JavaScript.',
            },
            {
                question: '¿Cómo se define un componente funcional simple en React?',
                options: [
                    'class Saludo extends React.Component',
                    'const Saludo = () => { return <h1>Hola</h1> }',
                    'function Saludo() { console.log("Hola") }',
                    'let Saludo = new Component()',
                ],
                correct: 1,
                explanation: 'Un componente funcional es simplemente una función de JavaScript que retorna JSX; hoy en día es la forma estándar de escribir componentes en React.',
            },
            {
                question: '¿Por qué es útil dividir una interfaz en varios componentes pequeños?',
                options: [
                    'Porque React exige un máximo de líneas por archivo',
                    'Porque facilita la reutilización, el mantenimiento y hace más legible el código',
                    'Porque hace que la app cargue más lento',
                    'No hay ninguna ventaja real',
                ],
                correct: 1,
                explanation: 'Componentes pequeños y enfocados en una sola responsabilidad son más fáciles de entender, probar, reutilizar y mantener a lo largo del tiempo.',
            },
            {
                question: '¿Cómo debe empezar el nombre de un componente de React?',
                options: [
                    'Con minúscula, como cualquier variable',
                    'Con mayúscula, para que React lo distinga de una etiqueta HTML nativa',
                    'Con un guion bajo',
                    'No importa la convención de nombres',
                ],
                correct: 1,
                explanation: 'React usa la convención de que los componentes empiecen con mayúscula (ej. <Saludo />) para diferenciarlos de etiquetas HTML nativas como <div> o <span>.',
            },
        ],
    },
    {
        id: 'props-comunicacion',
        title: 'Props: Comunicación entre Componentes',
        color: '#149ECA',
        questions: [
            {
                question: '¿Qué son las props en React?',
                options: [
                    'Variables internas que solo el componente puede modificar',
                    'Datos que un componente padre envía a un componente hijo',
                    'Un tipo de hook exclusivo de componentes de clase',
                    'Los estilos CSS de un componente',
                ],
                correct: 1,
                explanation: 'Las props (properties) son la forma en que un componente padre pasa información a un componente hijo, similar a los argumentos de una función.',
            },
            {
                question: '¿Cómo recibe un componente funcional sus props?',
                options: [
                    'Como el primer argumento de la función',
                    'Las props no se pueden recibir en componentes funcionales',
                    'Mediante una variable global',
                    'Solo a través de useState',
                ],
                correct: 0,
                explanation: 'React pasa un objeto con todas las props como primer parámetro de la función del componente: const Saludo = (props) => { ... }.',
            },
            {
                question: '¿Puede un componente hijo modificar directamente las props que recibió?',
                options: [
                    'Sí, siempre',
                    'No, las props son de solo lectura (inmutables) desde la perspectiva del hijo',
                    'Solo si usa useEffect',
                    'Solo en componentes de clase',
                ],
                correct: 1,
                explanation: 'Las props son de solo lectura: el hijo no debe modificarlas directamente. Si necesita cambiar algo, debe pedirle al padre que lo haga (por ejemplo, mediante una función pasada como prop).',
            },
            {
                question: '¿Cómo se le pasa una prop llamada "nombre" a un componente <Saludo />?',
                options: [
                    '<Saludo nombre="Ana" />',
                    '<Saludo>nombre=Ana</Saludo>',
                    '<Saludo:nombre>Ana</Saludo:nombre>',
                    '<Saludo nombre:Ana />',
                ],
                correct: 0,
                explanation: 'Las props se pasan como atributos en el JSX, similar a los atributos HTML: <Saludo nombre="Ana" />.',
            },
            {
                question: '¿Qué tipo de dato puede ser una prop?',
                options: [
                    'Solo strings',
                    'Solo números',
                    'Cualquier valor de JavaScript: strings, números, objetos, arrays e incluso funciones',
                    'Solo booleanos',
                ],
                correct: 2,
                explanation: 'Las props pueden ser cualquier valor de JavaScript, incluyendo funciones, lo que permite que un hijo notifique eventos a su padre (ej. onClick).',
            },
        ],
    },
    {
        id: 'que-es-el-state',
        title: '¿Qué es el State?',
        color: '#149ECA',
        questions: [
            {
                question: '¿Qué representa el state (estado) de un componente?',
                options: [
                    'Información que puede cambiar durante la ejecución y provoca una nueva renderización',
                    'Los estilos CSS aplicados al componente',
                    'Las props que recibe el componente',
                    'El nombre del archivo del componente',
                ],
                correct: 0,
                explanation: 'El state es información interna del componente que puede cambiar con el tiempo (ej. un contador, el texto de un input). Cuando cambia, React vuelve a renderizar el componente.',
            },
            {
                question: '¿Cuál es la diferencia principal entre props y state?',
                options: [
                    'No hay diferencia, son lo mismo',
                    'Las props vienen del padre y son de solo lectura; el state es interno al componente y puede modificarse',
                    'El state viene del padre; las props son internas',
                    'Las props solo existen en componentes de clase',
                ],
                correct: 1,
                explanation: 'Las props son datos externos que el componente recibe (y no puede cambiar), mientras que el state es información propia del componente que él mismo puede actualizar.',
            },
            {
                question: '¿Qué ocurre cuando el state de un componente cambia?',
                options: [
                    'Nada, hay que recargar la página manualmente',
                    'React vuelve a ejecutar el componente y actualiza la interfaz para reflejar el nuevo valor',
                    'El componente se elimina',
                    'Solo se actualiza si se llama a window.location.reload()',
                ],
                correct: 1,
                explanation: 'Cuando el state cambia, React programa un nuevo renderizado del componente para que la interfaz refleje el estado más reciente.',
            },
            {
                question: '¿Es correcto modificar el state directamente, por ejemplo escribiendo contador = contador + 1?',
                options: [
                    'Sí, es la forma recomendada',
                    'No, siempre se debe usar la función setter que retorna useState (ej. setContador)',
                    'Solo funciona si el componente es de clase',
                    'Da igual cuál de las dos formas se use',
                ],
                correct: 1,
                explanation: 'React no detecta cambios hechos directamente sobre la variable; hay que usar la función setter (como setContador) para que React sepa que debe re-renderizar.',
            },
            {
                question: '¿Cada instancia de un componente tiene su propio state independiente?',
                options: [
                    'No, todas las instancias comparten el mismo state',
                    'Sí, cada instancia del componente mantiene su propio state de forma aislada',
                    'Solo si se usa Redux',
                    'Depende del navegador',
                ],
                correct: 1,
                explanation: 'Si renderizas el mismo componente varias veces, cada instancia tiene su propia copia independiente del state, sin interferir entre sí.',
            },
        ],
    },
    {
        id: 'usestate-hook',
        title: 'El Hook useState',
        color: '#149ECA',
        questions: [
            {
                question: '¿Qué retorna la llamada a useState(0)?',
                options: [
                    'Solo el valor actual del estado',
                    'Un array con dos elementos: el valor actual y una función para actualizarlo',
                    'Un objeto con métodos get y set',
                    'Nada, useState no retorna ningún valor',
                ],
                correct: 1,
                explanation: 'useState retorna un array de dos posiciones: [valorActual, funciónParaActualizar], que normalmente se desestructura como const [contador, setContador] = useState(0).',
            },
            {
                question: '¿Qué hace el argumento que se le pasa a useState, como el 0 en useState(0)?',
                options: [
                    'Define el valor inicial del estado',
                    'Define el tipo de dato permitido, sin afectar el valor',
                    'Es obligatorio y debe ser siempre un número',
                    'No tiene ningún efecto',
                ],
                correct: 0,
                explanation: 'El argumento pasado a useState se convierte en el valor inicial del estado, usado únicamente durante el primer renderizado del componente.',
            },
            {
                question: '¿Cómo se actualiza el estado usando la función setter de useState?',
                options: [
                    'contador = contador + 1',
                    'setContador(contador + 1)',
                    'useState(contador + 1)',
                    'contador.set(contador + 1)',
                ],
                correct: 1,
                explanation: 'Se llama a la función setter con el nuevo valor deseado, por ejemplo setContador(contador + 1), y React se encarga de actualizar el estado y re-renderizar.',
            },
            {
                question: '¿Puede un componente usar más de un useState?',
                options: [
                    'No, solo se permite un useState por componente',
                    'Sí, se pueden declarar tantos useState como se necesiten para distintos valores de estado',
                    'Solo si son del mismo tipo de dato',
                    'Solo en componentes de clase',
                ],
                correct: 1,
                explanation: 'Es completamente válido y común usar varios useState en un mismo componente, cada uno manejando una pieza de estado independiente (ej. nombre, edad, cargando).',
            },
            {
                question: '¿Qué forma alternativa de actualizar el estado es recomendable cuando el nuevo valor depende del anterior?',
                options: [
                    'setContador(contador + 1) siempre es igual de seguro en cualquier escenario',
                    'Pasar una función a la actualización: setContador(prev => prev + 1)',
                    'Llamar a useState de nuevo dentro del mismo render',
                    'No existe una forma alternativa',
                ],
                correct: 1,
                explanation: 'Cuando el nuevo valor depende del valor previo, usar una función (prev => prev + 1) evita problemas si hay varias actualizaciones encoladas antes del siguiente render.',
            },
        ],
    },
    {
        id: 'props-vs-state',
        title: 'Props vs State',
        color: '#149ECA',
        questions: [
            {
                question: '¿Quién controla el valor de una prop?',
                options: [
                    'El propio componente que la recibe',
                    'El componente padre que la envía',
                    'React lo decide automáticamente',
                    'El navegador',
                ],
                correct: 1,
                explanation: 'Las props son controladas externamente por el componente padre; el componente hijo solo las recibe y las usa, sin poder modificarlas directamente.',
            },
            {
                question: '¿Quién controla el valor del state?',
                options: [
                    'El componente padre',
                    'El propio componente donde se declaró ese state',
                    'El navegador',
                    'Un archivo de configuración global',
                ],
                correct: 1,
                explanation: 'El state es interno: solo el componente que lo declaró (con useState) puede leerlo y actualizarlo directamente.',
            },
            {
                question: '¿Cuál de estas situaciones es un buen ejemplo de uso de props?',
                options: [
                    'Guardar el texto que el usuario escribe en un input',
                    'Enviar el color de un botón desde un componente padre hacia un componente hijo reutilizable',
                    'Guardar si un modal está abierto o cerrado',
                    'Contar cuántas veces se hizo clic en un botón',
                ],
                correct: 1,
                explanation: 'Pasar configuración o datos desde un padre hacia un hijo (como un color, título o callback) es el caso de uso típico de las props.',
            },
            {
                question: '¿Cuál de estas situaciones es un buen ejemplo de uso de state?',
                options: [
                    'El nombre del componente',
                    'Si un menú desplegable está abierto o cerrado en este momento',
                    'El color definido por el componente padre',
                    'El texto estático de un título',
                ],
                correct: 1,
                explanation: 'Un valor que cambia con el tiempo dentro del propio componente, como si un menú está abierto o cerrado, es un caso típico de state.',
            },
            {
                question: '¿Qué ocurre si un componente padre re-renderiza y le pasa nuevas props a su hijo?',
                options: [
                    'El hijo ignora las nuevas props y sigue usando las anteriores',
                    'El hijo se vuelve a renderizar con los nuevos valores de props',
                    'El state del hijo se reinicia siempre a su valor inicial',
                    'La aplicación lanza un error',
                ],
                correct: 1,
                explanation: 'Cuando el padre pasa nuevas props, React vuelve a renderizar el hijo con esos nuevos valores; el state interno del hijo se mantiene intacto salvo que el componente se desmonte.',
            },
        ],
    },
]