import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Functions/getFigmaFrameById - Get FigmaFrame by ID`}),`
`,(0,c.jsx)(t.h1,{id:`getfigmaframebyid`,children:(0,c.jsx)(t.code,{children:`getFigmaFrameById`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns a `,(0,c.jsx)(t.code,{children:`FigmaFrame`}),` object by its identifier.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — The identifier (ID) of the Figma node.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<FigmaFrame | undefined>`}),` — A `,(0,c.jsx)(t.code,{children:`FigmaFrame`}),` object or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the node was not found.`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getFigmaFrameById } from '@dxtmisha/figma-code'

async function analyzeFrame(frameId: string) {
  const frame = await getFigmaFrameById(frameId)

  if (frame) {
    const info = await frame.getMainItemsInfo()
    console.log('Main items in frame:', info)
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};