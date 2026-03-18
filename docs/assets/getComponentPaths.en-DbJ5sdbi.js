import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/en/scripts/Functions/getComponentPaths - Get component paths"}),`
`,n.jsx(t.h1,{id:"getcomponentpaths",children:n.jsx(t.code,{children:"getComponentPaths"})}),`
`,n.jsx(t.p,{children:"The function returns the paths to the component by combining the base component directory with the specified path."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Parameters:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path: string"})," — component path."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Returns:"}),`
`,n.jsx(t.code,{children:"string[]"})," — an array of paths."]}),`
`,n.jsx(t.h2,{id:"how-it-works",children:"How it works"}),`
`,n.jsxs(t.p,{children:["The function is used to generate a full path to a component based on the global project configuration. It uses the ",n.jsx(t.code,{children:"UI_DIRS_COMPONENTS"})," constant which defines the base directory for all components."]}),`
`,n.jsx(t.h2,{id:"example",children:"Example"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getComponentPaths } from '@dxtmisha/scripts'

getComponentPaths('button') // ['src', 'components', 'button']
`})})]})}function l(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{l as default};
