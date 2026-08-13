import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/ComponentCreator - Автоматическое создание компонентов`}),`
`,(0,c.jsx)(t.h1,{id:`класс-componentcreator`,children:`Класс ComponentCreator`}),`
`,(0,c.jsx)(t.p,{children:`Утилитный класс для автоматизации создания скелета компонентов в пустых директориях. Он проактивно идентифицирует папки внутри директории компонентов, в которых отсутствуют файлы, и инициализирует их, используя стандартные шаблоны проекта.`}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое обнаружение`}),` — рекурсивно сканирует директорию компонентов для поиска пустых папок.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Умное создание (Scaffolding)`}),` — автоматически запускает процесс создания для каждой идентифицированной директории.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Согласованность проекта`}),` — гарантирует, что все новые компоненты начинаются с одинаковой базовой структуры и файлов.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Инициализируйте новый экземпляр `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),`. Он автоматически нацеливается на стандартную директорию компонентов, определенную в конфигурации проекта.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Основной метод оркестрации, который выполняет рекурсивное сканирование директории компонентов, идентифицирует папки без файлов и запускает процесс заполнения (`,(0,c.jsx)(t.code,{children:`ComponentItem`}),`) для каждой из них.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`полный-процесс-создания`,children:`Полный процесс создания`}),`
`,(0,c.jsxs)(t.p,{children:[`Запуск создателя как части сценария сборки или подготовки гарантирует, что даже созданные вручную пустые папки будут правильно инициализированы необходимыми файлами (`,(0,c.jsx)(t.code,{children:`index.ts`}),`, `,(0,c.jsx)(t.code,{children:`types.ts`}),` и т.д.).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const creator = new ComponentCreator()
creator.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};