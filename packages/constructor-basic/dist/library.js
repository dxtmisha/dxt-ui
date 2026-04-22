import { ErrorCenter as e, Icons as t, isArray as n, isFilled as r, isString as i, resizeImageByMax as a } from "@dxtmisha/functional-basic";
//#region src/classes/Image/ImageCoordinator.ts
var o = class {
	is() {
		let e = this.getCoordinator();
		return n(e) && e.length > 0 && e.length < 5;
	}
	getBackgroundSize() {
		let e = this.getSize(), t = e.width === 0 ? 100 : e.width, n = e.height === 0 ? 100 : e.height;
		return {
			width: `${100 / t * 100}%`,
			height: `${100 / n * 100}%`
		};
	}
	initCoordinator() {
		if (this.is()) {
			let f = this.getCoordinator();
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
	}
	initSize() {
		let e = this.getCoordinator();
		return {
			width: 100 - e[1] - e[3],
			height: 100 - e[2] - e[0]
		};
	}
}, s = 1280, c = class {
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
	static getSRC(e, t, n = s) {
		if ((t instanceof File || t === void 0) && (e.naturalHeight > n || e.naturalWidth > n)) {
			var r;
			return (r = a(e, n)) == null ? "" : r;
		} else return e.src;
	}
}, l = "#toolbar=0&scrollbar=1", u = class {
	static isPdf(e) {
		return i(e) ? !!e.match(/\.pdf$/i) : !!e.type.match(/\/pdf$/i);
	}
	static async get(e) {
		return i(e) ? `${e}${l}` : this.isPdf(e) ? `${await c.getFileReader(e)}${l}` : "";
	}
}, d = [], f = class {
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
		return d.find((n) => n.item === e && n.type === t);
	}
	static addCacheItem(e, t, n) {
		d.push({
			item: e,
			type: t,
			src: n
		});
	}
}, p = /* @__PURE__ */ function(e) {
	return e.pdf = "pdf", e.file = "file", e.array = "array", e.image = "image", e.flag = "flag", e.flagCompressed = "flag-compressed", e.color = "color", e.public = "public", e.filled = "filled", e.outlined = "outlined", e.round = "round", e.sharp = "sharp", e.twoTone = "two-tone", e.material = "material", e.icon = "icon", e;
}({}), m = class {
	initType() {
		let e = this.getValue();
		if (e instanceof File) return p.file;
		if (f.is(e)) return p.array;
		if (i(e) && r(e)) {
			if (u.isPdf(e)) return p.pdf;
			if (e.match(/\//)) return p.image;
			if (e.match(/^#/)) return p.color;
			if (e.match(/^@/)) return p.public;
			if (e.match(/^\$/)) return p.material;
			if (e.match(/^flag-[a-z]{2}$/)) return p.flag;
			if (e.match(/^f-[a-z]{2}$/)) return p.flagCompressed;
			let n = e.match(/^(outlined|round|sharp|material)-/);
			return n ? n[1] : t.is(e) ? p.public : p.outlined;
		}
	}
}, h = "constructor", g = class {
	constructor(e) {
		this.type = e;
	}
	is() {
		return this.getImage() !== void 0;
	}
	isLink() {
		return this.is() && typeof this.getImage() == "string";
	}
	isImage() {
		return this.is() && typeof this.getImage() != "string";
	}
	async initData() {
		let n = this.getValue();
		if (n) switch (this.type.getType()) {
			case p.pdf: return await u.get(n);
			case p.array: return f.createImage(n);
			case p.image:
			case p.file:
				try {
					return this.getLazy() ? this.getValue() : await c.createImage(n);
				} catch (t) {
					e.on({
						group: h,
						code: "image-error",
						details: {
							image: n,
							error: t
						}
					});
				}
				break;
			case p.public:
			case p.icon:
			case p.flag:
				if (i(n)) return await t.get(n, this.getUrl());
				break;
		}
	}
}, _ = class {
	constructor(e) {
		this.coordinator = e;
	}
	initX() {
		var e;
		return this.coordinator.is() ? `${this.coordinator.get()[3] + this.coordinator.getSize().width / 2}%` : ((e = this.getPropX()) == null ? void 0 : e.toString()) || "center";
	}
	initY() {
		var e;
		return this.coordinator.is() ? `${this.coordinator.get()[0] + this.coordinator.getSize().height / 2}%` : ((e = this.getPropY()) == null ? void 0 : e.toString()) || "center";
	}
};
//#endregion
export { h as CONSTRUCTOR_ERROR_GROUP, o as ImageCoordinator, g as ImageData, c as ImageFile, u as ImagePdf, _ as ImagePosition, m as ImageType, p as ImageTypeValue, f as ImageUint8Array, s as MAX_SIZE };
