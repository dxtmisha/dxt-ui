import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/initPluginBasic - Basic Nitro Plugin Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`initpluginbasic`,children:(0,c.jsx)(t.code,{children:`initPluginBasic`})}),`
`,(0,c.jsx)(t.p,{children:`An initialization function for basic capabilities in a Nitro application. Currently, it is primarily responsible for configuring the API cache using the provided configuration.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`_ : NitroApp`}),` — The Nitro application instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config: NitroAppBasicConfig`}),` — The configuration object.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`nitroappbasicconfig`,children:`NitroAppBasicConfig`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: object`}),` — API settings.`,`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStorageKey: string`}),` — the key prefix to be used in Nitro storage for the cache (default `,(0,c.jsx)(t.code,{children:`Ui_ApiCache`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`cacheStepAgeClearOld: number`}),` — the cache age threshold after which old entries will be removed.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initPluginBasic } from '@dxtmisha/nitro-basic'

export default defineNitroPlugin((nitroApp) => {
  initPluginBasic(nitroApp, {
    api: {
      cacheStorageKey: 'my_app_cache',
      cacheStepAgeClearOld: 3600000 // 1 hour
    }
  })
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};