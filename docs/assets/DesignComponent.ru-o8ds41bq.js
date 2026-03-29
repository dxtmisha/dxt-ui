import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/DesignComponent - Генератор компонентов дизайна`}),`
`,(0,c.jsx)(n.h1,{id:`класс-designcomponent`,children:`Класс DesignComponent`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`DesignComponent`}),` — это специализированная реализация `,(0,c.jsx)(n.code,{children:`DesignCommand`}),`, предназначенная для автоматизированного создания и обслуживания компонентов дизайн-системы. Он координирует генерацию множества типов файлов — от стилей и логики компонентов до документации и метаданных интеграции.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Полный цикл развертывания`}),` — автоматически генерирует более 10 основных файлов для нового компонента (Vue, SCSS, TS, MDX).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеллектуальное разрешение свойств`}),` — использует `,(0,c.jsx)(n.code,{children:`DesignTypescript`}),` для внедрения свойств компонентов непосредственно в сгенерированные файлы.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматизация Storybook`}),` — генерирует файлы `,(0,c.jsx)(n.code,{children:`.stories.ts`}),` и `,(0,c.jsx)(n.code,{children:`.mdx`}),` с автоматическим разрешением рендеринга и импорта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`AI-усиленная Вики`}),` — создает специальные сопутствующие компоненты для поиска и отображения документации с помощью ИИ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с воркспейсом`}),` — бесшовно регистрирует новые компоненты в корневом `,(0,c.jsx)(n.code,{children:`package.json`}),` и в глобальном списке экспорта библиотеки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Маппинг стилевых токенов`}),` — автоматически преобразует структуры проекта в SCSS-токены стилей.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Для инициализации экземпляра генератора используйте конструктор. Он настраивает целевую директорию на основе конфигурации проекта.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — идентификатор компонента (например, `,(0,c.jsx)(n.code,{children:`'button'`}),`, `,(0,c.jsx)(n.code,{children:`'input'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — необязательные конфигурационные флаги.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DesignComponent } from '@dxtmisha/scripts'

const generator = new DesignComponent('button')
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает комплексный процесс генерации для всех файлов, связанных с компонентом.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`операции`,children:`Операции`}),`
`,(0,c.jsx)(n.h3,{id:`структура-генерируемых-файлов`,children:`Структура генерируемых файлов`}),`
`,(0,c.jsxs)(n.p,{children:[`При выполнении `,(0,c.jsx)(n.code,{children:`make()`}),` внутри директории компонента создается или обновляется следующая иерархия файлов:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties.json`}),` — хранит основные данные маппинга для компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`props.ts`}),` — TypeScript-определение пропсов компонента, разрешенное из шаблонов конструктора.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`styleToken.scss`}),` — токены стилей SCSS на основе структуры дизайна компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name].vue`}),` — основной файл компонента Vue с предварительно настроенными классами и стилями.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name]AiWiki.vue`}),` — сопутствующий компонент для AI-усиленной вики-документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`index.ts`}),` — точка входа компонента для публичного экспорта.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`wiki.ts`}),` и `,(0,c.jsx)(n.code,{children:`wikiData.ts`}),` — метаданные и структурированная информация о свойствах для сайта документации.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name].stories.ts`}),` — автоматизированные истории Storybook с динамическим разрешением компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[Name].mdx`}),` — MDX-документация для Storybook с предварительно заполненными слотами и данными пропсов.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`процесс-интеграции`,children:`Процесс интеграции`}),`
`,(0,c.jsx)(n.p,{children:`Класс обеспечивает полную интеграцию нового компонента в среду дизайн-системы:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Обновление пакета`}),`: добавляет запись в корневой `,(0,c.jsx)(n.code,{children:`package.json`}),` в секцию `,(0,c.jsx)(n.code,{children:`exports`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Экспорт библиотеки`}),`: создает прокси-файл в директории библиотеки для обеспечения возможности глобального импорта компонентов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Сопоставление описаний Вики`}),`: сканирует `,(0,c.jsx)(n.code,{children:`wikiDescriptions`}),` для автоматического заполнения историй Storybook соответствующими примерами.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};