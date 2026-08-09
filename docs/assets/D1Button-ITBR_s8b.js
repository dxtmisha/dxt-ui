import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, n as i, s as a } from './blocks-CKlddtvc.js'; import { t as o } from './mdx-react-shim-B1U8VZv0.js'; import { n as s, r as c, t as l } from './storybook-apKCOoHa.js'; import { Button as u, ButtonAdaptive as d, ButtonBasic as f, ButtonOutline as p, ButtonPrimary as m, ButtonSecondary as h, ButtonSkeleton as g, ButtonText as _, i as v, n as y, r as b, t as x } from './D1Button.stories-BEaDeleN.js'; function S(e) {
  let n = { h2: `h2`, ...t(), ...e.components }; return (0, w.jsxs)(w.Fragment, { children: [(0, w.jsx)(a, { of: x }), `
`, (0, w.jsx)(l, { name: b.getName(), description: b.getDescription(), story: u }), `
`, (0, w.jsx)(c, { componentName: `Button`, type: `button` }), `
`, (0, w.jsx)(i, { of: f }), `
`, (0, w.jsx)(c, { componentName: `Button`, type: `primary` }), `
`, (0, w.jsx)(i, { of: m }), `
`, (0, w.jsx)(c, { componentName: `Button`, type: `secondary` }), `
`, (0, w.jsx)(i, { of: h }), `
`, (0, w.jsx)(c, { componentName: `Button`, type: `outline` }), `
`, (0, w.jsx)(i, { of: p }), `
`, (0, w.jsx)(c, { componentName: `Button`, type: `text` }), `
`, (0, w.jsx)(i, { of: _ }), `
`, (0, w.jsx)(c, { componentName: `Value`, type: `value` }), `
`, (0, w.jsx)(c, { componentName: `Style`, type: `adaptive` }), `
`, (0, w.jsx)(i, { of: d }), `
`, (0, w.jsx)(c, { componentName: `Style`, type: `isSkeleton` }), `
`, (0, w.jsx)(i, { of: g }), `
`, (0, w.jsx)(n.h2, { id: `events`, children: `Events` }), `
`, (0, w.jsx)(c, { componentName: `Event`, type: `click` }), `
`, (0, w.jsx)(n.h2, { id: `expose`, children: `Expose` }), `
`, (0, w.jsx)(c, { componentName: `Expose`, type: `getValue` }), `
`, (0, w.jsx)(c, { componentName: `Expose`, type: `getDetail` }), `
`, (0, w.jsx)(n.h2, { id: `slots`, children: `Slots` }), `
`, (0, w.jsx)(c, { componentName: `Slot`, type: `default` })] })
} function C(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, w.jsx)(n, { ...e, children: (0, w.jsx)(S, { ...e }) }) : S(e) } var w; e(() => { w = n(), o(), r(), s(), y(), v() })(); export { C as default }
