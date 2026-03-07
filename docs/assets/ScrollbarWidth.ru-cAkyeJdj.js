import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as l}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(i){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional-basic/Classes/ScrollbarWidth - Ширина скроллбара"}),`
`,n.jsx(r.h1,{id:"класс-scrollbarwidth",children:"Класс ScrollbarWidth"}),`
`,n.jsxs(r.p,{children:["Статический класс для асинхронного определения ширины полосы прокрутки браузера. Результат кэшируется в ",n.jsx(r.code,{children:"DataStorage"})," и пересчитывается только один раз за сессию."]}),`
`,n.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Кэширование"})," — ширина измеряется только один раз, затем берётся из кэша."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Асинхронное измерение"})," — использует ",n.jsx(r.code,{children:"requestAnimationFrame"})," для точного результата после перерисовки."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Определение оверлейного скролла"})," — ",n.jsx(r.code,{children:"is()"})," проверяет, является ли скролл «наложенным» (ширина ≤ 8px), характерно для macOS и мобильных устройств."]}),`
`]}),`
`,n.jsx(r.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"get(): Promise<number>"})," — ширина скролла в пикселях. При первом вызове измеряет через временный DOM-элемент."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"is(): Promise<boolean>"})," — ",n.jsx(r.code,{children:"true"})," если скролл оверлейный (ширина ≤ 8px, macOS / мобильные)."]}),`
`]}),`
`,n.jsx(r.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — компенсация не нужна
}
`})})]})}function x(i={}){const{wrapper:r}={...s(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(e,{...i})}):e(i)}export{x as default};
