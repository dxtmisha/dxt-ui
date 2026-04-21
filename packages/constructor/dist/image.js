import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-Bjg6wMoX.js";
import { t as n } from "./ImageInclude-D1bdP4zG.js";
import { computed as r, h as i, onUnmounted as a, ref as o, toRefs as s, watch as c, watchEffect as l } from "vue";
import { DesignConstructorAbstract as u, EventItem as d, Icons as f, forEach as p, getElementId as m, isArray as h, isFilled as g, isNumber as _, isString as v, toNumber as y, useLazyItemByMarginRef as b } from "@dxtmisha/functional";
import { ImageFile as x, ImagePdf as S, ImageTypeValue as C } from "@dxtmisha/constructor-basic";
//#region src/constructors/Image/ImageUint8Array.ts
var w = [], T = class {
	static is(e) {
		return e instanceof Uint8Array || e instanceof ArrayBuffer;
	}
	static createImage(e, t = "image/jpeg") {
		let n = this.getCacheItem(e, t), r = new Image();
		if (n) r.src = n.src;
		else {
			let n = new Blob([this.toUint8Array(e)], { type: t }), i = URL.createObjectURL(n);
			r.src = i, this.addCacheItem(e, t, i);
		}
		return {
			image: r,
			src: r.src,
			width: r.naturalWidth,
			height: r.naturalHeight
		};
	}
	static toUint8Array(e) {
		return e instanceof ArrayBuffer ? new Uint8Array(e) : e;
	}
	static getCacheItem(e, t) {
		return w.find((n) => n.item === e && n.type === t);
	}
	static addCacheItem(e, t, n) {
		w.push({
			item: e,
			type: t,
			src: n
		});
	}
}, E = class {
	constructor(e) {
		t(this, "item", r(() => {
			let e = this.props.value;
			if (e instanceof File) return C.file;
			if (T.is(e)) return C.array;
			if (v(e) && g(e)) {
				if (S.isPdf(e)) return C.pdf;
				if (e.match(/\//)) return C.image;
				if (e.match(/^#/)) return C.color;
				if (e.match(/^@/)) return C.public;
				if (e.match(/^\$/)) return C.material;
				if (e.match(/^flag-[a-z]{2}$/)) return C.flag;
				if (e.match(/^f-[a-z]{2}$/)) return C.flagCompressed;
				let t = e.match(/^(outlined|round|sharp|material)-/);
				return t ? t[1] : f.is(e) ? C.public : C.outlined;
			}
		})), this.props = e;
	}
}, D = {
	adaptiveGroup: "basic",
	preloadOffset: "1024px"
}, O = class {
	constructor(e, n) {
		t(this, "image", o()), this.props = e, this.type = n, l(async () => {
			this.image.value = await this.init();
		});
	}
	is() {
		return this.image.value !== void 0;
	}
	isLink() {
		return this.is() && typeof this.image.value == "string";
	}
	isImage() {
		return this.is() && typeof this.image.value != "string";
	}
	async init() {
		let e = this.props.value;
		if (e) switch (this.type.item.value) {
			case C.pdf: return await S.get(e);
			case C.array: return await T.createImage(e);
			case C.image:
			case C.file:
				try {
					return this.props.lazy ? this.props.value : await x.createImage(e);
				} catch (t) {
					console.error("ImageData.initImage: ", e);
				}
				break;
			case C.public:
			case C.icon:
			case C.flag:
				if (v(e)) return await f.get(e, this.props.url);
				break;
		}
	}
}, k = class {
	constructor(e) {
		t(this, "coordinator", r(() => {
			if (this.is()) {
				let f = this.props.coordinator;
				switch (f.length) {
					case 1:
						var e, t, n, r;
						return [
							(e = f[0]) == null ? 0 : e,
							(t = f[0]) == null ? 0 : t,
							(n = f[0]) == null ? 0 : n,
							(r = f[0]) == null ? 0 : r
						];
					case 2:
						var i, a, o, s;
						return [
							(i = f[0]) == null ? 0 : i,
							(a = f[1]) == null ? 0 : a,
							(o = f[0]) == null ? 0 : o,
							(s = f[1]) == null ? 0 : s
						];
					case 3:
						var c, l, u, d;
						return [
							(c = f[0]) == null ? 0 : c,
							(l = f[1]) == null ? 0 : l,
							(u = f[2]) == null ? 0 : u,
							(d = f[1]) == null ? 0 : d
						];
					case 4: return f;
				}
			}
			return [
				0,
				0,
				0,
				0
			];
		})), t(this, "size", r(() => {
			let e = this.coordinator.value;
			return {
				width: 100 - e[1] - e[3],
				height: 100 - e[2] - e[0]
			};
		})), this.props = e;
	}
	is() {
		let e = this.props.coordinator;
		return h(e) && e.length > 0 && e.length < 5;
	}
	getSize() {
		let e = this.size.value, t = e.width === 0 ? 100 : e.width, n = e.height === 0 ? 100 : e.height;
		return {
			width: `${100 / t * 100}%`,
			height: `${100 / n * 100}%`
		};
	}
}, A = class {
	constructor(e, n) {
		t(this, "x", r(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((e = this.props.x) == null ? void 0 : e.toString()) || "center";
		})), t(this, "y", r(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[0] + this.coordinator.size.value.height / 2}%` : ((e = this.props.y) == null ? void 0 : e.toString()) || "center";
		})), this.props = e, this.coordinator = n;
	}
}, j = class {
	constructor(e) {
		t(this, "factorMax", 1), t(this, "size", {
			width: 0,
			height: 0
		}), t(this, "offset", {
			width: 7680,
			height: 7680
		}), this.name = e;
	}
	is(e) {
		return this.name === e;
	}
	isSize() {
		return !!(this.size.width || this.size.width);
	}
	getWidth() {
		return this.size.width;
	}
	getHeight() {
		return this.size.height;
	}
	getOffsetWidth() {
		return this.offset.width;
	}
	getOffsetHeight() {
		return this.offset.height;
	}
	getFactorMax() {
		return this.factorMax;
	}
	makeWidth(e) {
		return e > this.size.width && (this.size.width = e), this;
	}
	makeHeight(e) {
		return e > this.size.height && (this.size.height = e), this;
	}
	makeOffsetWidth(e) {
		return e < this.offset.width && (this.offset.width = e), this;
	}
	makeOffsetHeight(e) {
		return e < this.offset.height && (this.offset.height = e), this;
	}
	makeFactorMax(e) {
		return e < this.factorMax && (this.factorMax = e), this;
	}
	reset() {
		return this.factorMax = 1, this.size = {
			width: 0,
			height: 0
		}, this.offset = {
			width: 7680,
			height: 7680
		}, this;
	}
}, M = class {
	static isSize() {
		return this.items.find((e) => e.isSize()) !== void 0;
	}
	static get(e) {
		return this.find(e) || this.init(e);
	}
	static reset() {
		this.items.forEach((e) => e.reset());
	}
	static find(e) {
		return this.items.find((t) => t.is(e));
	}
	static init(e) {
		let t = new j(e);
		return this.items.push(t), t;
	}
};
t(M, "items", []);
//#endregion
//#region src/constructors/Image/ImageAdaptiveGroup.ts
var N = class {
	static is(e) {
		return this.objects.findIndex((t) => t === e) !== -1;
	}
	static add(e) {
		this.is(e) || (this.objects.push(e), this.make());
	}
	static remove(e) {
		let t = this.objects.findIndex((t) => t === e);
		t !== -1 && (this.objects.splice(t, 1), this.cache = []), this.make();
	}
	static reset() {
		this.cache = [], this.start();
	}
	static make() {
		this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new d(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
			this.time = !1, this.start();
		})));
	}
	static getItemIdByVisible() {
		return p(this.objectsAdaptive, (e) => e.getId());
	}
	static start() {
		if (this.isAdaptive()) {
			this.makeAdaptive();
			let e = this.getItemIdByVisible();
			this.isCache(e) && (this.cache = e, this.makeSize(), this.makePercent(), this.makeFactorMax());
		} else {
			var e;
			(e = this.event) == null || e.stop();
		}
	}
	static makeAdaptive() {
		this.objectsAdaptive = [], this.objects.forEach((e) => {
			e.make(), e.isBeyond() && this.objectsAdaptive.push(e);
		});
	}
	static makeSize() {
		M.reset(), this.objectsAdaptive.forEach((e) => {
			let t = e.element.value;
			t && M.get(e.group.value).makeWidth(e.width.value).makeHeight(e.height.value).makeOffsetWidth(t.offsetWidth).makeOffsetHeight(t.offsetHeight);
		});
	}
	static makePercent() {
		M.isSize() && this.objectsAdaptive.forEach((e) => {
			let t = e.element.value, n = M.get(e.group.value);
			if (t) {
				let r = n.getWidth(), i = n.getHeight();
				e.setPercent(e.width.value * (r ? 1 / r : 0) * (n.getOffsetWidth() / t.offsetWidth), e.height.value * (i ? 1 / i : 0) * (n.getOffsetHeight() / t.offsetHeight));
			}
		});
	}
	static makeFactorMax() {
		M.isSize() && this.objectsAdaptive.forEach((e) => {
			M.get(e.group.value).makeFactorMax(e.factor.value);
		});
	}
	static isAdaptive() {
		return !!this.objects.find((e) => e.is());
	}
	static isCache(e) {
		return this.cache.join("|") !== e.join("|");
	}
};
t(N, "objects", []), t(N, "objectsAdaptive", []), t(N, "cache", []), t(N, "event", void 0), t(N, "time", void 0);
//#endregion
//#region src/constructors/Image/ImageAdaptiveItem.ts
var P = /* @__PURE__ */ function(e) {
	return e.x = "x", e.y = "y", e;
}(P || {}), F = "main", I = 512, L = class {
	constructor(e, n, i) {
		t(this, "percent", o({
			width: 0,
			height: 0
		})), t(this, "beyond", !1), t(this, "visible", !1), t(this, "active", r(() => !!(this.props.adaptive && (this.width.value || this.height.value)) && this.data.isImage())), t(this, "group", r(() => {
			var e;
			return (e = this.props.adaptiveGroup) == null ? F : e;
		})), t(this, "width", r(() => {
			var e;
			return y((e = this.props.objectWidth) == null ? 0 : e);
		})), t(this, "height", r(() => {
			var e, t;
			return y((e = (t = this.props) == null ? void 0 : t.objectHeight) == null ? 0 : e);
		})), t(this, "type", r(() => {
			if (this.width.value && this.percent.value.width > 0) return P.x;
			if (this.height.value && this.percent.value.height > 0) return P.y;
		})), t(this, "size", r(() => {
			if (this.element.value && this.data.isImage()) {
				let e = this.data.image.value;
				switch (this.type.value) {
					case P.x: return e.height * (this.element.value.offsetWidth * this.percent.value.width / e.width);
					case P.y: return e.width * (this.element.value.offsetHeight * this.percent.value.height / e.height);
				}
			}
			return 0;
		})), t(this, "factor", r(() => {
			let e = this.element.value;
			if (e) {
				let t = this.size.value;
				if (this.type.value === P.x && t > e.offsetHeight) return e.offsetHeight / t;
				if (this.type.value === P.y && t > e.offsetWidth) return e.offsetWidth / t;
			}
			return 1;
		})), this.props = e, this.data = n, this.element = i, l(() => {
			this.is() ? N.add(this) : N.remove(this);
		});
	}
	is() {
		var e;
		return this.active.value && !!((e = this.element.value) != null && e.closest("body"));
	}
	isGroup(e) {
		return this.group.value === e;
	}
	isBeyond() {
		return this.beyond;
	}
	isVisible() {
		return this.visible;
	}
	getId() {
		return m(this.element.value);
	}
	getBackgroundSize() {
		let e = M.get(this.group.value).getFactorMax();
		switch (this.type.value) {
			case P.x: return `${100 * this.percent.value.width * e}% auto`;
			case P.y: return `auto ${100 * this.percent.value.height * e}%`;
		}
		return null;
	}
	setPercent(e, t) {
		return (this.percent.value.width !== e || this.percent.value.height !== t) && (this.percent.value = {
			width: e,
			height: t
		}), this;
	}
	remove() {
		this.active.value && N.remove(this);
	}
	make() {
		if (this.beyond = !1, this.visible = !1, this.element.value && this.is()) if (this.props.adaptiveAlways) this.beyond = !0, this.visible = !0;
		else {
			let e = this.element.value.getBoundingClientRect();
			this.beyond = !(e.bottom < -512 || e.top > window.innerHeight + 512), this.visible = !(e.bottom < 0 || e.top > window.innerHeight);
		}
		return this;
	}
}, R = class {
	constructor(e, n, i, a) {
		t(this, "image", r(() => {
			let e = this.imageSrc.value;
			return e ? `url("${e}")` : null;
		})), t(this, "imageSrc", r(() => {
			let e = this.data.image.value;
			switch (typeof e) {
				case "string": return e;
				case "object": return e.src;
				default: return null;
			}
		})), t(this, "size", r(() => {
			if (this.coordinator.is()) return this.getSizeByCoordinator();
			if (this.adaptive.is()) {
				let e = this.adaptive.getBackgroundSize();
				if (e) return e;
			}
			return this.getSizeForItem();
		})), this.props = e, this.data = n, this.coordinator = i, this.adaptive = a;
	}
	isImage() {
		return !!this.image.value;
	}
	getSize(e, t) {
		let n = this.data.image.value;
		return typeof n == "object" ? n.height < n.width ? `auto ${t}` : `${e} auto` : null;
	}
	getSizeByCoordinator() {
		let { width: e, height: t } = this.coordinator.getSize();
		return this.getSize(e, t);
	}
	getSizeForItem() {
		let e = this.props.size;
		return g(e) ? e.toString().match(/%$/) ? this.getSize(e, e) : e.toString() : null;
	}
}, z = class {
	constructor(e, n, i, a, l) {
		t(this, "lazyInit", o(!1)), t(this, "lazyStatus", void 0), t(this, "is", r(() => !!this.props.tagImg && this.isType())), t(this, "isLazy", r(() => !!this.props.lazy && !this.lazyInit.value)), t(this, "isPicture", r(() => this.is.value && !!this.props.picture)), t(this, "binds", r(() => {
			let e = { key: "img" };
			if (this.is.value) {
				var t;
				e.src = this.background.imageSrc.value, e.alt = (t = this.props.alt) == null ? "" : t, e.width = "100%", e.height = "100%", e.style = this.styles.value, this.props.lazy && (e.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (e.srcset = this.getSrcset());
			}
			return e;
		})), t(this, "picture", r(() => {
			if (this.props.picture) return h(this.props.picture) ? this.props.picture : p(this.props.picture, (e, t) => ({
				key: t,
				srcset: e,
				media: `(width >= ${t})`
			}));
		})), t(this, "styles", r(() => {
			let e = {
				"object-position": `${this.position.x.value} ${this.position.y.value}`,
				"--sys-transform-originX": this.position.x.value,
				"--sys-transform-originY": this.position.y.value
			};
			return this.isSize() && (e["--sys-transform-scale"] = this.getSize()), e;
		})), this.props = e, this.element = n, this.type = i, this.position = a, this.background = l;
		let { lazy: u, preloadOffset: d } = s(e);
		c([
			u,
			d,
			n
		], () => {
			if (this.props.lazy && this.element.value) this.makeLazy();
			else {
				var e;
				this.lazyInit.value = !1, (e = this.lazyStatus) == null || e.stop(), this.lazyStatus = void 0;
			}
		}, { immediate: !0 });
	}
	isType() {
		let e = this.type.item.value;
		return e === C.file || e === C.image;
	}
	isSize() {
		let e = this.background.size.value;
		return !!(e && e.match("[% ]"));
	}
	getSize() {
		var e;
		return (e = this.background.size.value) == null || (e = e.replace("auto", "")) == null ? void 0 : e.trim();
	}
	getSrcset() {
		if (this.props.srcset) return typeof this.props.srcset == "string" ? this.props.srcset : Object.entries(this.props.srcset).map(([e, t]) => `${t} ${this.toSrcsetKey(e)}`).join(", ");
	}
	toSrcsetKey(e) {
		return _(e) ? `${e}w` : String(e);
	}
	makeLazy() {
		let e = b(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
		this.lazyStatus = c(e, () => {
			this.lazyInit.value = e.value;
		}, { immediate: !0 });
	}
}, B = class {
	constructor(n, i, o, s, l) {
		t(this, "type", void 0), t(this, "data", void 0), t(this, "coordinator", void 0), t(this, "position", void 0), t(this, "adaptiveItem", void 0), t(this, "background", void 0), t(this, "img", void 0), t(this, "tag", r(() => this.img.is.value ? "img" : "span")), t(this, "text", r(() => {
			let e = this.type.item.value;
			if (e === C.pdf) {
				let e = this.data.image.value;
				if (v(e)) return e;
			}
			let t = this.props.value;
			if (e === C.flagCompressed && t) return String(t).replace("f-", "").toUpperCase();
			if (e && v(t) && [
				"filled",
				"outlined",
				"round",
				"sharp",
				"two-tone",
				"material"
			].indexOf(e) !== -1) return t.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
		})), t(this, "classes", r(() => {
			let e = this.type.item.value, t = {
				[`${this.className}--type--${e}`]: e !== void 0,
				[`${this.className}--background`]: this.background.isImage(),
				notranslate: !0
			};
			switch (this.img.is.value && (t[`${this.className}--img`] = !0), e) {
				case "outlined":
					t["material-symbols-outlined"] = !0;
					break;
				case "round":
					t["material-symbols-rounded"] = !0;
					break;
				case "sharp":
					t["material-symbols-sharp"] = !0;
					break;
				case "material":
					t["material-icons"] = !0;
					break;
			}
			return t;
		})), t(this, "styles", r(() => {
			let e = this.props.value;
			if (e) switch (this.type.item.value) {
				case C.file:
				case C.image:
				case C.array: return {
					"background-image": this.background.image.value,
					"background-size": this.background.size.value,
					"background-position-x": this.position.x.value,
					"background-position-y": this.position.y.value
				};
				case C.icon: return { "background-image": this.background.image.value };
				case C.flag: return {
					"background-image": this.background.image.value,
					"background-size": "contain"
				};
				case C.public: return { "mask-image": this.background.image.value };
				case C.color: if (v(e)) return { "background-color": e };
			}
			return {};
		})), t(this, "binds", r(() => ({
			translate: "no",
			...e.role("img"),
			...e.label(this.props.alt),
			...e.hidden()
		}))), t(this, "valueBinds", r(() => ({
			key: "value",
			data: this.data.image.value
		}))), this.props = n, this.element = i, this.className = o, this.emits = s;
		let { ImageAdaptiveItemConstructor: u = L, ImageBackgroundConstructor: d = R, ImageCoordinatorConstructor: f = k, ImageDataConstructor: p = O, ImageImgConstructor: m = z, ImagePositionConstructor: h = A, ImageTypeConstructor: g = E } = l == null ? {} : l;
		this.type = new g(n), this.data = new p(n, this.type), this.coordinator = new f(n), this.position = new h(n, this.coordinator), this.adaptiveItem = new u(n, this.data, i), this.background = new d(n, this.data, this.coordinator, this.adaptiveItem), this.img = new m(this.props, i, this.type, this.position, this.background), s && c(this.data.image, (e) => {
			s("load", {
				type: this.type.item.value,
				image: e
			});
		}), a(() => this.adaptiveItem.remove());
	}
}, V = class extends u {
	constructor(e, n, a, o = B) {
		super(e, n, a), t(this, "item", void 0), t(this, "propsImage", r(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "image",
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), t(this, "propsMain", r(() => {
			var e;
			return {
				...this.propsImage.value,
				...this.item.binds.value,
				style: (e = this.styles) == null ? void 0 : e.value
			};
		})), t(this, "renderPicture", () => {
			let e = this.item.img.picture.value, t = [];
			return e && e.forEach((e) => t.push(i("source", e))), t.push(this.renderImgItem()), i("picture", this.propsImage.value, t);
		}), t(this, "renderImg", () => i("span", this.propsImage.value, this.renderImgItem())), t(this, "renderImgItem", () => i("img", this.item.img.binds.value)), t(this, "renderValue", () => this.item.type.item.value === C.pdf ? i("object", this.item.valueBinds.value) : this.item.type.item.value === C.flagCompressed ? i("span", { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }) : this.item.text.value), this.item = new o(this.props, this.element, this.getName(), this.emits), this.init();
	}
	initExpose() {
		return {
			type: this.item.type.item,
			data: this.item.data.image
		};
	}
	initClasses() {
		return { main: this.item.classes.value };
	}
	initStyles() {
		return this.item.styles.value;
	}
	initRender() {
		return this.item.img.isPicture.value ? this.renderPicture() : this.item.img.is.value ? this.renderImg() : i("span", this.propsMain.value, this.renderValue());
	}
};
//#endregion
export { B as Image, N as ImageAdaptiveGroup, L as ImageAdaptiveItem, R as ImageBackground, j as ImageCalculation, M as ImageCalculationList, k as ImageCoordinator, O as ImageData, V as ImageDesign, z as ImageImg, n as ImageInclude, A as ImagePosition, E as ImageType, T as ImageUint8Array, I as MAX_BEYOND, D as defaultsImage };
