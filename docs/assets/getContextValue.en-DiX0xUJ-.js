import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/en/nitro-basic/Functions/getContextValue - Get Context Value` }), `
`, (0, c.jsx)(n.h1, { id: `getcontextvalue`, children: (0, c.jsx)(n.code, { children: `getContextValue` }) }), `
`, (0, c.jsx)(n.p, { children: `A utility function that retrieves a specific value from the active Server-Side Rendering (SSR) application context by its key name.` }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Parameters:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `key: string` }), ` — The key of the value to retrieve (e.g., `, (0, c.jsx)(n.code, { children: `'headers'` }), `, `, (0, c.jsx)(n.code, { children: `'storage'` }), `, or `, (0, c.jsx)(n.code, { children: `'cookie'` }), `).`] }), `
`] }), `
`, (0, c.jsxs)(n.p, { children: [(0, c.jsx)(n.strong, { children: `Returns:` }), `
`, (0, c.jsx)(n.code, { children: `any | undefined` }), ` — The retrieved context value, or `, (0, c.jsx)(n.code, { children: `undefined` }), ` if the context is not active or the key does not exist.`] }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-typescript`, children: `import { getContextValue } from '@dxtmisha/nitro-basic'

// Get cookie or headers from the active request context during SSR:
const cookies = getContextValue<string>('cookie')
const headers = getContextValue<Headers>('headers')
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
