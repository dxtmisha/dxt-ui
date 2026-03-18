import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/LibraryPlugin - Генератор Vite-плагина"}),`
`,n.jsx(i.h1,{id:"класс-libraryplugin",children:"Класс LibraryPlugin"}),`
`,n.jsxs(i.p,{children:["Класс ",n.jsx(i.code,{children:"LibraryPlugin"})," отвечает за создание точки входа плагина Vite для библиотеки дизайн-системы. Этот плагин обеспечивает автоматическую интеграцию компонентов, переменных стилей и конфигураций дизайна в процесс сборки Vite."]}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Генерация точки входа плагина"})," — создает стандартный файл инициализации плагина Vite."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Интеграция дизайн-системы"})," — связывает компоненты и переменные, определенные в конфигурации дизайна, с инструментом сборки."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Автоматическое именование"})," — автоматически генерирует имя плагина и идентификаторы на основе кода дизайн-системы."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Чейнинг и гибкость"})," — поддержка цепочки вызовов для удобной настройки библиотеки."]}),`
`]}),`
`,n.jsx(i.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(i.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(i.code,{children:"LibraryPlugin(items)"}),"."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Параметры:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"items: LibraryItems"})," — объект для работы со списком компонентов и управления записью файлов."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { LibraryPlugin, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryPlugin
const pluginGenerator = new LibraryPlugin(items)
`})}),`
`,n.jsx(i.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(i.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): this"})," — Запускает процесс генерации файла плагина (",n.jsx(i.code,{children:"plugin.ts"}),")."]}),`
`]}),`
`,n.jsx(i.h2,{id:"структура-итогового-файла",children:"Структура итогового файла"}),`
`,n.jsxs(i.p,{children:["Метод ",n.jsx(i.code,{children:"make"})," формирует файл ",n.jsx(i.code,{children:"plugin.ts"}),", который экспортирует специальную функцию плагина Vite. Эта функция обеспечивает связь между скомпилированной библиотекой и инструментом сборки."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Профиль сгенерированной функции:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Имя:"})," ",n.jsx(i.code,{children:"ui[Design]VitePlugin"})," (например, ",n.jsx(i.code,{children:"uiDxtVitePlugin"}),")"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Параметры:"})," ",n.jsx(i.code,{children:"options: PluginOptions"})]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Результат:"})," Возвращает экземпляр ",n.jsx(i.code,{children:"VitePlugin"}),"."]}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Пример структуры:"})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`/**
 * Инициализирует плагин Vite для дизайн-системы.
 * @param options настройки плагина
 */
export function uiDxtVitePlugin(
  options: PluginOptions = {}
): VitePlugin {
  return new Plugin(
    designName,
    packageName,
    componentsReg,
    styleVarsReg,
    componentsList,
    'vite-plugin-dxt-ui',
    options
  ).init()
}
`})})]})}function j(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{j as default};
