import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaUiFrames - List of top-level frames`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiframes`,children:(0,c.jsx)(n.code,{children:`useFigmaUiFrames`})}),`
`,(0,c.jsx)(n.p,{children:`Composable for managing and observing the list of top-level frames in the Figma UI. It simplifies the process of fetching and accessing frame data with a built-in loading state.`}),`
`,(0,c.jsx)(n.h2,{id:`returns`,children:`Returns`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frames: ComputedRef<UiFigmaFramesList>`}),` — a reactive list of top-level frames. Automatically updates when data is received.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ShallowRef<boolean>`}),` — a reactive flag indicating whether the frames are currently being fetched from the Figma plugin.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`how-to-work-with-it`,children:`How to work with it`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` handles the lifecycle of frame data fetching:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lazy Initialization`}),`: The composable checks if the frames have already been loaded into the global `,(0,c.jsx)(n.code,{children:`item`}),` cache. If not, it automatically initiates the fetch process.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Loading State Management`}),`: While the fetch operation is in progress, the `,(0,c.jsx)(n.code,{children:`loading`}),` property is set to `,(0,c.jsx)(n.code,{children:`true`}),`. This allows the UI to display spinners or skeleton screens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Reactive Updates`}),`: Once `,(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`}),` completes, the internal cache is updated, `,(0,c.jsx)(n.code,{children:`loading`}),` returns to `,(0,c.jsx)(n.code,{children:`false`}),`, and the `,(0,c.jsx)(n.code,{children:`frames`}),` computed property notifies all subscribers of the new data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Caching`}),`: The frames are stored in a module-level variable, meaning subsequent calls to `,(0,c.jsx)(n.code,{children:`useFigmaUiFrames`}),` across different components will share the same data and won't trigger redundant fetch requests.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`core-architecture`,children:`Core Architecture`}),`
`,(0,c.jsxs)(n.p,{children:[`The composable acts as a reactive wrapper around the `,(0,c.jsx)(n.code,{children:`fetchTopLevelFrames`}),` utility. It manages a singleton-like state for frames, ensuring consistent data across the application while providing local reactivity for loading states.`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

// Use loading to show a progress indicator
if (loading.value) {
  console.log('Fetching frames...')
}

// Use frames to render the list
console.log('Frames:', frames.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};