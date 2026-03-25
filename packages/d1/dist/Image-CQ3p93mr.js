import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, onUnmounted as o, openBlock as s, ref as c, toRefs as l, unref as u, watch as d, watchEffect as f } from "vue";
import { DesignConstructorAbstract as p, EventItem as m, Icons as h, forEach as g, getElementId as _, inArray as v, isArray as y, isDomRuntime as b, isFilled as x, isNumber as S, isString as C, resizeImageByMax as w, toNumber as T, useLazyItemByMarginRef as E } from "@dxtmisha/functional";
//#region ../constructor/dist/image.js
var D = Object.defineProperty, O = (e, t, n) => t in e ? D(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, k = (e, t, n) => O(e, typeof t == "symbol" ? t : t + "", n), A = 1280, j = class {
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
				}, (async () => n.src = e instanceof File ? await this.getFileResult(e) : e)();
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
	static getSRC(e, t, n = A) {
		var r;
		return b() && (t instanceof File || t === void 0) && (e.naturalHeight > n || e.naturalWidth > n) ? (r = w(e, n)) == null ? "" : r : e.src;
	}
}, M = "#toolbar=0&scrollbar=1", N = class {
	static isPdf(e) {
		return C(e) ? !!e.match(/\.pdf$/i) : b() && !!e.type.match(/\/pdf$/i);
	}
	static async get(e) {
		return C(e) ? `${e}${M}` : this.isPdf(e) ? `${await j.getFileReader(e)}${M}` : "";
	}
}, P = /* @__PURE__ */ ((e) => (e.pdf = "pdf", e.file = "file", e.image = "image", e.flag = "flag", e.flagCompressed = "flag-compressed", e.color = "color", e.public = "public", e.filled = "filled", e.outlined = "outlined", e.round = "round", e.sharp = "sharp", e.twoTone = "two-tone", e.material = "material", e.icon = "icon", e))(P || {}), F = class {
	constructor(e) {
		k(this, "item", t(() => {
			let e = this.props.value;
			if (e instanceof File || x(e)) {
				if (N.isPdf(e)) return P.pdf;
				if (e instanceof File) return P.file;
				if (e.match(/\//)) return P.image;
				if (e.match(/^#/)) return P.color;
				if (e.match(/^@/)) return P.public;
				if (e.match(/^\$/)) return P.material;
				if (e.match(/^flag-[a-z]{2}$/)) return P.flag;
				if (e.match(/^f-[a-z]{2}$/)) return P.flagCompressed;
				let t = e.match(/^(outlined|round|sharp|material)-/);
				return t ? t[1] : h.is(e) ? P.public : P.outlined;
			}
		})), this.props = e;
	}
}, I = {
	adaptiveGroup: "basic",
	preloadOffset: "1024px"
}, L = class {
	constructor(e, t) {
		k(this, "image", c()), this.props = e, this.type = t, f(async () => {
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
			case P.pdf: return await N.get(e);
			case P.image:
			case P.file:
				try {
					return this.props.lazy ? this.props.value : await j.createImage(e);
				} catch (t) {
					console.error("ImageData.initImage: ", e);
				}
				break;
			case P.public:
			case P.icon:
			case P.flag:
				if (C(e)) return await h.get(e, this.props.url);
				break;
		}
	}
}, R = class {
	constructor(e) {
		k(this, "coordinator", t(() => {
			var e, t, n, r, i, a, o, s, c, l, u, d;
			if (this.is()) {
				let f = this.props.coordinator;
				switch (f.length) {
					case 1: return [
						(e = f[0]) == null ? 0 : e,
						(t = f[0]) == null ? 0 : t,
						(n = f[0]) == null ? 0 : n,
						(r = f[0]) == null ? 0 : r
					];
					case 2: return [
						(i = f[0]) == null ? 0 : i,
						(a = f[1]) == null ? 0 : a,
						(o = f[0]) == null ? 0 : o,
						(s = f[1]) == null ? 0 : s
					];
					case 3: return [
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
		})), k(this, "size", t(() => {
			let e = this.coordinator.value;
			return {
				width: 100 - e[1] - e[3],
				height: 100 - e[2] - e[0]
			};
		})), this.props = e;
	}
	is() {
		let e = this.props.coordinator;
		return y(e) && e.length > 0 && e.length < 5;
	}
	getSize() {
		let e = this.size.value, t = e.width === 0 ? 100 : e.width, n = e.height === 0 ? 100 : e.height;
		return {
			width: `${100 / t * 100}%`,
			height: `${100 / n * 100}%`
		};
	}
}, z = class {
	constructor(e, n) {
		k(this, "x", t(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((e = this.props.x) == null ? void 0 : e.toString()) || "center";
		})), k(this, "y", t(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[0] + this.coordinator.size.value.height / 2}%` : ((e = this.props.y) == null ? void 0 : e.toString()) || "center";
		})), this.props = e, this.coordinator = n;
	}
}, B = class {
	constructor(e) {
		k(this, "factorMax", 1), k(this, "size", {
			width: 0,
			height: 0
		}), k(this, "offset", {
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
k(V, "items", []);
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
		this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new m(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
			this.time = !1, this.start();
		})));
	}
	static getItemIdByVisible() {
		return g(this.objectsAdaptive, (e) => e.getId());
	}
	static start() {
		var e;
		if (this.isAdaptive()) {
			this.makeAdaptive();
			let e = this.getItemIdByVisible();
			this.isCache(e) && (this.cache = e, this.makeSize(), this.makePercent(), this.makeFactorMax());
		} else (e = this.event) == null || e.stop();
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
k(H, "objects", []), k(H, "objectsAdaptive", []), k(H, "cache", []), k(H, "event"), k(H, "time");
var U = "main", W = 512, G = class {
	constructor(e, n, r) {
		k(this, "percent", c({
			width: 0,
			height: 0
		})), k(this, "beyond", !1), k(this, "visible", !1), k(this, "active", t(() => !!(this.props.adaptive && (this.width.value || this.height.value)) && this.data.isImage())), k(this, "group", t(() => {
			var e;
			return (e = this.props.adaptiveGroup) == null ? U : e;
		})), k(this, "width", t(() => {
			var e;
			return T((e = this.props.objectWidth) == null ? 0 : e);
		})), k(this, "height", t(() => {
			var e, t;
			return T((t = (e = this.props) == null ? void 0 : e.objectHeight) == null ? 0 : t);
		})), k(this, "type", t(() => {
			if (this.width.value && this.percent.value.width > 0) return "x";
			if (this.height.value && this.percent.value.height > 0) return "y";
		})), k(this, "size", t(() => {
			if (this.element.value && this.data.isImage()) {
				let e = this.data.image.value;
				switch (this.type.value) {
					case "x": return e.height * (this.element.value.offsetWidth * this.percent.value.width / e.width);
					case "y": return e.width * (this.element.value.offsetHeight * this.percent.value.height / e.height);
				}
			}
			return 0;
		})), k(this, "factor", t(() => {
			let e = this.element.value;
			if (e) {
				let t = this.size.value;
				if (this.type.value === "x" && t > e.offsetHeight) return e.offsetHeight / t;
				if (this.type.value === "y" && t > e.offsetWidth) return e.offsetWidth / t;
			}
			return 1;
		})), this.props = e, this.data = n, this.element = r, f(() => {
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
		return _(this.element.value);
	}
	getBackgroundSize() {
		let e = V.get(this.group.value).getFactorMax();
		switch (this.type.value) {
			case "x": return `${100 * this.percent.value.width * e}% auto`;
			case "y": return `auto ${100 * this.percent.value.height * e}%`;
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
			this.beyond = !(e.bottom < 0 - W || e.top > window.innerHeight + W), this.visible = !(e.bottom < 0 || e.top > window.innerHeight);
		}
		return this;
	}
}, K = class {
	constructor(e, n, r, i) {
		k(this, "image", t(() => {
			let e = this.imageSrc.value;
			return e ? `url("${e}")` : null;
		})), k(this, "imageSrc", t(() => {
			let e = this.data.image.value;
			switch (typeof e) {
				case "string": return e;
				case "object": return e.src;
				default: return null;
			}
		})), k(this, "size", t(() => {
			if (this.coordinator.is()) return this.getSizeByCoordinator();
			if (this.adaptive.is()) {
				let e = this.adaptive.getBackgroundSize();
				if (e) return e;
			}
			return this.getSizeForItem();
		})), this.props = e, this.data = n, this.coordinator = r, this.adaptive = i;
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
		return x(e) ? e.toString().match(/%$/) ? this.getSize(e, e) : e.toString() : null;
	}
}, q = class {
	constructor(e, n, r, i, a) {
		k(this, "lazyInit", c(!1)), k(this, "lazyStatus"), k(this, "is", t(() => !!this.props.tagImg && this.isType())), k(this, "isLazy", t(() => !!this.props.lazy && !this.lazyInit.value)), k(this, "isPicture", t(() => this.is.value && !!this.props.picture)), k(this, "binds", t(() => {
			var e;
			let t = { key: "img" };
			return this.is.value && (t.src = this.background.imageSrc.value, t.alt = (e = this.props.alt) == null ? "" : e, t.width = "100%", t.height = "100%", t.style = this.styles.value, this.props.lazy && (t.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (t.srcset = this.getSrcset())), t;
		})), k(this, "picture", t(() => {
			if (this.props.picture) return y(this.props.picture) ? this.props.picture : g(this.props.picture, (e, t) => ({
				key: t,
				srcset: e,
				media: `(width >= ${t})`
			}));
		})), k(this, "styles", t(() => {
			let e = {
				"object-position": `${this.position.x.value} ${this.position.y.value}`,
				"--sys-transform-originX": this.position.x.value,
				"--sys-transform-originY": this.position.y.value
			};
			return this.isSize() && (e["--sys-transform-scale"] = this.getSize()), e;
		})), this.props = e, this.element = n, this.type = r, this.position = i, this.background = a;
		let { lazy: o, preloadOffset: s } = l(e);
		d([
			o,
			s,
			n
		], () => {
			var e;
			this.props.lazy && this.element.value ? this.makeLazy() : (this.lazyInit.value = !1, (e = this.lazyStatus) == null || e.stop(), this.lazyStatus = void 0);
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
		var e, t;
		return (t = (e = this.background.size.value) == null ? void 0 : e.replace("auto", "")) == null ? void 0 : t.trim();
	}
	getSrcset() {
		if (this.props.srcset) return typeof this.props.srcset == "string" ? this.props.srcset : Object.entries(this.props.srcset).map(([e, t]) => `${t} ${this.toSrcsetKey(e)}`).join(", ");
	}
	toSrcsetKey(e) {
		return S(e) ? `${e}w` : String(e);
	}
	makeLazy() {
		let e = E(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
		this.lazyStatus = d(e, () => {
			this.lazyInit.value = e.value;
		}, { immediate: !0 });
	}
}, J = class {
	constructor(n, r, i, a, s) {
		k(this, "type"), k(this, "data"), k(this, "coordinator"), k(this, "position"), k(this, "adaptiveItem"), k(this, "background"), k(this, "img"), k(this, "tag", t(() => this.img.is.value ? "img" : "span")), k(this, "text", t(() => {
			let e = this.type.item.value;
			if (e === P.pdf) {
				let e = this.data.image.value;
				if (C(e)) return e;
			}
			let t = this.props.value;
			if (e === P.flagCompressed && t) return String(t).replace("f-", "").toUpperCase();
			if (e && C(t) && [
				"filled",
				"outlined",
				"round",
				"sharp",
				"two-tone",
				"material"
			].indexOf(e) !== -1) return t.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
		})), k(this, "classes", t(() => {
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
		})), k(this, "styles", t(() => {
			let e = this.props.value;
			if (e) switch (this.type.item.value) {
				case P.file:
				case P.image: return {
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
				case P.color: if (C(e)) return { "background-color": e };
			}
			return {};
		})), k(this, "binds", t(() => ({
			translate: "no",
			...e.role("img"),
			...e.label(this.props.alt),
			...e.hidden()
		}))), k(this, "valueBinds", t(() => ({
			key: "value",
			data: this.data.image.value
		}))), this.props = n, this.element = r, this.className = i, this.emits = a;
		let { ImageAdaptiveItemConstructor: c = G, ImageBackgroundConstructor: l = K, ImageCoordinatorConstructor: u = R, ImageDataConstructor: f = L, ImageImgConstructor: p = q, ImagePositionConstructor: m = z, ImageTypeConstructor: h = F } = s == null ? {} : s;
		this.type = new h(n), this.data = new f(n, this.type), this.coordinator = new u(n), this.position = new m(n, this.coordinator), this.adaptiveItem = new c(n, this.data, r), this.background = new l(n, this.data, this.coordinator, this.adaptiveItem), this.img = new p(this.props, r, this.type, this.position, this.background), a && d(this.data.image, (e) => {
			a("load", {
				type: this.type.item.value,
				image: e
			});
		}), o(() => this.adaptiveItem.remove());
	}
}, Y = class extends p {
	constructor(e, n, r, a = J) {
		super(e, n, r), k(this, "item"), k(this, "propsImage", t(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "image",
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), k(this, "propsMain", t(() => {
			var e;
			return {
				...this.propsImage.value,
				...this.item.binds.value,
				style: (e = this.styles) == null ? void 0 : e.value
			};
		})), k(this, "renderPicture", () => {
			let e = this.item.img.picture.value, t = [];
			return e && e.forEach((e) => t.push(i("source", e))), t.push(this.renderImgItem()), i("picture", this.propsImage.value, t);
		}), k(this, "renderImg", () => i("span", this.propsImage.value, this.renderImgItem())), k(this, "renderImgItem", () => i("img", this.item.img.binds.value)), k(this, "renderValue", () => this.item.type.item.value === P.pdf ? i("object", this.item.valueBinds.value) : this.item.type.item.value === P.flagCompressed ? i("span", { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }) : this.item.text.value), this.item = new a(this.props, this.element, this.getName(), this.emits), this.init();
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
}, X = { size: [
	"auto",
	"contain",
	"cover"
] }, Z = { ...I }, Q = /* @__PURE__ */ r({
	name: "D1Image",
	__name: "D1Image",
	props: /* @__PURE__ */ a({
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
	setup(e, { expose: r, emit: i }) {
		let a = i, o = e, c = new Y("d1.image", o, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-image": !0,
				"d1-image--turn": o.turn,
				"d1-image--disabled": o.disabled,
				"d1-image--hide": o.hide,
				"d1-image--adaptive": o.adaptive,
				[`d1-image--size--${o.size}`]: v(X.size, o.size)
			} })),
			styles: t(() => ({}))
		}), l = c.render();
		return r(c.expose()), (e, t) => (s(), n(u(l)));
	}
}), $ = Q;
//#endregion
export { Q as n, $ as t };
