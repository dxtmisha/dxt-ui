import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/getKey - Get pressed key code"}),`
`,e.jsx(n.h1,{id:"getkey",children:e.jsx(n.code,{children:"getKey"})}),`
`,e.jsxs(n.p,{children:["Returns the code or name of the key that was pressed, based on the ",e.jsx(n.code,{children:"KeyboardEvent"})," object. This utility normalizes retrieving the key identifier by safely attempting properties in the following priority order: ",e.jsx(n.code,{children:"event.key"})," → ",e.jsx(n.code,{children:"event.code"})," → stringified ",e.jsx(n.code,{children:"event.keyCode"}),". If all fail, it returns ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — The keyboard event object (triggered by ",e.jsx(n.code,{children:"keydown"}),", ",e.jsx(n.code,{children:"keyup"}),", or ",e.jsx(n.code,{children:"keypress"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"string"})," — The name or code of the pressed key (e.g., ",e.jsx(n.code,{children:"'Enter'"}),", ",e.jsx(n.code,{children:"'Escape'"}),", ",e.jsx(n.code,{children:"'A'"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('User pressed Escape! Closing menu.')
  }
})
`})})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{x as default};
