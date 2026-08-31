import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Classes/RouterItemRef - Vue Router Management`}),`
`,(0,c.jsx)(t.h1,{id:`routeritemref-class`,children:`RouterItemRef Class`}),`
`,(0,c.jsx)(t.p,{children:`The static core for working with Vue Router in the functional layer. It provides a single entry point to the router, allowing for link generation, navigation, and path normalization without direct dependency on the component context.`}),`
`,(0,c.jsxs)(t.p,{children:[`This enables the use of router capabilities in classes and utilities where `,(0,c.jsx)(t.code,{children:`useRouter`}),` or `,(0,c.jsx)(t.code,{children:`useRoute`}),` hooks are not available.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Access`}),` — saves the router instance for access from anywhere in the application.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Safe Generation`}),` — methods for creating links by route names with parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Normalization`}),` — converts various path formats into standard `,(0,c.jsx)(t.code,{children:`href`}),` properties.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage-setup`,children:`Usage (Setup)`}),`
`,(0,c.jsxs)(t.p,{children:[`Since `,(0,c.jsx)(t.code,{children:`RouterItemRef`}),` is a static class, it must be initialized once during application creation (usually in `,(0,c.jsx)(t.code,{children:`main.ts`}),` or in a plugin).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

// Set the router for global use
RouterItemRef.set(router)
`})}),`
`,(0,c.jsx)(t.h2,{id:`instance-management`,children:`Instance Management`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(): Router | undefined`}),` — Returns the currently set router instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static set(router: Router): void`}),` — Sets the router instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static setOneTime(router: Router): void`}),` — Sets the router instance only if it hasn't been set yet. Useful for preventing accidental overwrites in plugins.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`navigation-and-links`,children:`Navigation and Links`}),`
`,(0,c.jsx)(t.p,{children:`A group of methods for managing navigation history and URL generation.`}),`
`,(0,c.jsx)(t.h3,{id:`push`,children:(0,c.jsx)(t.code,{children:`push`})}),`
`,(0,c.jsxs)(t.p,{children:[`Performs programmatic navigation to the specified route. It is a safe wrapper over `,(0,c.jsx)(t.code,{children:`router.push`}),`. If the router is not yet set, the action will be ignored.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to: string | RouteLocationRaw`}),` — target path or route location object.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`getlink`,children:(0,c.jsx)(t.code,{children:`getLink`})}),`
`,(0,c.jsxs)(t.p,{children:[`Generates and returns a string URL (href) for a route based on its name and parameters. Uses the `,(0,c.jsx)(t.code,{children:`router.resolve`}),` method.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — unique route name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: any`}),` — dynamic path parameters (params).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: any`}),` — query string parameters (query).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`string | undefined`}),` — the generated URL or `,(0,c.jsx)(t.code,{children:`undefined`}),` if the router is not initialized.`]}),`
`,(0,c.jsx)(t.h3,{id:`gethref`,children:(0,c.jsx)(t.code,{children:`getHref`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns a standardized link properties object. Useful for passing to components expecting `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — route name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`params?: any`}),` — path parameters.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`query?: any`}),` — query parameters.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — an `,(0,c.jsx)(t.code,{children:`{ href: string }`}),` object or `,(0,c.jsx)(t.code,{children:`{}`}),` (empty object) if no name is provided.`]}),`
`,(0,c.jsx)(t.h3,{id:`rawtohref`,children:(0,c.jsx)(t.code,{children:`rawToHref`})}),`
`,(0,c.jsxs)(t.p,{children:[`A special normalization method. Converts a location object (if it contains a `,(0,c.jsx)(t.code,{children:`name`}),`) into a link properties object.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`to?: string | RouteLocationRaw`}),` — raw route data.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`ConstrHrefProps`}),` — the result of `,(0,c.jsx)(t.code,{children:`getHref`}),` or `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`generating-a-link-in-code`,children:`Generating a Link in Code`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'

// Get URL for user profile page
const userUrl = RouterItemRef.getLink('user-profile', { id: 123 })
// Result: '/user/123' (depending on router configuration)

// Use for component properties
const linkProps = RouterItemRef.getHref('catalog', undefined, { category: 'electronics' })
// Result: { href: '/catalog?category=electronics' }
`})}),`
`,(0,c.jsx)(t.h3,{id:`programmatic-navigation`,children:`Programmatic Navigation`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { RouterItemRef } from '@dxtmisha/functional'

const logout = () => {
    // Navigate to the home page after logout
    RouterItemRef.push({ name: 'home' })
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};