import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/scripts/Classes/BuildFunctional - Сборщик библиотеки функционала`}),`
`,(0,c.jsx)(n.h1,{id:`класс-buildfunctional`,children:`Класс BuildFunctional`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`BuildFunctional`}),` — это утилита, отвечающая за генерацию центрального файла экспорта для функциональной библиотеки. Он сканирует пакет `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` и создает файл `,(0,c.jsx)(n.code,{children:`functional.ts`}),` в директории библиотеки, повторно экспортируя все обнаруженные элементы.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматический реэкспорт`}),` — автоматически обнаруживает и повторно экспортирует все элементы из функционального пакета.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Поддержка типов`}),` — включает `,(0,c.jsx)(n.code,{children:`export type *`}),` для обеспечения полной доступности типов TypeScript.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с библиотекой`}),` — интегрируется со структурой библиотеки проекта, записывая данные в настроенную директорию библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Вы можете создать экземпляр `,(0,c.jsx)(n.code,{children:`BuildFunctional`}),` без параметров.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:`make`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — запускает процесс сборки. Он получает список элементов, форматирует код экспорта и записывает его в `,(0,c.jsx)(n.code,{children:`src/library/functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`getlist`,children:`getList`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): string[]`}),` — возвращает массив ключей (экспортируемых элементов) из пакета `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};