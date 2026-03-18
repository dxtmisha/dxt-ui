import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/LibraryItems - Менеджер списка компонентов"}),`
`,n.jsx(e.h1,{id:"класс-libraryitems",children:"Класс LibraryItems"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"LibraryItems"})," отвечает за управление списком компонентов в дизайн-системе. Он предоставляет утилиты для получения данных о компонентах, подсчета их количества, определения путей и записи данных в директорию библиотеки."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление компонентами"})," — получает и организует компоненты по группам дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Определение путей"})," — вычисляет правильные абсолютные пути для компонентов дизайн-системы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Утилита записи файлов"})," — предоставляет стандартизированный способ записи файлов TypeScript и JSON в библиотеку, включая автоматически сгенерированные заголовки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с конфигурацией"})," — бесшовно работает с ",n.jsx(e.code,{children:"PropertiesConfig"})," и ",n.jsx(e.code,{children:"PropertiesFile"})," для получения специфичных для проекта настроек."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Инициализируйте класс ",n.jsx(e.code,{children:"LibraryItems"})," без аргументов."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { LibraryItems } from '@dxtmisha/scripts'

const items = new LibraryItems()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"получение-данных",children:"Получение данных"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(): LibraryAll"})," — возвращает полный список компонентов, организованный по группам дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getComponentList(): LibraryData[]"})," — возвращает плоский массив всех компонентов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getCount(): number"})," — возвращает общее количество компонентов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getComponentsPath(): string[]"})," — возвращает элементы пути к директории компонентов."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"write",children:n.jsx(e.code,{children:"write"})}),`
`,n.jsx(e.p,{children:"Записывает переданные данные в файл внутри директории библиотеки. Автоматически добавляет заголовок о генерации файла для TypeScript файлов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — название файла (без расширения)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: string[]"})," — массив строк для записи. Каждая строка будет разделена символом переноса строки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extension: string = 'ts'"})," — расширение файла. По умолчанию ",n.jsx(e.code,{children:"ts"}),". Поддерживается также ",n.jsx(e.code,{children:"json"}),"."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Пример:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`items.write('my-feature', [
  'export const active = true',
  'export const count = 10'
])
`})})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
