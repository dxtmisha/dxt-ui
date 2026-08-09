import { a as e, i as t } from './preload-helper-Cv19cBWa.js'; import { Gt as n, Kt as r, Ut as i, Vt as a, Wt as o, Yt as s, d as c, dn as l, en as u, f as d, ht as f, kt as p } from './iframe-D7czqiJA.js'; import { a as m, d as h, f as g, l as _, m as v, n as y, p as b, t as x, u as S } from './wiki-CUC2UhNU.js'; var C, w, T, E = t(() => { g(), a(), c(), C = class {constructor(e, t, n, r, i, a, o, s) { b(this, `props`, void 0), b(this, `refs`, void 0), b(this, `element`, void 0), b(this, `classDesign`, void 0), b(this, `className`, void 0), b(this, `components`, void 0), b(this, `slots`, void 0), b(this, `emits`, void 0), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s } get item() { let e = this.props.value, t = this.props.unit; return f(e) && this.props.formatting && t ? new p(this.props.language).format(e, t) : e?.toString() || `` }}, w = { formatting: !0 }, T = class extends d {constructor(e, t, n, r = C) { super(e, t, n), b(this, `item`, void 0), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init() }initExpose() { return {} }initClasses() { return { main: {} } }initStyles() { return {} }initRender() { return r(`span`, { ...this.getAttrs(), class: this.classes?.value.main }, this.item.item) }} }), D, O = t(() => { E(), D = { ...w } }), k = t(() => {}), A, j = t(() => { a(), E(), O(), k(), A = n({ name: `D1FormattedUnit`, __name: `D1FormattedUnit`, props: s({ value: {}, unit: {}, formatting: { type: Boolean }, language: {} }, D), setup(e, { expose: t, emit: n }) { let r = new T(`d1.formattedUnit`, e, { emits: n, classes: i(() => ({ main: { 'd1-formattedUnit': !0 } })), styles: i(() => ({})) }), a = r.render(); return t(r.expose()), (e, t) => (u(), o(l(a))) } }) }), M, N = t(() => { j(), j(), M = A, A.__docgenInfo = Object.assign({ displayName: A.name ?? A.__name }, { name: `D1FormattedUnit`, exportName: `default`, displayName: `D1FormattedUnit`, description: ``, tags: {}, sourceFiles: [`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/FormattedUnit/D1FormattedUnit.vue`] }) }), P, F, I, L, R = t(() => { x(), O(), P = [{ name: `formatting`, type: `boolean` }, { name: `language`, type: `string` }, { name: `unit`, type: `string` }, { name: `value`, type: `NumberOrString` }], F = [], I = [], L = { component: `FormattedUnit`, props: P, slots: F, events: I, defaults: D, wikiDesign: y } }), z, B = t(() => { h(), _(), R(), z = new S(L.component, L.props, L.defaults, L.wikiDesign, m, v) }), V = e({ FormattedUnit: () => U, FormattedUnitBasic: () => W, __namedExportsOrder: () => G, default: () => H }), H, U, W, G, K = t(() => {
  N(), B(), H = { title: `Ui/FormattedUnit`, component: M, parameters: { design: `d1`, docs: { description: { component: z.getDescription() } } }, argTypes: z.getWiki(), args: z.getValues() }, U = {}, W = { name: `Базовые`, render: () => ({ components: { D1FormattedUnit: M }, template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="celsius" language="ru-RU"/> →
            <D1FormattedUnit :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="1000" unit="gram" language="ru-RU"/> →
            <D1FormattedUnit :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
    ` }) }, U.parameters = { ...U.parameters, docs: { ...U.parameters?.docs, source: { originalSource: `{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`, ...U.parameters?.docs?.source } } }, W.parameters = { ...W.parameters, docs: { ...W.parameters?.docs, source: { originalSource: `{
  name: 'Базовые',
  render: () => ({
    components: {
      D1FormattedUnit
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="celsius" language="ru-RU"/> →
            <D1FormattedUnit :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="1000" unit="gram" language="ru-RU"/> →
            <D1FormattedUnit :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
    \`
  })
}`, ...W.parameters?.docs?.source } } }, G = [`FormattedUnit`, `FormattedUnitBasic`]
}); K(); export { U as FormattedUnit, W as FormattedUnitBasic, G as __namedExportsOrder, H as default, B as i, K as n, z as r, V as t }
