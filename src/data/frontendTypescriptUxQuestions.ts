import type { QuizQuestion } from '../components/QuizzModal'

export interface TypescriptUxSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const frontendTypescriptUxSubModules: TypescriptUxSubModule[] = [
    {
        id: 'tipos-basicos-ts',
        title: 'Tipos Básicos en TypeScript',
        color: '#3178C6',
        questions: [
            {
                question: '¿Qué es TypeScript?',
                options: [
                    'Un framework distinto a JavaScript',
                    'Un superset de JavaScript que agrega tipado estático',
                    'Una base de datos',
                    'Un reemplazo de React',
                ],
                correct: 1,
                explanation: 'TypeScript añade un sistema de tipos sobre JavaScript. Todo código JavaScript válido es también código TypeScript válido, pero TS permite declarar tipos para detectar errores antes de ejecutar el código.',
            },
            {
                question: '¿Cómo se declara una variable con un tipo explícito en TypeScript?',
                options: [
                    'let edad: number = 20',
                    'let edad = number(20)',
                    'let edad<number> = 20',
                    'number edad = 20',
                ],
                correct: 0,
                explanation: 'La sintaxis es nombre: Tipo, por ejemplo let edad: number = 20 o const nombre: string = "Ana".',
            },
            {
                question: '¿Cuál es la principal ventaja de usar tipos estáticos?',
                options: [
                    'El código se ejecuta más rápido en producción',
                    'Detectar errores de tipo en tiempo de desarrollo, antes de ejecutar el programa',
                    'Reduce el tamaño del archivo final',
                    'Elimina la necesidad de probar el código',
                ],
                correct: 1,
                explanation: 'TypeScript revisa los tipos mientras escribes el código (o al compilar), permitiendo detectar errores como pasar un string donde se espera un number, antes de que lleguen a producción.',
            },
            {
                question: '¿Qué representa el tipo "any" en TypeScript?',
                options: [
                    'Un tipo que acepta cualquier valor, desactivando el chequeo de tipos para esa variable',
                    'Un tipo exclusivo para números',
                    'Un error de sintaxis',
                    'Un tipo que solo acepta arrays',
                ],
                correct: 0,
                explanation: 'any le dice a TypeScript que no verifique el tipo de esa variable. Es útil en casos puntuales, pero abusar de él anula los beneficios del tipado estático.',
            },
            {
                question: '¿Cómo se tipa un array de strings en TypeScript?',
                options: [
                    'let nombres: string[] = ["Ana", "Luis"]',
                    'let nombres: array(string) = ["Ana", "Luis"]',
                    'let nombres: [string] = "Ana, Luis"',
                    'let nombres: strings = ["Ana", "Luis"]',
                ],
                correct: 0,
                explanation: 'La sintaxis Tipo[] indica un array de ese tipo. string[] es un array donde cada elemento debe ser un string.',
            },
        ],
    },
    {
        id: 'interfaces-types-props',
        title: 'Interfaces y Types para Props',
        color: '#3178C6',
        questions: [
            {
                question: '¿Para qué se usa una interface en un componente de React con TypeScript?',
                options: [
                    'Para definir la forma (shape) de los props que recibe un componente',
                    'Para definir los estilos CSS del componente',
                    'Para reemplazar useState',
                    'Solo se usa en componentes de clase',
                ],
                correct: 0,
                explanation: 'Una interface describe qué props espera un componente y de qué tipo son, permitiendo que TypeScript avise si falta un prop obligatorio o si se pasa el tipo equivocado.',
            },
            {
                question: '¿Cómo se tipan las props de un componente funcional?',
                options: [
                    'const Saludo = ({ nombre }: { nombre: string }) => { ... }',
                    'const Saludo = (nombre: string) => { ... } sin desestructurar',
                    'TypeScript no permite tipar props',
                    'function Saludo(props) { let nombre: string }',
                ],
                correct: 0,
                explanation: 'Se puede tipar inline con un objeto de tipo, o definir una interface/type aparte y usarla como el tipo del parámetro props.',
            },
            {
                question: '¿Cómo se marca una prop como opcional en una interface?',
                options: [
                    'Agregando un signo de interrogación después del nombre: color?: string',
                    'Agregando "optional" antes del tipo',
                    'Todas las props son opcionales por defecto',
                    'Usando el tipo "maybe"',
                ],
                correct: 0,
                explanation: 'El símbolo ? después del nombre de la propiedad indica que esa prop puede o no estar presente al usar el componente.',
            },
            {
                question: '¿Cuál es una diferencia práctica entre "interface" y "type" en TypeScript?',
                options: [
                    'No hay ninguna diferencia, son idénticos en todos los casos',
                    'interface se puede extender con "extends" y admite "declaration merging"; type es más flexible para uniones y tipos primitivos',
                    'type solo funciona con números',
                    'interface no puede usarse para tipar props',
                ],
                correct: 1,
                explanation: 'Ambos sirven para describir formas de objetos, pero interface favorece la extensión y fusión de declaraciones, mientras que type es más versátil para uniones (ej. "activo" | "inactivo").',
            },
            {
                question: '¿Qué ventaja aporta tipar los props al trabajar en equipo?',
                options: [
                    'Ninguna, es solo una formalidad',
                    'El editor autocompleta y avisa de errores si se olvida un prop requerido o se pasa un tipo incorrecto',
                    'Hace que el componente se renderice más rápido',
                    'Reemplaza la necesidad de escribir documentación',
                ],
                correct: 1,
                explanation: 'Con props tipadas, el editor (como VS Code) puede autocompletar y mostrar errores en tiempo real si alguien usa el componente incorrectamente, mejorando la colaboración.',
            },
        ],
    },
    {
        id: 'estados-carga-error',
        title: 'Estados de Carga y Error (UX)',
        color: '#3178C6',
        questions: [
            {
                question: '¿Por qué es importante manejar un estado de "loading" al hacer una petición a una API?',
                options: [
                    'Para que el usuario sepa que la aplicación está trabajando y no piense que está congelada',
                    'Es opcional y no afecta la experiencia del usuario',
                    'Solo se necesita en aplicaciones móviles',
                    'Para hacer la petición más rápida',
                ],
                correct: 0,
                explanation: 'Mostrar un indicador de carga (spinner, skeleton, etc.) le da al usuario retroalimentación de que la app está procesando algo, evitando la sensación de que la interfaz no responde.',
            },
            {
                question: '¿Qué patrón es común para manejar los tres estados típicos de una petición asíncrona?',
                options: [
                    'Usar tres variables de estado: isLoading, data y error',
                    'Usar una sola variable booleana para todo',
                    'No es necesario manejar estados, solo mostrar el resultado final',
                    'Usar únicamente console.log para depurar',
                ],
                correct: 0,
                explanation: 'Separar el estado en isLoading, data y error permite renderizar condicionalmente un spinner, el contenido o un mensaje de error según corresponda.',
            },
            {
                question: '¿Qué es un "skeleton loader" y para qué se usa?',
                options: [
                    'Un mensaje de error genérico',
                    'Una versión simplificada y gris de la interfaz que se muestra mientras cargan los datos reales, dando sensación de rapidez',
                    'Un tipo de animación exclusiva de CSS Modules',
                    'Un componente para manejar rutas',
                ],
                correct: 1,
                explanation: 'Los skeleton loaders imitan la forma del contenido final (tarjetas, líneas de texto) mientras se espera la respuesta de la API, mejorando la percepción de velocidad.',
            },
            {
                question: '¿Qué buena práctica de UX se recomienda al mostrar un error al usuario?',
                options: [
                    'Mostrar el stack trace técnico completo del error',
                    'Mostrar un mensaje claro y accionable, evitando tecnicismos, e idealmente ofrecer una forma de reintentar',
                    'No mostrar nada y dejar la pantalla en blanco',
                    'Redirigir siempre a la página de inicio sin explicación',
                ],
                correct: 1,
                explanation: 'Un buen mensaje de error es entendible para el usuario final (no un stack trace) y, cuando es posible, ofrece una acción clara, como un botón de "Reintentar".',
            },
            {
                question: '¿Por qué es útil deshabilitar un botón mientras una acción está en progreso (ej. "Enviando...")?',
                options: [
                    'Para evitar que el usuario envíe la misma acción múltiples veces por error (doble clic, envíos duplicados)',
                    'No tiene ningún beneficio real',
                    'Solo se hace por estética',
                    'Porque React lo requiere obligatoriamente',
                ],
                correct: 0,
                explanation: 'Deshabilitar el botón durante una petición en curso previene envíos duplicados accidentales y refuerza visualmente que la acción ya está siendo procesada.',
            },
        ],
    },
]