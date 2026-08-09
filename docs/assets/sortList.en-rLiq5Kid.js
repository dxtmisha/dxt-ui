import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/en/functional-basic/Functions/sortList - Multi-column array sorting` }), `
`, (0, c.jsx)(n.h1, { id: `sortlist`, children: (0, c.jsx)(n.code, { children: `sortList` }) }), `
`, (0, c.jsxs)(n.p, { children: [`A utility that sorts an array of objects or items by one or more column property paths, directions (`, (0, c.jsx)(n.code, { children: `'asc'` }), ` or `, (0, c.jsx)(n.code, { children: `'desc'` }), `), or a custom comparison function. It performs locale-aware string comparisons using `, (0, c.jsx)(n.code, { children: `Intl.Collator` }), ` with numeric and case-insensitive sensitivity options, and places `, (0, c.jsx)(n.code, { children: `null` }), ` or `, (0, c.jsx)(n.code, { children: `undefined` }), ` values at the end of sorted lists.`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Parameters:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `list: T[]` }), ` — Input array of items to sort.`] }), `
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `sortColumns: SortColumnItem[]` }), ` — Array of column sorting specifications `, (0, c.jsx)(n.code, { children: `{ column: string, dir: SortDir }` }), `.`] }), `
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `customSort?: SortFunction<T>` }), ` — Optional custom comparison function.`] }), `
`] }), `
`, (0, c.jsxs)(n.p, { children: [(0, c.jsx)(n.strong, { children: `Returns:` }), `
`, (0, c.jsx)(n.code, { children: `T[]` }), ` — A new sorted array of items (or the original array if `, (0, c.jsx)(n.code, { children: `sortColumns` }), ` is empty or list length is less than 2).`] }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-typescript`, children: `import { sortList } from '@dxtmisha/functional-basic'

const users = [
  { id: 3, category: 'A', name: 'Charlie', age: 30 },
  { id: 1, category: 'B', name: 'Alice', age: 25 },
  { id: 4, category: 'A', name: 'Alice', age: 20 },
  { id: 2, category: 'B', name: 'Bob', age: 35 }
]

// Sort by category ascending, then age descending
const sorted = sortList(users, [
  { column: 'category', dir: 'asc' },
  { column: 'age', dir: 'desc' }
])

console.log(sorted.map(user => user.id)) // [3, 4, 2, 1]
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
