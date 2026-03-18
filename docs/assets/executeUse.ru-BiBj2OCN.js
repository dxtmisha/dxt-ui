import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/ru/functional/Functions/executeUse - Синглтон с управлением жизненным циклом"}),`
`,e.jsx(n.h1,{id:"executeuse",children:e.jsx(n.code,{children:"executeUse"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"executeUse"})," — это фабрика, которая оборачивает любую функцию-инициализатор и превращает её результат в ",e.jsx(n.strong,{children:"управляемый синглтон"}),". Объект создаётся ровно один раз, замораживается (",e.jsx(n.code,{children:"Object.freeze"}),") и переиспользуется при каждом последующем вызове. В зависимости от выбранного типа синглтон может быть компонентным, глобальным или локальным."]}),`
`,e.jsxs(n.p,{children:["Для обеспечения уникальности идентификаторов используется сочетание внутреннего глобального кода и функции ",e.jsx(n.code,{children:"getElementId()"}),", что гарантирует отсутствие коллизий даже при множественном использовании в разных модулях."]}),`
`,e.jsx(n.h3,{id:"ограничения-дженериков-generic-constraints",children:"Ограничения дженериков (Generic Constraints)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"R"})," — тип объекта, возвращаемого функцией-инициализатором (",e.jsx(n.code,{children:"callback"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"O extends any[]"})," — типы аргументов, которые принимает ",e.jsx(n.code,{children:"callback"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RI extends ExecuteUseReturn<R>"})," — результирующий тип синглтона, включающий методы управления."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (...args: O) => R"})," — Функция-инициализатор. Вызывается при первом обращении и возвращает объект, который будет заморожен и закеширован. Аргументы передаются только при первом вызове."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"type: ExecuteUseType"})," — Тип синглтона (по умолчанию ",e.jsx(n.code,{children:"ExecuteUseType.provide"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"ExecuteUseReturn<R>"})," — замороженный объект, расширяющий ",e.jsx(n.code,{children:"R"})," следующими методами:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init(): Readonly<R>"})," — возвращает исходный результат ",e.jsx(n.code,{children:"callback"})," без методов управления (",e.jsx(n.code,{children:"init"}),", ",e.jsx(n.code,{children:"destroyExecute"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"destroyExecute?(): void"})," — только у ",e.jsx(n.code,{children:"local"})," и ",e.jsx(n.code,{children:"global"}),". Сбрасывает кеш, позволяя пересоздать объект при следующем вызове."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"функция-инициализатор-callback-и-её-аргументы-args-o",children:["Функция-инициализатор (",e.jsx(n.code,{children:"callback"}),") и её аргументы (",e.jsx(n.code,{children:"...args: O"}),")"]}),`
`,e.jsxs(n.p,{children:["Главная особенность ",e.jsx(n.code,{children:"executeUse"})," заключается в том, что фабричная функция (",e.jsx(n.code,{children:"callback"}),") и переданные в неё аргументы (",e.jsx(n.code,{children:"...args"}),") используются ",e.jsx(n.strong,{children:"только один раз"})," — во время фактической инициализации (самого первого вызова)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"callback"})}),": Это фабрика, описывающая логику создания состояния. Внутри неё обычно объявляются реактивные переменные (",e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"reactive"}),"), функции для их изменения и вычисляемые значения (",e.jsx(n.code,{children:"computed"}),"). Возвращаемый из ",e.jsx(n.code,{children:"callback"}),' объект будет "заморожен" и закеширован.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"...args: O"})}),": Вы можете передавать любые аргументы в ваш инициализатор (например, начальное состояние, ID загружаемой сущности или API-клиент). Эти аргументы будут прокинуты внутрь ",e.jsx(n.code,{children:"callback"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Важно об аргументах:"})," Так как ",e.jsx(n.code,{children:"executeUse"})," жестко кеширует результат первого вызова, любые аргументы, переданные при ",e.jsx(n.strong,{children:"последующих"})," вызовах этого же хука в других компонентах, ",e.jsx(n.strong,{children:"будут полностью проигнорированы"}),". Объект не будет пересоздан, и функция ",e.jsx(n.code,{children:"callback"})," не выполнится повторно с новыми аргументами (если только вы предварительно не сбросили кеш через ",e.jsx(n.code,{children:"destroyExecute()"}),")."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"метод-заглушка-init",children:["Метод-заглушка ",e.jsx(n.code,{children:"init()"})]}),`
`,e.jsxs(n.p,{children:["Метод ",e.jsx(n.code,{children:"init"})," — это просто пустая функция-заглушка, которая возвращает тот же самый замороженный объект состояния. Она нужна ",e.jsx(n.strong,{children:"исключительно для удобства чтения кода (Developer Experience)"}),"."]}),`
`,e.jsxs(n.p,{children:["Её главная цель — дать возможность разработчику явно и визуально выделить в коде то самое место, где происходит фактическая (первая) инициализация синглтона. С технической точки зрения ",e.jsx(n.code,{children:"const state = useTheme()"})," и ",e.jsx(n.code,{children:"const state = useTheme().init()"})," делают абсолютно одно и то же."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Где-то глубоко в дереве компонентов мы просто получаем готовый стейт
const theme = useTheme()

// А здесь, в корневом компоненте (или main.ts), 
// мы явно показываем другим разработчикам: "Инициализация происходит именно ТУТ"
const theme = useTheme().init()
`})}),`
`,e.jsxs(n.h2,{id:"тип-executeusetype",children:["Тип ",e.jsx(n.code,{children:"ExecuteUseType"})]}),`
`,e.jsxs(n.h3,{id:"provide-компонентный-синглтон-по-умолчанию",children:[e.jsx(n.code,{children:"provide"})," (компонентный синглтон, по умолчанию)"]}),`
`,e.jsx(n.p,{children:"Это компонентно-ориентированный синглтон, который жестко привязан к жизненному циклу компонента Vue и всего его поддерева. Он использует под капотом встроенный в Vue механизм реактивности и передачи контекста (provide/inject), позволяя безопасно прокидывать один и тот же экземпляр состояния глубоко вниз по дереву без необходимости передавать его через props."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Когда использовать:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Для совместного использования состояния между строго определенной веткой компонентов (родитель -> много уровней вложенности -> дочерний), без засорения глобального хранилища."}),`
`,e.jsx(n.li,{children:"Когда на одной странице нужно вывести несколько независимых блоков (например, несколько сложных виджетов загрузки файлов), у каждого из которых должно быть своё уникальное состояние, разделяемое только внутри этого виджета."}),`
`,e.jsx(n.li,{children:'Если нужно автоматическое удаление данных из памяти (garbage collection) при размонтировании "компонента-владельца".'}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Как работает:"}),`
Компонент, который первым вызывает эту функцию, автоматически становится «владельцем» (owner). Функция выполняет генерацию объекта и сразу же делает `,e.jsx(n.code,{children:"provide(id, instance)"}),". Все вложенные компоненты при вызове этой же функции внутри себя не создают новый объект, а получают ранее созданный через ",e.jsx(n.code,{children:"inject(id)"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Примечание: У этого типа отсутствует метод ",e.jsx(n.code,{children:"destroyExecute()"}),", так как память освобождается автоматически системой реактивности Vue при уничтожении компонента-владельца."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executeUseProvide } from '@dxtmisha/functional'
import { ref } from 'vue'

const useTheme = executeUseProvide(() => {
  const mode = ref<'light' | 'dark'>('light')
  const toggle = () => { mode.value = mode.value === 'light' ? 'dark' : 'light' }
  return { mode, toggle }
})

// В родительском компоненте (владелец) — объект создаётся и публикуется (provide):
const theme = useTheme()
theme.toggle()

// В глубоко вложенном дочернем компоненте — получает тот же объект (inject):
const theme = useTheme()

// В совершенно другом, независимом дереве компонентов — создастся НОВЫЙ независимый экземпляр:
const theme2 = useTheme()
`})}),`
`,e.jsxs(n.h3,{id:"global-глобальный-синглтон-приложения",children:[e.jsx(n.code,{children:"global"})," (глобальный синглтон приложения)"]}),`
`,e.jsx(n.p,{children:"Это классический архитектурный паттерн Singleton, существующий в строго единственном экземпляре на протяжении всего времени работы вашего приложения (с момента инициализации до закрытия вкладки браузера). Он обеспечивает глобальную точку доступа к состоянию из любого места в коде."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Когда использовать:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Для хранения глобального стейта приложения: авторизации, профиля текущего пользователя, языковых настроек, глобальной корзины товаров."}),`
`,e.jsx(n.li,{children:"Когда доступ к одним и тем же данным требуется из совершенно разных, не связанных между собой частей приложения (или даже вне компонентов Vue, например, в роутере)."}),`
`,e.jsx(n.li,{children:"Как легковесная замена Vuex / Pinia для простых задач."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Как работает:"}),`
Функция инициализации `,e.jsx(n.strong,{children:"не выполняется при вызове"}),". Вместо этого она добавляется в специальную внутреннюю очередь (",e.jsx(n.code,{children:"globalMethods"}),"). Полная инициализация всех глобальных объектов происходит только при явном вызове ",e.jsx(n.code,{children:"executeUseGlobalInit()"}),", который обычно размещается в ",e.jsx(n.code,{children:"main.ts"})," до того, как приложение будет смонтировано. В дальнейшем все компоненты получают один и тот же закешированный объект из памяти."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
import { ref } from 'vue'

const useAuth = executeUseGlobal(() => {
  const user = ref<string | null>(null)
  const login = (name: string) => { user.value = name }
  const logout = () => { user.value = null }
  return { user, login, logout }
})

// В main.ts — строго ДО монтирования приложения (app.mount()):
executeUseGlobalInit()

// В любом компоненте, утилите или роутере:
const auth = useAuth()
auth.login('Alice')

// Если нужно принудительно сбросить состояние (пересоздать стейт заново):
auth.destroyExecute?.() 
`})}),`
`,e.jsxs(n.h3,{id:"local-локальный-синглтон-в-замыкании",children:[e.jsx(n.code,{children:"local"})," (локальный синглтон в замыкании)"]}),`
`,e.jsx(n.p,{children:"Это независимый синглтон, который опирается на механизм лексических замыканий (closure caching) в JavaScript. Вместо использования контекста Vue или глобального скоупа, он сохраняет однажды сгенерированный результат прямо внутри своей собственной функции в памяти, мгновенно отдавая его при всех последующих вызовах."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Когда использовать:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Для утилит, фабрик или сервисов, которые не привязаны к Vue (",e.jsx(n.code,{children:"provide"}),"/",e.jsx(n.code,{children:"inject"})," не работают вне setup-функции компонента)."]}),`
`,e.jsx(n.li,{children:"Когда вам нужен изолированный инстанс тяжелого класса или сервиса только тогда, когда он реально понадобится (ленивая инициализация по первому требованию), а не при старте всего приложения."}),`
`,e.jsx(n.li,{children:"Для кэширования результатов сложных математических вычислений или преобразований конфигураций."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Как работает:"}),`
Не использует механизмы Vue. При самом первом вызове выполняется функция-инициализатор с переданными аргументами. Полученный результат жестко замораживается (`,e.jsx(n.code,{children:"Object.freeze"}),") и сохраняется в переменной внутри замыкания ",e.jsx(n.code,{children:"executeUse"}),`. При всех последующих вызовах (даже если вы передадите другие аргументы) функция просто мгновенно возвращает уже сохраненный объект из переменной.
Метод `,e.jsx(n.code,{children:"destroyExecute()"})," позволяет занулить эту внутреннюю переменную, чтобы при следующем вызове алгоритм инициализации отработал заново."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executeUseLocal } from '@dxtmisha/functional'
import { ref } from 'vue'

const useHeavyConfig = executeUseLocal((env: string) => {
  // Тяжелая операция вычисления конфигурации...
  const config = ref({ api: \`https://\${env}.example.com\` })
  return { config }
})

// Первый вызов — инициализация
const devConfig = useHeavyConfig('dev')
console.log(devConfig.config.value.api) // https://dev.example.com

// Второй вызов в другом файле — вернет тот же объект, аргумент игнорируется!
const sameConfig = useHeavyConfig('prod') 
console.log(sameConfig.config.value.api) // Всё еще https://dev.example.com

// Принудительная очистка кэша
sameConfig.destroyExecute?.()
const newConfig = useHeavyConfig('prod') // Инициализация запустится заново
`})}),`
`,e.jsx(n.h2,{id:"executeuseglobalinit",children:e.jsx(n.code,{children:"executeUseGlobalInit"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`function executeUseGlobalInit(): void
`})}),`
`,e.jsxs(n.p,{children:["Вызывает все зарегистрированные глобальные инициализаторы (",e.jsx(n.code,{children:"ExecuteUseType.global"}),") и очищает очередь. Повторный вызов не пересоздаёт уже инициализированные синглтоны. Должна быть вызвана ",e.jsx(n.strong,{children:"один раз"})," при старте приложения — до монтирования корневого компонента."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function a(c={}){const{wrapper:n}={...l(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{a as default};
