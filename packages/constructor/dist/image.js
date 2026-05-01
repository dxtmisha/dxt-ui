import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./ImageInclude-C4KnnA3v.js";
import { n as r, t as i } from "./errorTypes-DBWSiSTN.js";
import { computed as a, h as o, onMounted as s, onUnmounted as c, ref as l, toRefs as u, watch as d, watchEffect as f } from "vue";
import { DesignConstructorAbstract as p, ErrorCenter as m, EventItem as h, Icons as g, computedAsync as _, forEach as v, getElementId as y, isArray as b, isDomRuntime as x, isFilled as S, isNumber as C, isString as w, resizeImageByMax as T, sleep as E, toNumber as D, useLazyItemByMarginRef as O } from "@dxtmisha/functional";
//#region src/constructors/Image/ImageFile.ts
var k = 1280, A = class {
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
		return w(n) ? n : (t = n == null ? void 0 : n.src) == null ? "" : t;
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
	static getSRC(e, t, n = k) {
		if ((t instanceof File || t === void 0) && (e.naturalHeight > n || e.naturalWidth > n)) {
			var r;
			return (r = T(e, n)) == null ? "" : r;
		} else return e.src;
	}
}, j = "#toolbar=0&scrollbar=1", M = class {
	static isPdf(e) {
		var t;
		return e ? w(e) ? !!/\.pdf$/i.test(e) : x() && e instanceof File && !!/\/pdf$/i.test((t = e == null ? void 0 : e.type) == null ? "" : t) : !1;
	}
	static async get(e) {
		return w(e) ? `${e}${j}` : this.isPdf(e) ? `${await A.getFileReader(e)}${j}` : "";
	}
}, N = [], P = class {
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
		return N.find((n) => n.item === e && n.type === t);
	}
	static addCacheItem(e, t, n) {
		N.push({
			item: e,
			type: t,
			src: n
		});
	}
}, F = /* @__PURE__ */ function(e) {
	return e.pdf = "pdf", e.file = "file", e.array = "array", e.image = "image", e.flag = "flag", e.flagCompressed = "flag-compressed", e.color = "color", e.public = "public", e.filled = "filled", e.outlined = "outlined", e.round = "round", e.sharp = "sharp", e.twoTone = "two-tone", e.material = "material", e.icon = "icon", e;
}({}), I = class {
	constructor(e, n) {
		t(this, "item", a(() => {
			let e = this.props.value;
			if (this.clientOnly.isRender.value) {
				if (e instanceof File) return F.file;
				if (P.is(e)) return F.array;
				if (M.isPdf(e)) return F.pdf;
			}
			if (w(e) && S(e)) {
				if (e.match(/\//)) return F.image;
				if (e.match(/^#/)) return F.color;
				if (e.match(/^@/)) return F.public;
				if (e.match(/^\$/)) return F.material;
				if (e.match(/^flag-[a-z]{2}$/)) return F.flag;
				if (e.match(/^f-[a-z]{2}$/)) return F.flagCompressed;
				let t = e.match(/^(outlined|round|sharp|material)-/);
				return t ? t[1] : g.is(e) ? F.public : F.outlined;
			}
		})), this.props = e, this.clientOnly = n;
	}
}, L = {
	adaptiveGroup: "basic",
	preloadOffset: "1024px"
}, R = class {
	constructor(e, n, r, i) {
		t(this, "image", void 0), this.props = e, this.clientOnly = n, this.type = r, this.emits = i, this.image = _(() => this.init(), () => this.initSsr()), i && d(this.image, (e) => {
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
	async init() {
		let e = this.props.value;
		if (e) switch (this.type.item.value) {
			case F.pdf: return await E(320), await M.get(e);
			case F.array: return P.createImage(e);
			case F.image:
			case F.file:
				try {
					return !this.clientOnly.is() || this.props.lazy ? e : await A.createImage(e);
				} catch (e) {
					m.on({
						group: i,
						code: "image-data"
					});
				}
				break;
			case F.public:
			case F.icon:
			case F.flag:
				if (w(e)) return await g.get(e, this.props.url);
				break;
		}
	}
	initSsr() {
		let e = this.props.value;
		if (e) switch (this.type.item.value) {
			case F.image:
			case F.file: return e;
			case F.public:
			case F.icon:
			case F.flag:
				if (w(e)) return g.getAsync(e, this.props.url);
				break;
		}
	}
}, z = class {
	constructor(e) {
		t(this, "coordinator", a(() => {
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
		})), t(this, "size", a(() => {
			let e = this.coordinator.value;
			return {
				width: 100 - e[1] - e[3],
				height: 100 - e[2] - e[0]
			};
		})), this.props = e;
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
}, B = class {
	constructor(e, n) {
		t(this, "x", a(() => {
			var e;
			return this.coordinator.is() ? `${this.coordinator.coordinator.value[3] + this.coordinator.size.value.width / 2}%` : ((e = this.props.x) == null ? void 0 : e.toString()) || "center";
		})), t(this, "y", a(() => {
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
		this.event && this.objects.length < 1 ? (this.event.stop(), this.event = void 0) : this.objects.length > 0 && (this.event || (this.event = new h(window, ["scroll-sync"], () => this.start()).start()), this.time || (this.time = !0, requestAnimationFrame(() => {
			this.time = !1, this.start();
		})));
	}
	static getItemIdByVisible() {
		return v(this.objectsAdaptive, (e) => e.getId());
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
	constructor(e, n, r, i) {
		t(this, "percent", l({
			width: 0,
			height: 0
		})), t(this, "beyond", !1), t(this, "visible", !1), t(this, "active", a(() => !!(this.props.adaptive && this.clientOnly.isRender.value && (this.width.value || this.height.value)) && this.data.isImage())), t(this, "group", a(() => {
			var e;
			return (e = this.props.adaptiveGroup) == null ? G : e;
		})), t(this, "width", a(() => {
			var e;
			return D((e = this.props.objectWidth) == null ? 0 : e);
		})), t(this, "height", a(() => {
			var e, t;
			return D((e = (t = this.props) == null ? void 0 : t.objectHeight) == null ? 0 : e);
		})), t(this, "type", a(() => {
			if (this.width.value && this.percent.value.width > 0) return W.x;
			if (this.height.value && this.percent.value.height > 0) return W.y;
		})), t(this, "size", a(() => {
			if (this.element.value && this.data.isImage()) {
				let e = this.data.image.value;
				switch (this.type.value) {
					case W.x: return e.height * (this.element.value.offsetWidth * this.percent.value.width / e.width);
					case W.y: return e.width * (this.element.value.offsetHeight * this.percent.value.height / e.height);
				}
			}
			return 0;
		})), t(this, "factor", a(() => {
			let e = this.element.value;
			if (e) {
				let t = this.size.value;
				if (this.type.value === W.x && t > e.offsetHeight) return e.offsetHeight / t;
				if (this.type.value === W.y && t > e.offsetWidth) return e.offsetWidth / t;
			}
			return 1;
		})), this.props = e, this.clientOnly = n, this.data = r, this.element = i, f(() => {
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
		return y(this.element.value);
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
	constructor(e, n, r, i) {
		t(this, "image", a(() => {
			let e = this.imageSrc.value;
			return e ? `url("${e}")` : null;
		})), t(this, "imageSrc", a(() => {
			let e = this.data.image.value;
			switch (typeof e) {
				case "string": return e;
				case "object": return e.src;
				default: return null;
			}
		})), t(this, "size", a(() => {
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
		return S(e) ? e.toString().match(/%$/) ? this.getSize(e, e) : e.toString() : null;
	}
}, Y = class {
	constructor(e, n, r, i, o) {
		t(this, "lazyInit", l(!1)), t(this, "lazyStatus", void 0), t(this, "is", a(() => !!this.props.tagImg && this.isType())), t(this, "isLazy", a(() => !!this.props.lazy && !this.lazyInit.value)), t(this, "isPicture", a(() => this.is.value && !!this.props.picture)), t(this, "binds", a(() => {
			let e = { key: "img" };
			if (this.is.value) {
				var t;
				e.src = this.background.imageSrc.value, e.alt = (t = this.props.alt) == null ? "" : t, e.width = "100%", e.height = "100%", e.style = this.styles.value, this.props.lazy && (e.loading = this.isLazy.value ? "lazy" : "auto"), this.props.srcset && (e.srcset = this.getSrcset());
			}
			return e;
		})), t(this, "picture", a(() => {
			if (this.props.picture) return b(this.props.picture) ? this.props.picture : v(this.props.picture, (e, t) => ({
				key: t,
				srcset: e,
				media: `(width >= ${t})`
			}));
		})), t(this, "styles", a(() => {
			let e = {
				"object-position": `${this.position.x.value} ${this.position.y.value}`,
				"--sys-transform-originX": this.position.x.value,
				"--sys-transform-originY": this.position.y.value
			};
			return this.isSize() && (e["--sys-transform-scale"] = this.getSize()), e;
		})), this.props = e, this.element = n, this.type = r, this.position = i, this.background = o;
		let { lazy: c, preloadOffset: f } = u(e);
		s(() => {
			d([
				c,
				f,
				n
			], () => {
				if (this.props.lazy && this.element.value) this.makeLazy();
				else {
					var e;
					this.lazyInit.value = !1, (e = this.lazyStatus) == null || e.stop(), this.lazyStatus = void 0;
				}
			}, { immediate: !0 });
		});
	}
	isType() {
		let e = this.type.item.value;
		return e === F.file || e === F.image;
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
		let e = O(this.element, `${this.props.preloadOffset} 0px`).lazyItemStatus;
		this.lazyStatus = d(e, () => {
			this.lazyInit.value = e.value;
		}, { immediate: !0 });
	}
}, X = class {
	constructor(n, i, o, s, l) {
		t(this, "clientOnly", void 0), t(this, "type", void 0), t(this, "data", void 0), t(this, "coordinator", void 0), t(this, "position", void 0), t(this, "adaptiveItem", void 0), t(this, "background", void 0), t(this, "img", void 0), t(this, "tag", a(() => this.img.is.value ? "img" : "span")), t(this, "text", a(() => {
			let e = this.type.item.value;
			if (e === F.pdf) {
				let e = this.data.image.value;
				if (w(e)) return e;
			}
			let t = this.props.value;
			if (e === F.flagCompressed && t) return String(t).replace("f-", "").toUpperCase();
			if (e && w(t) && [
				"filled",
				"outlined",
				"round",
				"sharp",
				"two-tone",
				"material"
			].indexOf(e) !== -1) return t.replace(/^(filled|outlined|round|sharp|two-tone)-/, "");
		})), t(this, "classes", a(() => {
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
		})), t(this, "styles", a(() => {
			let e = this.props.value;
			if (e) switch (this.type.item.value) {
				case F.file:
				case F.image:
				case F.array: return {
					"background-image": this.background.image.value,
					"background-size": this.background.size.value,
					"background-position-x": this.position.x.value,
					"background-position-y": this.position.y.value
				};
				case F.icon: return { "background-image": this.background.image.value };
				case F.flag: return {
					"background-image": this.background.image.value,
					"background-size": "contain"
				};
				case F.public: return { "mask-image": this.background.image.value };
				case F.color: if (w(e)) return { "background-color": e };
			}
			return {};
		})), t(this, "binds", a(() => ({
			translate: "no",
			...e.role("img"),
			...e.label(this.props.alt),
			...e.hidden()
		}))), t(this, "valueBinds", a(() => ({
			key: "value",
			data: this.data.image.value
		}))), this.props = n, this.element = i, this.className = o, this.emits = s;
		let { ImageAdaptiveItemConstructor: u = q, ImageBackgroundConstructor: d = J, ImageCoordinatorConstructor: f = z, ImageDataConstructor: p = R, ImageImgConstructor: m = Y, ImagePositionConstructor: h = B, ImageTypeConstructor: g = I, ClientOnlyConstructor: _ = r } = l == null ? {} : l;
		this.clientOnly = new _({ clientOnly: !0 }), this.type = new g(n, this.clientOnly), this.data = new p(n, this.clientOnly, this.type), this.coordinator = new f(n), this.position = new h(n, this.coordinator), this.adaptiveItem = new u(n, this.clientOnly, this.data, i), this.background = new d(n, this.data, this.coordinator, this.adaptiveItem), this.img = new m(this.props, i, this.type, this.position, this.background), c(() => this.adaptiveItem.remove());
	}
}, Z = class extends p {
	constructor(e, n, r, i = X) {
		super(e, n, r), t(this, "item", void 0), t(this, "propsImage", a(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "image",
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), t(this, "propsMain", a(() => {
			var e;
			return {
				...this.propsImage.value,
				...this.item.binds.value,
				style: (e = this.styles) == null ? void 0 : e.value
			};
		})), t(this, "renderPicture", () => {
			let e = this.item.img.picture.value, t = [];
			return e && e.forEach((e) => t.push(o("source", e))), t.push(this.renderImgItem()), o("picture", this.propsImage.value, t);
		}), t(this, "renderImg", () => o("span", this.propsImage.value, this.renderImgItem())), t(this, "renderImgItem", () => o("img", this.item.img.binds.value)), t(this, "renderValue", () => this.item.type.item.value === F.pdf ? o("object", this.item.valueBinds.value) : this.item.type.item.value === F.flagCompressed ? o("span", { class: `ui-sys-flags ui-sys-flags--${this.item.text.value}` }) : this.item.text.value), this.item = new i(this.props, this.element, this.getName(), this.emits), this.init();
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
		return this.item.img.isPicture.value ? this.renderPicture() : this.item.img.is.value ? this.renderImg() : o("span", this.propsMain.value, this.renderValue());
	}
};
//#endregion
export { X as Image, U as ImageAdaptiveGroup, q as ImageAdaptiveItem, J as ImageBackground, V as ImageCalculation, H as ImageCalculationList, z as ImageCoordinator, R as ImageData, Z as ImageDesign, A as ImageFile, Y as ImageImg, n as ImageInclude, M as ImagePdf, B as ImagePosition, I as ImageType, F as ImageTypeValue, P as ImageUint8Array, K as MAX_BEYOND, k as MAX_SIZE, L as defaultsImage };
