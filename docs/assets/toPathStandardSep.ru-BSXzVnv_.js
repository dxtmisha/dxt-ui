import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/scripts/Functions/toPathStandardSep - Преобразование разделителей пути`}),`
`,(0,c.jsx)(t.h1,{id:`topathstandardsep`,children:(0,c.jsx)(t.code,{children:`toPathStandardSep`})}),`
`,(0,c.jsx)(t.p,{children:`Функция преобразует прямые слеши в строке пути в стандартный разделитель пути текущей операционной системы.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — входная строка пути.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Возвращает:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — путь со стандартными разделителями.`]}),`
`,(0,c.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,c.jsxs)(t.p,{children:[`Функция использует регулярное выражение для поиска всех прямых слешей (`,(0,c.jsx)(t.code,{children:`/`}),`) во входной строке и заменяет их платформенно-зависимым разделителем (`,(0,c.jsx)(t.code,{children:`path.sep`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// В Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// В Unix/macOS:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};