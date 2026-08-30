import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Composables/useLazyRef - Lazy loading`}),`
`,(0,c.jsx)(t.h1,{id:`uselazyref`,children:(0,c.jsx)(t.code,{children:`useLazyRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Composable for initializing the tracking of an element's appearance on the screen using `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options?: IntersectionObserverInit`}),` — options for `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),`. Default: `,(0,c.jsx)(t.code,{children:`{ rootMargin: '128px 0px' }`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`intersectionObserver: IntersectionObserver | undefined`}),` — the `,(0,c.jsx)(t.code,{children:`IntersectionObserver`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(element: HTMLElement): LazyItem | undefined`}),` — returns a tracked element's data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>`}),` — adds an element for tracking and returns its visibility status ref.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`removeLazyItem(element?: HTMLElement): void`}),` — removes an element from tracking.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`disconnectLazy(): void`}),` — stops all tracking and disconnects the observer.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref, watch } from 'vue'
import { useLazyRef } from '@dxtmisha/functional'

const element = ref<HTMLElement>()
const { addLazyItem } = useLazyRef({ rootMargin: '200px' })

const isVisible = addLazyItem(element)

watch(isVisible, (visible) => {
  if (visible) {
    console.log('Element is now visible!')
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};