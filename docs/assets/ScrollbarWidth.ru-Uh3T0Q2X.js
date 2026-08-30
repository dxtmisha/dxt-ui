import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/ScrollbarWidth - Ширина скроллбара`}),`
`,(0,c.jsx)(t.h1,{id:`класс-scrollbarwidth`,children:`Класс ScrollbarWidth`}),`
`,(0,c.jsxs)(t.p,{children:[`Статический класс для асинхронного определения ширины полосы прокрутки браузера. Результат кэшируется в `,(0,c.jsx)(t.code,{children:`DataStorage`}),` и пересчитывается только один раз за сессию.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование`}),` — ширина измеряется только один раз, затем берётся из кэша.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Асинхронное измерение`}),` — использует `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` для точного результата после перерисовки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Определение оверлейного скролла`}),` — `,(0,c.jsx)(t.code,{children:`is()`}),` проверяет, является ли скролл «наложенным» (ширина ≤ 8px), характерно для macOS и мобильных устройств.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс является `,(0,c.jsx)(t.strong,{children:`статическим`}),`. Методы можно вызывать напрямую без создания экземпляра объекта.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Кэширование`}),` — данные сохраняются в `,(0,c.jsx)(t.code,{children:`DataStorage`}),` и не пересчитываются при повторных вызовах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Персистентность`}),` — значение сохраняется между перезагрузками страницы (session storage).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Вызов статического метода
const width = await ScrollbarWidth.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): Promise<number>`}),` — ширина скролла в пикселях. При первом вызове измеряет через временный DOM-элемент.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(): Promise<boolean>`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` если скролл оверлейный (ширина ≤ 8px, macOS / мобильные).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — компенсация не нужна
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};