import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, n as i, s as a } from './blocks-CKlddtvc.js'; import { t as o } from './mdx-react-shim-B1U8VZv0.js'; import { n as s, r as c, t as l } from './storybook-apKCOoHa.js'; import { Table as u, TableBasic as d, TableSearch as f, TableSlots as p, TableSort as m, i as h, n as g, r as _, t as v } from './D1Table.stories-BteEux6F.js'; function y(e) {
  let n = { h2: `h2`, ...t(), ...e.components }; return (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)(a, { of: v }), `
`, (0, x.jsx)(l, { name: _.getName(), description: _.getDescription(), story: u }), `
`, (0, x.jsx)(c, { componentName: `Table`, type: `table` }), `
`, (0, x.jsx)(i, { of: d }), `
`, (0, x.jsx)(c, { componentName: `TableFlex`, type: `differences` }), `
`, (0, x.jsx)(c, { componentName: `Table`, type: `headerTop` }), `
`, (0, x.jsx)(c, { componentName: `Table`, type: `stickyScrollBottom` }), `
`, (0, x.jsx)(c, { componentName: `Table`, type: `sort` }), `
`, (0, x.jsx)(i, { of: m }), `
`, (0, x.jsx)(c, { componentName: `Table`, type: `search` }), `
`, (0, x.jsx)(i, { of: f }), `
`, (0, x.jsx)(n.h2, { id: `events`, children: `Events` }), `
`, (0, x.jsx)(c, { componentName: `Event`, type: `sort` }), `
`, (0, x.jsx)(n.h2, { id: `slots`, children: `Slots` }), `
`, (0, x.jsx)(i, { of: p }), `
`, (0, x.jsx)(c, { componentName: `Slot`, type: `caption` }), `
`, (0, x.jsx)(c, { componentName: `Slot`, type: `body` }), `
`, (0, x.jsx)(c, { componentName: `Table`, type: `slots` })] })
} function b(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, x.jsx)(n, { ...e, children: (0, x.jsx)(y, { ...e }) }) : y(e) } var x; e(() => { x = n(), o(), r(), s(), g(), h() })(); export { b as default }
