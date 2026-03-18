import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/ru/scripts/Classes/DesignWikiStormItem - Резолвер метаданных IDE компонента"}),`
`,e.jsx(n.h1,{id:"класс-designwikistormitem",children:"Класс DesignWikiStormItem"}),`
`,e.jsxs(n.p,{children:["Класс ",e.jsx(n.code,{children:"DesignWikiStormItem"})," — это гранулярный резолвер, отвечающий за извлечение, анализ и форматирование метаданных для отдельного UI-компонента. Он выступает в качестве моста между внутренней документацией, ориентированной на Storybook, и форматом ",e.jsx(n.code,{children:"web-types.json"}),", гарантируя, что каждое свойство и описание правильно сопоставлены для IntelliSense в IDE."]}),`
`,e.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Маппинг Storybook в WebTypes"})," — автоматически конвертирует объекты ",e.jsx(n.code,{children:"WikiStorybook"})," в определения тегов, совместимые с разработками JetBrains."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Динамическое разрешение модулей"})," — вычисляет правильные пути к модулям компонентов для поддержки функции «Перейти к определению» в IDE."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Контекстная документация"})," — сохраняет и форматирует описания компонентов, типы свойств и значения по умолчанию."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Программное извлечение данных"})," — импортирует и анализирует файлы ",e.jsx(n.code,{children:"wikiData.ts"})," для получения актуальных метаданных компонентов."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Синтез атрибутов"})," — итеративно выстраивает списки атрибутов, преобразуя сложные типы в понятные для IDE строки."]}),`
`]}),`
`,e.jsx(n.h2,{id:"инициализация",children:"Инициализация"}),`
`,e.jsx(n.p,{children:"Инициализируйте резолвер, указав контекст проекта, структурный путь и библиотечные метаданные компонента."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"project: string"})," — имя проекта (например, ",e.jsx(n.code,{children:"'@dxtmisha/ui'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path: string[]"})," — сегменты пути в файловой системе к папке компонента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: LibraryData"})," — основные метаданные компонента (имя, алиас, директория)."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DesignWikiStormItem } from '@dxtmisha/scripts'

const resolver = new DesignWikiStormItem(
  '@dxtmisha/ui',
  ['packages', 'core', 'src', 'components'],
  componentData
)
await resolver.init()
const tagMetadata = resolver.get()
`})}),`
`,e.jsx(n.h2,{id:"методы",children:"Методы"}),`
`,e.jsx(n.h3,{id:"получение-информации",children:"Получение информации"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"get(): WebTypesTagItem | undefined"})," — возвращает консолидированное определение тега, содержащее имя, описание, источник и атрибуты."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAttribute(item: WikiStorybookProp): WebTypesAttributeItem"})," — преобразует отдельное свойство Storybook в определение атрибута Web-Types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAttributes(): WebTypesAttributes"})," — компилирует полный список атрибутов для компонента."]}),`
`]}),`
`,e.jsx(n.h3,{id:"управление",children:"Управление"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"init(): Promise<this>"})," — асинхронно инициализирует внутренний экземпляр ",e.jsx(n.code,{children:"WikiStorybook"}),", загружая данные документации компонента."]}),`
`]}),`
`,e.jsx(n.h2,{id:"операции",children:"Операции"}),`
`,e.jsx(n.h3,{id:"рабочий-процесс-извлечения-метаданных",children:"Рабочий процесс извлечения метаданных"}),`
`,e.jsx(n.p,{children:"При инициализации и запросе резолвер следует структурированному конвейеру данных:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Загрузка данных вики (",e.jsx(n.code,{children:"initWiki"}),")"]}),": разрешает путь к файлу компонента ",e.jsx(n.code,{children:"wikiData.ts"})," и выполняет динамический импорт для получения актуальных метаданных (пропсы, значения по умолчанию, токены дизайна)."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Синтез тега (",e.jsx(n.code,{children:"get"}),")"]}),": конструирует имя тега для IDE, объединяя алиас дизайн-системы с внутренним именем компонента."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Маппинг источника"}),": определяет свойства ",e.jsx(n.code,{children:"module"})," и ",e.jsx(n.code,{children:"symbol"}),", позволяя IDE связывать метаданные с реальным исходным кодом."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Компиляция атрибутов (",e.jsx(n.code,{children:"getAttributes"}),")"]}),": обходит каждое свойство, определенное в вики, преобразуя его комментарий JSDoc, тип TypeScript и значение по умолчанию в стандартизированную структуру JSON."]}),`
`]}),`
`,e.jsx(n.h3,{id:"роль-в-движке-ide",children:"Роль в движке IDE"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DesignWikiStormItem"})," — это «рабочая лошадка» всей системы генерации метаданных. В то время как ",e.jsx(n.code,{children:"DesignWikiStorm"})," берет на себя общую структуру файла, этот класс управляет сложностью анализа каждого отдельного компонента, гарантируя, что специфичная логика UI точно представлена в формате, понятном инструментам разработки."]})]})}function j(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
