import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/DesignWiki - Генератор вики-реестра"}),`
`,n.jsx(i.h1,{id:"класс-designwiki",children:"Класс DesignWiki"}),`
`,n.jsxs(i.p,{children:["Класс ",n.jsx(i.code,{children:"DesignWiki"})," обеспечивает базовую инфраструктуру для системы документации проекта. Он автоматизирует создание и инициализацию центрального конфигурационного файла вики, гарантируя, что движок документации (Storybook) имеет стабильный и типизированный реестр для хранения аргументов и метаданных компонентов."]}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Автоматическая инициализация"})," — обнаруживает отсутствие конфигурационных файлов вики и создает их по стандартному шаблону."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Типизированный реестр"})," — генерирует конфигурации с использованием типа ",n.jsx(i.code,{children:"StorybookArgsToList"})," для полной интеграции с фреймворком документации."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Проектное именование (Aliasing)"})," — использует имя дизайн-системы (из ",n.jsx(i.code,{children:"PropertiesConfig"}),") для создания уникальных переменных реестра, соответствующих проекту."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Безопасное выполнение"})," — проверяет существование файла перед записью, предотвращая случайную перезапись существующих конфигураций документации."]}),`
`]}),`
`,n.jsx(i.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsx(i.p,{children:"Класс не требует параметров для инициализации. Он использует глобальные конфигурации из окружения."}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { DesignWiki } from '@dxtmisha/scripts'

const wikiGenerator = new DesignWiki()
wikiGenerator.make()
`})}),`
`,n.jsx(i.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(i.h3,{id:"управление",children:"Управление"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): void"})," — запускает процесс инициализации вики."]}),`
`]}),`
`,n.jsx(i.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(i.h3,{id:"рабочий-процесс-инициализации-вики",children:"Рабочий процесс инициализации вики"}),`
`,n.jsxs(i.p,{children:["При выполнении ",n.jsx(i.code,{children:"make()"})," класс следует внутренней логике:"]}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Разрешение путей"}),": использует настроенные пути к директориям (",n.jsx(i.code,{children:"UI_DIRS_WIKI"}),") и имена файлов (",n.jsx(i.code,{children:"UI_FILE_NAME_WIKI"}),") для определения целевого файла конфигурации."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Проверка существования"}),": опрашивает файловую систему через ",n.jsx(i.code,{children:"PropertiesFile.is()"}),", чтобы определить, существует ли уже конфигурационный файл ",n.jsx(i.code,{children:".ts"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Генерация реестра"}),": если файл отсутствует, получает текущее имя дизайн-системы и конструирует шаблон TypeScript:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["импортирует необходимый тип ",n.jsx(i.code,{children:"StorybookArgsToList"}),"."]}),`
`,n.jsxs(i.li,{children:["экспортирует константу с именем ",n.jsx(i.code,{children:"wiki[DesignName]"}),"."]}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Сохранение"}),": записывает сгенерированный шаблон в файловую систему, гарантируя, что движок документации сможет немедленно начать его импорт."]}),`
`]}),`
`,n.jsx(i.h3,{id:"интеграция-со-storybook",children:"Интеграция со Storybook"}),`
`,n.jsxs(i.p,{children:["Централизуя создание этого реестра, ",n.jsx(i.code,{children:"DesignWiki"})," гарантирует, что у всех разработчиков, работающих над компонентами, есть единое место для документирования пропсов и состояний. Этот реестр выступает в качестве «источника истины» для интерактивной документации, позволяя Storybook динамически отрисовывать элементы управления компонентами на основе сохраненных здесь метаданных."]})]})}function j(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{j as default};
