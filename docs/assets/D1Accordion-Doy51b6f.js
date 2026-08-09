import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, n as i, s as a } from './blocks-CKlddtvc.js'; import { t as o } from './mdx-react-shim-B1U8VZv0.js'; import { n as s, r as c, t as l } from './storybook-apKCOoHa.js'; import { Accordion as u, AccordionSlots as d, AccordionVModel as f, i as p, n as m, r as h, t as g } from './D1Accordion.stories-BSXk2o66.js'; function _(e) {
  let n = { h2: `h2`, ...t(), ...e.components }; return (0, y.jsxs)(y.Fragment, { children: [(0, y.jsx)(a, { of: g }), `
`, (0, y.jsx)(l, { name: h.getName(), description: h.getDescription(), story: u }), `
`, (0, y.jsx)(c, { componentName: `Accordion`, type: `accordion` }), `
`, (0, y.jsx)(c, { componentName: `MotionTransform`, type: `v-model` }), `
`, (0, y.jsx)(i, { of: f }), `
`, (0, y.jsx)(n.h2, { id: `events`, children: `Events` }), `
`, (0, y.jsx)(c, { componentName: `Event`, type: `click` }), `
`, (0, y.jsx)(c, { componentName: `MotionTransform`, type: `events` }), `
`, (0, y.jsx)(n.h2, { id: `expose`, children: `Expose` }), `
`, (0, y.jsx)(c, { componentName: `MotionTransform`, type: `expose` }), `
`, (0, y.jsx)(c, { componentName: `MotionTransform`, type: `expose.motionTransformElement` }), `
`, (0, y.jsx)(n.h2, { id: `slots`, children: `Slots` }), `
`, (0, y.jsx)(i, { of: d }), `
`, (0, y.jsx)(c, { componentName: `Accordion`, type: `slots` }), `
`, (0, y.jsx)(c, { componentName: `Slot`, type: `label` }), `
`, (0, y.jsx)(c, { componentName: `Slot`, type: `caption` }), `
`, (0, y.jsx)(c, { componentName: `Slot`, type: `description` }), `
`, (0, y.jsx)(c, { componentName: `Cell`, type: `slots` })] })
} function v(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, y.jsx)(n, { ...e, children: (0, y.jsx)(_, { ...e }) }) : _(e) } var y; e(() => { y = n(), o(), r(), s(), m(), p() })(); export { v as default }
