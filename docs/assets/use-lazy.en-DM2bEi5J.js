import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/# Lazy Element Loading`}),`
`,(0,c.jsx)(t.h1,{id:`element-visibility-tracking-lazy-loading`,children:`Element Visibility Tracking (Lazy Loading)`}),`
`,(0,c.jsxs)(t.p,{children:[`This family of hooks provides a highly performant wrapper around the native browser `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` API. They are used to track when DOM elements enter the visible viewport (or a specified margin area).`]}),`
`,(0,c.jsx)(t.p,{children:`Main use cases:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lazy loading images`}),`: Load heavy assets only when the user scrolls close to them.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Infinite Scrolling`}),`: Fetch new data when nearing the end of a list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Scroll animations`}),`: Trigger visual effects exactly when a block becomes visible.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`features-and-which-hook-to-choose`,children:`Features and Which Hook to Choose?`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`}),` (Recommended)`]}),`: A "smart" singleton hook. It `,(0,c.jsx)(t.strong,{children:`reuses`}),` the exact same `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` instance for all elements that share identical `,(0,c.jsx)(t.code,{children:`rootMargin`}),` settings. This drastically reduces memory and CPU consumption. If your page has 1,000 lazy images, it creates just 1 shared observer instead of 1,000.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`useLazyRef`}),` (For complex tasks)`]}),`: The low-level base hook. It strictly creates an `,(0,c.jsx)(t.strong,{children:`individual`}),` `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` scoped to your task. Useful when you need specific configurations (like complex `,(0,c.jsx)(t.code,{children:`threshold`}),` arrays, a custom `,(0,c.jsx)(t.code,{children:`root`}),` element) or complete manual control over the observer's lifecycle via the `,(0,c.jsx)(t.code,{children:`disconnect`}),` method.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-examples`,children:`Usage Examples`}),`
`,(0,c.jsxs)(t.h3,{id:`1-mass-element-tracking-uselazyitembymarginref`,children:[`1. Mass Element Tracking (`,(0,c.jsx)(t.code,{children:`useLazyItemByMarginRef`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`The most common approach. Pass your element ref and the desired viewport margin (when the trigger should fire). Returns a reactive visibility flag.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<script setup lang="ts">
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
`,(0,c.jsxs)(t.h3,{id:`2-isolated-observer-uselazyref`,children:[`2. Isolated Observer (`,(0,c.jsx)(t.code,{children:`useLazyRef`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Used for fine-grained tasks requiring specific `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` configurations.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};