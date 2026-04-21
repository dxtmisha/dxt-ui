import { isString as e, resizeImageByMax as t } from "@dxtmisha/functional";
//#region src/classes/Image/ImageFile.ts
var n = 1280, r = class {
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
	static getSRC(e, r, i = n) {
		if ((r instanceof File || r === void 0) && (e.naturalHeight > i || e.naturalWidth > i)) {
			var a;
			return (a = t(e, i)) == null ? "" : a;
		} else return e.src;
	}
}, i = "#toolbar=0&scrollbar=1", a = class {
	static isPdf(t) {
		return e(t) ? !!t.match(/\.pdf$/i) : !!t.type.match(/\/pdf$/i);
	}
	static async get(t) {
		return e(t) ? `${t}${i}` : this.isPdf(t) ? `${await r.getFileReader(t)}${i}` : "";
	}
}, o = /* @__PURE__ */ function(e) {
	return e.pdf = "pdf", e.file = "file", e.array = "array", e.image = "image", e.flag = "flag", e.flagCompressed = "flag-compressed", e.color = "color", e.public = "public", e.filled = "filled", e.outlined = "outlined", e.round = "round", e.sharp = "sharp", e.twoTone = "two-tone", e.material = "material", e.icon = "icon", e;
}({});
//#endregion
export { r as ImageFile, a as ImagePdf, o as ImageTypeValue, n as MAX_SIZE };
