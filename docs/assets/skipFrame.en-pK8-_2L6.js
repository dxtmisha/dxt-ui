import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/skipFrame - Skip animation frames`}),`
`,(0,c.jsx)(t.h1,{id:`skipframe`,children:(0,c.jsx)(t.code,{children:`skipFrame`})}),`
`,(0,c.jsxs)(t.p,{children:[`An asynchronous utility that skips the specified number of animation frames (`,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),`) or executes a callback within them.`]}),`
`,(0,c.jsx)(t.p,{children:`It is useful for waiting for DOM updates and browser repaints before executing subsequent operations (e.g., measuring element dimensions or preparing rendering), as well as running code on a specific animation frame.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`SSR Behavior:`}),`
In non-DOM environments (such as SSR), `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` is not used. The function resolves immediately without calling `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` to prevent thread blocking on the server.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: () => T | Promise<T>`}),` — Optional callback function to execute on the target animation frame.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`count?: number = 1`}),` — The number of animation frames to skip (default is `,(0,c.jsx)(t.code,{children:`1`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T | void>`}),` — A promise resolving on the animation frame with the callback result (or `,(0,c.jsx)(t.code,{children:`undefined`}),` if no callback was provided).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { skipFrame } from '@dxtmisha/functional-basic'

// Wait for the next animation frame (1 frame by default)
await skipFrame()

// Skip multiple frames (e.g. 2 frames)
await skipFrame(undefined, 2)

// Execute a callback after skipping frames
const result = await skipFrame(() => {
  return document.getElementById('box')?.getBoundingClientRect()
}, 2)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};