import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional/Classes/ScrollbarWidthRef - Ширина скролла`}),`
`,(0,c.jsx)(t.h1,{id:`класс-scrollbarwidthref`,children:`Класс ScrollbarWidthRef`}),`
`,(0,c.jsxs)(t.p,{children:[`Реактивная обёртка асинхронного измерения полосы прокрутки. В DOM-среде независимо запрашивает флаг и ширину в пикселях через `,(0,c.jsx)(t.code,{children:`ScrollbarWidth`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Начальное состояние`}),` — `,(0,c.jsx)(t.code,{children:`item`}),` равен undefined, `,(0,c.jsx)(t.code,{children:`width`}),` равен 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Независимые результаты`}),` — флаг и ширина могут разрешиться в любом порядке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR`}),` — вне DOM измерения браузера не запрашиваются.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`constructor()`})}),`
`,(0,c.jsx)(t.h2,{id:`поведение-и-жизненный-цикл`,children:`Поведение и жизненный цикл`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`is`}),` означает, что флаг определён: и `,(0,c.jsx)(t.code,{children:`true`}),`, и `,(0,c.jsx)(t.code,{children:`false`}),` переводят готовность в true. Это не гарантирует завершения независимого Promise ширины. Обёртка измеряет один раз при создании и не подписывается на resize. Публичных методов, кроме конструктора, нет.`]}),`
`,(0,c.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = /*#__PURE__*/ new ScrollbarWidthRef()
const ready = scrollbar.is
const width = scrollbar.width
`})}),`
`,(0,c.jsx)(t.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: Ref<boolean | undefined>`}),` — Результат ScrollbarWidth.is(): true для измеренной ширины не равной -1 и не больше 8 пикселей; изначально undefined.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: Ref<number>`}),` — Ширина в пикселях; изначально 0, обновляется независимо.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is: ComputedRef<boolean>`}),` — Истина после определения item независимо от значения флага и готовности ширины.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.p,{children:`Публичных методов нет; используйте описанные выше свойства.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};