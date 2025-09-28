import { d as ge, x as M, Y as Q, g as be, i as ve, Z as me, M as pe, _ as ye, a as L } from "./storybook-DGHBB56Z.js";
import v, { useCallback as S, useState as N, useEffect as $, useMemo as G, useRef as k, useLayoutEffect as xe } from "react";
var we = L({ "../../node_modules/color-name/index.js"(r, l) {
  l.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
} }), ee = L({ "../../node_modules/color-convert/conversions.js"(r, l) {
  var c = we(), h = {};
  for (let e of Object.keys(c)) h[c[e]] = e;
  var i = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
  l.exports = i;
  for (let e of Object.keys(i)) {
    if (!("channels" in i[e])) throw new Error("missing channels property: " + e);
    if (!("labels" in i[e])) throw new Error("missing channel labels property: " + e);
    if (i[e].labels.length !== i[e].channels) throw new Error("channel and label counts mismatch: " + e);
    let { channels: n, labels: t } = i[e];
    delete i[e].channels, delete i[e].labels, Object.defineProperty(i[e], "channels", { value: n }), Object.defineProperty(i[e], "labels", { value: t });
  }
  i.rgb.hsl = function(e) {
    let n = e[0] / 255, t = e[1] / 255, a = e[2] / 255, o = Math.min(n, t, a), u = Math.max(n, t, a), s = u - o, d, g;
    u === o ? d = 0 : n === u ? d = (t - a) / s : t === u ? d = 2 + (a - n) / s : a === u && (d = 4 + (n - t) / s), d = Math.min(d * 60, 360), d < 0 && (d += 360);
    let b = (o + u) / 2;
    return u === o ? g = 0 : b <= 0.5 ? g = s / (u + o) : g = s / (2 - u - o), [d, g * 100, b * 100];
  }, i.rgb.hsv = function(e) {
    let n, t, a, o, u, s = e[0] / 255, d = e[1] / 255, g = e[2] / 255, b = Math.max(s, d, g), p = b - Math.min(s, d, g), m = function(w) {
      return (b - w) / 6 / p + 1 / 2;
    };
    return p === 0 ? (o = 0, u = 0) : (u = p / b, n = m(s), t = m(d), a = m(g), s === b ? o = a - t : d === b ? o = 1 / 3 + n - a : g === b && (o = 2 / 3 + t - n), o < 0 ? o += 1 : o > 1 && (o -= 1)), [o * 360, u * 100, b * 100];
  }, i.rgb.hwb = function(e) {
    let n = e[0], t = e[1], a = e[2], o = i.rgb.hsl(e)[0], u = 1 / 255 * Math.min(n, Math.min(t, a));
    return a = 1 - 1 / 255 * Math.max(n, Math.max(t, a)), [o, u * 100, a * 100];
  }, i.rgb.cmyk = function(e) {
    let n = e[0] / 255, t = e[1] / 255, a = e[2] / 255, o = Math.min(1 - n, 1 - t, 1 - a), u = (1 - n - o) / (1 - o) || 0, s = (1 - t - o) / (1 - o) || 0, d = (1 - a - o) / (1 - o) || 0;
    return [u * 100, s * 100, d * 100, o * 100];
  };
  function f(e, n) {
    return (e[0] - n[0]) ** 2 + (e[1] - n[1]) ** 2 + (e[2] - n[2]) ** 2;
  }
  i.rgb.keyword = function(e) {
    let n = h[e];
    if (n) return n;
    let t = 1 / 0, a;
    for (let o of Object.keys(c)) {
      let u = c[o], s = f(e, u);
      s < t && (t = s, a = o);
    }
    return a;
  }, i.keyword.rgb = function(e) {
    return c[e];
  }, i.rgb.xyz = function(e) {
    let n = e[0] / 255, t = e[1] / 255, a = e[2] / 255;
    n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92, t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, a = a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92;
    let o = n * 0.4124 + t * 0.3576 + a * 0.1805, u = n * 0.2126 + t * 0.7152 + a * 0.0722, s = n * 0.0193 + t * 0.1192 + a * 0.9505;
    return [o * 100, u * 100, s * 100];
  }, i.rgb.lab = function(e) {
    let n = i.rgb.xyz(e), t = n[0], a = n[1], o = n[2];
    t /= 95.047, a /= 100, o /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, a = a > 8856e-6 ? a ** (1 / 3) : 7.787 * a + 16 / 116, o = o > 8856e-6 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
    let u = 116 * a - 16, s = 500 * (t - a), d = 200 * (a - o);
    return [u, s, d];
  }, i.hsl.rgb = function(e) {
    let n = e[0] / 360, t = e[1] / 100, a = e[2] / 100, o, u, s;
    if (t === 0) return s = a * 255, [s, s, s];
    a < 0.5 ? o = a * (1 + t) : o = a + t - a * t;
    let d = 2 * a - o, g = [0, 0, 0];
    for (let b = 0; b < 3; b++) u = n + 1 / 3 * -(b - 1), u < 0 && u++, u > 1 && u--, 6 * u < 1 ? s = d + (o - d) * 6 * u : 2 * u < 1 ? s = o : 3 * u < 2 ? s = d + (o - d) * (2 / 3 - u) * 6 : s = d, g[b] = s * 255;
    return g;
  }, i.hsl.hsv = function(e) {
    let n = e[0], t = e[1] / 100, a = e[2] / 100, o = t, u = Math.max(a, 0.01);
    a *= 2, t *= a <= 1 ? a : 2 - a, o *= u <= 1 ? u : 2 - u;
    let s = (a + t) / 2, d = a === 0 ? 2 * o / (u + o) : 2 * t / (a + t);
    return [n, d * 100, s * 100];
  }, i.hsv.rgb = function(e) {
    let n = e[0] / 60, t = e[1] / 100, a = e[2] / 100, o = Math.floor(n) % 6, u = n - Math.floor(n), s = 255 * a * (1 - t), d = 255 * a * (1 - t * u), g = 255 * a * (1 - t * (1 - u));
    switch (a *= 255, o) {
      case 0:
        return [a, g, s];
      case 1:
        return [d, a, s];
      case 2:
        return [s, a, g];
      case 3:
        return [s, d, a];
      case 4:
        return [g, s, a];
      case 5:
        return [a, s, d];
    }
  }, i.hsv.hsl = function(e) {
    let n = e[0], t = e[1] / 100, a = e[2] / 100, o = Math.max(a, 0.01), u, s;
    s = (2 - t) * a;
    let d = (2 - t) * o;
    return u = t * o, u /= d <= 1 ? d : 2 - d, u = u || 0, s /= 2, [n, u * 100, s * 100];
  }, i.hwb.rgb = function(e) {
    let n = e[0] / 360, t = e[1] / 100, a = e[2] / 100, o = t + a, u;
    o > 1 && (t /= o, a /= o);
    let s = Math.floor(6 * n), d = 1 - a;
    u = 6 * n - s, (s & 1) !== 0 && (u = 1 - u);
    let g = t + u * (d - t), b, p, m;
    switch (s) {
      default:
      case 6:
      case 0:
        b = d, p = g, m = t;
        break;
      case 1:
        b = g, p = d, m = t;
        break;
      case 2:
        b = t, p = d, m = g;
        break;
      case 3:
        b = t, p = g, m = d;
        break;
      case 4:
        b = g, p = t, m = d;
        break;
      case 5:
        b = d, p = t, m = g;
        break;
    }
    return [b * 255, p * 255, m * 255];
  }, i.cmyk.rgb = function(e) {
    let n = e[0] / 100, t = e[1] / 100, a = e[2] / 100, o = e[3] / 100, u = 1 - Math.min(1, n * (1 - o) + o), s = 1 - Math.min(1, t * (1 - o) + o), d = 1 - Math.min(1, a * (1 - o) + o);
    return [u * 255, s * 255, d * 255];
  }, i.xyz.rgb = function(e) {
    let n = e[0] / 100, t = e[1] / 100, a = e[2] / 100, o, u, s;
    return o = n * 3.2406 + t * -1.5372 + a * -0.4986, u = n * -0.9689 + t * 1.8758 + a * 0.0415, s = n * 0.0557 + t * -0.204 + a * 1.057, o = o > 31308e-7 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92, u = u > 31308e-7 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, o = Math.min(Math.max(0, o), 1), u = Math.min(Math.max(0, u), 1), s = Math.min(Math.max(0, s), 1), [o * 255, u * 255, s * 255];
  }, i.xyz.lab = function(e) {
    let n = e[0], t = e[1], a = e[2];
    n /= 95.047, t /= 100, a /= 108.883, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, a = a > 8856e-6 ? a ** (1 / 3) : 7.787 * a + 16 / 116;
    let o = 116 * t - 16, u = 500 * (n - t), s = 200 * (t - a);
    return [o, u, s];
  }, i.lab.xyz = function(e) {
    let n = e[0], t = e[1], a = e[2], o, u, s;
    u = (n + 16) / 116, o = t / 500 + u, s = u - a / 200;
    let d = u ** 3, g = o ** 3, b = s ** 3;
    return u = d > 8856e-6 ? d : (u - 16 / 116) / 7.787, o = g > 8856e-6 ? g : (o - 16 / 116) / 7.787, s = b > 8856e-6 ? b : (s - 16 / 116) / 7.787, o *= 95.047, u *= 100, s *= 108.883, [o, u, s];
  }, i.lab.lch = function(e) {
    let n = e[0], t = e[1], a = e[2], o;
    o = Math.atan2(a, t) * 360 / 2 / Math.PI, o < 0 && (o += 360);
    let u = Math.sqrt(t * t + a * a);
    return [n, u, o];
  }, i.lch.lab = function(e) {
    let n = e[0], t = e[1], a = e[2] / 360 * 2 * Math.PI, o = t * Math.cos(a), u = t * Math.sin(a);
    return [n, o, u];
  }, i.rgb.ansi16 = function(e, n = null) {
    let [t, a, o] = e, u = n === null ? i.rgb.hsv(e)[2] : n;
    if (u = Math.round(u / 50), u === 0) return 30;
    let s = 30 + (Math.round(o / 255) << 2 | Math.round(a / 255) << 1 | Math.round(t / 255));
    return u === 2 && (s += 60), s;
  }, i.hsv.ansi16 = function(e) {
    return i.rgb.ansi16(i.hsv.rgb(e), e[2]);
  }, i.rgb.ansi256 = function(e) {
    let n = e[0], t = e[1], a = e[2];
    return n === t && t === a ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(a / 255 * 5);
  }, i.ansi16.rgb = function(e) {
    let n = e % 10;
    if (n === 0 || n === 7) return e > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n];
    let t = (~~(e > 50) + 1) * 0.5, a = (n & 1) * t * 255, o = (n >> 1 & 1) * t * 255, u = (n >> 2 & 1) * t * 255;
    return [a, o, u];
  }, i.ansi256.rgb = function(e) {
    if (e >= 232) {
      let u = (e - 232) * 10 + 8;
      return [u, u, u];
    }
    e -= 16;
    let n, t = Math.floor(e / 36) / 5 * 255, a = Math.floor((n = e % 36) / 6) / 5 * 255, o = n % 6 / 5 * 255;
    return [t, a, o];
  }, i.rgb.hex = function(e) {
    let n = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  }, i.hex.rgb = function(e) {
    let n = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!n) return [0, 0, 0];
    let t = n[0];
    n[0].length === 3 && (t = t.split("").map((d) => d + d).join(""));
    let a = parseInt(t, 16), o = a >> 16 & 255, u = a >> 8 & 255, s = a & 255;
    return [o, u, s];
  }, i.rgb.hcg = function(e) {
    let n = e[0] / 255, t = e[1] / 255, a = e[2] / 255, o = Math.max(Math.max(n, t), a), u = Math.min(Math.min(n, t), a), s = o - u, d, g;
    return s < 1 ? d = u / (1 - s) : d = 0, s <= 0 ? g = 0 : o === n ? g = (t - a) / s % 6 : o === t ? g = 2 + (a - n) / s : g = 4 + (n - t) / s, g /= 6, g %= 1, [g * 360, s * 100, d * 100];
  }, i.hsl.hcg = function(e) {
    let n = e[1] / 100, t = e[2] / 100, a = t < 0.5 ? 2 * n * t : 2 * n * (1 - t), o = 0;
    return a < 1 && (o = (t - 0.5 * a) / (1 - a)), [e[0], a * 100, o * 100];
  }, i.hsv.hcg = function(e) {
    let n = e[1] / 100, t = e[2] / 100, a = n * t, o = 0;
    return a < 1 && (o = (t - a) / (1 - a)), [e[0], a * 100, o * 100];
  }, i.hcg.rgb = function(e) {
    let n = e[0] / 360, t = e[1] / 100, a = e[2] / 100;
    if (t === 0) return [a * 255, a * 255, a * 255];
    let o = [0, 0, 0], u = n % 1 * 6, s = u % 1, d = 1 - s, g = 0;
    switch (Math.floor(u)) {
      case 0:
        o[0] = 1, o[1] = s, o[2] = 0;
        break;
      case 1:
        o[0] = d, o[1] = 1, o[2] = 0;
        break;
      case 2:
        o[0] = 0, o[1] = 1, o[2] = s;
        break;
      case 3:
        o[0] = 0, o[1] = d, o[2] = 1;
        break;
      case 4:
        o[0] = s, o[1] = 0, o[2] = 1;
        break;
      default:
        o[0] = 1, o[1] = 0, o[2] = d;
    }
    return g = (1 - t) * a, [(t * o[0] + g) * 255, (t * o[1] + g) * 255, (t * o[2] + g) * 255];
  }, i.hcg.hsv = function(e) {
    let n = e[1] / 100, t = e[2] / 100, a = n + t * (1 - n), o = 0;
    return a > 0 && (o = n / a), [e[0], o * 100, a * 100];
  }, i.hcg.hsl = function(e) {
    let n = e[1] / 100, t = e[2] / 100 * (1 - n) + 0.5 * n, a = 0;
    return t > 0 && t < 0.5 ? a = n / (2 * t) : t >= 0.5 && t < 1 && (a = n / (2 * (1 - t))), [e[0], a * 100, t * 100];
  }, i.hcg.hwb = function(e) {
    let n = e[1] / 100, t = e[2] / 100, a = n + t * (1 - n);
    return [e[0], (a - n) * 100, (1 - a) * 100];
  }, i.hwb.hcg = function(e) {
    let n = e[1] / 100, t = 1 - e[2] / 100, a = t - n, o = 0;
    return a < 1 && (o = (t - a) / (1 - a)), [e[0], a * 100, o * 100];
  }, i.apple.rgb = function(e) {
    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
  }, i.rgb.apple = function(e) {
    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
  }, i.gray.rgb = function(e) {
    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
  }, i.gray.hsl = function(e) {
    return [0, 0, e[0]];
  }, i.gray.hsv = i.gray.hsl, i.gray.hwb = function(e) {
    return [0, 100, e[0]];
  }, i.gray.cmyk = function(e) {
    return [0, 0, 0, e[0]];
  }, i.gray.lab = function(e) {
    return [e[0], 0, 0];
  }, i.gray.hex = function(e) {
    let n = Math.round(e[0] / 100 * 255) & 255, t = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
    return "000000".substring(t.length) + t;
  }, i.rgb.gray = function(e) {
    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
  };
} }), _e = L({ "../../node_modules/color-convert/route.js"(r, l) {
  var c = ee();
  function h() {
    let n = {}, t = Object.keys(c);
    for (let a = t.length, o = 0; o < a; o++) n[t[o]] = { distance: -1, parent: null };
    return n;
  }
  function i(n) {
    let t = h(), a = [n];
    for (t[n].distance = 0; a.length; ) {
      let o = a.pop(), u = Object.keys(c[o]);
      for (let s = u.length, d = 0; d < s; d++) {
        let g = u[d], b = t[g];
        b.distance === -1 && (b.distance = t[o].distance + 1, b.parent = o, a.unshift(g));
      }
    }
    return t;
  }
  function f(n, t) {
    return function(a) {
      return t(n(a));
    };
  }
  function e(n, t) {
    let a = [t[n].parent, n], o = c[t[n].parent][n], u = t[n].parent;
    for (; t[u].parent; ) a.unshift(t[u].parent), o = f(c[t[u].parent][u], o), u = t[u].parent;
    return o.conversion = a, o;
  }
  l.exports = function(n) {
    let t = i(n), a = {}, o = Object.keys(t);
    for (let u = o.length, s = 0; s < u; s++) {
      let d = o[s];
      t[d].parent !== null && (a[d] = e(d, t));
    }
    return a;
  };
} }), ke = L({ "../../node_modules/color-convert/index.js"(r, l) {
  var c = ee(), h = _e(), i = {}, f = Object.keys(c);
  function e(t) {
    let a = function(...o) {
      let u = o[0];
      return u == null ? u : (u.length > 1 && (o = u), t(o));
    };
    return "conversion" in t && (a.conversion = t.conversion), a;
  }
  function n(t) {
    let a = function(...o) {
      let u = o[0];
      if (u == null) return u;
      u.length > 1 && (o = u);
      let s = t(o);
      if (typeof s == "object") for (let d = s.length, g = 0; g < d; g++) s[g] = Math.round(s[g]);
      return s;
    };
    return "conversion" in t && (a.conversion = t.conversion), a;
  }
  f.forEach((t) => {
    i[t] = {}, Object.defineProperty(i[t], "channels", { value: c[t].channels }), Object.defineProperty(i[t], "labels", { value: c[t].labels });
    let a = h(t);
    Object.keys(a).forEach((o) => {
      let u = a[o];
      i[t][o] = n(u), i[t][o].raw = e(u);
    });
  }), l.exports = i;
} }), _ = ye(ke());
function E() {
  return (E = Object.assign || function(r) {
    for (var l = 1; l < arguments.length; l++) {
      var c = arguments[l];
      for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (r[h] = c[h]);
    }
    return r;
  }).apply(this, arguments);
}
function F(r, l) {
  if (r == null) return {};
  var c, h, i = {}, f = Object.keys(r);
  for (h = 0; h < f.length; h++) l.indexOf(c = f[h]) >= 0 || (i[c] = r[c]);
  return i;
}
function K(r) {
  var l = k(r), c = k(function(h) {
    l.current && l.current(h);
  });
  return l.current = r, c.current;
}
var O = function(r, l, c) {
  return l === void 0 && (l = 0), c === void 0 && (c = 1), r > c ? c : r < l ? l : r;
}, j = function(r) {
  return "touches" in r;
}, T = function(r) {
  return r && r.ownerDocument.defaultView || self;
}, A = function(r, l, c) {
  var h = r.getBoundingClientRect(), i = j(l) ? (function(f, e) {
    for (var n = 0; n < f.length; n++) if (f[n].identifier === e) return f[n];
    return f[0];
  })(l.touches, c) : l;
  return { left: O((i.pageX - (h.left + T(r).pageXOffset)) / h.width), top: O((i.pageY - (h.top + T(r).pageYOffset)) / h.height) };
}, U = function(r) {
  !j(r) && r.preventDefault();
}, W = v.memo(function(r) {
  var l = r.onMove, c = r.onKey, h = F(r, ["onMove", "onKey"]), i = k(null), f = K(l), e = K(c), n = k(null), t = k(!1), a = G(function() {
    var d = function(p) {
      U(p), (j(p) ? p.touches.length > 0 : p.buttons > 0) && i.current ? f(A(i.current, p, n.current)) : b(!1);
    }, g = function() {
      return b(!1);
    };
    function b(p) {
      var m = t.current, w = T(i.current), y = p ? w.addEventListener : w.removeEventListener;
      y(m ? "touchmove" : "mousemove", d), y(m ? "touchend" : "mouseup", g);
    }
    return [function(p) {
      var m = p.nativeEvent, w = i.current;
      if (w && (U(m), !(function(H, fe) {
        return fe && !j(H);
      })(m, t.current) && w)) {
        if (j(m)) {
          t.current = !0;
          var y = m.changedTouches || [];
          y.length && (n.current = y[0].identifier);
        }
        w.focus(), f(A(w, m, n.current)), b(!0);
      }
    }, function(p) {
      var m = p.which || p.keyCode;
      m < 37 || m > 40 || (p.preventDefault(), e({ left: m === 39 ? 0.05 : m === 37 ? -0.05 : 0, top: m === 40 ? 0.05 : m === 38 ? -0.05 : 0 }));
    }, b];
  }, [e, f]), o = a[0], u = a[1], s = a[2];
  return $(function() {
    return s;
  }, [s]), v.createElement("div", E({}, h, { onTouchStart: o, onMouseDown: o, className: "react-colorful__interactive", ref: i, onKeyDown: u, tabIndex: 0, role: "slider" }));
}), z = function(r) {
  return r.filter(Boolean).join(" ");
}, Y = function(r) {
  var l = r.color, c = r.left, h = r.top, i = h === void 0 ? 0.5 : h, f = z(["react-colorful__pointer", r.className]);
  return v.createElement("div", { className: f, style: { top: 100 * i + "%", left: 100 * c + "%" } }, v.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: l } }));
}, x = function(r, l, c) {
  return l === void 0 && (l = 0), c === void 0 && (c = Math.pow(10, l)), Math.round(c * r) / c;
}, Me = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, Ee = function(r) {
  return ne(X(r));
}, X = function(r) {
  return r[0] === "#" && (r = r.substring(1)), r.length < 6 ? { r: parseInt(r[0] + r[0], 16), g: parseInt(r[1] + r[1], 16), b: parseInt(r[2] + r[2], 16), a: r.length === 4 ? x(parseInt(r[3] + r[3], 16) / 255, 2) : 1 } : { r: parseInt(r.substring(0, 2), 16), g: parseInt(r.substring(2, 4), 16), b: parseInt(r.substring(4, 6), 16), a: r.length === 8 ? x(parseInt(r.substring(6, 8), 16) / 255, 2) : 1 };
}, Ce = function(r, l) {
  return l === void 0 && (l = "deg"), Number(r) * (Me[l] || 1);
}, $e = function(r) {
  var l = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);
  return l ? Oe({ h: Ce(l[1], l[2]), s: Number(l[3]), l: Number(l[4]), a: l[5] === void 0 ? 1 : Number(l[5]) / (l[6] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
}, Oe = function(r) {
  var l = r.s, c = r.l;
  return { h: r.h, s: (l *= (c < 50 ? c : 100 - c) / 100) > 0 ? 2 * l / (c + l) * 100 : 0, v: c + l, a: r.a };
}, Ne = function(r) {
  return Se(te(r));
}, re = function(r) {
  var l = r.s, c = r.v, h = r.a, i = (200 - l) * c / 100;
  return { h: x(r.h), s: x(i > 0 && i < 200 ? l * c / 100 / (i <= 100 ? i : 200 - i) * 100 : 0), l: x(i / 2), a: x(h, 2) };
}, V = function(r) {
  var l = re(r);
  return "hsl(" + l.h + ", " + l.s + "%, " + l.l + "%)";
}, R = function(r) {
  var l = re(r);
  return "hsla(" + l.h + ", " + l.s + "%, " + l.l + "%, " + l.a + ")";
}, te = function(r) {
  var l = r.h, c = r.s, h = r.v, i = r.a;
  l = l / 360 * 6, c /= 100, h /= 100;
  var f = Math.floor(l), e = h * (1 - c), n = h * (1 - (l - f) * c), t = h * (1 - (1 - l + f) * c), a = f % 6;
  return { r: x(255 * [h, n, e, e, t, h][a]), g: x(255 * [t, h, h, n, e, e][a]), b: x(255 * [e, e, t, h, h, n][a]), a: x(i, 2) };
}, je = function(r) {
  var l = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);
  return l ? ne({ r: Number(l[1]) / (l[2] ? 100 / 255 : 1), g: Number(l[3]) / (l[4] ? 100 / 255 : 1), b: Number(l[5]) / (l[6] ? 100 / 255 : 1), a: l[7] === void 0 ? 1 : Number(l[7]) / (l[8] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
}, I = function(r) {
  var l = r.toString(16);
  return l.length < 2 ? "0" + l : l;
}, Se = function(r) {
  var l = r.r, c = r.g, h = r.b, i = r.a, f = i < 1 ? I(x(255 * i)) : "";
  return "#" + I(l) + I(c) + I(h) + f;
}, ne = function(r) {
  var l = r.r, c = r.g, h = r.b, i = r.a, f = Math.max(l, c, h), e = f - Math.min(l, c, h), n = e ? f === l ? (c - h) / e : f === c ? 2 + (h - l) / e : 4 + (l - c) / e : 0;
  return { h: x(60 * (n < 0 ? n + 6 : n)), s: x(f ? e / f * 100 : 0), v: x(f / 255 * 100), a: i };
}, ae = v.memo(function(r) {
  var l = r.hue, c = r.onChange, h = z(["react-colorful__hue", r.className]);
  return v.createElement("div", { className: h }, v.createElement(W, { onMove: function(i) {
    c({ h: 360 * i.left });
  }, onKey: function(i) {
    c({ h: O(l + 360 * i.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": x(l), "aria-valuemax": "360", "aria-valuemin": "0" }, v.createElement(Y, { className: "react-colorful__hue-pointer", left: l / 360, color: V({ h: l, s: 100, v: 100, a: 1 }) })));
}), oe = v.memo(function(r) {
  var l = r.hsva, c = r.onChange, h = { backgroundColor: V({ h: l.h, s: 100, v: 100, a: 1 }) };
  return v.createElement("div", { className: "react-colorful__saturation", style: h }, v.createElement(W, { onMove: function(i) {
    c({ s: 100 * i.left, v: 100 - 100 * i.top });
  }, onKey: function(i) {
    c({ s: O(l.s + 100 * i.left, 0, 100), v: O(l.v - 100 * i.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + x(l.s) + "%, Brightness " + x(l.v) + "%" }, v.createElement(Y, { className: "react-colorful__saturation-pointer", top: 1 - l.v / 100, left: l.s / 100, color: V(l) })));
}), le = function(r, l) {
  if (r === l) return !0;
  for (var c in r) if (r[c] !== l[c]) return !1;
  return !0;
}, ie = function(r, l) {
  return r.replace(/\s/g, "") === l.replace(/\s/g, "");
}, ze = function(r, l) {
  return r.toLowerCase() === l.toLowerCase() || le(X(r), X(l));
};
function ue(r, l, c) {
  var h = K(c), i = N(function() {
    return r.toHsva(l);
  }), f = i[0], e = i[1], n = k({ color: l, hsva: f });
  $(function() {
    if (!r.equal(l, n.current.color)) {
      var a = r.toHsva(l);
      n.current = { hsva: a, color: l }, e(a);
    }
  }, [l, r]), $(function() {
    var a;
    le(f, n.current.hsva) || r.equal(a = r.fromHsva(f), n.current.color) || (n.current = { hsva: f, color: a }, h(a));
  }, [f, r, h]);
  var t = S(function(a) {
    e(function(o) {
      return Object.assign({}, o, a);
    });
  }, []);
  return [f, t];
}
var He = typeof window < "u" ? xe : $, Ie = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Z = /* @__PURE__ */ new Map(), ce = function(r) {
  He(function() {
    var l = r.current ? r.current.ownerDocument : document;
    if (l !== void 0 && !Z.has(l)) {
      var c = l.createElement("style");
      c.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Z.set(l, c);
      var h = Ie();
      h && c.setAttribute("nonce", h), l.head.appendChild(c);
    }
  }, []);
}, qe = function(r) {
  var l = r.className, c = r.colorModel, h = r.color, i = h === void 0 ? c.defaultColor : h, f = r.onChange, e = F(r, ["className", "colorModel", "color", "onChange"]), n = k(null);
  ce(n);
  var t = ue(c, i, f), a = t[0], o = t[1], u = z(["react-colorful", l]);
  return v.createElement("div", E({}, e, { ref: n, className: u }), v.createElement(oe, { hsva: a, onChange: o }), v.createElement(ae, { hue: a.h, onChange: o, className: "react-colorful__last-control" }));
}, Re = { defaultColor: "000", toHsva: Ee, fromHsva: function(r) {
  return Ne({ h: r.h, s: r.s, v: r.v, a: 1 });
}, equal: ze }, Pe = function(r) {
  return v.createElement(qe, E({}, r, { colorModel: Re }));
}, Le = function(r) {
  var l = r.className, c = r.hsva, h = r.onChange, i = { backgroundImage: "linear-gradient(90deg, " + R(Object.assign({}, c, { a: 0 })) + ", " + R(Object.assign({}, c, { a: 1 })) + ")" }, f = z(["react-colorful__alpha", l]), e = x(100 * c.a);
  return v.createElement("div", { className: f }, v.createElement("div", { className: "react-colorful__alpha-gradient", style: i }), v.createElement(W, { onMove: function(n) {
    h({ a: n.left });
  }, onKey: function(n) {
    h({ a: O(c.a + n.left) });
  }, "aria-label": "Alpha", "aria-valuetext": e + "%", "aria-valuenow": e, "aria-valuemin": "0", "aria-valuemax": "100" }, v.createElement(Y, { className: "react-colorful__alpha-pointer", left: c.a, color: R(c) })));
}, se = function(r) {
  var l = r.className, c = r.colorModel, h = r.color, i = h === void 0 ? c.defaultColor : h, f = r.onChange, e = F(r, ["className", "colorModel", "color", "onChange"]), n = k(null);
  ce(n);
  var t = ue(c, i, f), a = t[0], o = t[1], u = z(["react-colorful", l]);
  return v.createElement("div", E({}, e, { ref: n, className: u }), v.createElement(oe, { hsva: a, onChange: o }), v.createElement(ae, { hue: a.h, onChange: o }), v.createElement(Le, { hsva: a, onChange: o, className: "react-colorful__last-control" }));
}, Be = { defaultColor: "hsla(0, 0%, 0%, 1)", toHsva: $e, fromHsva: R, equal: ie }, Ke = function(r) {
  return v.createElement(se, E({}, r, { colorModel: Be }));
}, Te = { defaultColor: "rgba(0, 0, 0, 1)", toHsva: je, fromHsva: function(r) {
  var l = te(r);
  return "rgba(" + l.r + ", " + l.g + ", " + l.b + ", " + l.a + ")";
}, equal: ie }, Xe = function(r) {
  return v.createElement(se, E({}, r, { colorModel: Te }));
}, Ve = M.div({ position: "relative", maxWidth: 250, '&[aria-readonly="true"]': { opacity: 0.5 } }), De = M(Q)({ position: "absolute", zIndex: 1, top: 4, left: 4, "[aria-readonly=true] &": { cursor: "not-allowed" } }), Ge = M.div({ width: 200, margin: 5, ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" }, ".react-colorful__hue": { boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)" }, ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" } }), Fe = M(ve)(({ theme: r }) => ({ fontFamily: r.typography.fonts.base })), We = M.div({ display: "grid", gridTemplateColumns: "repeat(9, 16px)", gap: 6, padding: 3, marginTop: 5, width: 200 }), Ye = M.div(({ theme: r, active: l }) => ({ width: 16, height: 16, boxShadow: l ? `${r.appBorderColor} 0 0 0 1px inset, ${r.textMutedColor}50 0 0 0 4px` : `${r.appBorderColor} 0 0 0 1px inset`, borderRadius: r.appBorderRadius })), Ae = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`, J = ({ value: r, style: l, ...c }) => {
  let h = `linear-gradient(${r}, ${r}), ${Ae}, linear-gradient(#fff, #fff)`;
  return v.createElement(Ye, { ...c, style: { ...l, backgroundImage: h } });
}, Ue = M(me.Input)(({ theme: r, readOnly: l }) => ({ width: "100%", paddingLeft: 30, paddingRight: 30, boxSizing: "border-box", fontFamily: r.typography.fonts.base })), Ze = M(pe)(({ theme: r }) => ({ position: "absolute", zIndex: 1, top: 6, right: 7, width: 20, height: 20, padding: 4, boxSizing: "border-box", cursor: "pointer", color: r.input.color })), he = ((r) => (r.RGB = "rgb", r.HSL = "hsl", r.HEX = "hex", r))(he || {}), B = Object.values(he), Je = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/, Qe = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i, er = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i, D = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i, rr = /^\s*#?([0-9a-f]{3})\s*$/i, tr = { hex: Pe, rgb: Xe, hsl: Ke }, q = { hex: "transparent", rgb: "rgba(0, 0, 0, 0)", hsl: "hsla(0, 0%, 0%, 0)" }, de = (r) => {
  let l = r?.match(Je);
  if (!l) return [0, 0, 0, 1];
  let [, c, h, i, f = 1] = l;
  return [c, h, i, f].map(Number);
}, nr = (r) => {
  let [l, c, h, i] = de(r), [f, e, n] = _.default.rgb.hsl([l, c, h]) || [0, 0, 0];
  return { valid: !0, value: r, keyword: _.default.rgb.keyword([l, c, h]), colorSpace: "rgb", rgb: r, hsl: `hsla(${f}, ${e}%, ${n}%, ${i})`, hex: `#${_.default.rgb.hex([l, c, h]).toLowerCase()}` };
}, ar = (r) => {
  let [l, c, h, i] = de(r), [f, e, n] = _.default.hsl.rgb([l, c, h]) || [0, 0, 0];
  return { valid: !0, value: r, keyword: _.default.hsl.keyword([l, c, h]), colorSpace: "hsl", rgb: `rgba(${f}, ${e}, ${n}, ${i})`, hsl: r, hex: `#${_.default.hsl.hex([l, c, h]).toLowerCase()}` };
}, or = (r) => {
  let l = r.replace("#", ""), c = _.default.keyword.rgb(l) || _.default.hex.rgb(l), h = _.default.rgb.hsl(c), i = r;
  /[^#a-f0-9]/i.test(r) ? i = l : D.test(r) && (i = `#${l}`);
  let f = !0;
  if (i.startsWith("#")) f = D.test(i);
  else try {
    _.default.keyword.hex(i);
  } catch {
    f = !1;
  }
  return { valid: f, value: i, keyword: _.default.rgb.keyword(c), colorSpace: "hex", rgb: `rgba(${c[0]}, ${c[1]}, ${c[2]}, 1)`, hsl: `hsla(${h[0]}, ${h[1]}%, ${h[2]}%, 1)`, hex: i };
}, C = (r) => {
  if (r) return Qe.test(r) ? nr(r) : er.test(r) ? ar(r) : or(r);
}, lr = (r, l, c) => {
  if (!r || !l?.valid) return q[c];
  if (c !== "hex") return l?.[c] || q[c];
  if (!l.hex.startsWith("#")) try {
    return `#${_.default.keyword.hex(l.hex)}`;
  } catch {
    return q.hex;
  }
  let h = l.hex.match(rr);
  if (!h) return D.test(l.hex) ? l.hex : q.hex;
  let [i, f, e] = h[1].split("");
  return `#${i}${i}${f}${f}${e}${e}`;
}, ir = (r, l) => {
  let [c, h] = N(r || ""), [i, f] = N(() => C(c)), [e, n] = N(i?.colorSpace || "hex");
  $(() => {
    let u = r || "", s = C(u);
    h(u), f(s), n(s?.colorSpace || "hex");
  }, [r]);
  let t = G(() => lr(c, i, e).toLowerCase(), [c, i, e]), a = S((u) => {
    let s = C(u), d = s?.value || u || "";
    h(d), d === "" && (f(void 0), l(void 0)), s && (f(s), n(s.colorSpace), l(s.value));
  }, [l]), o = S(() => {
    let u = (B.indexOf(e) + 1) % B.length, s = B[u];
    n(s);
    let d = i?.[s] || "";
    h(d), l(d);
  }, [i, e, l]);
  return { value: c, realValue: t, updateValue: a, color: i, colorSpace: e, cycleColorSpace: o };
}, P = (r) => r.replace(/\s*/, "").toLowerCase(), ur = (r, l, c) => {
  let [h, i] = N(l?.valid ? [l] : []);
  $(() => {
    l === void 0 && i([]);
  }, [l]);
  let f = G(() => (r || []).map((n) => typeof n == "string" ? C(n) : n.title ? { ...C(n.color), keyword: n.title } : C(n.color)).concat(h).filter(Boolean).slice(-27), [r, h]), e = S((n) => {
    n?.valid && (f.some((t) => t && t[c] && P(t[c] || "") === P(n[c] || "")) || i((t) => t.concat(n)));
  }, [c, f]);
  return { presets: f, addPreset: e };
}, cr = ({ name: r, value: l, onChange: c, onFocus: h, onBlur: i, presetColors: f, startOpen: e = !1, argType: n }) => {
  let t = S(ge(c, 200), [c]), { value: a, realValue: o, updateValue: u, color: s, colorSpace: d, cycleColorSpace: g } = ir(l, t), { presets: b, addPreset: p } = ur(f ?? [], s, d), m = tr[d], w = !!n?.table?.readonly;
  return v.createElement(Ve, { "aria-readonly": w }, v.createElement(De, { startOpen: e, trigger: w ? null : void 0, closeOnOutsideClick: !0, onVisibleChange: () => s && p(s), tooltip: v.createElement(Ge, null, v.createElement(m, { color: o === "transparent" ? "#000000" : o, onChange: u, onFocus: h, onBlur: i }), b.length > 0 && v.createElement(We, null, b.map((y, H) => v.createElement(Q, { key: `${y?.value || H}-${H}`, hasChrome: !1, tooltip: v.createElement(Fe, { note: y?.keyword || y?.value || "" }) }, v.createElement(J, { value: y?.[d] || "", active: !!(s && y && y[d] && P(y[d] || "") === P(s[d])), onClick: () => y && u(y.value || "") }))))) }, v.createElement(J, { value: o, style: { margin: 4 } })), v.createElement(Ue, { id: be(r), value: a, onChange: (y) => u(y.target.value), onFocus: (y) => y.target.select(), readOnly: w, placeholder: "Choose color..." }), a ? v.createElement(Ze, { onClick: g }) : null);
}, dr = cr;
export {
  cr as ColorControl,
  dr as default
};
