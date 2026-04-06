import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Classes/ComponentWiki - Генератор Wiki на базе ИИ`}),`
`,(0,c.jsx)(n.h1,{id:`класс-componentwiki`,children:`Класс ComponentWiki`}),`
`,(0,c.jsx)(n.p,{children:`Продвинутый класс-оркестратор, который автоматизирует генерацию документации, историй (stories) и определений типов для компонентов с использованием ИИ. Он координирует временные сборки, извлечение кода и обработку ИИ для создания полных Wiki-артефактов.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Документация на базе ИИ`}),` — использует ИИ для анализа кода компонентов и создания содержательных MDX-описаний.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическая генерация историй`}),` — создает начальные истории Storybook на основе реализации компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Извлечение типов`}),` — идентифицирует и извлекает определения типов для включения в документацию.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Оркестрация процессов`}),` — управляет техническим жизненным циклом, включая сборку элементов, извлечение снимков кода и очистку.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Инициализируйте класс, указав путь к целевому компоненту и необязательные инструкции для промпта.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — относительный путь к директории компонента.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`prompt: string = ''`}),` — необязательный дополнительный текст для добавления к промпту ИИ для специфических требований к документации.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ComponentWiki } from '@dxtmisha/scripts'

const wiki = new ComponentWiki('src/components/MyComponent', 'Сфокусируйся на деталях доступности.')

// Запуск процесса генерации
wiki.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — основной метод, который запускает сборку кода, подготовку контекста ИИ и генерацию Wiki-артефактов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`пакетная-генерация`,children:`Пакетная генерация`}),`
`,(0,c.jsx)(n.p,{children:`Обычно используется в скриптах для перегенерации документации для нескольких компонентов после изменений API.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const wiki = new ComponentWiki('src/components/BaseButton')
wiki.make()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};