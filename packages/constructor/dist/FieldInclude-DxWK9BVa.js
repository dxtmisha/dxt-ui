import { t as e } from "./defineProperty-BTtSLqQS.js";
import { computed as t } from "vue";
import { eventStopPropagation as n, getRef as r, isEnter as i, toBind as a, toBinds as o } from "@dxtmisha/functional";
//#region src/constructors/Field/FieldInclude.ts
var s = class {
	constructor(s, c, l, u, d, f, p, m, h, g, _) {
		e(this, "binds", t(() => {
			var e, t, n, i, a, s;
			return o({
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
				arrowCarousel: (e = (t = this.arrow) == null ? void 0 : t.isCarousel()) == null ? this.props.arrow === "carousel" : e,
				arrowStepper: (n = (i = this.arrow) == null ? void 0 : i.isStepper()) == null ? this.props.arrow === "stepper" : n,
				arrowAlign: (a = (s = this.arrow) == null ? void 0 : s.align()) == null ? this.props.arrowAlign : a,
				isSkeleton: this.props.isSkeleton,
				fieldLabelAttrs: this.props.fieldLabelAttrs,
				fieldMessageAttrs: this.props.fieldMessageAttrs,
				fieldCounterAttrs: this.props.fieldCounterAttrs,
				onClick: this.on,
				onKeydown: this.onKeydown
			}, r(this.extra), this.props.fieldAttrs);
		})), e(this, "valueBinds", t(() => {
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
		})), e(this, "render", (e, t) => this.components ? this.components.render("field", a(this.valueBinds.value, t == null ? {} : t), e, this.index) : []), e(this, "on", (e, { type: t }) => {
			var r, i;
			if (e.target.closest("[data-element=\"scoreboard\"]") && ((r = (i = this.event) == null ? void 0 : i.isEnabled()) == null || r)) switch (t) {
				case "icon":
					var a;
					(a = this.onIcon) == null || a.call(this), n(e);
					break;
				case "icon-trailing":
					var o;
					(o = this.onTrailing) == null || o.call(this), n(e);
					break;
				case "cancel":
					var s;
					(s = this.event) == null || s.onClear(e), n(e);
					break;
				case "next":
					var c, l, u;
					(c = this.onNext) == null || c.call(this), (l = this.arrow) == null || l.next(), (u = this.event) == null || u.on(e), n(e);
					break;
				case "previous":
					var d, f, p;
					(d = this.onPrevious) == null || d.call(this), (f = this.arrow) == null || f.previous(), (p = this.event) == null || p.on(e), n(e);
					break;
			}
		}), e(this, "onKeydown", (e, t) => {
			i(e) && (this.on(e, t == null ? {} : t), e.preventDefault());
		}), this.props = s, this.value = c, this.components = l, this.event = u, this.arrow = d, this.onIcon = f, this.onTrailing = p, this.onNext = m, this.onPrevious = h, this.extra = g, this.index = _;
	}
};
//#endregion
export { s as t };
