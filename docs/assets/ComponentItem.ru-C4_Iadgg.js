import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/ComponentItem - Генератор файлов компонента"}),`
`,n.jsx(e.h1,{id:"класс-componentitem",children:"Класс ComponentItem"}),`
`,n.jsx(e.p,{children:"Специализированный класс для генерации отдельных файлов компонентов на основе шаблонов. Он управляет всем процессом создания: от чтения образцов шаблонов до выполнения динамических замен строк и установки правильных разрешений файловой системы."}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"На основе шаблонов"})," — использует централизованный репозиторий шаблонов компонентов для единообразной генерации файлов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамические замены"})," — автоматически заменяет маркеры, такие как ",n.jsx(e.code,{children:"ComponentDoc"}),", ",n.jsx(e.code,{children:"[project]"})," и ",n.jsx(e.code,{children:"[path]"}),", на контекстные значения."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поддержка плейсхолдеров"})," — обрабатывает преобразования как в camelCase (имена классов), так и в kebab-case (имена файлов)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление правами"})," — гарантирует, что сгенерированные файлы имеют правильные права на выполнение, чтение и запись."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"ComponentItem(path)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"path: string"})," — относительный или абсолютный путь к директории, в которой будет создан компонент."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Генерация файлов
component.make()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): void"})," — основной метод, который считывает все файлы шаблонов и записывает их обработанные версии в директорию компонента."]}),`
`]}),`
`,n.jsx(e.h2,{id:"примеры",children:"Примеры"}),`
`,n.jsx(e.h3,{id:"ручное-создание-заготовки",children:"Ручное создание заготовки"}),`
`,n.jsxs(e.p,{children:["В то время как ",n.jsx(e.code,{children:"ComponentCreator"})," управляет пакетным созданием, ",n.jsx(e.code,{children:"ComponentItem"})," можно использовать напрямую для точного контроля над конкретным компонентом."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{x as default};
