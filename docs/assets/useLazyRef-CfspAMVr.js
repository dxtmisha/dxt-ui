import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-Dqnce8mp.js";import{M as l}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"@dxtmisha/functional/en/Composables/useLazyRef"}),`
`,e.jsx(n.h1,{id:"composable-uselazyref",children:"Composable useLazyRef"}),`
`,e.jsx(n.p,{children:"Composable for tracking element visibility on screen using Intersection Observer API. Provides efficient lazy loading and rendering of components only when they become visible in the viewport. Perfect for optimizing performance with long lists, images, and heavy components."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Visibility tracking"})," — automatic detection when element appears in viewport"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Intersection Observer API"})," — uses native browser API for efficient tracking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic cleanup"})," — removes observers when components unmount"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reactive status"})," — returns reactive variable with visibility state"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Configurable margins"})," — supports rootMargin for content preloading"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple elements"})," — manages tracking of multiple elements simultaneously"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Graceful degradation"})," — works without IntersectionObserver in older browsers"]}),`
`]}),`
`,e.jsx(n.h2,{id:"function",children:"Function"}),`
`,e.jsx(n.h3,{id:"uselazyref",children:e.jsx(n.code,{children:"useLazyRef"})}),`
`,e.jsx(n.p,{children:"Creates an instance for tracking element visibility on screen."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," object with methods:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"intersectionObserver: IntersectionObserver | undefined"})," — observer instance"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"addLazyItem: (element: Ref<HTMLElement>) => ShallowRef<boolean>"})," — add element for tracking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"removeLazyItem: (element?: HTMLElement) => void"})," — remove element from tracking"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disconnectLazy: () => void"})," — disconnect all observers"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useLazyRef } from '@dxtmisha/functional'

// Create instance
const lazy = useLazyRef()

// Access methods
const isVisible = lazy.addLazyItem(elementRef)
lazy.removeLazyItem(element)
lazy.disconnectLazy()
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"addlazyitem",children:e.jsx(n.code,{children:"addLazyItem"})}),`
`,e.jsx(n.p,{children:"Adds element to track its visibility on screen."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element: Ref<HTMLElement>"})," — reactive reference to HTML element"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ShallowRef<boolean>"})," — reactive variable with visibility status"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const lazy = useLazyRef()
const imageRef = ref(null)

// Add element for tracking
const isVisible = lazy.addLazyItem(imageRef)

// isVisible.value === true when element is visible
// isVisible.value === false when element is not visible

// In older browsers without IntersectionObserver
// isVisible.value === true immediately (fallback)
`})}),`
`,e.jsx(n.h3,{id:"removelazyitem",children:e.jsx(n.code,{children:"removeLazyItem"})}),`
`,e.jsx(n.p,{children:"Removes element from tracking and cleans up resources."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"element?: HTMLElement"})," — HTML element to remove"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const element = document.getElementById('my-element')

// Remove element from tracking
lazy.removeLazyItem(element)
`})}),`
`,e.jsx(n.h3,{id:"disconnectlazy",children:e.jsx(n.code,{children:"disconnectLazy"})}),`
`,e.jsx(n.p,{children:"Disconnects all observers and stops tracking all elements."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Parameters:"})," none"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Complete cleanup on unmount
onBeforeUnmount(() => {
  lazy.disconnectLazy()
})
`})}),`
`,e.jsx(n.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,e.jsx(n.h3,{id:"lazy-image-loading",children:"Lazy Image Loading"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const imageRef = ref(null)
    const imageLoaded = ref(false)

    const isVisible = lazy.addLazyItem(imageRef)

    watch(isVisible, (visible) => {
      if (visible && !imageLoaded.value) {
        imageLoaded.value = true
      }
    })

    return { imageRef, imageLoaded }
  }
}

// Template:
// <div ref="imageRef">
//   <img v-if="imageLoaded" src="/path/to/image.jpg" />
//   <div v-else class="placeholder">Loading...</div>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"infinite-scroll",children:"Infinite Scroll"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const items = ref([1, 2, 3, 4, 5])
    const sentinelRef = ref(null)
    const loading = ref(false)

    const isSentinelVisible = lazy.addLazyItem(sentinelRef)

    watch(isSentinelVisible, async (visible) => {
      if (visible && !loading.value) {
        loading.value = true
        await new Promise(resolve => setTimeout(resolve, 1000))
        items.value.push(items.value.length + 1)
        loading.value = false
      }
    })

    return { items, sentinelRef, loading }
  }
}

// Template:
// <div>
//   <div v-for="item in items" :key="item">Item {{ item }}</div>
//   <div ref="sentinelRef" class="sentinel">
//     <div v-if="loading">Loading...</div>
//   </div>
// </div>
`})}),`
`,e.jsx(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),`
`,e.jsx(n.h3,{id:"tracking-multiple-elements",children:"Tracking Multiple Elements"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, onBeforeUnmount } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const items = ref([
      { id: 1, ref: ref(null), visible: null },
      { id: 2, ref: ref(null), visible: null },
      { id: 3, ref: ref(null), visible: null }
    ])

    // Add each element for tracking
    items.value.forEach(item => {
      item.visible = lazy.addLazyItem(item.ref)
    })

    onBeforeUnmount(() => {
      lazy.disconnectLazy()
    })

    return { items }
  }
}

// Template:
// <div v-for="item in items" :key="item.id">
//   <div :ref="item.ref">
//     <div v-if="item.visible.value">
//       Content for item {{ item.id }}
//     </div>
//     <div v-else class="placeholder">...</div>
//   </div>
// </div>
`})}),`
`,e.jsx(n.h3,{id:"conditional-element-removal",children:"Conditional Element Removal"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const elementRef = ref(null)
    const showElement = ref(true)

    const isVisible = lazy.addLazyItem(elementRef)

    // Remove from tracking when hiding
    watch(showElement, (show) => {
      if (!show && elementRef.value) {
        lazy.removeLazyItem(elementRef.value)
      }
    })

    return {
      elementRef,
      showElement,
      isVisible
    }
  }
}
`})}),`
`,e.jsx(n.h3,{id:"preloading-with-rootmargin",children:"Preloading with rootMargin"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Default rootMargin: '128px 0px'
// Elements start tracking 128px before entering viewport

const lazy = useLazyRef()
const imageRef = ref(null)

// Image will start loading 128px before visibility
const isVisible = lazy.addLazyItem(imageRef)

console.log('rootMargin provides smooth preloading')
`})}),`
`,e.jsx(n.h2,{id:"handling-missing-intersectionobserver",children:"Handling Missing IntersectionObserver"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useLazyRef } from '@dxtmisha/functional'

const lazy = useLazyRef()

// Check API availability
if (lazy.intersectionObserver) {
  console.log('IntersectionObserver available')
  // Use lazy loading
} else {
  console.log('IntersectionObserver not supported')
  // isVisible will always be true (fallback)
}

const elementRef = ref(null)
const isVisible = lazy.addLazyItem(elementRef)

// In older browsers isVisible.value === true immediately
// Content loads immediately (graceful degradation)
`})}),`
`,e.jsx(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),`
`,e.jsx(n.h3,{id:"lazy-loading-in-lists",children:"Lazy Loading in Lists"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ref } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

export default {
  setup() {
    const lazy = useLazyRef()
    const products = ref([
      { id: 1, name: 'Product 1', image: '/img1.jpg' },
      { id: 2, name: 'Product 2', image: '/img2.jpg' },
      // ... 100 more products
    ])

    // Create refs for each product
    const productRefs = ref(products.value.map(() => ({
      element: ref(null),
      visible: null
    })))

    // Track visibility of each product
    productRefs.value.forEach(item => {
      item.visible = lazy.addLazyItem(item.element)
    })

    return {
      products,
      productRefs
    }
  }
}

// Template:
// <div v-for="(product, index) in products" :key="product.id">
//   <div :ref="productRefs[index].element">
//     <template v-if="productRefs[index].visible.value">
//       <img :src="product.image" :alt="product.name" />
//       <h3>{{ product.name }}</h3>
//     </template>
//     <div v-else class="product-skeleton">Loading...</div>
//   </div>
// </div>
`})})]})}function u(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{u as default};
