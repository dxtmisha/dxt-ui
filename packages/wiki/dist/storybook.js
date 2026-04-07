import { t as e } from "./WikiStorybookDescriptions-BrwsRAKT.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
import { Canvas as i, Controls as a, Subtitle as o, Title as s } from "@storybook/addon-docs/blocks";
import "react";
//#region src/documentation/storybook/StorybookMain.tsx
var c = ({ name: e, description: c, story: l }) => /* @__PURE__ */ r(t, { children: [
	/* @__PURE__ */ n(s, { children: e }),
	/* @__PURE__ */ n(o, { children: c }),
	/* @__PURE__ */ n(i, { of: l }),
	/* @__PURE__ */ n(a, { of: l })
] }), l = ({ componentName: t, type: n }) => new e(t).getDescriptionByType(n);
//#endregion
export { l as StorybookDescriptions, c as StorybookMain };
