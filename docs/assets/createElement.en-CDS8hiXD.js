import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/createElement - Create an HTML element`}),`
`,(0,c.jsx)(t.h1,{id:`createelement`,children:(0,c.jsx)(t.code,{children:`createElement`})}),`
`,(0,c.jsx)(t.p,{children:`In a browser environment, creates a new HTML element with the specified tag name and inserts it into the DOM tree.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function relies on `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),` to verify the presence of a DOM environment. If the code executes outside the browser (e.g., during SSR on the server), the function will return `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Warning (SSR):`}),` When running on the server, the function always returns `,(0,c.jsx)(t.code,{children:`undefined`}),`. If you use it within a component's rendering logic, it may lead to hydration mismatches. It is recommended to call this function only inside lifecycle hooks that run exclusively on the client (e.g., `,(0,c.jsx)(t.code,{children:`onMounted`}),` in Vue or `,(0,c.jsx)(t.code,{children:`useEffect`}),` in React).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`parentElement?: HTMLElement`}),` — The parent element into which the new node will be inserted.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`tagName: string = 'div'`}),` — A string specifying the type of element to create (defaults to `,(0,c.jsx)(t.code,{children:`'div'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)`}),` — An object containing attributes and properties for the element (e.g., `,(0,c.jsx)(t.code,{children:`id`}),`, `,(0,c.jsx)(t.code,{children:`className`}),`, event listeners), or a callback function for custom processing of the element.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`referenceElement?: HTMLElement`}),` — The node before which the new `,(0,c.jsx)(t.code,{children:`element`}),` is inserted. If omitted (or `,(0,c.jsx)(t.code,{children:`null`}),`), the element is appended as the last child of the parent (`,(0,c.jsx)(t.code,{children:`appendChild`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`T | undefined`}),` — The created HTML element, or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the DOM is not available.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { createElement } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};