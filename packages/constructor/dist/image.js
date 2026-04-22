import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-Bjg6wMoX.js";
import { t as n } from "./ImageInclude-D1bdP4zG.js";
import { computed as r, h as i, onMounted as a, onUnmounted as o, ref as s, toRefs as c, watch as l, watchEffect as u } from "vue";
import { DesignConstructorAbstract as d, ErrorCenter as f, EventItem as p, Icons as m, computedAsync as h, forEach as g, getElementId as _, isArray as v, isDomRuntime as y, isFilled as b, isNumber as x, isString as S, resizeImageByMax as C, sleep as w, toNumber as T, useLazyItemByMarginRef as E } from "@dxtmisha/functional";
//#region src/classes/ClientOnlyInclude.ts
var D = class {
	constructor(e) {
		t(this, "isMounted", s(!1)), t(this, "isRender", r(() => !this.props.clientOnly || this.isMounted.value)), this.props = e, a(() => {
			this.isMounted.value = !0;
		});
	}
}, O = 1280, k = class {
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
		var t;
		let n = await this.createImage(e);
		return S(n) ? n : (t = n == null ? void 0 : n.src) == null ? "" : t;
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
		if ((t instanceof File || t === void 0) && (e.naturalHeight > n || e.naturalWidth > n)) {
			var r;
			return (r = C(e, n)) == null ? "" : r;
		} else return e.src;
	}
}, A = "#toolbar=0&scrollbar=1", j = class {
	static isPdf(e) {
		return S(e) ? !!e.match(/\.pdf$/i) : y() && !!e.type.match(/\/pdf$/i);
	}
	static async get(e) {
		return S(e) ? `${e}${A}` : this.isPdf(e) ? `${await k.getFileReader(e)}${A}` : "";
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
	constructor(e, n) {
		t(this, "item", r(() => {
			let e = this.props.value;
			if (this.clientOnly.isRender.value) {
				if (e instanceof File) return P.file;
				if (N.is(e)) return P.array;
				if (j.isPdf(e)) return P.pdf;
			}
			if (S(e) && b(e)) {
				if (e.match(/\//)) return P.image;
				if (e.match(/^#/)) return P.color;
				if (e.match(/^@/)) return P.public;
				if (e.match(/^\$/)) return P.material;
				if (e.match(/^flag-[a-z]{2}$/)) return P.flag;
				if (e.match(/^f-[a-z]{2}$/)) return P.flagCompressed;
				let t = e.match(/^(outlined|round|sharp|material)-/);
				return t ? t[1] : m.is(e) ? P.public : P.outlined;
			}
		})), this.props = e, this.clientOnly = n;
	}
}, I = {
	adaptiveGroup: "basic",
	preloadOffset: "1024px"
}, L = "constructor", R = class {
	constructor(e, n, r, i) {
		t(this, "image", h(async () => {
			let e = this.props.value;
			if (e) switch (this.type.item.value) {
				case P.pdf: return await w(320), await j.get(e);
				case P.array: return N.createImage(e);
				case P.image:
				case P.file:
					try {
						return !this.clientOnly.isRender.value || this.props.lazy ? this.props.value : await k.createImage(e);
					} catch (e) {
						f.on({
							group: L,
							code: "image-data"
						});
					}
					break;
				case P.public:
				case P.icon:
				case P.flag:
					if (S(e)) return await m.get(e, this.props.url);
					break;
			}
		})), this.props = e, this.clientOnly = n, this.type = r, this.emits = i, i && l(this.image, (e) => {
			typeof e == "object" && i("load", {
				type: this.type.item.value,
				image: e
			});
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
}, z = class {
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
		return v(e) && e.length > 0 && e.length < 5;
	}
	getSize() {
		let e = this.size.value, t = e.width === 0 ? 100 : e.width, n = e.height === 0 ? 100 : e.height;
		return {
			width: `${100 / t * 100}%`,
			height: `${100 / n * 100}%`
		};
	}
}, B = class {
	constructor(e, n) {
		t(this, "x", r(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((e = this.props.x) == null ? void 0 : e.toString()) || "center";
		})), t(this, "y", r(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[0] + this.coordinator.size.value.height / 2}%` : ((e = this.props.y) == null ? void 0 : e.toString()) || "center";
		})), this.props = e, this.coordinator = n;
	}
}, V = class {
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
}, H = class {
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
		let t = new V(e);
		return this.items.push(t), t;
	}
};
t(H, "items", []);
//#endregion
//#region src/constructors/Image/ImageAdaptiveGroup.ts
var U = class {
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
		this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new p(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
			this.time = !1, this.start();
		})));
	}
	static getItemIdByVisible() {
		return g(this.objectsAdaptive, (e) => e.getId());
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
		H.reset(), this.objectsAdaptive.forEach((e) => {
			let t = e.element.value;
			t && H.get(e.group.value).makeWidth(e.width.value).makeHeight(e.height.value).makeOffsetWidth(t.offsetWidth).makeOffsetHeight(t.offsetHeight);
		});
	}
	static makePercent() {
		H.isSize() && this.objectsAdaptive.forEach((e) => {
			let t = e.element.value, n = H.get(e.group.value);
			if (t) {
				let r = n.getWidth(), i = n.getHeight();
				e.setPercent(e.width.value * (r ? 1 / r : 0) * (n.getOffsetWidth() / t.offsetWidth), e.height.value * (i ? 1 / i : 0) * (n.getOffsetHeight() / t.offsetHeight));
			}
		});
	}
	static makeFactorMax() {
		H.isSize() && this.objectsAdaptive.forEach((e) => {
			H.get(e.group.value).makeFactorMax(e.factor.value);
		});
	}
	static isAdaptive() {
		return !!this.objects.find((e) => e.is());
	}
	static isCache(e) {
		return this.cache.join("|") !== e.join("|");
	}
};
t(U, "objects", []), t(U, "objectsAdaptive", []), t(U, "cache", []), t(U, "event", void 0), t(U, "time", void 0);
//#endregion
//#region src/constructors/Image/ImageAdaptiveItem.ts
var W = /* @__PURE__ */ function(e) {
	return e.x = "x", e.y = "y", e;
}(W || {}), G = "main", K = 512, q = class {
	constructor(e, n, i, a) {
		t(this, "percent", s({
			width: 0,
			height: 0
		})), t(this, "beyond", !1), t(this, "visible", !1), t(this, "active", r(() => !!(this.props.adaptive && this.clientOnly.isRender.value && (this.width.value || this.height.value)) && this.data.isImage())), t(this, "group", r(() => {
			var e;
			return (e = this.props.adaptiveGroup) == null ? G : e;
		})), t(this, "width", r(() => {
			var e;
			return T((e = this.props.objectWidth) == null ? 0 : e);
		})), t(this, "height", r(() => {
			var e, t;
			return T((e = (t = this.props) == null ? void 0 : t.objectHeight) == null ? 0 : e);
		})), t(this, "type", r(() => {
			if (this.width.value && this.percent.value.width > 0) return W.x;
			if (this.height.value && this.percent.value.height > 0) return W.y;
		})), t(this, "size", r(() => {
			if (this.element.value && this.data.isImage()) {
				let e = this.data.image.value;
				switch (this.type.value) {
					case W.x: return e.height * (this.element.value.offsetWidth * this.percent.value.width / e.width);
					case W.y: return e.width * (this.element.value.offsetHeight * this.percent.value.height / e.height);
				}
			}
			return 0;
		})), t(this, "factor", r(() => {
			let e = this.element.value;
			if (e) {
				let t = this.size.value;
				if (this.type.value === W.x && t > e.offsetHeight) return e.offsetHeight / t;
				if (this.type.value === W.y && t > e.offsetWidth) return e.offsetWidth / t;
			}
			return 1;
		})), this.props = e, this.clientOnly = n, this.data = i, this.element = a, u(() => {
			this.is() ? U.add(this) : U.remove(this);
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
		return _(this.element.value);
	}
	getBackgroundSize() {
		let e = H.get(this.group.value).getFactorMax();
		switch (this.type.value) {
			case W.x: return `${100 * this.percent.value.width * e}% auto`;
			case W.y: return `auto ${100 * this.percent.value.height * e}%`;
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
		this.active.value && U.remove(this);
	}
	make() {
		if (this.beyond = !1, this.visible = !1, this.element.value && this.is()) if (this.props.adaptiveAlways) this.beyond = !0, this.visible = !0;
		else {
			let e = this.element.value.getBoundingClientRect();
			this.beyond = !(e.bottom < -512 || e.top > window.innerHeight + 512), this.visible = !(e.bottom < 0 || e.top > window.innerHeight);
		}
		return this;
	}
}, J = class {
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
		return b(e) ? e.toString().match(/%$/) ? this.getSize(e, e) : e.toString() : null;
	}
}, Y = class {
	constructor(e, n, i, a, o) {
		t(this, "lazyInit", s(!1)), t(this, "lazyStatus", void 0), t(this, "is", r(() => !!this.props.tagImg && this.isType())), t(this, "isLazy", r(() => !!this.props.lazy && !this.lazyInit.value)), t(this, "isPicture", r(() => this.is.value && !!this.props.picture)), t(this, "binds", r(() => {
			let e = { key: "img" };
			if (this.is.value) {
				var t;
				e.src = this.background.imageSrc.value, e.alt = (t = this.props.alt) == null ? "" : t, e.width = "100%", e.height = "100%", e.style = this.styles.value, this.props.lazy && (e.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (e.srcset = this.getSrcset());
			}
			return e;
		})), t(this, "picture", r(() => {
			if (this.props.picture) return v(this.props.picture) ? this.props.picture : g(this.props.picture, (e, t) => ({
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
		})), this.props = e, this.element = n, this.type = i, this.position = a, this.background = o;
		let { lazy: u, preloadOffset: d } = c(e);
		l([
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
		return x(e) ? `${e}w` : String(e);
	}
	makeLazy() {
		let e = E(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
		this.lazyStatus = l(e, () => {
			this.lazyInit.value = e.value;
		}, { immediate: !0 });
	}
}, X = class {
	constructor(n, i, a, s, c) {
		t(this, "clientOnly", void 0), t(this, "type", void 0), t(this, "data", void 0), t(this, "coordinator", void 0), t(this, "position", void 0), t(this, "adaptiveItem", void 0), t(this, "background", void 0), t(this, "img", void 0), t(this, "tag", r(() => this.img.is.value ? "img" : "span")), t(this, "text", r(() => {
			let e = this.type.item.value;
			if (e === P.pdf) {
				let e = this.data.image.value;
				if (S(e)) return e;
			}
			let t = this.props.value;
			if (e === P.flagCompressed && t) return String(t).replace("f-", "").toUpperCase();
			if (e && S(t) && [
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
				case P.color: if (S(e)) return { "background-color": e };
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
		}))), this.props = n, this.element = i, this.className = a, this.emits = s;
		let { ImageAdaptiveItemConstructor: l = q, ImageBackgroundConstructor: u = J, ImageCoordinatorConstructor: d = z, ImageDataConstructor: f = R, ImageImgConstructor: p = Y, ImagePositionConstructor: m = B, ImageTypeConstructor: h = F, ClientOnlyConstructor: g = D } = c == null ? {} : c;
		this.clientOnly = new g({ clientOnly: !0 }), this.type = new h(n, this.clientOnly), this.data = new f(n, this.clientOnly, this.type), this.coordinator = new d(n), this.position = new m(n, this.coordinator), this.adaptiveItem = new l(n, this.clientOnly, this.data, i), this.background = new u(n, this.data, this.coordinator, this.adaptiveItem), this.img = new p(this.props, i, this.type, this.position, this.background), o(() => this.adaptiveItem.remove());
	}
}, Z = class extends d {
	constructor(e, n, a, o = X) {
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
		}), t(this, "renderImg", () => i("span", this.propsImage.value, this.renderImgItem())), t(this, "renderImgItem", () => i("img", this.item.img.binds.value)), t(this, "renderValue", () => this.item.type.item.value === P.pdf ? i("object", this.item.valueBinds.value) : this.item.type.item.value === P.flagCompressed ? i("span", { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }) : this.item.text.value), this.item = new o(this.props, this.element, this.getName(), this.emits), this.init();
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
export { X as Image, U as ImageAdaptiveGroup, q as ImageAdaptiveItem, J as ImageBackground, V as ImageCalculation, H as ImageCalculationList, z as ImageCoordinator, R as ImageData, Z as ImageDesign, k as ImageFile, Y as ImageImg, n as ImageInclude, j as ImagePdf, B as ImagePosition, F as ImageType, P as ImageTypeValue, N as ImageUint8Array, K as MAX_BEYOND, O as MAX_SIZE, I as defaultsImage };
