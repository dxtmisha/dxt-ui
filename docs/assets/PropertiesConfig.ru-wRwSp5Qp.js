import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/ru/scripts/Classes/PropertiesConfig - Оркестратор глобальной конфигурации"}),`
`,n.jsx(e.h1,{id:"класс-propertiesconfig",children:"Класс PropertiesConfig"}),`
`,n.jsxs(e.p,{children:["Класс ",n.jsx(e.code,{children:"PropertiesConfig"})," — это централизованная статическая утилита, отвечающая за управление рабочими параметрами дизайн-системы. Он управляет поиском и рекурсивным слиянием файлов конфигурации ",n.jsx(e.code,{children:"design-ui.json"}),", предоставляя единый API для доступа к соглашениям об именовании, ключам интеграции ИИ и правилам маршрутизации документации во всей библиотеке."]}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивное расширение"})," — поддерживает механизм ",n.jsx(e.code,{children:"extends"}),", позволяя конфигурациям наследовать и переопределять настройки из родительских директорий."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Автоматическое обнаружение"})," — выполняет поиск вверх по дереву каталогов для нахождения ближайшей точки входа ",n.jsx(e.code,{children:"design-ui.json"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Централизованные настройки"})," — обеспечивает унифицированный доступ к идентификаторам проекта, названиям дизайна и разделителям путей."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Интеграция с ИИ"})," — управляет учетными данными и параметрами моделей для генерации документации и кода на базе ИИ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Маршрутизация документации"})," — настраивает целевые директории и пути Storybook для автоматизированной системы вики."]}),`
`]}),`
`,n.jsx(e.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(e.p,{children:["Являясь статическим классом, ",n.jsx(e.code,{children:"PropertiesConfig"})," инициализируется автоматически при первом импорте. Вам не нужно вызывать конструктор."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { PropertiesConfig } from '@dxtmisha/scripts'

// Доступ к глобальным настройкам
const designName = PropertiesConfig.getDesignName()
const separator = PropertiesConfig.getSeparator()
`})}),`
`,n.jsx(e.h2,{id:"методы",children:"Методы"}),`
`,n.jsx(e.h3,{id:"общая-конфигурация",children:"Общая конфигурация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getProjectName(): string"})," — получает корневой идентификатор проекта."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDesignName(): string"})," — возвращает основной идентификатор дизайн-системы."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDesignAlternativeName(): string[]"})," — возвращает альтернативные алиасы для дизайна."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getSeparator(): string"})," — возвращает символ-разделитель путей в токенах."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getWikiLanguage(): string"})," — возвращает код целевого языка для документации."]}),`
`]}),`
`,n.jsx(e.h3,{id:"ии-и-документация",children:"ИИ и Документация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getAiType(): AiType"})," — возвращает настроенного ИИ-провайдера (например, 'gemini')."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getAiModel(): string"})," — возвращает название конкретной модели ИИ."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getAiDocDirectory(): string[]"})," — возвращает директории, предназначенные для генерации документации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getAiDocStorybookPath(): string"})," — возвращает путь экспорта для MDX-файлов Storybook."]}),`
`]}),`
`,n.jsx(e.h2,{id:"операции",children:"Операции"}),`
`,n.jsx(e.h3,{id:"поток-разрешения-конфигурации",children:"Поток разрешения конфигурации"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"PropertiesConfig"})," использует надежную стратегию для разрешения системных настроек:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Поиск файла"}),": При загрузке класс пытается найти ",n.jsx(e.code,{children:"design-ui.json"}),", поднимаясь вверх от текущей рабочей директории (до 32 уровней)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Рекурсивное слияние"}),": Если найденный файл содержит свойство ",n.jsx(e.code,{children:"extends"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Он рекурсивно загружает указанную родительскую конфигурацию."}),`
`,n.jsx(e.li,{children:"Интеллектуально объединяет настройки, где локальные свойства переопределяют унаследованные."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Статическая готовность"}),": Итоговая объединенная конфигурация сохраняется в приватном статическом поле, делая все настройки немедленно доступными через публичные геттеры."]}),`
`]})]})}function j(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
