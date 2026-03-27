import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignWikiStormItem - Резолвер метаданных IDE компонента`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designwikistormitem`,children:`Класс DesignWikiStormItem`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),` — это гранулярный резолвер, отвечающий за извлечение, анализ и форматирование метаданных для отдельного UI-компонента. Он выступает в качестве моста между внутренней документацией, ориентированной на Storybook, и форматом `,(0,c.jsx)(n.code,{children:`web-types.json`}),`, гарантируя, что каждое свойство и описание правильно сопоставлены для IntelliSense в IDE.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маппинг Storybook в WebTypes`}),` — автоматически конвертирует объекты `,(0,c.jsx)(n.code,{children:`WikiStorybook`}),` в определения тегов, совместимые с разработками JetBrains.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Динамическое разрешение модулей`}),` — вычисляет правильные пути к модулям компонентов для поддержки функции «Перейти к определению» в IDE.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Контекстная документация`}),` — сохраняет и форматирует описания компонентов, типы свойств и значения по умолчанию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Программное извлечение данных`}),` — импортирует и анализирует файлы `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` для получения актуальных метаданных компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синтез атрибутов`}),` — итеративно выстраивает списки атрибутов, преобразуя сложные типы в понятные для IDE строки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Инициализируйте резолвер, указав контекст проекта, структурный путь и библиотечные метаданные компонента.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`project: string`}),` — имя проекта (например, `,(0,c.jsx)(n.code,{children:`'@dxtmisha/ui'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string[]`}),` — сегменты пути в файловой системе к папке компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: LibraryData`}),` — основные метаданные компонента (имя, алиас, директория).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignWikiStormItem } from '@dxtmisha/scripts'

const resolver = new DesignWikiStormItem(
  '@dxtmisha/ui',
  ['packages', 'core', 'src', 'components'],
  componentData
)
await resolver.init()
const tagMetadata = resolver.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`получение-информации`,children:`Получение информации`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): WebTypesTagItem | undefined`}),` — возвращает консолидированное определение тега, содержащее имя, описание, источник и атрибуты.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAttribute(item: WikiStorybookProp): WebTypesAttributeItem`}),` — преобразует отдельное свойство Storybook в определение атрибута Web-Types.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getAttributes(): WebTypesAttributes`}),` — компилирует полный список атрибутов для компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): Promise<this>`}),` — асинхронно инициализирует внутренний экземпляр `,(0,c.jsx)(n.code,{children:`WikiStorybook`}),`, загружая данные документации компонента.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`рабочий-процесс-извлечения-метаданных`,children:`Рабочий процесс извлечения метаданных`}),`
`,(0,c.jsx)(n.p,{children:`При инициализации и запросе резолвер следует структурированному конвейеру данных:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Загрузка данных вики (`,(0,c.jsx)(n.code,{children:`initWiki`}),`)`]}),`: разрешает путь к файлу компонента `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` и выполняет динамический импорт для получения актуальных метаданных (пропсы, значения по умолчанию, токены дизайна).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Синтез тега (`,(0,c.jsx)(n.code,{children:`get`}),`)`]}),`: конструирует имя тега для IDE, объединяя алиас дизайн-системы с внутренним именем компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маппинг источника`}),`: определяет свойства `,(0,c.jsx)(n.code,{children:`module`}),` и `,(0,c.jsx)(n.code,{children:`symbol`}),`, позволяя IDE связывать метаданные с реальным исходным кодом.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Компиляция атрибутов (`,(0,c.jsx)(n.code,{children:`getAttributes`}),`)`]}),`: обходит каждое свойство, определенное в вики, преобразуя его комментарий JSDoc, тип TypeScript и значение по умолчанию в стандартизированную структуру JSON.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`роль-в-движке-ide`,children:`Роль в движке IDE`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignWikiStormItem`}),` — это «рабочая лошадка» всей системы генерации метаданных. В то время как `,(0,c.jsx)(n.code,{children:`DesignWikiStorm`}),` берет на себя общую структуру файла, этот класс управляет сложностью анализа каждого отдельного компонента, гарантируя, что специфичная логика UI точно представлена в формате, понятном инструментам разработки.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};