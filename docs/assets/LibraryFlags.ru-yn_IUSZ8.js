import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/LibraryFlags - Генератор подключения флагов"}),`
`,n.jsx(s.h1,{id:"класс-libraryflags",children:"Класс LibraryFlags"}),`
`,n.jsxs(s.p,{children:["Класс ",n.jsx(s.code,{children:"LibraryFlags"})," отвечает за формирование файлов подключения флагов стран к дизайн-системе. Он создает точку входа TypeScript для регистрации флагов в качестве иконок и JSON-файл, содержащий список всех доступных идентификаторов флагов."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Генерация подключения флагов"})," — создает файл инициализации TypeScript, который регистрирует флаги как глобальные иконки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Генерация списка идентификаторов"})," — формирует JSON-файл для метаданных и автоматизированного выбора флагов."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Стандартизация именования"})," — автоматически форматирует идентификаторы флагов в соответствии с соглашением ",n.jsx(s.code,{children:"flag-[code]"}),"."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Автоматическая обработка"})," — сканирует и обрабатывает все доступные флаги из медиа-библиотеки."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(s.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(s.code,{children:"LibraryFlags(items)"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"items: LibraryItems"})," — объект для работы со списком компонентов и управления записью файлов."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Инициализация LibraryItems
const items = new LibraryItems()

// 2. Инициализация LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(s.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"make(): void"})," — Запускает процесс генерации файлов подключения флагов (TS и JSON)."]}),`
`]}),`
`,n.jsx(s.h2,{id:"структура-сгенерированных-файлов",children:"Структура сгенерированных файлов"}),`
`,n.jsxs(s.p,{children:["Метод ",n.jsx(s.code,{children:"make"})," формирует два основных файла для интеграции флагов в библиотеку:"]}),`
`,n.jsxs(s.h3,{id:"1-подключение-флагов-flagsts",children:["1. Подключение флагов (",n.jsx(s.code,{children:"flags.ts"}),")"]}),`
`,n.jsxs(s.p,{children:["Регистрирует флаги как глобальные иконки с помощью менеджера ",n.jsx(s.code,{children:"Icons"}),"."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример структуры:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-ru', flags.ru)
  Icons.add('flag-us', flags.us)
}
`})}),`
`,n.jsxs(s.h3,{id:"2-идентификаторы-флагов-flagsjson",children:["2. Идентификаторы флагов (",n.jsx(s.code,{children:"flags.json"}),")"]}),`
`,n.jsx(s.p,{children:"Простой массив строк, содержащий все сгенерированные ключи флагов."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Пример структуры:"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-json",children:`["flag-ru", "flag-us"]
`})})]})}function x(r={}){const{wrapper:s}={...i(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(e,{...r})}):e(r)}export{x as default};
