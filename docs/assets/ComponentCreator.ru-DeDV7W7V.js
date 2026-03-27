import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/ComponentCreator - Автоматическое создание компонентов`}),`
`,(0,c.jsx)(n.h1,{id:`класс-componentcreator`,children:`Класс ComponentCreator`}),`
`,(0,c.jsx)(n.p,{children:`Утилитный класс для автоматизации создания скелета компонентов в пустых директориях. Он проактивно идентифицирует папки внутри директории компонентов, в которых отсутствуют файлы, и инициализирует их, используя стандартные шаблоны проекта.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое обнаружение`}),` — рекурсивно сканирует директорию компонентов для поиска пустых папок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умное создание (Scaffolding)`}),` — автоматически запускает процесс создания для каждой идентифицированной директории.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Согласованность проекта`}),` — гарантирует, что все новые компоненты начинаются с одинаковой базовой структуры и файлов.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Инициализируйте новый экземпляр `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),`. Он автоматически нацеливается на стандартную директорию компонентов, определенную в конфигурации проекта.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ComponentCreator } from '@dxtmisha/scripts'

const creator = new ComponentCreator()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Основной метод оркестрации, который выполняет рекурсивное сканирование директории компонентов, идентифицирует папки без файлов и запускает процесс заполнения (`,(0,c.jsx)(n.code,{children:`ComponentItem`}),`) для каждой из них.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`полный-процесс-создания`,children:`Полный процесс создания`}),`
`,(0,c.jsxs)(n.p,{children:[`Запуск создателя как части сценария сборки или подготовки гарантирует, что даже созданные вручную пустые папки будут правильно инициализированы необходимыми файлами (`,(0,c.jsx)(n.code,{children:`index.ts`}),`, `,(0,c.jsx)(n.code,{children:`types.ts`}),` и т.д.).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const creator = new ComponentCreator()
creator.make()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};