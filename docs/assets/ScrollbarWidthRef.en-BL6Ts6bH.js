import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Classes/ScrollbarWidthRef - Scrollbar Width`}),`
`,(0,c.jsx)(n.h1,{id:`class-scrollbarwidthref`,children:`Class ScrollbarWidthRef`}),`
`,(0,c.jsx)(n.p,{children:`A reactive wrapper around the base utility for determining scrollbar parameters. The class allows for tracking both the presence of a scrollbar (its type) and its actual width in pixels. This is critical for preventing layout shifts when a scrollbar is hidden or shown, such as when opening modal windows.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactivity`}),` — automatic update of `,(0,c.jsx)(n.code,{children:`item`}),` and `,(0,c.jsx)(n.code,{children:`width`}),` values when data is received from the browser.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Calculation`}),` — the class independently initiates a scrollbar width measurement immediately after instance creation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Readiness State`}),` — the existence of the computed property `,(0,c.jsx)(n.code,{children:`is`}),` allows for safe data usage only after initialization.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cross-platform`}),` — correctly identifies "thin" and auto-hiding scrollbars (macOS, mobile devices).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a new instance of `,(0,c.jsx)(n.code,{children:`ScrollbarWidthRef`}),` and starts the asynchronous process of measuring the scrollbar width.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:`None`})}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()
`})}),`
`,(0,c.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,c.jsx)(n.h3,{id:`state`,children:`State`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: Ref<boolean | undefined>`}),` — Flag determining the result of the `,(0,c.jsx)(n.code,{children:`ScrollbarWidth.is()`}),` check. Returns `,(0,c.jsx)(n.code,{children:`true`}),` if the scrollbar is considered "special" (e.g., auto-hiding in macOS or mobile, where the width is typically `,(0,c.jsx)(n.code,{children:`<= 8px`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`width: Ref<number>`}),` — The actual width of the scrollbar in pixels. Defaults to `,(0,c.jsx)(n.code,{children:`0`}),`. Updated asynchronously after measurement.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is: Computed<boolean>`}),` — Returns `,(0,c.jsx)(n.code,{children:`true`}),` when the width calculation is complete and the `,(0,c.jsx)(n.code,{children:`item`}),` and `,(0,c.jsx)(n.code,{children:`width`}),` values are up-to-date.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`dynamic-scroll-compensation-in-css`,children:`Dynamic Scroll Compensation in CSS`}),`
`,(0,c.jsx)(n.p,{children:`Using reactive width to create a CSS variable that compensates for offset when scrolling is blocked.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<template>
  <div :style="style" class="container">
    Content with dynamic offset
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

// Calculate the variable only after the width is determined
const style = computed(() => ({
  '--scrollbar-width': scrollbar.is.value ? \`\${scrollbar.width.value}px\` : '0px'
}))
<\/script>

<style scoped>
.container {
  /* Example usage for right padding */
  padding-right: var(--scrollbar-width);
}
</style>
`})}),`
`,(0,c.jsx)(n.h3,{id:`tracking-scrollbar-type`,children:`Tracking Scrollbar Type`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { watch } from 'vue'
import { ScrollbarWidthRef } from '@dxtmisha/functional'

const scrollbar = new ScrollbarWidthRef()

watch(() => scrollbar.is.value, (ready) => {
  if (ready) {
    if (scrollbar.item.value) {
      console.log('System/auto-hiding scrollbar is being used')
    } else {
      console.log(\`Standard scrollbar with width \${scrollbar.width.value}px\`)
    }
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};