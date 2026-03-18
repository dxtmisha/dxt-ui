import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/scripts/Classes/ComponentWikiFile - Утилита для файлов Wiki"}),`
`,n.jsx(e.h1,{id:"класс-componentwikifile",children:"Класс ComponentWikiFile"}),`
`,n.jsx(e.p,{children:"Специализированный утилитный класс, предназначенный для работы с отдельными файлами в процессе генерации вики. Он предоставляет надежные методы для чтения, записи и управления метаданными, такими как даты обновления и версионность файлов."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление метаданными"}),' — автоматически извлекает и обновляет маркер "',n.jsx(e.strong,{children:"Date: ..."}),'" внутри содержимого файла.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Умная запись"})," — автоматически удаляет markdown-блоки кода при сохранении и выполняет запись только при изменении содержимого."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка версионности"})," — опционально сохраняет предыдущую версию файла, переименовывая её с суффиксом ",n.jsx(e.code,{children:"__old.txt"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Абстракция путей"})," — интегрируется с ",n.jsx(e.code,{children:"PropertiesFile"})," для выполнения файловых операций с использованием согласованных сегментов пути."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(e.p,{children:"Инициализируйте с сегментами пути и конфигурацией для обработки даты и версионности."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"paths: string[]"})," — сегменты пути к файлу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isDate: boolean = false"})," — если ",n.jsx(e.code,{children:"true"}),", автоматически управляет маркером даты в содержимом."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isOld: boolean = true"})," — если ",n.jsx(e.code,{children:"true"}),", сохраняет предыдущую версию перед перезаписью."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ComponentWikiFile } from '@dxtmisha/scripts'

const file = new ComponentWikiFile(['docs', 'Guide.mdx'], true, true)
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"информация",children:"Информация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getPath(): string"})," — возвращает полный абсолютный путь к файлу."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDate(): Datetime"})," — извлекает и возвращает дату из содержимого файла."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"read(): string"})," — считывает и возвращает всё содержимое файла."]}),`
`]}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"write(content: string): void"})," — записывает обработанное содержимое в файл, обрабатывая версионность и обновление даты, если это настроено."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"управление-обновлениями-документации",children:"Управление обновлениями документации"}),`
`,n.jsx(e.p,{children:"Автоматическое обновление документации с сохранением резервной копии предыдущей версии."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const docFile = new ComponentWikiFile(['wiki', 'MyComponent.mdx'], true, true)
docFile.write('# Новое содержимое')
`})})]})}function j(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
