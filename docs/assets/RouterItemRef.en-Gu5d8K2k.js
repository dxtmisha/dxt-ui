import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/RouterItemRef - Vue Router Management`}),`
`,(0,c.jsx)(t.h1,{id:`routeritemref-class`,children:`RouterItemRef Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Static facade for an installed Vue Router instance stored through `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. It resolves named routes to href properties and dispatches navigation.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Named links`}),` — preserves params, query, hash and router history base.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Registration`}),` — `,(0,c.jsx)(t.code,{children:`set()`}),` replaces, `,(0,c.jsx)(t.code,{children:`setOneTime()`}),` initializes only if absent.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Optional router`}),` — absent registration gives undefined links or empty href props.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`behavior-and-lifecycle`,children:`Behavior and lifecycle`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`rawToHref()`}),` accepts only object locations with a string `,(0,c.jsx)(t.code,{children:`name`}),`; path objects and URL strings return `,(0,c.jsx)(t.code,{children:`{}`}),`. Unknown registered route names may throw from Vue Router. `,(0,c.jsx)(t.code,{children:`push()`}),` returns `,(0,c.jsx)(t.code,{children:`void`}),` and does not expose the navigation promise; use the router directly when awaiting navigation or handling failures. Initialize request storage before SSR use.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = /*#__PURE__*/ createRouter({
  history: createMemoryHistory('/app/'),
  routes: [{ path: '/users/:id', name: 'user', component: { render: () => null } }]
})
RouterItemRef.set(router)
const href = /*#__PURE__*/ RouterItemRef.getHref('user', { id: 0 }, { page: 1 }, '#details')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`registration`,children:`Registration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`get(): Router`}),` — Returns the registered router; it may be absent at runtime.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`set(router: Router): void`}),` — Stores or replaces the router in the current context.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`setOneTime(router: Router): void`}),` — Registers the router only if no router has been stored.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`links-and-navigation`,children:`Links and navigation`}),`
`,(0,c.jsx)(t.h4,{id:`getlink`,children:(0,c.jsx)(t.code,{children:`getLink`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getLink( name: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string ): string | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Resolves a named location to `,(0,c.jsx)(t.code,{children:`router.resolve(...).href`}),`, or returns `,(0,c.jsx)(t.code,{children:`undefined`}),` without a router.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — Registered route name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: RouteParamsRawGeneric`}),` — Named-route parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: LocationQueryRaw`}),` — Route query parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hash?: string`}),` — Route fragment including its leading #.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — Requested string, or undefined when unavailable.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const link = /*#__PURE__*/ RouterItemRef.getLink('user', { id: 0 }, { page: 1 }, '#details')
`})}),`
`,(0,c.jsx)(t.h4,{id:`gethref`,children:(0,c.jsx)(t.code,{children:`getHref`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`getHref( name?: string, params?: RouteParamsRawGeneric, query?: LocationQueryRaw, hash?: string ): ConstrHrefProps`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns `,(0,c.jsx)(t.code,{children:`{ href }`}),` for a nonempty resolved link, otherwise `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — Registered route name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: RouteParamsRawGeneric`}),` — Named-route parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: LocationQueryRaw`}),` — Route query parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`hash?: string`}),` — Route fragment including its leading #.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ RouterItemRef.getHref('user', { id: 0 })
`})}),`
`,(0,c.jsx)(t.h4,{id:`rawtohref`,children:(0,c.jsx)(t.code,{children:`rawToHref`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`rawToHref( to?: string | RouteLocationRaw ): ConstrHrefProps`})}),`
`,(0,c.jsx)(t.p,{children:`Converts a named raw location to href props, retaining params, query and hash.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to?: string | RouteLocationRaw`}),` — Raw route location.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — The requested value or object as declared in the signature.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const props = /*#__PURE__*/ RouterItemRef.rawToHref({ name: 'user', params: { id: 0 }, hash: '#details' })
`})}),`
`,(0,c.jsx)(t.h4,{id:`push`,children:(0,c.jsx)(t.code,{children:`push`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`push(to: string | RouteLocationRaw): void`})}),`
`,(0,c.jsx)(t.p,{children:`Starts router navigation when a router is registered.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to: string | RouteLocationRaw`}),` — Raw route location.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`}),` — No return value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`RouterItemRef.push({ name: 'user', params: { id: 0 } })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};