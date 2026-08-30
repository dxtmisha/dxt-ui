import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/# About the Library`}),`
`,(0,c.jsx)(t.h1,{id:`dxtmishanitro-basic`,children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/nitro-basic`,rel:`nofollow`,children:`@dxtmisha/nitro-basic`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/nitro-basic`}),` is a foundational utility library designed for building robust Server-Side Rendering (SSR) applications using Vue 3 and Nitro. It provides a set of tools for state synchronization between server and client, routing management, and simplifying the SSR application development process.`]}),`
`,(0,c.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(t.p,{children:`To start using the library, install it via npm:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm i @dxtmisha/nitro-basic
`})}),`
`,(0,c.jsx)(t.h2,{id:`what-is-this-library-for`,children:`What is this library for?`}),`
`,(0,c.jsx)(t.p,{children:`Developing applications with SSR (Server-Side Rendering) requires special attention to detail: from isolating states for different users on the server to preventing hydration mismatches on the client.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/nitro-basic`}),` handles routine tasks for configuring the Nitro and Vue environment, providing a unified mechanism for initializing storages, API clients, and routing. It serves as a bridge between the powerful capabilities of Nitro and the reactivity of Vue 3.`]}),`
`,(0,c.jsx)(t.h2,{id:`whats-inside`,children:`What's inside?`}),`
`,(0,c.jsx)(t.p,{children:`The library includes tools to solve key SSR tasks:`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Environment Initialization`}),` — the `,(0,c.jsx)(t.code,{children:`uiCreateServerApp`}),` and `,(0,c.jsx)(t.code,{children:`uiCreateClientApp`}),` functions provide a standardized way to launch the application in different environments, automatically configuring the necessary plugins and services.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`State and Storage Management`}),` — tools for working with server storage (`,(0,c.jsx)(t.code,{children:`initServerStorage`}),`) and cookies (`,(0,c.jsx)(t.code,{children:`initCookieStorage`}),`). They ensure that data received on the server is accessible to Vue components via the `,(0,c.jsx)(t.code,{children:`provide/inject`}),` mechanism.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Routing Synchronization`}),` — utilities for creating and initializing the router (`,(0,c.jsx)(t.code,{children:`uiCreateSsrRouter`}),`, `,(0,c.jsx)(t.code,{children:`initServerRouter`}),`), which ensure correct URL navigation on the server side and smooth handover to the client.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Data Hydration`}),` — automatic generation of JSON scripts (`,(0,c.jsx)(t.code,{children:`initScriptsJson`}),`) to transfer `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` state and `,(0,c.jsx)(t.code,{children:`Api`}),` data from the server to the client, eliminating redundant API requests during page load.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`API Integration`}),` — means for configuring request headers and origin, allowing the use of absolute URLs during server-side calls and maintaining authorization via cookie forwarding.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Nitro Plugins`}),` — ready-made functions to extend Nitro's capabilities, such as server-side API response caching.`]}),`
`,(0,c.jsx)(t.h2,{id:`who-is-it-for`,children:`Who is it for?`}),`
`,(0,c.jsx)(t.p,{children:`The library is designed for developers building their solutions on the Vue 3 + Nitro stack (or Nuxt-like architectures) who need low-level but flexible tools to manage the lifecycle of an SSR application.`}),`
`,(0,c.jsx)(t.h2,{id:`principles`,children:`Principles`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SSR Safety`}),` — all tools are designed to eliminate data leaks between requests from different users.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Seamless Hydration`}),` — minimizing differences between server and client states.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Modularity`}),` — the ability to use both comprehensive application creation functions and individual atomic initialization utilities.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Integration`}),` — deep compatibility with the `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),` ecosystem.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`git`,children:`Git`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/nitro-basic`,rel:`nofollow`,children:`https://github.com/dxtmisha/dxt-ui/tree/main/packages/nitro-basic`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};