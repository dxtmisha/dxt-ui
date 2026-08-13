import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Classes/BuildFunctional - Сборщик библиотеки функционала`}),`
`,(0,c.jsx)(t.h1,{id:`класс-buildfunctional`,children:`Класс BuildFunctional`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс `,(0,c.jsx)(t.code,{children:`BuildFunctional`}),` — это утилита, отвечающая за генерацию центрального файла экспорта для функциональной библиотеки. Он сканирует пакет `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` и создает файл `,(0,c.jsx)(t.code,{children:`functional.ts`}),` в директории библиотеки, повторно экспортируя все обнаруженные элементы.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматический реэкспорт`}),` — автоматически обнаруживает и повторно экспортирует все элементы из функционального пакета.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Поддержка типов`}),` — включает `,(0,c.jsx)(t.code,{children:`export type *`}),` для обеспечения полной доступности типов TypeScript.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с библиотекой`}),` — интегрируется со структурой библиотеки проекта, записывая данные в настроенную директорию библиотеки.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Вы можете создать экземпляр `,(0,c.jsx)(t.code,{children:`BuildFunctional`}),` без параметров.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:`make`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — запускает процесс сборки. Он получает список элементов, форматирует код экспорта и записывает его в `,(0,c.jsx)(t.code,{children:`src/library/functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`getlist`,children:`getList`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): string[]`}),` — возвращает массив ключей (экспортируемых элементов) из пакета `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};