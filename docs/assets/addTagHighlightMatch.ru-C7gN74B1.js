import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function a(t){const s={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/ru/functional-basic/Functions/addTagHighlightMatch - Подсветка совпадений в строке"}),`
`,n.jsx(s.h1,{id:"addtaghighlightmatch",children:n.jsx(s.code,{children:"addTagHighlightMatch"})}),`
`,n.jsxs(s.p,{children:["Утилита для выделения совпадений в строке путём оборачивания их в HTML-тег ",n.jsx(s.code,{children:"<span>"})," с заданным классом. Использует ",n.jsx(s.code,{children:"getSeparatingSearchExp"})," для поддержки поиска по нескольким словам (через пробел)."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"value: string"})," — Исходная строка для обработки."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"search?: string"})," — Строка поиска (одно или несколько слов через пробел)."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"className: string = 'sys-highlight-match'"})," — CSS-класс, который будет добавлен к тегу ",n.jsx(s.code,{children:"<span>"}),"."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"}),`
`,n.jsx(s.code,{children:"string"})," — Строка с добавленными HTML-тегами для подсветки."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { addTagHighlightMatch } from '@dxtmisha/functional-basic'

// Подсветка одного слова
addTagHighlightMatch('Hello world', 'hello') 
// '<span class="sys-highlight-match">Hello</span> world'

// Подсветка нескольких слов (OR-логика)
addTagHighlightMatch('Apple and Banana', 'apple banana')
// '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'

// Кастомный класс
addTagHighlightMatch('Test', 'test', 'text-red')
// '<span class="text-red">Test</span>'
`})})]})}function g(t={}){const{wrapper:s}={...e(),...t.components};return s?n.jsx(s,{...t,children:n.jsx(a,{...t})}):a(t)}export{g as default};
