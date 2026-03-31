import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/# DOM & Elements`}),`
`,(0,c.jsx)(n.h1,{id:`dom--elements`,children:`DOM & Elements`}),`
`,(0,c.jsx)(n.p,{children:`A set of utilities for simplifying work with the DOM tree. Includes methods for safe element lookup, dynamic node creation with attributes, smart scrolling, and checking object states within the browser environment.`}),`
`,(0,c.jsx)(n.h2,{id:`retrieval-and-lookup`,children:`Retrieval and Lookup`}),`
`,(0,c.jsx)(n.p,{children:`Functions for extracting elements by selectors or references with automatic runtime environment checks.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { getElement, domQuerySelector } from '@dxtmisha/functional-basic'

// 1. Get an element by selector or reference
const container = getElement('#app')

// 2. Search within a specific parent (scoped search)
const button = domQuerySelector('.btn-submit', container)
`})}),`
`,(0,c.jsx)(n.h2,{id:`creation-and-attributes`,children:`Creation and Attributes`}),`
`,(0,c.jsx)(n.p,{children:`A convenient way to generate HTML structures and manage their properties without using bulky native APIs.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { createElement, setElementItem } from '@dxtmisha/functional-basic'

// 1. Create a div element inside #app with attributes
const el = createElement(document.getElementById('app'), 'div', {
  className: 'p-4 active',
  innerHTML: '<span>Hello World</span>',
  id: 'dynamic-node'
})

// 2. Set/update element properties
setElementItem(el, 'title', 'Hover tooltip')
`})}),`
`,(0,c.jsx)(n.h2,{id:`navigation-and-scrolling`,children:`Navigation and Scrolling`}),`
`,(0,c.jsx)(n.p,{children:`Utilities for managing container scrolling and ensuring element visibility.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { goScrollTo, goScrollSmooth } from '@dxtmisha/functional-basic'

const list = getElement('.scroll-container')
const item = getElement('.target-item')

// 1. Scroll container to a specific element
goScrollTo(list, item, 'smooth')

// 2. Smooth scroll the page to the top
goScrollSmooth(0)
`})}),`
`,(0,c.jsx)(n.h2,{id:`state-checks`,children:`State Checks`}),`
`,(0,c.jsx)(n.p,{children:`Helper functions for determining element types and their presence in the current document.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { isInDom, isElementVisible, isInput } from '@dxtmisha/functional-basic'

// 1. Check if an element is mounted in the DOM
if (isInDom(el)) {
  console.log('Element is in the DOM tree')
}

// 2. Check if an element is visible (not hidden by CSS)
if (isElementVisible(el)) {
  console.log('Element is visible to the user')
}

// 3. Check if a node is an input field
if (isInput(el)) {
  el.focus()
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};