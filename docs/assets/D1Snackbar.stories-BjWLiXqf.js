import { a as e, i as t } from './preload-helper-Cv19cBWa.js'; import { $ as n, Gt as r, H as i, Kt as a, Ut as o, Vt as s, Wt as c, Yt as l, d as u, dn as d, en as f, f as ee, ft as te, gt as p, ln as m, sn as h } from './iframe-D7czqiJA.js'; import { a as ne, d as re, f as ie, l as ae, m as g, n as _, p as v, t as y, u as b } from './wiki-CUC2UhNU.js'; import { n as x, t as S } from './AriaStaticInclude-BsKgXpT8-Crt3dq7t.js'; import { n as C, t as w } from './TextInclude-BCLvgDOQ-CSWG1wog.js'; import { n as T, t as E } from './TeleportInclude-a_mSvzya-BSgb5Pj9.js'; import { n as D, t as oe } from './D1SnackbarItem-D9JR55B2.js'; var O, k, A, j, M, N = t(() => { S(), ie(), w(), T(), s(), u(), te(), O = class {constructor(e) { v(this, `emits`, void 0), this.emits = e }show(e, t) { var n; (n = this.emits) == null || n.call(this, `show`, e, t) }hide(e, t) { var n; (n = this.emits) == null || n.call(this, `hide`, e, t) }}, k = class {constructor(e, t, n, r) { v(this, `props`, void 0), v(this, `element`, void 0), v(this, `className`, void 0), v(this, `event`, void 0), v(this, `item`, m([])), v(this, `itemNumber`, 0), v(this, `isItem`, () => this.item.value.length > 0), v(this, `add`, (e) => { let t = this.getItemValue(e), n = this.getItemDelay(e); this.item.value = [...this.item.value, { ...e, delay: n, value: t }], this.toScroll(), this.initDisplay(t, n) }), v(this, `remove`, (e) => { if (this.getItemByValue(e)) { let t = this.getElementItem(e); t ? (t.addEventListener(`transitionend`, () => this.performHide(e)), t.classList.add(`${this.className}--hide`), setTimeout(() => this.performHide(e), 512)) : this.performHide(e) } }), v(this, `clear`, () => { this.item.value.forEach(e => e.value && this.remove(e.value)) }), v(this, `pause`, () => { this.item.value.forEach(e => e.resumableTimer?.pause()) }), v(this, `resume`, () => { this.item.value.forEach(e => e.resumableTimer?.resume()) }), this.props = e, this.element = t, this.className = n, this.event = r }isPriority() { return this.isItem() && this.item.value.findIndex(e => e.highPriority === !0) !== -1 }getItemByValue(e) { return this.item.value.find(t => t.value === e) }getElementItem(e) { return this.element.value?.querySelector(`[data-snackbar-item="${e}"]`) ?? void 0 }getItemValue(e) { return e.value ?? `snackbar-item-${++this.itemNumber}` }getItemDelay(e) { return e.delay ?? this.props.delay ?? 1e4 }addShowItem(e, t) { let n = this.getItemByValue(e); return n && !n.resumableTimer && (n.resumableTimer = new i(() => this.remove(e), t + 256)), this }performHide(e) { let t = this.getItemByValue(e); if (t) { var n, r; (n = t.resumableTimer) == null || n.clear(), this.item.value = this.item.value.filter(t => t.value !== e), (r = this.event) == null || r.hide(e, t) } }initDisplay(e, t) { t < 0 || requestAnimationFrame(() => { let n = this.getElementItem(e), r = this.getItemByValue(e); if (r) if (n && p(n)) { var i; (i = this.event) == null || i.show(e, r), this.addShowItem(e, t) } else setTimeout(() => this.initDisplay(e, t), 128) }) }toScroll() { requestAnimationFrame(() => { this.element.value && (this.element.value.scrollTop = this.element.value.scrollHeight) }) }}, A = class {constructor(e, t, n, r, i, a, o, s, c = {}) { v(this, `props`, void 0), v(this, `refs`, void 0), v(this, `element`, void 0), v(this, `classDesign`, void 0), v(this, `className`, void 0), v(this, `components`, void 0), v(this, `slots`, void 0), v(this, `emits`, void 0), v(this, `data`, void 0), v(this, `event`, void 0), v(this, `text`, void 0), v(this, `teleport`, void 0), v(this, `onClose`, e => this.data.remove(e)), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s; let { DataConstructor: l = k, EventConstructor: u = O, TeleportIncludeConstructor: d = E } = c; this.event = new u(s), this.data = new l(e, n, i, this.event), this.text = new C(e), this.teleport = new d() } get binds() { return { onMouseenter: this.data.pause, onMouseleave: this.data.resume, ...x.role(`region`), ...x.label(this.text.notifications) } }}, j = { delay: 8e3 }, M = class extends ee {constructor(e, t, n, r = A) { super(e, t, n), v(this, `item`, void 0), v(this, `renderData`, () => { let e = []; return this.item.data.item.value.forEach(t => e.push(a(t.highPriority ? `aside` : `div`, { 'key': t.value, 'class': { [this.classes?.value.item ?? `item`]: !0, [this.classes?.value.priority ?? `priority`]: t.highPriority }, 'data-snackbar-item': t.value }, this.renderItem(t)))), e }), v(this, `renderItem`, (e) => { let t = { ...e.data, value: e.value, onClose: this.item.onClose }; return e.component ? a({ ...h(e.component) }, t) : this.components.renderOne(`snackbarItem`, t, void 0, e.value) }), v(this, `renderSpace`, () => this.item.data.isPriority() ? [a(`div`, { class: this.classes?.value.space })] : []), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init() }initExpose() { return { isItem: this.item.data.isItem, add: this.item.data.add, remove: this.item.data.remove, clear: this.item.data.clear } }initClasses() { return { main: {}, item: this.getSubClass(`item`), space: this.getSubClass(`space`), priority: this.getSubClass(`priority`) } }initStyles() { return {} }initRender() { return this.item.data.isItem() ? this.item.teleport.render(a(`div`, { ...this.getAttrs(), ref: this.element, class: this.classes?.value.main, ...this.item.binds }, [...this.renderData(), ...this.renderSpace()])) : [] }} }), P, F = t(() => { D(), P = oe }), I, L, R = t(() => { N(), I = { limit: [`1`, `2`, `4`, `6`, `8`], vertical: [`top`, `bottom`], horizontal: [`right`, `left`, `block`], origin: [`topToBottom`, `bottomToTop`, `rightToLeft`, `leftToRight`] }, L = { ...j } }), z = t(() => {}), B, V = t(() => { s(), u(), N(), F(), R(), z(), B = r({ name: `D1Snackbar`, __name: `D1Snackbar`, props: l({ textNotifications: { type: [String, Function] }, delay: {}, full: { type: Boolean }, all: { type: Boolean }, limit: {}, vertical: {}, horizontal: {}, origin: {} }, L), emits: [`show`, `hide`], setup(e, { expose: t, emit: r }) { let i = r, a = e, s = new M(`d1.snackbar`, a, { emits: i, classes: o(() => ({ main: { 'd1-snackbar': !0, 'd1-snackbar--full': a.full, 'd1-snackbar--all': a.all, [`d1-snackbar--limit--${a.limit}`]: n(I.limit, a.limit), [`d1-snackbar--vertical--${a.vertical}`]: n(I.vertical, a.vertical), [`d1-snackbar--horizontal--${a.horizontal}`]: n(I.horizontal, a.horizontal), [`d1-snackbar--origin--${a.origin}`]: n(I.origin, a.origin) } })), styles: o(() => ({})), components: { snackbarItem: P } }), l = s.render(); return t(s.expose()), (e, t) => (f(), c(d(l))) } }) }), H, U = t(() => { V(), V(), H = B, B.__docgenInfo = Object.assign({ displayName: B.name ?? B.__name }, { name: `D1Snackbar`, exportName: `default`, displayName: `D1Snackbar`, description: ``, tags: {}, sourceFiles: [`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Snackbar/D1Snackbar.vue`] }) }), W, G, K, q, se = t(() => { y(), R(), W = [{ name: `all`, type: `boolean` }, { name: `delay`, type: `number` }, { name: `full`, type: `boolean` }, { name: `horizontal`, type: `string`, option: [`right`, `left`, `block`] }, { name: `limit`, type: `string`, option: [`1`, `2`, `4`, `6`, `8`] }, { name: `origin`, type: `string`, option: [`topToBottom`, `bottomToTop`, `rightToLeft`, `leftToRight`] }, { name: `textNotifications`, type: `TextValue` }, { name: `vertical`, type: `string`, option: [`top`, `bottom`] }], G = [], K = [{ name: `hide`, description: `Event triggered when notification is hidden/ Событие при скрытии уведомления`, properties: [{ name: `value`, type: `string` }, { name: `item`, type: `SnackbarValue` }] }, { name: `show`, description: `Event triggered when notification is shown/ Событие при показе уведомления`, properties: [{ name: `value`, type: `string` }, { name: `item`, type: `SnackbarValue` }] }], q = { component: `Snackbar`, props: W, slots: G, events: K, defaults: L, wikiDesign: _ } }), J, Y = t(() => { re(), ae(), se(), J = new b(q.component, q.props, q.defaults, q.wikiDesign, ne, g) }), ce = e({ Snackbar: () => Z, __namedExportsOrder: () => Q, default: () => X }), X, Z, Q, $ = t(() => {
  U(), Y(), X = { title: `Ui/Snackbar`, component: H, parameters: { design: `d1`, docs: { description: { component: J.getDescription() } } }, argTypes: J.getWiki(), args: J.getValues() }, Z = { render: e => ({ components: { D1Snackbar: H }, setup: () => ({ args: e }), template: `
      <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })"
        >
          Success Message
        </button>
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })"
        >
          System Error
        </button>
        <button
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <D1Snackbar ref="snackbar" v-bind="args" />
    </div>
    ` }) }, Z.parameters = { ...Z.parameters, docs: { ...Z.parameters?.docs, source: { originalSource: `{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Snackbar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-flex-column">
      <div class="wiki-storybook-flex">
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Action completed', icon: 'check_circle' }, delay: 3000 })"
        >
          Success Message
        </button>
        <button
          class="wiki-storybook-button"
          @click="() => $refs.snackbar.add({ data: { label: 'Connection timeout', description: 'Retrying in 5s...', icon: 'error' }, highPriority: true })"
        >
          System Error
        </button>
        <button
          class="wiki-storybook-button wiki-storybook-button--warning"
          @click="() => $refs.snackbar.clear()"
        >
          Clear Queue
        </button>
      </div>
      <D1Snackbar ref="snackbar" v-bind="args" />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`, ...Z.parameters?.docs?.source } } }, Q = [`Snackbar`]
}); $(); export { Z as Snackbar, Q as __namedExportsOrder, X as default, Y as i, $ as n, J as r, ce as t }
