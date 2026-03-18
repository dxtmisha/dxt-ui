import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"@dxtmisha/en/functional/Functions/getClassName - Get Class Name from Props"}),`
`,s.jsx(e.h1,{id:"getclassname",children:s.jsx(e.code,{children:"getClassName"})}),`
`,s.jsxs(e.p,{children:["A utility function that extracts the ",s.jsx(e.code,{children:"class"})," property from a given properties object. It ensures that the returned value is a string, which is useful for consistently obtaining class names when rendering components or elements."]}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Parameters:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"props?: T"})," — The properties object of the component, which may contain a ",s.jsx(e.code,{children:"class"})," property."]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Returns:"}),`
`,s.jsx(e.code,{children:"string | undefined"})," — The class name as a string if it exists and is a string, otherwise ",s.jsx(e.code,{children:"undefined"}),"."]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-typescript",children:`import { getClassName } from '@dxtmisha/functional'

// Returns 'my-custom-class'
const className1 = getClassName({ class: 'my-custom-class', otherProp: 1 })

// Returns undefined as 'class' is missing
const className2 = getClassName({ otherProp: 1 })

// Returns undefined as 'class' is not a string
const className3 = getClassName({ class: 123 })
`})})]})}function h(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(t,{...n})}):t(n)}export{h as default};
