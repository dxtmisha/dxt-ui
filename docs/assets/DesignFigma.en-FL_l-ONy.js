import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/scripts/Classes/DesignFigma - Figma Layout Integrator Class`}),`
`,(0,c.jsx)(t.h1,{id:`designfigma-class`,children:`DesignFigma Class`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` class provides the core controller behavior for connecting to Figma's REST API and extracting layout coordinates and vector image structures. It abstracts token authorization and simplifies batch node image requests into clean, async workflows.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Warning`}),`: A corporate Figma subscription (Figma Enterprise or Organization) is strictly required to utilize this class and communicate with the Figma target endpoints.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Decoupled API Authorizer`}),` — automatically falls back to system properties to retrieve active Figma tokens.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SVG Generation Options`}),` — requests nodes with preserved ID tags and outline text parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Network Execution`}),` — handles network errors and API limitations gracefully, returning clean, undefined fallbacks.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Initialize a new `,(0,c.jsx)(t.code,{children:`DesignFigma`}),` instance with the required Figma file credentials.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileKey: string`}),` — The unique ID of the target Figma file.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`nodeId?: string`}),` — The specific node ID inside the file to target.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`token?: string`}),` — Optional Figma API token. Defaults to `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getFigmaToken()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignFigma } from '@dxtmisha/scripts'

const integrator = new DesignFigma('abc123xyz456', '1-24')
await integrator.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsx)(t.p,{children:`The main orchestrator method that triggers vector asset retrieval and logs the output mapping to the console.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`await integrator.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`initimage`,children:(0,c.jsx)(t.code,{children:`initImage`})}),`
`,(0,c.jsx)(t.p,{children:`Requests vector layout image URLs from the Figma API for the specified node IDs in SVG format.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<Record<string, string> | undefined>`}),` — A promise that resolves to an object mapping node IDs to their respective SVG URLs, or `,(0,c.jsx)(t.code,{children:`undefined`}),` on error.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const images = await integrator.initImage()
console.log(images) // { "1-24": "https://..." }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};