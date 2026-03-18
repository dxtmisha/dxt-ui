import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(s){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/ru/scripts/Functions/toPathStandardSep - Преобразование разделителей пути"}),`
`,n.jsx(t.h1,{id:"topathstandardsep",children:n.jsx(t.code,{children:"toPathStandardSep"})}),`
`,n.jsx(t.p,{children:"Функция преобразует прямые слеши в строке пути в стандартный разделитель пути текущей операционной системы."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Параметры:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path: string"})," — входная строка пути."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Возвращает:"}),`
`,n.jsx(t.code,{children:"string"})," — путь со стандартными разделителями."]}),`
`,n.jsx(t.h2,{id:"как-это-работает",children:"Как это работает"}),`
`,n.jsxs(t.p,{children:["Функция использует регулярное выражение для поиска всех прямых слешей (",n.jsx(t.code,{children:"/"}),") во входной строке и заменяет их платформенно-зависимым разделителем (",n.jsx(t.code,{children:"path.sep"}),")."]}),`
`,n.jsx(t.h2,{id:"пример",children:"Пример"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// В Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// В Unix/macOS:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function l(s={}){const{wrapper:t}={...r(),...s.components};return t?n.jsx(t,{...s,children:n.jsx(e,{...s})}):e(s)}export{l as default};
