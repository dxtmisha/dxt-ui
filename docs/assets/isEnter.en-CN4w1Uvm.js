import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as c}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/isEnter - Check for Enter or Space key press"}),`
`,e.jsx(n.h1,{id:"isenter",children:e.jsx(n.code,{children:"isEnter"})}),`
`,e.jsxs(n.p,{children:["Checks if the pressed key is ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"}),". This function is useful for handling keyboard events when you need to react to action confirmation or element activation, while supporting accessibility (a11y) and older browsers."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"event: KeyboardEvent"})," — the keyboard event object."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"})," if the ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," key is pressed, otherwise ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Supported event properties:"}),`
The function checks the following event properties for maximum compatibility:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"code"}),": ",e.jsx(n.code,{children:"'Enter'"}),", ",e.jsx(n.code,{children:"'Space'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"key"}),": ",e.jsx(n.code,{children:"'Enter'"}),", ",e.jsx(n.code,{children:"' '"}),", ",e.jsx(n.code,{children:"'Spacebar'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keyCode"}),": ",e.jsx(n.code,{children:"13"}),", ",e.jsx(n.code,{children:"32"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isEnter } from '@dxtmisha/functional-basic'

const onKeyDown = (event: KeyboardEvent) => {
  if (isEnter(event)) {
    console.log('Enter or Space pressed')
    // Perform action
  }
}
`})})]})}function x(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{x as default};
