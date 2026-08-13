import type { QuizQuestion } from '../components/QuizzModal'

export interface HooksStorageSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const frontendHooksStorageSubModules: HooksStorageSubModule[] = [
    {
        id: 'useeffect-basico',
        title: 'useEffect: Efectos Secundarios',
        color: '#61DAFB',
        questions: [
            {
                question: '¿Para qué sirve principalmente el hook useEffect?',
                options: [
                    'Para crear variables de estado',
                    'Para ejecutar efectos secundarios (side effects) después del renderizado',
                    'Para definir componentes reutilizables',
                    'Para estilizar componentes con CSS',
                ],
                correct: 1,
                explanation: 'useEffect permite ejecutar código que interactúa con el "exterior" del componente (peticiones HTTP, timers, suscripciones) después de que React actualiza el DOM.',
            },
            {
                question: '¿Qué controla el array de dependencias en useEffect?',
                options: [
                    'El orden en que se declaran los hooks',
                    'Cuándo se vuelve a ejecutar el efecto',
                    'El estilo del componente',
                    'Los props que recibe el componente',
                ],
                correct: 1,
                explanation: 'El array de dependencias le indica a React cuándo debe volver a ejecutar el efecto: solo cuando alguno de esos valores cambie entre renders.',
            },
            {
                question: '¿Qué ocurre si dejas el array de dependencias vacío ([])?',
                options: [
                    'El efecto se ejecuta en cada render',
                    'El efecto nunca se ejecuta',
                    'El efecto se ejecuta solo una vez, después del primer render',
                    'React lanza un error de compilación',
                ],
                correct: 2,
                explanation: 'Un array vacío indica que el efecto no depende de ningún valor, por lo que solo corre una vez al montar el componente.',
            },
            {
                question: '¿Para qué se usa la función de "cleanup" (retorno) dentro de useEffect?',
                options: [
                    'Para renderizar el componente más rápido',
                    'Para limpiar recursos (timers, suscripciones) antes de que el efecto se vuelva a ejecutar o el componente se desmonte',
                    'Para declarar nuevas variables de estado',
                    'Para forzar un re-render inmediato',
                ],
                correct: 1,
                explanation: 'La función que retorna useEffect se ejecuta antes de que el efecto corra de nuevo o cuando el componente se desmonta, evitando fugas de memoria (ej. cancelar un setInterval).',
            },
            {
                question: '¿Qué pasa si omites el array de dependencias por completo?',
                options: [
                    'El efecto se ejecuta después de cada render del componente',
                    'El efecto se ejecuta solo una vez',
                    'React ignora el efecto',
                    'Es equivalente a poner un array vacío',
                ],
                correct: 0,
                explanation: 'Sin array de dependencias, React no tiene forma de saber cuándo omitir el efecto, así que lo ejecuta después de cada renderizado.',
            },
        ],
    },
    {
        id: 'useref-dom',
        title: 'useRef y Referencias',
        color: '#61DAFB',
        questions: [
            {
                question: '¿Cuál es una diferencia clave entre useState y useRef?',
                options: [
                    'useRef no puede usarse en componentes funcionales',
                    'Cambiar el valor de una ref no provoca un nuevo renderizado',
                    'useState es más rápido que useRef',
                    'No hay ninguna diferencia',
                ],
                correct: 1,
                explanation: 'A diferencia del estado, mutar el valor de una ref (ref.current) no dispara un re-render del componente.',
            },
            {
                question: '¿Cuál es un uso común de useRef?',
                options: [
                    'Guardar el resultado de una petición HTTP para mostrarlo en pantalla',
                    'Acceder directamente a un elemento del DOM, como un input',
                    'Definir los estilos de un componente',
                    'Reemplazar completamente a useState',
                ],
                correct: 1,
                explanation: 'Un caso muy común es obtener una referencia directa a un elemento del DOM (ej. para hacer foco automático en un input) mediante el atributo ref.',
            },
            {
                question: '¿Cómo se accede al valor almacenado en una ref?',
                options: [
                    'ref.value',
                    'ref.get()',
                    'ref.current',
                    'ref()',
                ],
                correct: 2,
                explanation: 'El objeto que retorna useRef tiene una propiedad .current que contiene el valor mutable actual.',
            },
            {
                question: '¿Además de referenciar el DOM, para qué más sirve useRef?',
                options: [
                    'Para guardar cualquier valor mutable que persista entre renders sin causar re-render',
                    'Para hacer peticiones a una API',
                    'Para manejar el enrutamiento de la aplicación',
                    'Para aplicar estilos condicionales',
                ],
                correct: 0,
                explanation: 'useRef es útil como "caja" para guardar cualquier valor (contadores, IDs de timers, valores previos) que necesite persistir sin provocar renders.',
            },
            {
                question: '¿Qué valor inicial recibe useRef(0)?',
                options: [
                    'ref.current empieza en null siempre',
                    'ref.current empieza en 0',
                    'ref.current empieza en undefined',
                    'Genera un error porque useRef no acepta argumentos',
                ],
                correct: 1,
                explanation: 'El argumento que se le pasa a useRef se convierte en el valor inicial de la propiedad .current.',
            },
        ],
    },
    {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        color: '#61DAFB',
        questions: [
            {
                question: '¿Qué es un Custom Hook?',
                options: [
                    'Un componente visual reutilizable',
                    'Una función de JavaScript que empieza con "use" y puede usar otros hooks',
                    'Un archivo de configuración de React',
                    'Un tipo especial de estado global',
                ],
                correct: 1,
                explanation: 'Un custom hook es simplemente una función que sigue la convención de nombrarse con el prefijo "use" y permite extraer y reutilizar lógica con estado entre componentes.',
            },
            {
                question: '¿Cuál es la principal ventaja de crear un custom hook?',
                options: [
                    'Mejora automáticamente el rendimiento de la app',
                    'Permite reutilizar lógica con estado entre distintos componentes sin duplicar código',
                    'Reemplaza la necesidad de usar props',
                    'Elimina la necesidad de usar useState',
                ],
                correct: 1,
                explanation: 'Los custom hooks evitan duplicar la misma lógica (ej. fetch de datos, manejo de formularios) en varios componentes, encapsulándola en una función reutilizable.',
            },
            {
                question: '¿Por qué es obligatorio que un custom hook empiece con "use"?',
                options: [
                    'Es solo una convención estética sin ningún efecto',
                    'Para que React y los linters puedan verificar que se respetan las reglas de los hooks',
                    'Porque de lo contrario React no lo compila',
                    'Para que TypeScript lo detecte como componente',
                ],
                correct: 1,
                explanation: 'La convención "use" le permite a React (y a herramientas como el ESLint plugin de hooks) identificar que esa función sigue las reglas de los hooks, como no poder llamarse condicionalmente.',
            },
            {
                question: '¿Qué puede retornar un custom hook?',
                options: [
                    'Únicamente un booleano',
                    'Solo JSX',
                    'Cualquier valor: un objeto, un array, una función, etc.',
                    'Nada, los custom hooks no retornan valores',
                ],
                correct: 2,
                explanation: 'Un custom hook es una función normal de JavaScript, así que puede retornar lo que necesite el componente que lo use: estado, funciones, objetos, etc.',
            },
            {
                question: '¿Cuál sería un buen ejemplo de custom hook?',
                options: [
                    'useLocalStorage, que sincroniza un estado con localStorage',
                    'Button, que renderiza un botón estilizado',
                    'App, el componente raíz de la aplicación',
                    'index.tsx, el punto de entrada de la app',
                ],
                correct: 0,
                explanation: 'useLocalStorage es un ejemplo clásico: encapsula la lógica de leer/escribir en localStorage y mantenerla sincronizada con un estado de React.',
            },
        ],
    },
    {
        id: 'local-session-storage',
        title: 'localStorage y sessionStorage',
        color: '#61DAFB',
        questions: [
            {
                question: '¿Cuál es la diferencia principal entre localStorage y sessionStorage?',
                options: [
                    'localStorage solo guarda números, sessionStorage solo texto',
                    'localStorage persiste aunque cierres el navegador; sessionStorage se borra al cerrar la pestaña',
                    'sessionStorage es más rápido que localStorage',
                    'No hay ninguna diferencia real entre ambos',
                ],
                correct: 1,
                explanation: 'localStorage guarda los datos sin fecha de expiración (persisten entre sesiones), mientras que sessionStorage solo dura mientras la pestaña del navegador esté abierta.',
            },
            {
                question: '¿Qué tipo de datos se pueden guardar directamente en localStorage?',
                options: [
                    'Cualquier tipo de dato, incluyendo objetos y arrays sin convertir',
                    'Únicamente cadenas de texto (strings)',
                    'Solo números',
                    'Solo booleanos',
                ],
                correct: 1,
                explanation: 'localStorage solo almacena strings. Para guardar objetos o arrays hay que convertirlos con JSON.stringify() y luego parsearlos con JSON.parse() al leerlos.',
            },
            {
                question: '¿Qué método se usa para guardar un valor en localStorage?',
                options: [
                    'localStorage.save()',
                    'localStorage.setItem(clave, valor)',
                    'localStorage.add(clave, valor)',
                    'localStorage.write(valor)',
                ],
                correct: 1,
                explanation: 'setItem(clave, valor) guarda un par clave-valor. Para leerlo se usa getItem(clave), y para eliminarlo removeItem(clave).',
            },
            {
                question: '¿Por qué es útil un hook como useLocalStorage en una app de React?',
                options: [
                    'Porque reemplaza por completo a useState',
                    'Porque sincroniza automáticamente un estado de React con localStorage, persistiendo los datos entre recargas de página',
                    'Porque hace las peticiones HTTP más rápidas',
                    'Porque mejora el diseño visual del componente',
                ],
                correct: 1,
                explanation: 'Un hook como useLocalStorage combina useState con lectura/escritura automática en localStorage, para que el valor sobreviva a un refresh de la página.',
            },
            {
                question: '¿Qué ocurre si intentas leer una clave que no existe en localStorage?',
                options: [
                    'Se lanza un error que detiene la aplicación',
                    'getItem() retorna null',
                    'Retorna automáticamente un string vacío convertido en 0',
                    'El navegador crea la clave con un valor por defecto',
                ],
                correct: 1,
                explanation: 'Si la clave no existe, localStorage.getItem() retorna null, por lo que siempre conviene manejar ese caso antes de usar JSON.parse().',
            },
        ],
    },
]