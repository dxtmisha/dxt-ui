import { a as e, i as t } from './preload-helper-Cv19cBWa.js'; import { $ as n, Gt as r, Kt as i, Ut as a, Vt as o, Wt as s, Yt as c, d as l, dn as u, en as d, f } from './iframe-D7czqiJA.js'; import { a as p, d as m, f as h, l as g, m as _, n as ee, o as v, p as y, t as te, u as ne } from './wiki-CUC2UhNU.js'; import { n as b, t as re } from './AriaStaticInclude-BsKgXpT8-Crt3dq7t.js'; import { n as ie, t as ae } from './DescriptionInclude-B8Q8Yl3x-BsRB6_js.js'; import { n as x, t as S } from './LabelInclude-Bbm4u8YC-DRhUKnWD.js'; import { a as C, o as w } from './D1Image-CvZj8ueg.js'; import { n as T, t as E } from './Image-BjWapC2A.js'; import { a as D, o as O } from './D1Actions-2-o2zZAd.js'; import { n as oe, t as se } from './Actions-0msiUAuA.js'; var k, A, j, M = t(() => { re(), h(), C(), D(), ae(), S(), o(), l(), k = class {constructor(e, t, n, r, i, a, o, s, c = {}) { y(this, `props`, void 0), y(this, `refs`, void 0), y(this, `element`, void 0), y(this, `classDesign`, void 0), y(this, `className`, void 0), y(this, `components`, void 0), y(this, `slots`, void 0), y(this, `emits`, void 0), y(this, `actions`, void 0), y(this, `description`, void 0), y(this, `image`, void 0), y(this, `label`, void 0), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s; let { ActionsIncludeConstructor: l = O, DescriptionIncludeConstructor: u = ie, ImageIncludeConstructor: d = w, LabelIncludeConstructor: f = x } = c; this.image = new d(i, e, a, void 0, s), this.description = new u(e, i, o), this.label = new f(e, i, void 0, o), this.actions = new l(i, e, a, () => ({ align: `center` }), void 0, s) } get binds() { let e = {}; return this.label.is && Object.assign(e, b.labelledby(this.label.id)), this.description.is && Object.assign(e, b.describedby(this.description.id)), e }}, A = {}, j = class extends f {constructor(e, t, n, r = k) { super(e, t, n), y(this, `item`, void 0), y(this, `renderBodyImage`, () => this.item.image.is ? [i(`div`, { class: this.classes?.value.image }, this.item.image.render())] : []), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init() }initExpose() { return {} }initClasses() { return { main: {}, image: this.getSubClass(`image`), label: this.getSubClass(`label`), description: this.getSubClass(`description`), actions: this.getSubClass(`actions`) } }initStyles() { return {} }initRender() { let e = [...this.renderBodyImage(), ...this.item.label.render(), ...this.item.description.render()]; return this.initSlot(`context`, e), e.push(...this.item.actions.render()), i(`div`, { ...this.getAttrs(), class: this.classes?.value.main, ...this.item.binds }, e) }} }), N, P, F = t(() => { M(), N = { size: [`sm`, `md`, `lg`] }, P = { ...A, size: `md` } }), I = t(() => {}), L, R = t(() => { o(), l(), M(), T(), oe(), F(), I(), L = r({ name: `D1Placeholder`, __name: `D1Placeholder`, props: c({ image: {}, imageAttrs: {}, label: {}, labelId: {}, description: {}, descriptionId: {}, actionsHide: { type: Boolean }, actionsList: {}, actionsSecondary: {}, actionsAttrs: {}, size: {} }, P), emits: [`load`, `actions`, `actionsLite`], setup(e, { expose: t, emit: r }) { let i = r, o = e, c = new j(`d1.placeholder`, o, { emits: i, classes: a(() => ({ main: { 'd1-placeholder': !0, [`d1-placeholder--size--${o.size}`]: n(N.size, o.size) } })), styles: a(() => ({})), components: { image: E, actions: se } }), l = c.render(); return t(c.expose()), (e, t) => (d(), s(u(l))) } }) }), z, B = t(() => { R(), R(), z = L, L.__docgenInfo = Object.assign({ displayName: L.name ?? L.__name }, { name: `D1Placeholder`, exportName: `default`, displayName: `D1Placeholder`, description: ``, tags: {}, sourceFiles: [`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Placeholder/D1Placeholder.vue`] }) }), V, H, U, W, G = t(() => { te(), F(), V = [{ name: `actionsAttrs`, type: `ConstrBind<ActionsProps>` }, { name: `actionsHide`, type: `boolean` }, { name: `actionsList`, type: `(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined` }, { name: `actionsSecondary`, type: `(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined` }, { name: `description`, type: `string | number` }, { name: `descriptionId`, type: `string` }, { name: `image`, type: `string | ConstrBind<ImageProps>` }, { name: `imageAttrs`, type: `ConstrBind<ImageProps>` }, { name: `label`, type: `NumberOrString` }, { name: `labelId`, type: `string` }, { name: `size`, type: `string`, option: [`sm`, `md`, `lg`] }], H = [{ name: `context`, properties: [{ name: `props`, type: `(any) | undefined` }] }, { name: `default`, description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: `props`, type: `(any) | undefined` }] }, { name: `description`, description: `Description slot/ Слот описания`, properties: [{ name: `props`, type: `(any) | undefined` }] }], U = [{ name: `actions`, description: `Click event for actions/ Событие клика для действий`, properties: [{ name: `event`, type: `MouseEvent` }, { name: `value`, type: `EventClickValue` }] }, { name: `actionsLite`, description: `Simple click event for actions/ Простое событие клика для действий`, properties: [{ name: `value`, type: `EventClickValue` }] }, { name: `load`, description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: `image`, type: `ImageEventData` }] }], W = { component: `Placeholder`, props: V, slots: H, events: U, defaults: P, wikiDesign: ee } }), K, q = t(() => { m(), g(), G(), K = new ne(W.component, W.props, W.defaults, W.wikiDesign, p, _) }), ce = e({ Placeholder: () => Y, PlaceholderBasic: () => X, PlaceholderSlots: () => Z, __namedExportsOrder: () => Q, default: () => J }), J, Y, X, Z, Q, $ = t(() => {
  B(), q(), g(), J = { title: `Ui/Placeholder`, component: z, parameters: { design: `d1`, docs: { description: { component: K.getDescription() } } }, argTypes: K.getWiki(), args: K.getValues() }, Y = {}, X = { name: `Базовый`, render: () => ({ components: { D1Placeholder: z }, setup() { return { image1: v } }, template: `
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    ` }) }, Z = { name: `Использование слотов`, render: () => ({ components: { D1Placeholder: z }, setup() { return { image1: v } }, template: `
        <div class="wiki-storybook-flex-column">
          <D1Placeholder>
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
            <template #context>
              <span>Context Slot (overrides default/label and description)</span>
            </template>
          </D1Placeholder>
        </div>
    ` }) }, Y.parameters = { ...Y.parameters, docs: { ...Y.parameters?.docs, source: { originalSource: `{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`, ...Y.parameters?.docs?.source } } }, X.parameters = { ...X.parameters, docs: { ...X.parameters?.docs, source: { originalSource: `{
  name: 'Базовый',
  render: () => ({
    components: {
      D1Placeholder
    },
    setup() {
      return {
        image1
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder
            :image="image1"
            label="No Internet Connection"
            description="Please check your network settings and try again."
            :actions-list="[{ label: 'Retry', palette: 'primary' }]"
          />
        </div>
    \`
  })
}`, ...X.parameters?.docs?.source } } }, Z.parameters = { ...Z.parameters, docs: { ...Z.parameters?.docs, source: { originalSource: `{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Placeholder
    },
    setup() {
      return {
        image1
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Placeholder>
            <template #default>
              <span>Default Slot (Label)</span>
            </template>
            <template #description>
              <span>Description Slot</span>
            </template>
            <template #context>
              <span>Context Slot (overrides default/label and description)</span>
            </template>
          </D1Placeholder>
        </div>
    \`
  })
}`, ...Z.parameters?.docs?.source } } }, Q = [`Placeholder`, `PlaceholderBasic`, `PlaceholderSlots`]
}); $(); export { Y as Placeholder, X as PlaceholderBasic, Z as PlaceholderSlots, Q as __namedExportsOrder, J as default, q as i, $ as n, K as r, ce as t }
