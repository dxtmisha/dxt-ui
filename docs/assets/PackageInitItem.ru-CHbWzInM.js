import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PackageInitItem - Инициализатор элемента пакета"}),`
`,n.jsx(e.h1,{id:"класс-packageinititem",children:"Класс PackageInitItem"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PackageInitItem"})," отвечает за детальную инициализацию отдельного компонента или подпакета. Он управляет жизненным циклом файлов — от применения шаблонов до интеграции с основной библиотекой, ",n.jsx(e.code,{children:"package.json"})," и Storybook."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Генерация файлов"})," — автоматически создает файлы на основе базовых образцов и специализированных шаблонов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Динамическая замена контента"})," — автоматически разрешает такие плейсхолдеры, как ",n.jsx(e.code,{children:"[name]"})," и ",n.jsx(e.code,{children:"@packages/library"})," внутри сгенерированных файлов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с библиотекой"})," — автоматически генерирует точки входа и регистрирует компонент в глобальной библиотеке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Управление зависимостями"})," — обновляет корневой ",n.jsx(e.code,{children:"package.json"}),", включая новый пакет в зависимости (dependencies), экспорты (exports) и список файлов (files)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматизация Storybook"})," — автоматически добавляет новые истории в конфигурацию Storybook."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Для инициализации объекта вызовите конструктор ",n.jsx(e.code,{children:"PackageInitItem(name, dir, type, templates)"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name: string"})," — уникальное имя или идентификатор пути компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dir: string[]"})," — массив абсолютного пути к целевой директории компонента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type: string"})," — идентификатор типа пакета (например, ",n.jsx(e.code,{children:"'functional'"}),", ",n.jsx(e.code,{children:"'ui'"}),")."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"templates?: string"})," — необязательный список шаблонов (через запятую) для применения."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PackageInitItem } from '@dxtmisha/scripts'

const item = new PackageInitItem(
  'button',
  ['path', 'to', 'button'],
  'ui'
)
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"make(): void"})," — выполняет полный цикл инициализации: создание файлов, обновление библиотеки, ",n.jsx(e.code,{children:"package.json"})," и Storybook."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"рабочий-процесс-инициализации",children:"Рабочий процесс инициализации"}),`
`,n.jsxs(e.p,{children:["При вызове ",n.jsx(e.code,{children:"make()"})," класс выполняет следующие шаги по порядку:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Создание структуры файлов"}),": получает файлы-образцы из директории media/templates на основе типа пакета ",n.jsx(e.code,{children:"type"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Применение шаблонов"}),": если указаны конкретные ",n.jsx(e.code,{children:"templates"}),", он загружает и применяет их."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Запись файлов"}),": записывает обработанные файлы в целевую директорию, выполняя необходимые замены контента."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция (Библиотека)"}),": если создается файл ",n.jsx(e.code,{children:"library.ts"}),", он запускает автоматическую генерацию файлов экспорта в корне библиотеки."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция (Пакет)"}),": обновляет корневой ",n.jsx(e.code,{children:"package.json"})," для регистрации зависимости воркспейса и экспортов нового пакета."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция (Storybook)"}),": сканирует конфигурацию Storybook и добавляет шаблоны для включения историй нового компонента."]}),`
`]}),`
`,n.jsx(e.h3,{id:"внутренняя-логика-разрешения-имен",children:"Внутренняя логика разрешения имен"}),`
`,n.jsx(e.p,{children:"Класс использует несколько внутренних помощников для разрешения имен:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"getName()"})}),": нормализует имя компонента для использования в контенте файлов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"getCode()"})}),": преобразует имя в код через дефис для идентификаторов пакетов."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"getProjectName()"})}),": разрешает полное имя NPM-пакета, включая префикс дизайна."]}),`
`]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
