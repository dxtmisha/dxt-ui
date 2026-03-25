import { computed as e } from "vue";
import { eventStopPropagation as t, getRef as n, isEnter as r, toBind as i, toBinds as a } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldInclude-BKoBWZdj.js
var o = Object.defineProperty, s = (e, t, n) => t in e ? o(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, c = (e, t, n) => s(e, typeof t == "symbol" ? t : t + "", n), l = class {
	constructor(o, s, l, u, d, f, p, m, h, g, _) {
		c(this, "binds", e(() => {
			var e, t, r, i, o, s;
			return a({
				focus: this.props.focus,
				selected: this.props.selected,
				readonly: this.props.readonly,
				disabled: this.props.disabled,
				loading: this.props.loading,
				forceShowMessage: this.props.forceShowMessage,
				label: this.props.label,
				prefix: this.props.prefix,
				suffix: this.props.suffix,
				caption: this.props.caption,
				helperMessage: this.props.helperMessage,
				required: this.props.required,
				detail: this.props.detail,
				cancel: this.props.cancel,
				counterShow: this.props.counterShow,
				icon: this.props.icon,
				iconTurn: this.props.iconTurn,
				iconHide: this.props.iconHide,
				iconDir: this.props.iconDir,
				iconPalette: this.props.iconPalette,
				iconTrailing: this.props.iconTrailing,
				iconTrailingTurnOnly: this.props.iconTrailingTurnOnly,
				iconTrailingDirOnly: this.props.iconTrailingDirOnly,
				iconTrailingPalette: this.props.iconTrailingPalette,
				iconAttrs: this.props.iconAttrs,
				align: this.props.align,
				arrowCarousel: (t = (e = this.arrow) == null ? void 0 : e.isCarousel()) == null ? this.props.arrow === "carousel" : t,
				arrowStepper: (i = (r = this.arrow) == null ? void 0 : r.isStepper()) == null ? this.props.arrow === "stepper" : i,
				arrowAlign: (s = (o = this.arrow) == null ? void 0 : o.align()) == null ? this.props.arrowAlign : s,
				isSkeleton: this.props.isSkeleton,
				fieldLabelAttrs: this.props.fieldLabelAttrs,
				fieldMessageAttrs: this.props.fieldMessageAttrs,
				fieldCounterAttrs: this.props.fieldCounterAttrs,
				onClick: this.on,
				onKeydown: this.onKeydown
			}, n(this.extra), this.props.fieldAttrs);
		})), c(this, "valueBinds", e(() => {
			var e, t;
			return {
				...this.binds.value,
				isValue: this.value.is.value,
				value: this.value.item.value,
				cancelShow: this.value.boolean.value,
				counter: this.value.length.value,
				disabledPrevious: (e = this.arrow) == null ? void 0 : e.disabledPrevious.value,
				disabledNext: (t = this.arrow) == null ? void 0 : t.disabledNext.value
			};
		})), c(this, "render", (e, t) => this.components ? this.components.render("field", i(this.valueBinds.value, t == null ? {} : t), e, this.index) : []), c(this, "on", (e, { type: n }) => {
			var r, i, a, o, s, c, l, u, d;
			if (e.target.closest("[data-element=\"scoreboard\"]")) switch (n) {
				case "icon":
					(r = this.onIcon) == null || r.call(this), t(e);
					break;
				case "icon-trailing":
					(i = this.onTrailing) == null || i.call(this), t(e);
					break;
				case "cancel":
					(a = this.event) == null || a.onClear(e), t(e);
					break;
				case "next":
					(o = this.onNext) == null || o.call(this), (s = this.arrow) == null || s.next(), (c = this.event) == null || c.on(e), t(e);
					break;
				case "previous":
					(l = this.onPrevious) == null || l.call(this), (u = this.arrow) == null || u.previous(), (d = this.event) == null || d.on(e), t(e);
					break;
			}
		}), c(this, "onKeydown", (e, t) => {
			r(e) && (this.on(e, t == null ? {} : t), e.preventDefault());
		}), this.props = o, this.value = s, this.components = l, this.event = u, this.arrow = d, this.onIcon = f, this.onTrailing = p, this.onNext = m, this.onPrevious = h, this.extra = g, this.index = _;
	}
};
//#endregion
export { l as t };
