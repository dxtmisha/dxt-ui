import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional/Classes/RouterItemRef - Vue Router Management"}),`
`,e.jsx(n.h1,{id:"routeritemref-class",children:"RouterItemRef Class"}),`
`,e.jsx(n.p,{children:"The static core for working with Vue Router in the functional layer. It provides a single entry point to the router, allowing for link generation, navigation, and path normalization without direct dependency on the component context."}),`
`,e.jsxs(n.p,{children:["This enables the use of router capabilities in classes and utilities where ",e.jsx(n.code,{children:"useRouter"})," or ",e.jsx(n.code,{children:"useRoute"})," hooks are not available."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Access"})," — saves the router instance for access from anywhere in the application."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Safe Generation"})," — methods for creating links by route names with parameters."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Normalization"})," — converts various path formats into standard ",e.jsx(n.code,{children:"href"})," properties."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-setup",children:"Usage (Setup)"}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.code,{children:"RouterItemRef"})," is a static class, it must be initialized once during application creation (usually in ",e.jsx(n.code,{children:"main.ts"})," or in a plugin)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...]
})

// Set the router for global use
RouterItemRef.set(router)
`})}),`
`,e.jsx(n.h2,{id:"instance-management",children:"Instance Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static get(): Router | undefined"})," — Returns the currently set router instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static set(router: Router): void"})," — Sets the router instance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"static setOneTime(router: Router): void"})," — Sets the router instance only if it hasn't been set yet. Useful for preventing accidental overwrites in plugins."]}),`
`]}),`
`,e.jsx(n.h2,{id:"navigation-and-links",children:"Navigation and Links"}),`
`,e.jsx(n.p,{children:"A group of methods for managing navigation history and URL generation."}),`
`,e.jsx(n.h3,{id:"push",children:e.jsx(n.code,{children:"push"})}),`
`,e.jsxs(n.p,{children:["Performs programmatic navigation to the specified route. It is a safe wrapper over ",e.jsx(n.code,{children:"router.push"}),". If the router is not yet set, the action will be ignored."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to: string | RouteLocationRaw"})," — target path or route location object."]}),`
`]}),`
`,e.jsx(n.h3,{id:"getlink",children:e.jsx(n.code,{children:"getLink"})}),`
`,e.jsxs(n.p,{children:["Generates and returns a string URL (href) for a route based on its name and parameters. Uses the ",e.jsx(n.code,{children:"router.resolve"})," method."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — unique route name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"params?: any"})," — dynamic path parameters (params)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"query?: any"})," — query string parameters (query)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"string | undefined"})," — the generated URL or ",e.jsx(n.code,{children:"undefined"})," if the router is not initialized."]}),`
`,e.jsx(n.h3,{id:"gethref",children:e.jsx(n.code,{children:"getHref"})}),`
`,e.jsxs(n.p,{children:["Returns a standardized link properties object. Useful for passing to components expecting ",e.jsx(n.code,{children:"ConstrHrefProps"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name?: string"})," — route name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"params?: any"})," — path parameters."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"query?: any"})," — query parameters."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ConstrHrefProps"})," — an ",e.jsx(n.code,{children:"{ href: string }"})," object or ",e.jsx(n.code,{children:"{}"})," (empty object) if no name is provided."]}),`
`,e.jsx(n.h3,{id:"rawtohref",children:e.jsx(n.code,{children:"rawToHref"})}),`
`,e.jsxs(n.p,{children:["A special normalization method. Converts a location object (if it contains a ",e.jsx(n.code,{children:"name"}),") into a link properties object."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to?: string | RouteLocationRaw"})," — raw route data."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"ConstrHrefProps"})," — the result of ",e.jsx(n.code,{children:"getHref"})," or ",e.jsx(n.code,{children:"{}"}),"."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"generating-a-link-in-code",children:"Generating a Link in Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'

// Get URL for user profile page
const userUrl = RouterItemRef.getLink('user-profile', { id: 123 })
// Result: '/user/123' (depending on router configuration)

// Use for component properties
const linkProps = RouterItemRef.getHref('catalog', undefined, { category: 'electronics' })
// Result: { href: '/catalog?category=electronics' }
`})}),`
`,e.jsx(n.h3,{id:"programmatic-navigation",children:"Programmatic Navigation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { RouterItemRef } from '@dxtmisha/functional'

const logout = () => {
    // Navigate to the home page after logout
    RouterItemRef.push({ name: 'home' })
}
`})})]})}function u(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{u as default};
