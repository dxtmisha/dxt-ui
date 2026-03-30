import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-BTtSLqQS.js";
import { computed as n, h as r, onUnmounted as i, ref as a, toRefs as o, watch as s, watchEffect as c } from "vue";
import { DesignConstructorAbstract as l, EventItem as u, Icons as d, forEach as f, getElementId as p, isArray as m, isDomRuntime as h, isFilled as g, isNumber as _, isString as v, resizeImageByMax as y, toNumber as b, useLazyItemByMarginRef as x } from "@dxtmisha/functional";
//#region src/constructors/Image/ImageFile.ts
var S = 1280, C = class {
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
	static getSRC(e, t, n = S) {
		if (h() && (t instanceof File || t === void 0) && (e.naturalHeight > n || e.naturalWidth > n)) {
			var r;
			return (r = y(e, n)) == null ? "" : r;
		} else return e.src;
	}
}, w = "#toolbar=0&scrollbar=1", T = class {
	static isPdf(e) {
		return v(e) ? !!e.match(/\.pdf$/i) : h() && !!e.type.match(/\/pdf$/i);
	}
	static async get(e) {
		return v(e) ? `${e}${w}` : this.isPdf(e) ? `${await C.getFileReader(e)}${w}` : "";
	}
}, E = [], D = class {
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
		return E.find((n) => n.item === e && n.type === t);
	}
	static addCacheItem(e, t, n) {
		E.push({
			item: e,
			type: t,
			src: n
		});
	}
}, O = /* @__PURE__ */ function(e) {
	return e.pdf = "pdf", e.file = "file", e.array = "array", e.image = "image", e.flag = "flag", e.flagCompressed = "flag-compressed", e.color = "color", e.public = "public", e.filled = "filled", e.outlined = "outlined", e.round = "round", e.sharp = "sharp", e.twoTone = "two-tone", e.material = "material", e.icon = "icon", e;
}({}), k = class {
	constructor(e) {
		t(this, "item", n(() => {
			let e = this.props.value;
			if (e instanceof File) return O.file;
			if (D.is(e)) return O.array;
			if (v(e) && g(e)) {
				if (T.isPdf(e)) return O.pdf;
				if (e.match(/\//)) return O.image;
				if (e.match(/^#/)) return O.color;
				if (e.match(/^@/)) return O.public;
				if (e.match(/^\$/)) return O.material;
				if (e.match(/^flag-[a-z]{2}$/)) return O.flag;
				if (e.match(/^f-[a-z]{2}$/)) return O.flagCompressed;
				let t = e.match(/^(outlined|round|sharp|material)-/);
				return t ? t[1] : d.is(e) ? O.public : O.outlined;
			}
		})), this.props = e;
	}
}, A = {
	adaptiveGroup: "basic",
	preloadOffset: "1024px"
}, j = class {
	constructor(e, n) {
		t(this, "image", a()), this.props = e, this.type = n, c(async () => {
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
			case O.pdf: return await T.get(e);
			case O.array: return await D.createImage(e);
			case O.image:
			case O.file:
				try {
					return this.props.lazy ? this.props.value : await C.createImage(e);
				} catch (t) {
					console.error("ImageData.initImage: ", e);
				}
				break;
			case O.public:
			case O.icon:
			case O.flag:
				if (v(e)) return await d.get(e, this.props.url);
				break;
		}
	}
}, M = class {
	constructor(e) {
		t(this, "coordinator", n(() => {
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
		})), t(this, "size", n(() => {
			let e = this.coordinator.value;
			return {
				width: 100 - e[1] - e[3],
				height: 100 - e[2] - e[0]
			};
		})), this.props = e;
	}
	is() {
		let e = this.props.coordinator;
		return m(e) && e.length > 0 && e.length < 5;
	}
	getSize() {
		let e = this.size.value, t = e.width === 0 ? 100 : e.width, n = e.height === 0 ? 100 : e.height;
		return {
			width: `${100 / t * 100}%`,
			height: `${100 / n * 100}%`
		};
	}
}, N = class {
	constructor(e, r) {
		t(this, "x", n(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((e = this.props.x) == null ? void 0 : e.toString()) || "center";
		})), t(this, "y", n(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[0] + this.coordinator.size.value.height / 2}%` : ((e = this.props.y) == null ? void 0 : e.toString()) || "center";
		})), this.props = e, this.coordinator = r;
	}
}, P = class {
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
}, F = class {
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
		let t = new P(e);
		return this.items.push(t), t;
	}
};
t(F, "items", []);
//#endregion
//#region src/constructors/Image/ImageAdaptiveGroup.ts
var I = class {
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
		this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new u(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
			this.time = !1, this.start();
		})));
	}
	static getItemIdByVisible() {
		return f(this.objectsAdaptive, (e) => e.getId());
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
		F.reset(), this.objectsAdaptive.forEach((e) => {
			let t = e.element.value;
			t && F.get(e.group.value).makeWidth(e.width.value).makeHeight(e.height.value).makeOffsetWidth(t.offsetWidth).makeOffsetHeight(t.offsetHeight);
		});
	}
	static makePercent() {
		F.isSize() && this.objectsAdaptive.forEach((e) => {
			let t = e.element.value, n = F.get(e.group.value);
			if (t) {
				let r = n.getWidth(), i = n.getHeight();
				e.setPercent(e.width.value * (r ? 1 / r : 0) * (n.getOffsetWidth() / t.offsetWidth), e.height.value * (i ? 1 / i : 0) * (n.getOffsetHeight() / t.offsetHeight));
			}
		});
	}
	static makeFactorMax() {
		F.isSize() && this.objectsAdaptive.forEach((e) => {
			F.get(e.group.value).makeFactorMax(e.factor.value);
		});
	}
	static isAdaptive() {
		return !!this.objects.find((e) => e.is());
	}
	static isCache(e) {
		return this.cache.join("|") !== e.join("|");
	}
};
t(I, "objects", []), t(I, "objectsAdaptive", []), t(I, "cache", []), t(I, "event", void 0), t(I, "time", void 0);
//#endregion
//#region src/constructors/Image/ImageAdaptiveItem.ts
var L = /* @__PURE__ */ function(e) {
	return e.x = "x", e.y = "y", e;
}(L || {}), R = "main", z = class {
	constructor(e, r, i) {
		t(this, "percent", a({
			width: 0,
			height: 0
		})), t(this, "beyond", !1), t(this, "visible", !1), t(this, "active", n(() => !!(this.props.adaptive && (this.width.value || this.height.value)) && this.data.isImage())), t(this, "group", n(() => {
			var e;
			return (e = this.props.adaptiveGroup) == null ? R : e;
		})), t(this, "width", n(() => {
			var e;
			return b((e = this.props.objectWidth) == null ? 0 : e);
		})), t(this, "height", n(() => {
			var e, t;
			return b((e = (t = this.props) == null ? void 0 : t.objectHeight) == null ? 0 : e);
		})), t(this, "type", n(() => {
			if (this.width.value && this.percent.value.width > 0) return L.x;
			if (this.height.value && this.percent.value.height > 0) return L.y;
		})), t(this, "size", n(() => {
			if (this.element.value && this.data.isImage()) {
				let e = this.data.image.value;
				switch (this.type.value) {
					case L.x: return e.height * (this.element.value.offsetWidth * this.percent.value.width / e.width);
					case L.y: return e.width * (this.element.value.offsetHeight * this.percent.value.height / e.height);
				}
			}
			return 0;
		})), t(this, "factor", n(() => {
			let e = this.element.value;
			if (e) {
				let t = this.size.value;
				if (this.type.value === L.x && t > e.offsetHeight) return e.offsetHeight / t;
				if (this.type.value === L.y && t > e.offsetWidth) return e.offsetWidth / t;
			}
			return 1;
		})), this.props = e, this.data = r, this.element = i, c(() => {
			this.is() ? I.add(this) : I.remove(this);
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
		return p(this.element.value);
	}
	getBackgroundSize() {
		let e = F.get(this.group.value).getFactorMax();
		switch (this.type.value) {
			case L.x: return `${100 * this.percent.value.width * e}% auto`;
			case L.y: return `auto ${100 * this.percent.value.height * e}%`;
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
		this.active.value && I.remove(this);
	}
	make() {
		if (this.beyond = !1, this.visible = !1, this.element.value && this.is()) if (this.props.adaptiveAlways) this.beyond = !0, this.visible = !0;
		else {
			let e = this.element.value.getBoundingClientRect();
			this.beyond = !(e.bottom < -512 || e.top > window.innerHeight + 512), this.visible = !(e.bottom < 0 || e.top > window.innerHeight);
		}
		return this;
	}
}, B = class {
	constructor(e, r, i, a) {
		t(this, "image", n(() => {
			let e = this.imageSrc.value;
			return e ? `url("${e}")` : null;
		})), t(this, "imageSrc", n(() => {
			let e = this.data.image.value;
			switch (typeof e) {
				case "string": return e;
				case "object": return e.src;
				default: return null;
			}
		})), t(this, "size", n(() => {
			if (this.coordinator.is()) return this.getSizeByCoordinator();
			if (this.adaptive.is()) {
				let e = this.adaptive.getBackgroundSize();
				if (e) return e;
			}
			return this.getSizeForItem();
		})), this.props = e, this.data = r, this.coordinator = i, this.adaptive = a;
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
}, V = class {
	constructor(e, r, i, c, l) {
		t(this, "lazyInit", a(!1)), t(this, "lazyStatus", void 0), t(this, "is", n(() => !!this.props.tagImg && this.isType())), t(this, "isLazy", n(() => !!this.props.lazy && !this.lazyInit.value)), t(this, "isPicture", n(() => this.is.value && !!this.props.picture)), t(this, "binds", n(() => {
			let e = { key: "img" };
			if (this.is.value) {
				var t;
				e.src = this.background.imageSrc.value, e.alt = (t = this.props.alt) == null ? "" : t, e.width = "100%", e.height = "100%", e.style = this.styles.value, this.props.lazy && (e.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (e.srcset = this.getSrcset());
			}
			return e;
		})), t(this, "picture", n(() => {
			if (this.props.picture) return m(this.props.picture) ? this.props.picture : f(this.props.picture, (e, t) => ({
				key: t,
				srcset: e,
				media: `(width >= ${t})`
			}));
		})), t(this, "styles", n(() => {
			let e = {
				"object-position": `${this.position.x.value} ${this.position.y.value}`,
				"--sys-transform-originX": this.position.x.value,
				"--sys-transform-originY": this.position.y.value
			};
			return this.isSize() && (e["--sys-transform-scale"] = this.getSize()), e;
		})), this.props = e, this.element = r, this.type = i, this.position = c, this.background = l;
		let { lazy: u, preloadOffset: d } = o(e);
		s([
			u,
			d,
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
		return e === O.file || e === O.image;
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
		let e = x(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
		this.lazyStatus = s(e, () => {
			this.lazyInit.value = e.value;
		}, { immediate: !0 });
	}
}, H = class {
	constructor(r, a, o, c, l) {
		t(this, "type", void 0), t(this, "data", void 0), t(this, "coordinator", void 0), t(this, "position", void 0), t(this, "adaptiveItem", void 0), t(this, "background", void 0), t(this, "img", void 0), t(this, "tag", n(() => this.img.is.value ? "img" : "span")), t(this, "text", n(() => {
			let e = this.type.item.value;
			if (e === O.pdf) {
				let e = this.data.image.value;
				if (v(e)) return e;
			}
			let t = this.props.value;
			if (e === O.flagCompressed && t) return String(t).replace("f-", "").toUpperCase();
			if (e && v(t) && [
				"filled",
				"outlined",
				"round",
				"sharp",
				"two-tone",
				"material"
			].indexOf(e) !== -1) return t.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
		})), t(this, "classes", n(() => {
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
		})), t(this, "styles", n(() => {
			let e = this.props.value;
			if (e) switch (this.type.item.value) {
				case O.file:
				case O.image:
				case O.array: return {
					"background-image": this.background.image.value,
					"background-size": this.background.size.value,
					"background-position-x": this.position.x.value,
					"background-position-y": this.position.y.value
				};
				case O.icon: return { "background-image": this.background.image.value };
				case O.flag: return {
					"background-image": this.background.image.value,
					"background-size": "contain"
				};
				case O.public: return { "mask-image": this.background.image.value };
				case O.color: if (v(e)) return { "background-color": e };
			}
			return {};
		})), t(this, "binds", n(() => ({
			translate: "no",
			...e.role("img"),
			...e.label(this.props.alt),
			...e.hidden()
		}))), t(this, "valueBinds", n(() => ({
			key: "value",
			data: this.data.image.value
		}))), this.props = r, this.element = a, this.className = o, this.emits = c;
		let { ImageAdaptiveItemConstructor: u = z, ImageBackgroundConstructor: d = B, ImageCoordinatorConstructor: f = M, ImageDataConstructor: p = j, ImageImgConstructor: m = V, ImagePositionConstructor: h = N, ImageTypeConstructor: g = k } = l == null ? {} : l;
		this.type = new g(r), this.data = new p(r, this.type), this.coordinator = new f(r), this.position = new h(r, this.coordinator), this.adaptiveItem = new u(r, this.data, a), this.background = new d(r, this.data, this.coordinator, this.adaptiveItem), this.img = new m(this.props, a, this.type, this.position, this.background), c && s(this.data.image, (e) => {
			c("load", {
				type: this.type.item.value,
				image: e
			});
		}), i(() => this.adaptiveItem.remove());
	}
}, U = class extends l {
	constructor(e, i, a, o = H) {
		super(e, i, a), t(this, "item", void 0), t(this, "propsImage", n(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "image",
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), t(this, "propsMain", n(() => {
			var e;
			return {
				...this.propsImage.value,
				...this.item.binds.value,
				style: (e = this.styles) == null ? void 0 : e.value
			};
		})), t(this, "renderPicture", () => {
			let e = this.item.img.picture.value, t = [];
			return e && e.forEach((e) => t.push(r("source", e))), t.push(this.renderImgItem()), r("picture", this.propsImage.value, t);
		}), t(this, "renderImg", () => r("span", this.propsImage.value, this.renderImgItem())), t(this, "renderImgItem", () => r("img", this.item.img.binds.value)), t(this, "renderValue", () => this.item.type.item.value === O.pdf ? r("object", this.item.valueBinds.value) : this.item.type.item.value === O.flagCompressed ? r("span", { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }) : this.item.text.value), this.item = new o(this.props, this.element, this.getName(), this.emits), this.init();
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
		return this.item.img.isPicture.value ? this.renderPicture() : this.item.img.is.value ? this.renderImg() : r("span", this.propsMain.value, this.renderValue());
	}
};
//#endregion
export { H as Image, U as ImageDesign, O as ImageTypeValue, A as defaultsImage };
