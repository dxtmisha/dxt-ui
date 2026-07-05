import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/initPluginBasic - Basic Nitro Plugin Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`initpluginbasic`,children:(0,c.jsx)(n.code,{children:`initPluginBasic`})}),`
`,(0,c.jsx)(n.p,{children:`An initialization function for basic capabilities in a Nitro application. Currently, it is primarily responsible for configuring the API cache using the provided configuration.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_ : NitroApp`}),` — The Nitro application instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`config: NitroAppBasicConfig`}),` — The configuration object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`nitroappbasicconfig`,children:`NitroAppBasicConfig`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: object`}),` — API settings.`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheStorageKey: string`}),` — the key prefix to be used in Nitro storage for the cache (default `,(0,c.jsx)(n.code,{children:`Ui_ApiCache`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheStepAgeClearOld: number`}),` — the cache age threshold after which old entries will be removed.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initPluginBasic } from '@dxtmisha/nitro-basic'

export default defineNitroPlugin((nitroApp) => {
  initPluginBasic(nitroApp, {
    api: {
      cacheStorageKey: 'my_app_cache',
      cacheStepAgeClearOld: 3600000 // 1 hour
    }
  })
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};