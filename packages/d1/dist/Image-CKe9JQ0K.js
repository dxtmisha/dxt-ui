import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, onUnmounted as s, openBlock as c, ref as l, toRefs as u, unref as d, watch as f, watchEffect as p } from "vue";
import { DesignConstructorAbstract as m, EventItem as h, Icons as g, forEach as _, getElementId as v, inArray as y, isArray as b, isDomRuntime as x, isFilled as S, isNumber as C, isString as w, resizeImageByMax as T, toNumber as E, useLazyItemByMarginRef as D } from "@dxtmisha/functional";
//#region ../constructor/dist/image.js
var O = 1280, k = class {
	static isImage(e) {
		return !!e.type.match(/^image\//);
	}
	static createImage(e) {
		return new Promise((t) => {
			if (e) {
				let n = new Image();
				n.onerror = () => t(void 0), n.onload = () => {
					t({
						image: n,
						src: this.getSRC(n, e),
						width: n.naturalWidth,
						height: n.naturalHeight
					});
				}, (async () => {
					n.src = e instanceof File ? await this.getFileResult(e) : e;
				})();
			} else t(void 0);
		});
	}
	static async getPath(e) {
		return this.createImage(e).then((e) => {
			var t;
			return (t = e == null ? void 0 : e.src) == null ? "" : t;
		});
	}
	static getFileResult(e) {
		return new Promise((t) => {
			this.isImage(e) ? this.getFileReader(e).then((e) => t(e)) : t("");
		});
	}
	static getFileReader(e) {
		return new Promise((t) => {
			let n = new FileReader();
			n.onload = () => t(typeof n.result == "string" ? n.result : ""), n.readAsDataURL(e);
		});
	}
	static getSRC(e, t, n = O) {
		if (x() && (t instanceof File || t === void 0) && (e.naturalHeight > n || e.naturalWidth > n)) {
			var r;
			return (r = T(e, n)) == null ? "" : r;
		} else return e.src;
	}
}, A = "#toolbar=0&scrollbar=1", j = class {
	static isPdf(e) {
		return w(e) ? !!e.match(/\.pdf$/i) : x() && !!e.type.match(/\/pdf$/i);
	}
	static async get(e) {
		return w(e) ? `${e}${A}` : this.isPdf(e) ? `${await k.getFileReader(e)}${A}` : "";
	}
}, M = [], N = class {
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
		return M.find((n) => n.item === e && n.type === t);
	}
	static addCacheItem(e, t, n) {
		M.push({
			item: e,
			type: t,
			src: n
		});
	}
}, P = /* @__PURE__ */ function(e) {
	return e.pdf = "pdf", e.file = "file", e.array = "array", e.image = "image", e.flag = "flag", e.flagCompressed = "flag-compressed", e.color = "color", e.public = "public", e.filled = "filled", e.outlined = "outlined", e.round = "round", e.sharp = "sharp", e.twoTone = "two-tone", e.material = "material", e.icon = "icon", e;
}({}), F = class {
	constructor(t) {
		e(this, "item", n(() => {
			let e = this.props.value;
			if (e instanceof File) return P.file;
			if (N.is(e)) return P.array;
			if (w(e) && S(e)) {
				if (j.isPdf(e)) return P.pdf;
				if (e.match(/\//)) return P.image;
				if (e.match(/^#/)) return P.color;
				if (e.match(/^@/)) return P.public;
				if (e.match(/^\$/)) return P.material;
				if (e.match(/^flag-[a-z]{2}$/)) return P.flag;
				if (e.match(/^f-[a-z]{2}$/)) return P.flagCompressed;
				let t = e.match(/^(outlined|round|sharp|material)-/);
				return t ? t[1] : g.is(e) ? P.public : P.outlined;
			}
		})), this.props = t;
	}
}, I = {
	adaptiveGroup: "basic",
	preloadOffset: "1024px"
}, L = class {
	constructor(t, n) {
		e(this, "image", l()), this.props = t, this.type = n, p(async () => {
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
			case P.pdf: return await j.get(e);
			case P.array: return await N.createImage(e);
			case P.image:
			case P.file:
				try {
					return this.props.lazy ? this.props.value : await k.createImage(e);
				} catch (t) {
					console.error("ImageData.initImage: ", e);
				}
				break;
			case P.public:
			case P.icon:
			case P.flag:
				if (w(e)) return await g.get(e, this.props.url);
				break;
		}
	}
}, R = class {
	constructor(t) {
		e(this, "coordinator", n(() => {
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
		})), e(this, "size", n(() => {
			let e = this.coordinator.value;
			return {
				width: 100 - e[1] - e[3],
				height: 100 - e[2] - e[0]
			};
		})), this.props = t;
	}
	is() {
		let e = this.props.coordinator;
		return b(e) && e.length > 0 && e.length < 5;
	}
	getSize() {
		let e = this.size.value, t = e.width === 0 ? 100 : e.width, n = e.height === 0 ? 100 : e.height;
		return {
			width: `${100 / t * 100}%`,
			height: `${100 / n * 100}%`
		};
	}
}, z = class {
	constructor(t, r) {
		e(this, "x", n(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((e = this.props.x) == null ? void 0 : e.toString()) || "center";
		})), e(this, "y", n(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[0] + this.coordinator.size.value.height / 2}%` : ((e = this.props.y) == null ? void 0 : e.toString()) || "center";
		})), this.props = t, this.coordinator = r;
	}
}, B = class {
	constructor(t) {
		e(this, "factorMax", 1), e(this, "size", {
			width: 0,
			height: 0
		}), e(this, "offset", {
			width: 7680,
			height: 7680
		}), this.name = t;
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
}, V = class {
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
		let t = new B(e);
		return this.items.push(t), t;
	}
};
e(V, "items", []);
var H = class {
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
		this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new h(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
			this.time = !1, this.start();
		})));
	}
	static getItemIdByVisible() {
		return _(this.objectsAdaptive, (e) => e.getId());
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
		V.reset(), this.objectsAdaptive.forEach((e) => {
			let t = e.element.value;
			t && V.get(e.group.value).makeWidth(e.width.value).makeHeight(e.height.value).makeOffsetWidth(t.offsetWidth).makeOffsetHeight(t.offsetHeight);
		});
	}
	static makePercent() {
		V.isSize() && this.objectsAdaptive.forEach((e) => {
			let t = e.element.value, n = V.get(e.group.value);
			if (t) {
				let r = n.getWidth(), i = n.getHeight();
				e.setPercent(e.width.value * (r ? 1 / r : 0) * (n.getOffsetWidth() / t.offsetWidth), e.height.value * (i ? 1 / i : 0) * (n.getOffsetHeight() / t.offsetHeight));
			}
		});
	}
	static makeFactorMax() {
		V.isSize() && this.objectsAdaptive.forEach((e) => {
			V.get(e.group.value).makeFactorMax(e.factor.value);
		});
	}
	static isAdaptive() {
		return !!this.objects.find((e) => e.is());
	}
	static isCache(e) {
		return this.cache.join("|") !== e.join("|");
	}
};
e(H, "objects", []), e(H, "objectsAdaptive", []), e(H, "cache", []), e(H, "event", void 0), e(H, "time", void 0);
var U = /* @__PURE__ */ function(e) {
	return e.x = "x", e.y = "y", e;
}(U || {}), W = "main", G = class {
	constructor(t, r, i) {
		e(this, "percent", l({
			width: 0,
			height: 0
		})), e(this, "beyond", !1), e(this, "visible", !1), e(this, "active", n(() => !!(this.props.adaptive && (this.width.value || this.height.value)) && this.data.isImage())), e(this, "group", n(() => {
			var e;
			return (e = this.props.adaptiveGroup) == null ? W : e;
		})), e(this, "width", n(() => {
			var e;
			return E((e = this.props.objectWidth) == null ? 0 : e);
		})), e(this, "height", n(() => {
			var e, t;
			return E((e = (t = this.props) == null ? void 0 : t.objectHeight) == null ? 0 : e);
		})), e(this, "type", n(() => {
			if (this.width.value && this.percent.value.width > 0) return U.x;
			if (this.height.value && this.percent.value.height > 0) return U.y;
		})), e(this, "size", n(() => {
			if (this.element.value && this.data.isImage()) {
				let e = this.data.image.value;
				switch (this.type.value) {
					case U.x: return e.height * (this.element.value.offsetWidth * this.percent.value.width / e.width);
					case U.y: return e.width * (this.element.value.offsetHeight * this.percent.value.height / e.height);
				}
			}
			return 0;
		})), e(this, "factor", n(() => {
			let e = this.element.value;
			if (e) {
				let t = this.size.value;
				if (this.type.value === U.x && t > e.offsetHeight) return e.offsetHeight / t;
				if (this.type.value === U.y && t > e.offsetWidth) return e.offsetWidth / t;
			}
			return 1;
		})), this.props = t, this.data = r, this.element = i, p(() => {
			this.is() ? H.add(this) : H.remove(this);
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
		return v(this.element.value);
	}
	getBackgroundSize() {
		let e = V.get(this.group.value).getFactorMax();
		switch (this.type.value) {
			case U.x: return `${100 * this.percent.value.width * e}% auto`;
			case U.y: return `auto ${100 * this.percent.value.height * e}%`;
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
		this.active.value && H.remove(this);
	}
	make() {
		if (this.beyond = !1, this.visible = !1, this.element.value && this.is()) if (this.props.adaptiveAlways) this.beyond = !0, this.visible = !0;
		else {
			let e = this.element.value.getBoundingClientRect();
			this.beyond = !(e.bottom < -512 || e.top > window.innerHeight + 512), this.visible = !(e.bottom < 0 || e.top > window.innerHeight);
		}
		return this;
	}
}, K = class {
	constructor(t, r, i, a) {
		e(this, "image", n(() => {
			let e = this.imageSrc.value;
			return e ? `url("${e}")` : null;
		})), e(this, "imageSrc", n(() => {
			let e = this.data.image.value;
			switch (typeof e) {
				case "string": return e;
				case "object": return e.src;
				default: return null;
			}
		})), e(this, "size", n(() => {
			if (this.coordinator.is()) return this.getSizeByCoordinator();
			if (this.adaptive.is()) {
				let e = this.adaptive.getBackgroundSize();
				if (e) return e;
			}
			return this.getSizeForItem();
		})), this.props = t, this.data = r, this.coordinator = i, this.adaptive = a;
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
		return S(e) ? e.toString().match(/%$/) ? this.getSize(e, e) : e.toString() : null;
	}
}, q = class {
	constructor(t, r, i, a, o) {
		e(this, "lazyInit", l(!1)), e(this, "lazyStatus", void 0), e(this, "is", n(() => !!this.props.tagImg && this.isType())), e(this, "isLazy", n(() => !!this.props.lazy && !this.lazyInit.value)), e(this, "isPicture", n(() => this.is.value && !!this.props.picture)), e(this, "binds", n(() => {
			let e = { key: "img" };
			if (this.is.value) {
				var t;
				e.src = this.background.imageSrc.value, e.alt = (t = this.props.alt) == null ? "" : t, e.width = "100%", e.height = "100%", e.style = this.styles.value, this.props.lazy && (e.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (e.srcset = this.getSrcset());
			}
			return e;
		})), e(this, "picture", n(() => {
			if (this.props.picture) return b(this.props.picture) ? this.props.picture : _(this.props.picture, (e, t) => ({
				key: t,
				srcset: e,
				media: `(width >= ${t})`
			}));
		})), e(this, "styles", n(() => {
			let e = {
				"object-position": `${this.position.x.value} ${this.position.y.value}`,
				"--sys-transform-originX": this.position.x.value,
				"--sys-transform-originY": this.position.y.value
			};
			return this.isSize() && (e["--sys-transform-scale"] = this.getSize()), e;
		})), this.props = t, this.element = r, this.type = i, this.position = a, this.background = o;
		let { lazy: s, preloadOffset: c } = u(t);
		f([
			s,
			c,
			r
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
		return e === P.file || e === P.image;
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
		return C(e) ? `${e}w` : String(e);
	}
	makeLazy() {
		let e = D(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
		this.lazyStatus = f(e, () => {
			this.lazyInit.value = e.value;
		}, { immediate: !0 });
	}
}, J = class {
	constructor(r, i, a, o, c) {
		e(this, "type", void 0), e(this, "data", void 0), e(this, "coordinator", void 0), e(this, "position", void 0), e(this, "adaptiveItem", void 0), e(this, "background", void 0), e(this, "img", void 0), e(this, "tag", n(() => this.img.is.value ? "img" : "span")), e(this, "text", n(() => {
			let e = this.type.item.value;
			if (e === P.pdf) {
				let e = this.data.image.value;
				if (w(e)) return e;
			}
			let t = this.props.value;
			if (e === P.flagCompressed && t) return String(t).replace("f-", "").toUpperCase();
			if (e && w(t) && [
				"filled",
				"outlined",
				"round",
				"sharp",
				"two-tone",
				"material"
			].indexOf(e) !== -1) return t.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
		})), e(this, "classes", n(() => {
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
		})), e(this, "styles", n(() => {
			let e = this.props.value;
			if (e) switch (this.type.item.value) {
				case P.file:
				case P.image:
				case P.array: return {
					"background-image": this.background.image.value,
					"background-size": this.background.size.value,
					"background-position-x": this.position.x.value,
					"background-position-y": this.position.y.value
				};
				case P.icon: return { "background-image": this.background.image.value };
				case P.flag: return {
					"background-image": this.background.image.value,
					"background-size": "contain"
				};
				case P.public: return { "mask-image": this.background.image.value };
				case P.color: if (w(e)) return { "background-color": e };
			}
			return {};
		})), e(this, "binds", n(() => ({
			translate: "no",
			...t.role("img"),
			...t.label(this.props.alt),
			...t.hidden()
		}))), e(this, "valueBinds", n(() => ({
			key: "value",
			data: this.data.image.value
		}))), this.props = r, this.element = i, this.className = a, this.emits = o;
		let { ImageAdaptiveItemConstructor: l = G, ImageBackgroundConstructor: u = K, ImageCoordinatorConstructor: d = R, ImageDataConstructor: p = L, ImageImgConstructor: m = q, ImagePositionConstructor: h = z, ImageTypeConstructor: g = F } = c == null ? {} : c;
		this.type = new g(r), this.data = new p(r, this.type), this.coordinator = new d(r), this.position = new h(r, this.coordinator), this.adaptiveItem = new l(r, this.data, i), this.background = new u(r, this.data, this.coordinator, this.adaptiveItem), this.img = new m(this.props, i, this.type, this.position, this.background), o && f(this.data.image, (e) => {
			o("load", {
				type: this.type.item.value,
				image: e
			});
		}), s(() => this.adaptiveItem.remove());
	}
}, Y = class extends m {
	constructor(t, r, i, o = J) {
		super(t, r, i), e(this, "item", void 0), e(this, "propsImage", n(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "image",
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), e(this, "propsMain", n(() => {
			var e;
			return {
				...this.propsImage.value,
				...this.item.binds.value,
				style: (e = this.styles) == null ? void 0 : e.value
			};
		})), e(this, "renderPicture", () => {
			let e = this.item.img.picture.value, t = [];
			return e && e.forEach((e) => t.push(a("source", e))), t.push(this.renderImgItem()), a("picture", this.propsImage.value, t);
		}), e(this, "renderImg", () => a("span", this.propsImage.value, this.renderImgItem())), e(this, "renderImgItem", () => a("img", this.item.img.binds.value)), e(this, "renderValue", () => this.item.type.item.value === P.pdf ? a("object", this.item.valueBinds.value) : this.item.type.item.value === P.flagCompressed ? a("span", { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }) : this.item.text.value), this.item = new o(this.props, this.element, this.getName(), this.emits), this.init();
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
		return this.item.img.isPicture.value ? this.renderPicture() : this.item.img.is.value ? this.renderImg() : a("span", this.propsMain.value, this.renderValue());
	}
}, X = { size: [
	"auto",
	"contain",
	"cover"
] }, Z = { ...I }, Q = /* @__PURE__ */ i({
	name: "D1Image",
	__name: "D1Image",
	props: /* @__PURE__ */ o({
		value: {},
		url: {},
		adaptiveGroup: {},
		adaptiveAlways: { type: Boolean },
		objectWidth: {},
		objectHeight: {},
		coordinator: {},
		x: {},
		y: {},
		tagImg: { type: Boolean },
		srcset: {},
		picture: {},
		alt: {},
		lazy: { type: Boolean },
		preloadOffset: {},
		fetchPriority: {},
		turn: { type: Boolean },
		disabled: { type: Boolean },
		hide: { type: Boolean },
		adaptive: { type: Boolean },
		size: {}
	}, Z),
	emits: ["load"],
	setup(e, { expose: t, emit: i }) {
		let a = i, o = e, s = new Y("d1.image", o, {
			emits: a,
			classes: n(() => ({ main: {
				"d1-image": !0,
				"d1-image--turn": o.turn,
				"d1-image--disabled": o.disabled,
				"d1-image--hide": o.hide,
				"d1-image--adaptive": o.adaptive,
				[`d1-image--size--${o.size}`]: y(X.size, o.size)
			} })),
			styles: n(() => ({}))
		}), l = s.render();
		return t(s.expose()), (e, t) => (c(), r(d(l)));
	}
}), $ = Q;
//#endregion
export { Q as n, $ as t };
