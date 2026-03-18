import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as l}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(r){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/ru/functional-basic/Classes/ScrollbarWidth - Ширина скроллбара"}),`
`,n.jsx(s.h1,{id:"класс-scrollbarwidth",children:"Класс ScrollbarWidth"}),`
`,n.jsxs(s.p,{children:["Статический класс для асинхронного определения ширины полосы прокрутки браузера. Результат кэшируется в ",n.jsx(s.code,{children:"DataStorage"})," и пересчитывается только один раз за сессию."]}),`
`,n.jsx(s.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Кэширование"})," — ширина измеряется только один раз, затем берётся из кэша."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Асинхронное измерение"})," — использует ",n.jsx(s.code,{children:"requestAnimationFrame"})," для точного результата после перерисовки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Определение оверлейного скролла"})," — ",n.jsx(s.code,{children:"is()"})," проверяет, является ли скролл «наложенным» (ширина ≤ 8px), характерно для macOS и мобильных устройств."]}),`
`]}),`
`,n.jsx(s.h2,{id:"инициализация",children:"Инициализация"}),`
`,n.jsxs(s.p,{children:["Класс является ",n.jsx(s.strong,{children:"статическим"}),". Методы можно вызывать напрямую без создания экземпляра объекта."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Особенности:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Кэширование"})," — данные сохраняются в ",n.jsx(s.code,{children:"DataStorage"})," и не пересчитываются при повторных вызовах."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Персистентность"})," — значение сохраняется между перезагрузками страницы (session storage)."]}),`
`]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

// Вызов статического метода
const width = await ScrollbarWidth.get()
`})}),`
`,n.jsx(s.h2,{id:"методы",children:"Методы"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"get(): Promise<number>"})," — ширина скролла в пикселях. При первом вызове измеряет через временный DOM-элемент."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"is(): Promise<boolean>"})," — ",n.jsx(s.code,{children:"true"})," если скролл оверлейный (ширина ≤ 8px, macOS / мобильные)."]}),`
`]}),`
`,n.jsx(s.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional-basic'

const width = await ScrollbarWidth.get()
console.log(width) // 17 (Windows), 0 (macOS)

if (await ScrollbarWidth.is()) {
  // Overlay scroll — компенсация не нужна
}
`})})]})}function x(r={}){const{wrapper:s}={...e(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(i,{...r})}):i(r)}export{x as default};
