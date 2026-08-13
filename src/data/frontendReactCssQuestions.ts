import type { QuizQuestion } from '../components/QuizzModal'

export interface ReactCssSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const frontendReactCssSubModules: ReactCssSubModule[] = [
    {
        id: 'css-modules',
        title: 'CSS Modules',
        color: '#264DE4',
        questions: [
            {
                question: '¿Qué problema resuelven los CSS Modules?',
                options: [
                    'Que el CSS se cargue más rápido',
                    'Los conflictos de nombres de clases entre distintos componentes',
                    'La falta de soporte de CSS en navegadores antiguos',
                    'La necesidad de usar JavaScript para estilizar',
                ],
                correct: 1,
                explanation: 'Los CSS Modules generan automáticamente nombres de clase únicos por archivo, evitando que los estilos de un componente choquen con los de otro.',
            },
            {
                question: '¿Cómo se nombra normalmente un archivo de CSS Module?',
                options: [
                    'estilos.css',
                    'Componente.module.css',
                    'Componente.style.js',
                    'global.css',
                ],
                correct: 1,
                explanation: 'La convención es nombrar el archivo con el sufijo .module.css, lo que le indica al bundler (como Vite) que debe generar clases con nombres únicos.',
            },
            {
                question: '¿Cómo se importan y usan las clases de un CSS Module en un componente?',
                options: [
                    'import styles from "./Card.module.css" y luego className={styles.card}',
                    'No se necesita importar nada, se aplican automáticamente',
                    'Se escriben directamente en el HTML como atributos style',
                    'Se referencian con un id en vez de una clase',
                ],
                correct: 0,
                explanation: 'Al importar el módulo como un objeto (styles), cada clase definida en el CSS queda disponible como una propiedad de ese objeto.',
            },
            {
                question: '¿Las clases generadas por CSS Modules son visibles/afectan a otros componentes?',
                options: [
                    'Sí, siempre son globales',
                    'No, están limitadas (scoped) al componente que las importa',
                    'Solo si el componente está exportado',
                    'Depende del navegador',
                ],
                correct: 1,
                explanation: 'El nombre final de la clase se transforma (ej. card_ax7f2) para que quede local al componente, evitando colisiones con otros archivos CSS.',
            },
            {
                question: '¿Qué ventaja tienen los CSS Modules frente a escribir todo en un único archivo global.css?',
                options: [
                    'Ninguna, es exactamente lo mismo',
                    'Permiten mantener los estilos organizados y evitar que crezcan sin control ni se pisen entre componentes',
                    'Hacen que la app cargue estilos más lento',
                    'Eliminan la necesidad de usar selectores CSS',
                ],
                correct: 1,
                explanation: 'Al mantener los estilos junto a cada componente y con nombres únicos, el proyecto escala mejor y se reduce el riesgo de estilos que se sobreescriben sin querer.',
            },
        ],
    },
    {
        id: 'estilos-condicionales',
        title: 'Estilos Condicionales',
        color: '#264DE4',
        questions: [
            {
                question: '¿Cómo se puede aplicar una clase CSS de forma condicional en React?',
                options: [
                    'React no permite clases condicionales',
                    'Usando template literals o una librería como clsx/classnames',
                    'Solo modificando directamente el archivo CSS',
                    'Usando la propiedad "conditionalClass"',
                ],
                correct: 1,
                explanation: 'Es común construir el string de className dinámicamente con template literals (`${activo ? "on" : "off"}`) o con utilidades como clsx para mayor legibilidad.',
            },
            {
                question: '¿Qué hace este código: className={`btn ${isActive ? "btn-active" : ""}`}?',
                options: [
                    'Aplica siempre ambas clases',
                    'Aplica la clase "btn" siempre, y "btn-active" solo si isActive es verdadero',
                    'Genera un error de sintaxis',
                    'Ignora la clase "btn"',
                ],
                correct: 1,
                explanation: 'El template literal concatena "btn" con "btn-active" únicamente cuando la condición isActive se cumple; si no, agrega un string vacío.',
            },
            {
                question: '¿Para qué sirve el estilo inline en React (prop style)?',
                options: [
                    'Para aplicar estilos dinámicos calculados en tiempo de ejecución, como colores basados en una variable',
                    'Para reemplazar completamente los archivos CSS',
                    'Solo funciona con clases estáticas',
                    'No está permitido en React',
                ],
                correct: 0,
                explanation: 'El prop style acepta un objeto de JavaScript y es útil cuando el valor depende de datos dinámicos, como un color que viene de props (ej. style={{ color: activeModule.color }}).',
            },
            {
                question: '¿Qué diferencia hay entre usar className y style en React?',
                options: [
                    'className aplica clases definidas en CSS; style aplica estilos inline con un objeto JS',
                    'Son exactamente lo mismo',
                    'style solo funciona en componentes de clase',
                    'className no acepta valores dinámicos',
                ],
                correct: 0,
                explanation: 'className referencia reglas definidas en una hoja de estilos, mientras que style aplica propiedades CSS directamente como un objeto JavaScript en el elemento.',
            },
            {
                question: '¿Por qué usar una librería como clsx en vez de concatenar strings manualmente?',
                options: [
                    'Porque concatenar strings no funciona en React',
                    'Porque simplifica combinar múltiples clases condicionales de forma más legible y segura',
                    'Porque es obligatorio para que React renderice',
                    'Porque mejora el rendimiento de la red',
                ],
                correct: 1,
                explanation: 'clsx permite escribir clsx("btn", { "btn-active": isActive, "btn-disabled": disabled }) evitando template literals largos y propensos a errores.',
            },
        ],
    },
    {
        id: 'tailwind-utility-first',
        title: 'Tailwind CSS: Utility-First',
        color: '#264DE4',
        questions: [
            {
                question: '¿Qué significa que Tailwind sea "utility-first"?',
                options: [
                    'Que solo sirve para proyectos pequeños',
                    'Que provee clases pequeñas y reutilizables (utilidades) que se combinan directamente en el HTML/JSX en vez de escribir CSS custom',
                    'Que reemplaza completamente a JavaScript',
                    'Que solo funciona con componentes de clase',
                ],
                correct: 1,
                explanation: 'En lugar de escribir selectores CSS personalizados, Tailwind ofrece clases utilitarias (p-4, flex, text-center) que se aplican directamente en el markup.',
            },
            {
                question: '¿Qué hace la clase "flex justify-between items-center" en Tailwind?',
                options: [
                    'Oculta el elemento',
                    'Convierte el contenedor en flexbox, separa los elementos a los extremos y los centra verticalmente',
                    'Aplica un borde al elemento',
                    'Cambia el color de fondo',
                ],
                correct: 1,
                explanation: '"flex" activa display:flex, "justify-between" distribuye el espacio entre los hijos, y "items-center" los alinea verticalmente al centro.',
            },
            {
                question: '¿Cómo se manejan los estilos responsivos en Tailwind?',
                options: [
                    'Con media queries escritas manualmente en un archivo aparte',
                    'Con prefijos como sm:, md:, lg: antepuestos a las clases utilitarias',
                    'Tailwind no soporta diseño responsive',
                    'Creando un componente distinto para cada tamaño de pantalla',
                ],
                correct: 1,
                explanation: 'Prefijos como md:flex-row aplican esa utilidad solo a partir de cierto breakpoint, permitiendo diseño responsive directamente en el className.',
            },
            {
                question: '¿Qué ventaja ofrece Tailwind frente a escribir CSS tradicional?',
                options: [
                    'Evita saltar entre archivos CSS y JSX, acelerando el desarrollo de interfaces',
                    'Elimina por completo la necesidad de aprender CSS',
                    'Genera automáticamente la lógica de los componentes',
                    'Solo funciona en proyectos sin React',
                ],
                correct: 0,
                explanation: 'Al escribir los estilos directamente como clases en el JSX, se evita cambiar constantemente de archivo y se agiliza la iteración visual.',
            },
            {
                question: '¿Qué hace la clase "hover:bg-blue-600" en Tailwind?',
                options: [
                    'Cambia el fondo a azul permanentemente',
                    'Aplica un fondo azul (bg-blue-600) únicamente cuando el elemento está en estado hover',
                    'Oculta el elemento al pasar el mouse',
                    'Es una clase inválida',
                ],
                correct: 1,
                explanation: 'El prefijo "hover:" aplica la utilidad solo bajo ese pseudo-estado, sin necesidad de escribir :hover en un archivo CSS separado.',
            },
        ],
    },
    {
        id: 'diseno-responsive',
        title: 'Diseño Responsive',
        color: '#264DE4',
        questions: [
            {
                question: '¿Qué es un "breakpoint" en diseño responsive?',
                options: [
                    'Un error en el código CSS',
                    'Un ancho de pantalla específico a partir del cual cambia el diseño de la interfaz',
                    'Una herramienta de depuración de JavaScript',
                    'Un tipo de animación CSS',
                ],
                correct: 1,
                explanation: 'Los breakpoints (ej. 640px, 768px, 1024px) definen los puntos donde el layout se adapta a distintos tamaños de dispositivo, como tablets o desktop.',
            },
            {
                question: '¿Qué es una "media query" en CSS?',
                options: [
                    'Una consulta a una base de datos',
                    'Una regla CSS que aplica estilos solo si se cumple una condición, como el ancho de la pantalla',
                    'Un tipo de componente de React',
                    'Un método para hacer peticiones HTTP',
                ],
                correct: 1,
                explanation: 'Ejemplo: @media (min-width: 768px) { ... } aplica ese bloque de estilos únicamente cuando la pantalla mide 768px o más.',
            },
            {
                question: '¿Qué significa diseñar con enfoque "mobile-first"?',
                options: [
                    'Diseñar primero para pantallas grandes y luego adaptar a móvil',
                    'Diseñar primero los estilos base para móvil, y luego usar media queries para agregar estilos en pantallas más grandes',
                    'Solo soportar dispositivos móviles',
                    'No usar CSS en absoluto',
                ],
                correct: 1,
                explanation: 'El enfoque mobile-first define los estilos base pensando en pantallas pequeñas, y progresivamente añade reglas para pantallas más anchas usando min-width.',
            },
            {
                question: '¿Qué unidad CSS es más flexible para tamaños de fuente responsive: px o rem?',
                options: [
                    'px, porque es un valor fijo',
                    'rem, porque escala en relación al tamaño de fuente raíz del documento',
                    'Ambas son idénticas en comportamiento',
                    'Ninguna, siempre se debe usar %',
                ],
                correct: 1,
                explanation: 'rem se calcula en base al font-size del elemento raíz (html), por lo que respeta mejor las preferencias de accesibilidad del usuario que un valor fijo en píxeles.',
            },
            {
                question: '¿Qué propiedad CSS es clave para construir layouts responsivos flexibles como filas que se acomodan según el espacio?',
                options: [
                    'position: absolute',
                    'display: flex (o grid)',
                    'text-decoration: underline',
                    'font-weight: bold',
                ],
                correct: 1,
                explanation: 'Flexbox y Grid son los sistemas de layout modernos de CSS, diseñados justamente para crear estructuras que se adapten a distintos tamaños de pantalla.',
            },
        ],
    },
]