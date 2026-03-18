import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/LibraryList - Генератор списка компонентов"}),`
`,n.jsx(s.h1,{id:"класс-librarylist",children:"Класс LibraryList"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"LibraryList"})," отвечает за создание основного конфигурационного файла дизайн-системы. Этот файл консолидирует метаданные библиотеки, шаблоны идентификации (регулярные выражения) и полный список импортов компонентов, необходимых для архитектуры дизайн-системы."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Консолидация метаданных"})," — собирает имена пакетов и идентификаторы дизайна в единой точке конфигурации."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Генерация шаблонов"})," — автоматически строит сложные регулярные выражения для идентификации компонентов и переменных стилей."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Картирование импортов"})," — формирует структурированный список импортов компонентов, используемый дизайнерскими инструментами и средствами сборки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Соблюдение стандартов именования"})," — автоматически обрабатывает префиксы дизайна и соглашения об именовании в стиле kebab-case."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(s.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(s.code,{children:"LibraryList(items)"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"items: LibraryItems"})," — объект для работы со списком компонентов и управления записью файлов."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { LibraryList, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryList
const listGenerator = new LibraryList(items)
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): this"})," — Запускает процесс генерации обзорного файла дизайн-системы (",n.jsx(s.code,{children:"design.ts"}),")."]}),`
`]}),`
`,n.jsx(s.h2,{id:"структура-сгенерированного-файла",children:"Структура сгенерированного файла"}),`
`,n.jsxs(s.p,{children:["Метод ",n.jsx(s.code,{children:"make"})," формирует файл ",n.jsx(s.code,{children:"design.ts"}),", который предоставляет необходимые метаданные для интеграции дизайн-системы."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Основные экспорты:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"designName: string"})," — основной идентификатор дизайна."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"packageName: string"})," — имя целевого NPM-пакета."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"componentsReg: RegExp"})," — глобальный шаблон для идентификации компонентов дизайна."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"styleVarsReg: RegExp"})," — шаблон для идентификации специфичных для дизайна CSS-переменных."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"componentsList: PluginComponentImports"})," — реестр определений импорта отдельных компонентов."]}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример структуры:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import type { PluginComponentImports } from '@dxtmisha/constructor/plugin'

// count: 2
export const designName: string = 'dxt'
export const packageName: string = '@dxtmisha/ui'
export const componentsReg: RegExp = /((dxt)-?(button|input))/ig
export const styleVarsReg: RegExp = /(?<=var\\(--)(primary-color|font-size)/ig

export const componentsList: PluginComponentImports = [
  {
    name: 'DxtButton',
    reg: /^((dxt)-?(button))$/ig
  },
  {
    name: 'DxtInput',
    reg: /^((dxt)-?(input))$/ig
  }
]
`})})]})}function j(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
