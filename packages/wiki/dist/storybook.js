import { jsxs as e, Fragment as n, jsx as o } from "/Volumes/T7/Git/dxt-ui/node_modules/react/jsx-runtime.js";
import "/Volumes/T7/Git/dxt-ui/node_modules/react/index.js";
import { Title as s, Subtitle as p, Canvas as c, Controls as m } from "/Volumes/T7/Git/dxt-ui/node_modules/@storybook/addon-docs/dist/blocks.mjs";
import { W as l } from "./WikiStorybookDescriptions-CwhHsvbq.js";
const y = ({
  name: r,
  description: t,
  story: i
}) => /* @__PURE__ */ e(n, { children: [
  /* @__PURE__ */ o(s, { children: r }),
  /* @__PURE__ */ o(p, { children: t }),
  /* @__PURE__ */ o(c, { of: i }),
  /* @__PURE__ */ o(m, { of: i })
] }), S = ({
  componentName: r,
  type: t
}) => new l(r).getDescriptionByType(t);
export {
  S as StorybookDescriptions,
  y as StorybookMain
};
