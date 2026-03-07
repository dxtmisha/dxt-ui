import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/createElement - Create an HTML element"}),`
`,e.jsx(n.h1,{id:"createelement",children:e.jsx(n.code,{children:"createElement"})}),`
`,e.jsx(n.p,{children:"In a browser environment, creates a new HTML element with the specified tag name and inserts it into the DOM tree."}),`
`,e.jsxs(n.p,{children:["The function relies on ",e.jsx(n.code,{children:"isDomRuntime()"})," to verify the presence of a DOM environment. If the code executes outside the browser (e.g., during SSR on the server), the function will return ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parentElement?: HTMLElement"})," — The parent element into which the new node will be inserted."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tagName: string = 'div'"})," — A string specifying the type of element to create (defaults to ",e.jsx(n.code,{children:"'div'"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)"})," — An object containing attributes and properties for the element (e.g., ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"className"}),", event listeners), or a callback function for custom processing of the element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"referenceElement?: HTMLElement"})," — The node before which the new ",e.jsx(n.code,{children:"element"})," is inserted. If omitted (or ",e.jsx(n.code,{children:"null"}),"), the element is appended as the last child of the parent (",e.jsx(n.code,{children:"appendChild"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T | undefined"})," — The created HTML element, or ",e.jsx(n.code,{children:"undefined"})," if the DOM is not available."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { createElement } from '@dxtmisha/functional-basic'

const container = document.getElementById('app')

// Creating an element with a properties object
const btn = createElement(container, 'button', {
  className: 'primary-btn',
  textContent: 'Click me',
  onclick: () => alert('Clicked!')
})

// Custom configuration via callback function
createElement(container, 'span', (el) => {
  el.style.color = 'red'
  el.dataset.customId = '123'
  el.textContent = 'Error text'
})
`})})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{m as default};
