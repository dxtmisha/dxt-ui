import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/eventStopPropagation - Stop event propagation"}),`
`,n.jsx(e.h1,{id:"eventstoppropagation",children:n.jsx(e.code,{children:"eventStopPropagation"})}),`
`,n.jsx(e.p,{children:"Stops the further propagation of an event in the DOM tree (bubbling / capturing) and cancels the browser's default default action."}),`
`,n.jsxs(e.p,{children:["The function is a convenient wrapper around calling both ",n.jsx(e.code,{children:"event.preventDefault()"})," and ",n.jsx(e.code,{children:"event.stopPropagation()"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: Event"})," — The DOM event instance to stop."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Will cancel the navigation to the link and stop the click from bubbling to parents
  eventStopPropagation(e)
  console.log('Click intercepted!')
}
`})})]})}function h(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{h as default};
