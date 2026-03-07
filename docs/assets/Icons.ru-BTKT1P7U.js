import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/functional-basic/Classes/Icons - Управление Иконками"}),`
`,n.jsx(s.h1,{id:"класс-icons",children:"Класс Icons"}),`
`,n.jsxs(s.p,{children:["Статический класс для управления реестром иконок приложения. Предоставляет механизм регистрации, ленивой загрузки и получения SVG-иконок. Иконки хранятся в глобальном объекте ",n.jsx(s.code,{children:"window"}),", чтобы быть доступными между разными экземплярами библиотеки."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Глобальный реестр"})," — Использует ",n.jsx(s.code,{children:"window.__UI_ICON"})," для хранения иконок, обеспечивая единый реестр даже при нескольких экземплярах."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Ленивая загрузка"})," — Метод ",n.jsx(s.code,{children:"addLoad"})," регистрирует иконку как «загружается»; ",n.jsx(s.code,{children:"get"})," будет ждать ее появления."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Гибкие типы"})," — Иконка может быть строкой, ",n.jsx(s.code,{children:"Promise"})," или функцией, возвращающей ",n.jsx(s.code,{children:"Promise"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматический URL"})," — Иконки с префиксом ",n.jsx(s.code,{children:"@"})," разворачиваются в полный URL на основе базового ",n.jsx(s.code,{children:"url"}),"."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(s.p,{children:["Класс является статическим и не требует создания экземпляра. Базовый URL настраивается через ",n.jsx(s.code,{children:"setUrl"}),"."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Изменить базовый путь к иконкам
Icons.setUrl('/assets/svg/')
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"регистрация-иконок",children:"Регистрация иконок"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"add(index: string, file: IconsItem): void"})," — Регистрирует иконку по имени. ",n.jsx(s.code,{children:"file"})," может быть строкой-путем, ",n.jsx(s.code,{children:"Promise"})," или фабричной функцией."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"addLoad(index: string): void"})," — Помечает иконку как «в процессе загрузки» (маркер ",n.jsx(s.code,{children:"--LOAD--"}),"). ",n.jsx(s.code,{children:"get"})," будет ожидать её появления."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"addGlobal(index: string, file: string): void"})," — Регистрирует иконку с глобальным URL (базовый URL + ",n.jsx(s.code,{children:"file"}),")."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"addByList(list: Record<string, IconsItem>): void"})," — Массово регистрирует иконки из объекта."]}),`
`]}),`
`,n.jsx(s.h3,{id:"получение-иконок",children:"Получение иконок"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"async get(index: string, url?: string, wait?: number): Promise<string>"})," — Возвращает содержимое или путь к иконке по имени. Если иконка помечена как «загружается», ожидает её появления (с таймаутом по умолчанию 3 мин)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"is(index: string): boolean"})," — Проверяет, зарегистрирована ли иконка."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getNameList(): string[]"})," — Возвращает список имен всех зарегистрированных иконок."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"getUrlGlobal(): string"})," — Возвращает текущий базовый URL иконок."]}),`
`]}),`
`,n.jsx(s.h3,{id:"конфигурация",children:"Конфигурация"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"setUrl(url: string): void"})," — Изменяет базовый путь для хранения иконок."]}),`
`]}),`
`,n.jsx(s.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(s.h3,{id:"регистрация-и-использование-иконок",children:"Регистрация и использование иконок"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`import { Icons } from '@dxtmisha/functional-basic'

// Регистрация строкой
Icons.add('arrow', '<svg>...</svg>')

// Регистрация через Promise (динамический импорт)
Icons.add('user', import('./icons/user.svg'))

// Регистрация через фабричную функцию
Icons.add('star', () => import('./icons/star.svg'))

// Получение
const svgContent = await Icons.get('arrow')
`})}),`
`,n.jsx(s.h3,{id:"массовая-регистрация",children:"Массовая регистрация"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`Icons.addByList({
  home: '<svg>...</svg>',
  search: () => import('./icons/search.svg'),
  bell: import('./icons/bell.svg')
})
`})}),`
`,n.jsx(s.h3,{id:"ленивая-загрузка",children:"Ленивая загрузка"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`// Пометить как загружающуюся
Icons.addLoad('dynamic-icon')

// Где-то позже загружаем и регистрируем
fetch('/api/icons/dynamic').then(res => res.text()).then(svg => {
  Icons.add('dynamic-icon', svg)
})

// get() подождет, пока иконка появится в реестре
const svg = await Icons.get('dynamic-icon')
`})})]})}function a(i={}){const{wrapper:s}={...d(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(e,{...i})}):e(i)}export{a as default};
