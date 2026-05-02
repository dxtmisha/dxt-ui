import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/scripts/Functions/toPathStandardSep - Преобразование разделителей пути`}),`
`,(0,c.jsx)(n.h1,{id:`topathstandardsep`,children:(0,c.jsx)(n.code,{children:`toPathStandardSep`})}),`
`,(0,c.jsx)(n.p,{children:`Функция преобразует прямые слеши в строке пути в стандартный разделитель пути текущей операционной системы.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — входная строка пути.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — путь со стандартными разделителями.`]}),`
`,(0,c.jsx)(n.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(n.p,{children:[`Функция использует регулярное выражение для поиска всех прямых слешей (`,(0,c.jsx)(n.code,{children:`/`}),`) во входной строке и заменяет их платформенно-зависимым разделителем (`,(0,c.jsx)(n.code,{children:`path.sep`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// В Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// В Unix/macOS:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};