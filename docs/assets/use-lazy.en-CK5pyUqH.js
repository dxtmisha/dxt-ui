import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/# Lazy Element Loading`}),`
`,(0,c.jsx)(n.h1,{id:`element-visibility-tracking-lazy-loading`,children:`Element Visibility Tracking (Lazy Loading)`}),`
`,(0,c.jsxs)(n.p,{children:[`This family of hooks provides a highly performant wrapper around the native browser `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` API. They are used to track when DOM elements enter the visible viewport (or a specified margin area).`]}),`
`,(0,c.jsx)(n.p,{children:`Main use cases:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lazy loading images`}),`: Load heavy assets only when the user scrolls close to them.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Infinite Scrolling`}),`: Fetch new data when nearing the end of a list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Scroll animations`}),`: Trigger visual effects exactly when a block becomes visible.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`features-and-which-hook-to-choose`,children:`Features and Which Hook to Choose?`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`useLazyItemByMarginRef`}),` (Recommended)`]}),`: A "smart" singleton hook. It `,(0,c.jsx)(n.strong,{children:`reuses`}),` the exact same `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` instance for all elements that share identical `,(0,c.jsx)(n.code,{children:`rootMargin`}),` settings. This drastically reduces memory and CPU consumption. If your page has 1,000 lazy images, it creates just 1 shared observer instead of 1,000.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[(0,c.jsx)(n.code,{children:`useLazyRef`}),` (For complex tasks)`]}),`: The low-level base hook. It strictly creates an `,(0,c.jsx)(n.strong,{children:`individual`}),` `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` scoped to your task. Useful when you need specific configurations (like complex `,(0,c.jsx)(n.code,{children:`threshold`}),` arrays, a custom `,(0,c.jsx)(n.code,{children:`root`}),` element) or complete manual control over the observer's lifecycle via the `,(0,c.jsx)(n.code,{children:`disconnect`}),` method.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,c.jsxs)(n.h3,{id:`1-mass-element-tracking-uselazyitembymarginref`,children:[`1. Mass Element Tracking (`,(0,c.jsx)(n.code,{children:`useLazyItemByMarginRef`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`The most common approach. Pass your element ref and the desired viewport margin (when the trigger should fire). Returns a reactive visibility flag.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<script setup lang="ts">
import { ref } from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

const imageRef = ref<HTMLElement>()

// '128px' means the status becomes true 
// when the element is 128px away from entering the viewport.
const { lazyItemStatus } = useLazyItemByMarginRef(imageRef, '128px')
<\/script>

<template>
  <!-- Render heavy content only when we get close -->
  <img 
    ref="imageRef" 
    :src="lazyItemStatus ? 'heavy-image.jpg' : 'placeholder.jpg'" 
  />
</template>
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-isolated-observer-uselazyref`,children:[`2. Isolated Observer (`,(0,c.jsx)(n.code,{children:`useLazyRef`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Used for fine-grained tasks requiring specific `,(0,c.jsx)(n.code,{children:`IntersectionObserver`}),` configurations.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const myContainer = ref<HTMLElement>()

// 1. Create a unique observer
const observer = useLazyRef({
  root: document.getElementById('scrollable-area'),
  rootMargin: '0px',
  threshold: [0, 0.5, 1.0] // Track every 50% visibility stage
})

// 2. Add an element to watch
const isVisible = observer.addLazyItem(myContainer)

// 3. You can extract raw IntersectionObserverEntry data:
// observer.getItem(myContainer.value)

// 4. Manual cleanup if necessary:
// observer.removeLazyItem(myContainer.value)
// observer.disconnectLazy()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};