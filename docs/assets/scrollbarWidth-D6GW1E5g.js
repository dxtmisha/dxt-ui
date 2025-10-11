import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Dqnce8mp.js";import{M as s}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/functional/en/Classes/ScrollbarWidth"}),`
`,n.jsx(e.h1,{id:"scrollbarwidth-class",children:"ScrollbarWidth Class"}),`
`,n.jsx(e.p,{children:"A static class for determining browser scrollbar width with DataStorage integration for persistent caching. Provides methods for accurate scrollbar measurement and determining the need to hide it."}),`
`,n.jsx(e.h2,{id:"key-features",children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accurate Measurement"})," — determines real scrollbar width through DOM testing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Persistent Caching"})," — saves result through DataStorage"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Hide Necessity Detection"})," — automatic check for thin scrollbars"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Repeated Calculation Protection"})," — blocks parallel measurements"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DOM Safety"})," — creates temporary elements for measurement"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Automatic Cleanup"})," — removes test elements after measurement"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"requestAnimationFrame"})," — non-blocking measurement in next frame"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Static API"})," — simple interface without need to create instances"]}),`
`]}),`
`,n.jsx(e.h2,{id:"static-methods",children:"Static Methods"}),`
`,n.jsx(e.h3,{id:"is",children:n.jsx(e.code,{children:"is"})}),`
`,n.jsx(e.p,{children:"Checks whether to enable scroll hiding (for thin scrollbars)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"Promise<boolean>"})," — true if scroll should be hidden (width ≤ 8px)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional'

// Check if scrollbar should be hidden
const shouldHide = await ScrollbarWidth.is()

if (shouldHide) {
  // Scrollbar is thin (≤ 8px), can be hidden
  document.body.classList.add('hide-scrollbar')
} else {
  // Scrollbar is wide, better keep it visible
  document.body.classList.remove('hide-scrollbar')
}

// Usage in CSS
// .hide-scrollbar { scrollbar-width: none; }
`})}),`
`,n.jsx(e.h3,{id:"get",children:n.jsx(e.code,{children:"get"})}),`
`,n.jsx(e.p,{children:"Returns scrollbar width, measuring on first call."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"})," ",n.jsx(e.code,{children:"Promise<number>"})," — scrollbar width in pixels (-1 if not measured)"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ScrollbarWidth } from '@dxtmisha/functional'

// Get scrollbar width
const width = await ScrollbarWidth.get()
console.log(\`Scrollbar width: \${width}px\`)

// First call will perform measurement and save to DataStorage
// Subsequent calls return cached value

// Use for width compensation
async function compensateScrollbar() {
  const scrollbarWidth = await ScrollbarWidth.get()

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = \`\${scrollbarWidth}px\`
  }
}
`})}),`
`,n.jsx(e.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,n.jsx(e.h3,{id:"automatic-thin-scrollbar-hiding",children:"Automatic Thin Scrollbar Hiding"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// Initialize on page load
async function initScrollbarBehavior() {
  const shouldHideScrollbar = await ScrollbarWidth.is()

  if (shouldHideScrollbar) {
    document.documentElement.style.setProperty('scrollbar-width', 'none')
    console.log('Thin scrollbar hidden for better UX')
  }
}

// Call on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initScrollbarBehavior)
`})}),`
`,n.jsx(e.h3,{id:"modal-windows-with-compensation",children:"Modal Windows with Compensation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class ModalManager {
  async openModal() {
    const scrollbarWidth = await ScrollbarWidth.get()

    // Hide scroll and compensate width
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = \`\${scrollbarWidth}px\`
    }
  }

  closeModal() {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}
`})}),`
`,n.jsx(e.h3,{id:"adaptive-layout",children:"Adaptive Layout"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// CSS variables based on scrollbar width
async function setupScrollbarCSS() {
  const width = await ScrollbarWidth.get()
  const shouldHide = await ScrollbarWidth.is()

  document.documentElement.style.setProperty(
    '--scrollbar-width',
    \`\${width}px\`
  )

  document.documentElement.style.setProperty(
    '--scrollbar-display',
    shouldHide ? 'none' : 'auto'
  )
}
`})}),`
`,n.jsx(e.p,{children:"The ScrollbarWidth class provides a reliable solution for determining scrollbar characteristics and making decisions about its display to create optimal user experience."})]})}function m(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{m as default};
