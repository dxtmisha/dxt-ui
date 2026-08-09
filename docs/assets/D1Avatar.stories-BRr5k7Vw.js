import { a as e, i as t } from './preload-helper-Cv19cBWa.js'; import { $ as n, Gt as r, Kt as i, Ut as a, Vt as o, Wt as s, Yt as c, d as l, dn as u, en as d, f } from './iframe-D7czqiJA.js'; import { a as p, d as m, f as ee, l as te, m as ne, n as re, p as h, t as ie, u as ae } from './wiki-CUC2UhNU.js'; import { n as oe, t as se } from './EventClickInclude-CZp3MaKf-BftZMymK.js'; import { n as g, t as _ } from './AriaStaticInclude-BsKgXpT8-Crt3dq7t.js'; import { n as v, t as y } from './EnabledInclude-C-DS_m_v-CXhFR0he.js'; import { n as b, t as x } from './SkeletonInclude-BayJaehb-COe2kTkL.js'; import { n as S, t as C } from './LabelInclude-Bbm4u8YC-DRhUKnWD.js'; import { a as w, o as T } from './D1Image-CvZj8ueg.js'; import { n as E, t as D } from './Image-BjWapC2A.js'; import { a as ce, o as le } from './D1Badge-JT_fwE_h.js'; import { n as ue, t as de } from './Badge-MmhpbEan.js'; import { n as fe, t as O } from './D1Skeleton-atWhpGi3.js'; var k, A, j, M = t(() => { _(), ee(), y(), oe(), w(), b(), C(), ce(), o(), l(), k = class {constructor(e, t, n, r, i, a, o, s, c = {}) { h(this, `props`, void 0), h(this, `refs`, void 0), h(this, `element`, void 0), h(this, `classDesign`, void 0), h(this, `className`, void 0), h(this, `components`, void 0), h(this, `slots`, void 0), h(this, `emits`, void 0), h(this, `skeleton`, void 0), h(this, `enabled`, void 0), h(this, `image`, void 0), h(this, `label`, void 0), h(this, `badge`, void 0), h(this, `event`, void 0), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s; let { BadgeIncludeConstructor: l = le, ImageIncludeConstructor: u = T, LabelIncludeConstructor: d = S, SkeletonIncludeConstructor: f = x, EventClickIncludeConstructor: p = se, EnabledIncludeConstructor: m = v } = c; this.skeleton = new f(e, r, [`classBackground`]), this.enabled = new m(e), this.image = new u(i, e, a, () => ({ disabled: this.props.disabled }), s), this.label = new d(() => this.labelProps, i, void 0, o, void 0, void 0, void 0, this.skeleton), this.badge = new l(i, e, a, { overlap: `circular` }), this.event = new p(e, this.enabled, s) } get tag() { return this.props.to || this.props.href ? `a` : `div` } get binds() { return { ...this.event.binds, tabindex: this.enabled.isEnabled ? this.props.tabindex : void 0, ...g.role(this.enabled.isEnabled ? `button` : `img`), ...g.label(this.props.ariaLabel ?? this.props.label) } } get classes() { return this.skeleton.classes } get labelProps() { return { label: this.getLabel(), labelId: this.props.labelId } }getLabel() { if (this.props.reduction) { let e = this.props.label && String(this.props.label).trim() || void 0; if (e) return e.split(/\s+/).slice(0, 2).map(e => e.charAt(0).toUpperCase()).join(``) } return this.props.label }}, A = class extends f {constructor(e, t, n, r = k) { super(e, t, n), h(this, `item`, void 0), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init() }initExpose() { return { ...this.item.event.expose } }initClasses() { return { main: this.item.classes, label: this.getSubClass(`label`) } }initStyles() { return {} }initRender() { return i(this.item.tag, { ...this.getAttrs(), ref: this.element, class: this.classes?.value.main, ...this.item.binds }, [...this.item.label.render(), ...this.item.image.render(), ...this.item.badge.render()]) }}, j = { reduction: !0, tabindex: `0` } }), N, P, F = t(() => { M(), N = { size: [`xs`, `sm`, `md`, `lg`, `xl`], palette: [`red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`, `black`, `white`] }, P = { ...j, size: `md` } }), I = t(() => {}), L, R = t(() => { o(), l(), M(), E(), ue(), F(), I(), L = r({ name: `D1Avatar`, __name: `D1Avatar`, props: c({ label: {}, labelId: {}, image: {}, imageAttrs: {}, badge: {}, badgeDot: { type: Boolean }, badgeAttrs: {}, isSkeleton: { type: Boolean }, ariaLabel: {}, to: {}, href: {}, value: {}, detail: {}, reduction: { type: Boolean }, tabindex: {}, focus: { type: Boolean }, disabled: { type: Boolean }, readonly: { type: Boolean }, primary: { type: Boolean }, size: {}, palette: {} }, P), emits: [`load`, `click`, `clickLite`], setup(e, { expose: t, emit: r }) { let i = r, o = e, c = new A(`d1.avatar`, o, { emits: i, classes: a(() => ({ main: { 'd1-avatar': !0, 'd1-avatar--focus': o.focus, 'd1-avatar--disabled': o.disabled, 'd1-avatar--readonly': o.readonly, 'd1-avatar--primary': o.primary, [`d1-avatar--size--${o.size}`]: n(N.size, o.size), [`d1-palette d1-palette--${o.palette}`]: n(N.palette, o.palette) } })), styles: a(() => ({})), components: { image: D, badge: de } }), l = c.render(); return t(c.expose()), (e, t) => (d(), s(u(l))) } }) }), z, B = t(() => { R(), R(), z = L, L.__docgenInfo = Object.assign({ displayName: L.name ?? L.__name }, { name: `D1Avatar`, exportName: `default`, displayName: `D1Avatar`, description: ``, tags: {}, sourceFiles: [`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Avatar/D1Avatar.vue`] }) }), V, H, U, W, pe = t(() => { ie(), F(), V = [{ name: `ariaLabel`, type: `string` }, { name: `badge`, type: `string | number | ConstrBind<BadgeProps>` }, { name: `badgeAttrs`, type: `ConstrBind<BadgeProps>` }, { name: `badgeDot`, type: `boolean` }, { name: `detail`, type: `Record<string, any>` }, { name: `disabled`, type: `boolean` }, { name: `focus`, type: `boolean` }, { name: `href`, type: `string` }, { name: `image`, type: `string | ConstrBind<ImageProps>` }, { name: `imageAttrs`, type: `ConstrBind<ImageProps>` }, { name: `isSkeleton`, type: `boolean` }, { name: `label`, type: `NumberOrString` }, { name: `labelId`, type: `string` }, { name: `palette`, type: `string`, option: [`red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`, `black`, `white`] }, { name: `primary`, type: `boolean` }, { name: `readonly`, type: `boolean` }, { name: `reduction`, type: `boolean` }, { name: `size`, type: `string`, option: [`xs`, `sm`, `md`, `lg`, `xl`] }, { name: `tabindex`, type: `string | number` }, { name: `to`, type: `string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric` }, { name: `value`, type: `EventClickValue['value']` }], H = [{ name: `default`, description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: `props`, type: `(any) | undefined` }] }], U = [{ name: `click`, description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: `event`, type: `MouseEvent` }, { name: `value`, type: `EventClickValue` }] }, { name: `clickLite`, description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: `value`, type: `EventClickValue` }] }, { name: `load`, description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: `image`, type: `ImageEventData` }] }], W = { component: `Avatar`, props: V, slots: H, events: U, defaults: P, wikiDesign: re } }), G, K = t(() => { m(), te(), pe(), G = new ae(W.component, W.props, W.defaults, W.wikiDesign, p, ne) }), me = e({ Avatar: () => J, AvatarBasic: () => Y, AvatarReduction: () => X, AvatarSkeleton: () => Z, __namedExportsOrder: () => Q, default: () => q }), q, J, Y, X, Z, Q, $ = t(() => {
  B(), K(), fe(), q = { title: `Ui/Avatar`, component: z, parameters: { design: `d1`, docs: { description: { component: G.getDescription() } } }, argTypes: G.getWiki(), args: G.getValues() }, J = {}, Y = { name: `Базовые`, render: () => ({ components: { D1Avatar: z }, template: `
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <D1Avatar label="Online User" badgeDot/>
        </div>
    ` }) }, X = { name: `Сокращение (reduction)`, render: () => ({ components: { D1Avatar: z }, template: `
        <div class="wiki-storybook-flex">
          <D1Avatar label="Иван Иванович" :reduction="true"/>
          <D1Avatar label="Иван Иванович" :reduction="false"/>
        </div>
    ` }) }, Z = { name: `Загрузка скелетона`, render: () => ({ components: { D1Avatar: z, D1Skeleton: O }, template: `
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Avatar :isSkeleton="true" label="JD"/>
          </div>
        </D1Skeleton>
    ` }) }, J.parameters = { ...J.parameters, docs: { ...J.parameters?.docs, source: { originalSource: `{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`, ...J.parameters?.docs?.source } } }, Y.parameters = { ...Y.parameters, docs: { ...Y.parameters?.docs, source: { originalSource: `{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Avatar
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <D1Avatar label="Online User" badgeDot/>
        </div>
    \`
  })
}`, ...Y.parameters?.docs?.source } } }, X.parameters = { ...X.parameters, docs: { ...X.parameters?.docs, source: { originalSource: `{
  name: 'Сокращение (reduction)',
  render: () => ({
    components: {
      D1Avatar
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Avatar label="Иван Иванович" :reduction="true"/>
          <D1Avatar label="Иван Иванович" :reduction="false"/>
        </div>
    \`
  })
}`, ...X.parameters?.docs?.source } } }, Z.parameters = { ...Z.parameters, docs: { ...Z.parameters?.docs, source: { originalSource: `{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1Avatar,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Avatar :isSkeleton="true" label="JD"/>
          </div>
        </D1Skeleton>
    \`
  })
}`, ...Z.parameters?.docs?.source } } }, Q = [`Avatar`, `AvatarBasic`, `AvatarReduction`, `AvatarSkeleton`]
}); $(); export { J as Avatar, Y as AvatarBasic, X as AvatarReduction, Z as AvatarSkeleton, Q as __namedExportsOrder, q as default, K as i, $ as n, G as r, me as t }
