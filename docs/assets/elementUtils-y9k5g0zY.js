import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DB_maGql.js";import{M as i}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function l(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/functional/en/Element Utils"}),`
`,e.jsx(n.h1,{id:"dom-element-utilities",children:"DOM Element Utilities"}),`
`,e.jsx(n.p,{children:"A set of functions for creating, searching and manipulating DOM elements."}),`
`,e.jsx(n.h2,{id:"createelement",children:e.jsx(n.code,{children:"createElement"})}),`
`,e.jsx(n.p,{children:"Creates a new HTML element with specified tag and optionally adds it to parent element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parentElement?: HTMLElement"})," — parent element for insertion (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tagName: string"})," — tag of element to create (default ",e.jsx(n.code,{children:"'div'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void)"})," — attributes object or setup function (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"referenceElement?: HTMLElement"})," — element before which to insert new one (optional)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { createElement } from '@dxtmisha/functional'

const div = createElement() // <div>
const button = createElement(parent, 'button') // <button> in parent
const input = createElement(parent, 'input', { type: 'text' }) // <input type="text">
`})}),`
`,e.jsx(n.h2,{id:"domqueryselector",children:e.jsx(n.code,{children:"domQuerySelector"})}),`
`,e.jsx(n.p,{children:"Safely searches for first element matching CSS selector."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectors: string"})," — CSS selector to search"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { domQuerySelector } from '@dxtmisha/functional'

const header = domQuerySelector('#header') // HTMLElement | undefined
const button = domQuerySelector('.submit-btn') // HTMLElement | undefined
const input = domQuerySelector('input[type="email"]') // HTMLInputElement | undefined
`})}),`
`,e.jsx(n.h2,{id:"domqueryselectorall",children:e.jsx(n.code,{children:"domQuerySelectorAll"})}),`
`,e.jsx(n.p,{children:"Safely searches for all elements matching CSS selector."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectors: string"})," — CSS selector to search"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { domQuerySelectorAll } from '@dxtmisha/functional'

const buttons = domQuerySelectorAll('button') // NodeList | undefined
const items = domQuerySelectorAll('.menu-item') // NodeList | undefined
const links = domQuerySelectorAll('a[href]') // NodeList | undefined
`})}),`
`,e.jsx(n.h2,{id:"getattributes",children:e.jsx(n.code,{children:"getAttributes"})}),`
`,e.jsx(n.p,{children:"Gets all HTML element attributes as key-value object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — selector or element to get attributes from"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getAttributes } from '@dxtmisha/functional'

const attrs = getAttributes('#my-element') // { id: 'my-element', class: 'btn' }
const buttonAttrs = getAttributes(button) // { type: 'submit', disabled: '' }
`})}),`
`,e.jsx(n.h2,{id:"getelement",children:e.jsx(n.code,{children:"getElement"})}),`
`,e.jsx(n.p,{children:"Universal function to get DOM element. Accepts CSS selector, element or window."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — selector, element or window"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElement } from '@dxtmisha/functional'

const header = getElement('#header') // HTMLElement | undefined
const sameEl = getElement(existingEl) // returns existingEl
const bodyEl = getElement(window) // returns document.body
`})}),`
`,e.jsx(n.h2,{id:"getelementid",children:e.jsx(n.code,{children:"getElementId"})}),`
`,e.jsxs(n.p,{children:["Gets element ID or creates unique ID if element doesn't have ",e.jsx(n.code,{children:"id"})," attribute."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — element to get ID from"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selector?: string"})," — additional selector to add to ID"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElementId } from '@dxtmisha/functional'

const id1 = getElementId(elementWithId) // 'existing'
const id2 = getElementId(elementNoId) // 'id-123456' (generated)
const id3 = getElementId('#header', ' .title') // '#header .title'
`})}),`
`,e.jsx(n.h2,{id:"getelementitem",children:e.jsx(n.code,{children:"getElementItem"})}),`
`,e.jsx(n.p,{children:"Gets element property value by key with ability to specify default value."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: ElementOrString<T>"})," — element to check"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: K | string"})," — property key to get"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: D"})," — default value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElementItem } from '@dxtmisha/functional'

const value = getElementItem(input, 'value') // input value
const type = getElementItem(input, 'type', 'text') // type or 'text' by default
const width = getElementItem(element, 'offsetWidth')
`})}),`
`,e.jsx(n.h2,{id:"getelementorwindow",children:e.jsx(n.code,{children:"getElementOrWindow"})}),`
`,e.jsx(n.p,{children:"Returns window object as is or gets DOM element."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — selector, element or window"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { getElementOrWindow } from '@dxtmisha/functional'

const windowObj = getElementOrWindow(window) // window
const element = getElementOrWindow('#container') // HTMLElement
`})}),`
`,e.jsx(n.h2,{id:"goscroll",children:e.jsx(n.code,{children:"goScroll"})}),`
`,e.jsx(n.p,{children:"Smoothly scrolls page or element to specified position."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: ElementOrString<E>"})," — element to scroll (default window)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"top?: number"})," — vertical position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"left?: number"})," — horizontal position"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { goScroll } from '@dxtmisha/functional'

goScroll(window, 0) // scroll to top
goScroll('#container', 100, 50) // scroll element
`})}),`
`,e.jsx(n.h2,{id:"initscrollbaroffset",children:e.jsx(n.code,{children:"initScrollbarOffset"})}),`
`,e.jsx(n.p,{children:"Initializes scroll management data by setting CSS variable with scrollbar width."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { initScrollbarOffset } from '@dxtmisha/functional'

// Initialize on app load
await initScrollbarOffset() // sets --sys-scrollbar-offset in CSS
`})}),`
`,e.jsx(n.h2,{id:"setelementitem",children:e.jsx(n.code,{children:"setElementItem"})}),`
`,e.jsx(n.p,{children:"Sets element property value by key."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: ElementOrString<T>"})," — element to modify"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index: K | string"})," — property key to set"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — new value"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { setElementItem } from '@dxtmisha/functional'

setElementItem(input, 'value', 'new value')
setElementItem('#my-element', 'textContent', 'Hello World')
setElementItem(button, 'disabled', true)
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{h as default};
