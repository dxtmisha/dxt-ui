import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/createElement - Create an HTML element`}),`
`,(0,c.jsx)(n.h1,{id:`createelement`,children:(0,c.jsx)(n.code,{children:`createElement`})}),`
`,(0,c.jsx)(n.p,{children:`In a browser environment, creates a new HTML element with the specified tag name and inserts it into the DOM tree.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function relies on `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),` to verify the presence of a DOM environment. If the code executes outside the browser (e.g., during SSR on the server), the function will return `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parentElement?: HTMLElement`}),` — The parent element into which the new node will be inserted.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`tagName: string = 'div'`}),` — A string specifying the type of element to create (defaults to `,(0,c.jsx)(n.code,{children:`'div'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)`}),` — An object containing attributes and properties for the element (e.g., `,(0,c.jsx)(n.code,{children:`id`}),`, `,(0,c.jsx)(n.code,{children:`className`}),`, event listeners), or a callback function for custom processing of the element.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`referenceElement?: HTMLElement`}),` — The node before which the new `,(0,c.jsx)(n.code,{children:`element`}),` is inserted. If omitted (or `,(0,c.jsx)(n.code,{children:`null`}),`), the element is appended as the last child of the parent (`,(0,c.jsx)(n.code,{children:`appendChild`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T | undefined`}),` — The created HTML element, or `,(0,c.jsx)(n.code,{children:`undefined`}),` if the DOM is not available.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createElement } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};