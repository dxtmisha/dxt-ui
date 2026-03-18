import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/LibraryMedia - Генератор подключения медиа-данных"}),`
`,n.jsx(s.h1,{id:"класс-librarymedia",children:"Класс LibraryMedia"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"LibraryMedia"})," отвечает за формирование файлов подключения медиа-данных (прежде всего иконок) и основной точки входа стилей для проекта дизайн-системы. Это обеспечивает индексацию ассетов и их оптимизацию для использования в библиотеке."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Подключение иконок"})," — сканирует иконки и формирует механизм их асинхронной загрузки через динамические импорты."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Интеграция стилей"})," — подключает основные SCSS-файлы проекта к инструментам сборки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Интеграция с менеджером иконок"})," — автоматически регистрирует ассеты в глобальном менеджере ",n.jsx(s.code,{children:"Icons"})," из функциональной библиотеки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Управление жизненным циклом"})," — поддержка цепочки вызовов и чистая регистрация ассетов через автоматическую генерацию кода."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(s.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(s.code,{children:"LibraryMedia(items)"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"items: LibraryItems"})," — объект для работы со списком компонентов и управления записью файлов."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): void"})," — Запускает процесс генерации файлов подключения медиа и стилей."]}),`
`]}),`
`,n.jsx(s.h2,{id:"структура-сгенерированных-файлов",children:"Структура сгенерированных файлов"}),`
`,n.jsxs(s.p,{children:["Метод ",n.jsx(s.code,{children:"make"})," формирует несколько файлов для интеграции ассетов в библиотеку:"]}),`
`,n.jsxs(s.h3,{id:"1-подключение-медиа-mediats",children:["1. Подключение медиа (",n.jsx(s.code,{children:"media.ts"}),")"]}),`
`,n.jsxs(s.p,{children:["Регистрирует все иконки из директории ",n.jsx(s.code,{children:"icons"}),", используя динамические импорты для оптимизации производительности."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Профиль сгенерированного кода:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Имя:"})," ",n.jsx(s.code,{children:"[Design]MakeIcons"})," (например, ",n.jsx(s.code,{children:"dxtMakeIcons"}),")"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Действие:"})," Добавляет пути к иконкам в глобальный реестр ",n.jsx(s.code,{children:"Icons"}),"."]}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример структуры:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { Icons } from '@dxtmisha/functional'

// Динамические импорты для каждой иконки
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,n.jsxs(s.h3,{id:"2-точка-входа-стилей-stylets",children:["2. Точка входа стилей (",n.jsx(s.code,{children:"style.ts"}),")"]}),`
`,n.jsx(s.p,{children:"Служит основной точкой входа SCSS, связывая специфичные стили проекта с библиотекой."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример структуры:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import '../styles/ProjectName/main.scss'
`})})]})}function x(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{x as default};
