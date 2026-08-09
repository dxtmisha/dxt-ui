import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, p: `p`, pre: `pre`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/en/nitro-basic/Functions/uiIdServer - Server-Side ID Generator` }), `
`, (0, c.jsx)(n.h1, { id: `uiidserver`, children: (0, c.jsx)(n.code, { children: `uiIdServer` }) }), `
`, (0, c.jsx)(n.p, { children: `Initializes the global unique identifier generation function for elements on the server side. It uses request context values (retrieved via context helper) to generate safe IDs during SSR.` }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-typescript`, children: `import { uiIdServer } from '@dxtmisha/nitro-basic'

uiIdServer()
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
