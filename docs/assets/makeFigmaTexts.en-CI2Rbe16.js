import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/figma-code/Functions/makeFigmaTexts - Track text elements`}),`
`,(0,l.jsx)(t.h1,{id:`makefigmatexts`,children:(0,l.jsx)(t.code,{children:`makeFigmaTexts`})}),`
`,(0,l.jsxs)(t.p,{children:[`A utility for automating the tracking of selection changes in Figma. It sets up a global `,(0,l.jsx)(t.code,{children:`selectionchange`}),` event listener that collects text element data and screenshots of the current page, sending this information to the plugin's UI.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Parameters:`}),`
None.`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { makeFigmaTexts } from '@dxtmisha/figma-code'

// Initialization in the main part of the plugin (typically code.ts)
makeFigmaTexts()

// Now, every time the user changes the selection, 
// the UI will receive updated text data and screenshots.
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};