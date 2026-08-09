import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/en/functional-basic/Functions/toNumberPositive - Converting to a positive finite number` }), `
`, (0, c.jsx)(n.h1, { id: `tonumberpositive`, children: (0, c.jsx)(n.code, { children: `toNumberPositive` }) }), `
`, (0, c.jsxs)(n.p, { children: [`Converts the input value to a positive finite number (`, (0, c.jsx)(n.code, { children: `> 0` }), `). If the value is not a valid positive number, it returns the specified default value (defaults to `, (0, c.jsx)(n.code, { children: `0` }), `).`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Parameters:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `value?: number | string | null` }), ` — The input value to convert.`] }), `
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `defaultValue: number = 0` }), ` — Default fallback value if conversion fails or the number is not positive.`] }), `
`] }), `
`, (0, c.jsxs)(n.p, { children: [(0, c.jsx)(n.strong, { children: `Returns:` }), `
`, (0, c.jsx)(n.code, { children: `number` }), ` — A positive number (`, (0, c.jsx)(n.code, { children: `> 0` }), `) or the default value.`] }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-typescript`, children: `import { toNumberPositive } from '@dxtmisha/functional-basic'

console.log(toNumberPositive(15)) // 15
console.log(toNumberPositive('10')) // 10
console.log(toNumberPositive(-5)) // 0
console.log(toNumberPositive('invalid', 1)) // 1
console.log(toNumberPositive(undefined, 1)) // 1
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
