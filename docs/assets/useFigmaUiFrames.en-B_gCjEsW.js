import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-ref/Composables/useFigmaUiFrames - Observing top-level frames`}),`
`,(0,c.jsx)(n.h1,{id:`usefigmauiframes`,children:(0,c.jsx)(n.code,{children:`useFigmaUiFrames`})}),`
`,(0,c.jsx)(n.p,{children:`A composable for retrieving and observing the list of top-level frames and sections from the current Figma page. It uses global caching to ensure data consistency across multiple component instances.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Returns:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`frames: ComputedRef<UiFigmaFramesList>`}),` — A computed reference to the list of top-level frames (names, IDs, and screenshots).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`loading: ComputedRef<boolean>`}),` — A reactive flag indicating if the frame list is being fetched.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

// 'frames' contains a list of frame objects with visual previews
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};