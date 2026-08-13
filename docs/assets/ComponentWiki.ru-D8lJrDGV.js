import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/ComponentWiki - Генератор Wiki на базе ИИ`}),`
`,(0,c.jsx)(t.h1,{id:`класс-componentwiki`,children:`Класс ComponentWiki`}),`
`,(0,c.jsx)(t.p,{children:`Продвинутый класс-оркестратор, который автоматизирует генерацию документации, историй (stories) и определений типов для компонентов с использованием ИИ. Он координирует временные сборки, извлечение кода и обработку ИИ для создания полных Wiki-артефактов.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Документация на базе ИИ`}),` — использует ИИ для анализа кода компонентов и создания содержательных MDX-описаний.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическая генерация историй`}),` — создает начальные истории Storybook на основе реализации компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Извлечение типов`}),` — идентифицирует и извлекает определения типов для включения в документацию.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Оркестрация процессов`}),` — управляет техническим жизненным циклом, включая сборку элементов, извлечение снимков кода и очистку.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:`Инициализируйте класс, указав путь к целевому компоненту и необязательные инструкции для промпта.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — относительный путь к директории компонента.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompt: string = ''`}),` — необязательный дополнительный текст для добавления к промпту ИИ для специфических требований к документации.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentWiki } from '@dxtmisha/scripts'

const wiki = new ComponentWiki('src/components/MyComponent', 'Сфокусируйся на деталях доступности.')

// Запуск процесса генерации
wiki.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`управление`,children:`Управление`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — основной метод, который запускает сборку кода, подготовку контекста ИИ и генерацию Wiki-артефактов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`пакетная-генерация`,children:`Пакетная генерация`}),`
`,(0,c.jsx)(t.p,{children:`Обычно используется в скриптах для перегенерации документации для нескольких компонентов после изменений API.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const wiki = new ComponentWiki('src/components/BaseButton')
wiki.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};