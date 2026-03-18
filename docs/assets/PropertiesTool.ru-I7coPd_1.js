import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesTool - Утилиты свойств"}),`
`,n.jsx(e.h1,{id:"класс-propertiestool",children:"Класс PropertiesTool"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PropertiesTool"})," предоставляет набор статических утилит для работы с именованием компонентов, путями и чтением файлов конфигурации дизайн-системы. Он служит вспомогательным инструментом для других классов, обеспечивая единообразие в формировании имен и доступ к файловым ресурсам."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стандартизация имен"})," — формирует единообразные названия компонентов и CSS-классов (camelCase)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Работа с конструктором"})," — содержит логику для идентификации и загрузки базовых свойств конструктора."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с кэшем"})," — обеспечивает эффективное чтение файлов свойств через систему кэширования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Гибкая конфигурация"})," — получает список активных дизайнов напрямую из настроек окружения."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Класс предоставляет только статические методы, поэтому создание экземпляра через ",n.jsx(e.code,{children:"new"})," не требуется."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesTool } from '@dxtmisha/scripts'

// Прямой вызов статических методов
const isConst = PropertiesTool.isConstructor('basic')
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"isconstructor",children:n.jsx(e.code,{children:"isConstructor"})}),`
`,n.jsx(e.p,{children:"Проверяет, соответствует ли переданное имя дизайна ключу конструктора системы. Это необходимо для отделения базовых мета-свойств от свойств конкретных тем оформления."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"design: string"})," — проверяемое название дизайна."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"}),", если дизайн является конструктором."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const result = PropertiesTool.isConstructor('dxt.constructor');
// Результат: true
`})}),`
`,n.jsx(e.h3,{id:"getdesigns",children:n.jsx(e.code,{children:"getDesigns"})}),`
`,n.jsx(e.p,{children:"Возвращает список идентификаторов дизайнов, доступных в текущей среде. Список включает как системный конструктор, так и дизайн, указанный в основных настройках проекта."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string[]"})," — массив названий дизайнов."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const list = PropertiesTool.getDesigns();
// Результат: ['dxt.constructor', 'my-project-design']
`})}),`
`,n.jsx(e.h3,{id:"getcomponentname",children:n.jsx(e.code,{children:"getComponentName"})}),`
`,n.jsxs(e.p,{children:["Формирует нормализованную строку имени компонента, объединяя название дизайна и имя самого компонента. Имя компонента автоматически преобразуется в ",n.jsx(e.code,{children:"camelCase"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"design: string"})," — название дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"component: string"})," (опционально) — название компонента."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — сформированное имя (например, ",n.jsx(e.code,{children:"designName-componentName"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const name = PropertiesTool.getComponentName('basic', 'button-primary');
// Результат: "basic-buttonPrimary"
`})}),`
`,n.jsx(e.h3,{id:"getclassname",children:n.jsx(e.code,{children:"getClassName"})}),`
`,n.jsxs(e.p,{children:["Аналогичен ",n.jsx(e.code,{children:"getComponentName"}),", но возвращает строку в формате CSS-селектора класса (с точкой в начале)."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"design: string"})," — название дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"component: string"})," (опционально) — название компонента."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"string"})," — строка CSS-класса."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const selector = PropertiesTool.getClassName('basic', 'button');
// Результат: ".basic-button"
`})}),`
`,n.jsx(e.h3,{id:"readfile",children:n.jsx(e.code,{children:"readFile"})}),`
`,n.jsxs(e.p,{children:["Считывает и возвращает список свойств (tokens) из файловой системы. Для конструктора возвращает копию базовых свойств из ",n.jsx(e.code,{children:"properties.json"}),", для остальных — считывает файл свойств через системный кэш."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"design: string"})," — название дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string[] | undefined"})," — путь к директории с файлом."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"PropertyList | undefined"})," — объект со свойствами или ",n.jsx(e.code,{children:"undefined"}),", если путь не указан."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const data = PropertiesTool.readFile('basic', ['src', 'theme', 'settings', 'button']);
`})}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"механизм-разрешения-имен",children:"Механизм разрешения имен"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Трансформация регистра"}),": Все входные имена компонентов перед объединением проходят через ",n.jsx(e.code,{children:"toCamelCase"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Префиксация"}),": Публичные методы всегда добавляют имя дизайна в начало, что предотвращает коллизии стилей при использовании нескольких тем одновременно."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Безопасное чтение"}),": При чтении файлов через ",n.jsx(e.code,{children:"readFile"})," для конструктора используется глубокое копирование (",n.jsx(e.code,{children:"copyObject"}),"), что исключает случайную мутацию глобальных базовых настроек в процессе работы других инструментов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"формирование-css-класса-для-динамического-компонента",children:"Формирование CSS-класса для динамического компонента"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesTool } from '@dxtmisha/scripts'

const design = 'basic'
const component = 'input-field'

const className = PropertiesTool.getClassName(design, component)
// Результат: .basic-inputField
`})})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
