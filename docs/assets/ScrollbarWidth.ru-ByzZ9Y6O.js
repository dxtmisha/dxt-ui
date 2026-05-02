import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/ScrollbarWidth - Ширина скроллбара`}),`
`,(0,c.jsx)(n.h1,{id:`класс-scrollbarwidth`,children:`Класс ScrollbarWidth`}),`
`,(0,c.jsxs)(n.p,{children:[`Статический класс для асинхронного определения ширины полосы прокрутки браузера. Результат кэшируется в `,(0,c.jsx)(n.code,{children:`DataStorage`}),` и пересчитывается только один раз за сессию.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование`}),` — ширина измеряется только один раз, затем берётся из кэша.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Асинхронное измерение`}),` — использует `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` для точного результата после перерисовки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Определение оверлейного скролла`}),` — `,(0,c.jsx)(n.code,{children:`is()`}),` проверяет, является ли скролл «наложенным» (ширина ≤ 8px), характерно для macOS и мобильных устройств.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс является `,(0,c.jsx)(n.strong,{children:`статическим`}),`. Методы можно вызывать напрямую без создания экземпляра объекта.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Особенности:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Кэширование`}),` — данные сохраняются в `,(0,c.jsx)(n.code,{children:`DataStorage`}),` и не пересчитываются при повторных вызовах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Персистентность`}),` — значение сохраняется между перезагрузками страницы (session storage).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Вызов статического метода
const width = await ScrollbarWidth.get()
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): Promise<number>`}),` — ширина скролла в пикселях. При первом вызове измеряет через временный DOM-элемент.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(): Promise<boolean>`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` если скролл оверлейный (ширина ≤ 8px, macOS / мобильные).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — компенсация не нужна
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};