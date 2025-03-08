function o(r) {
  return Array.isArray(r) ? r : [r];
}
function t(r) {
  return r.toString().trim().replace(/[^\w- ]+/g, "").replace(/ +/g, "-").replace(new RegExp("(?<=[A-Z])([A-Z])", "g"), (e) => `${e.toLowerCase()}`).replace(/^[A-Z]/, (e) => e.toLowerCase()).replace(new RegExp("(?<=[\\w ])[A-Z]", "g"), (e) => `-${e.toLowerCase()}`).replace(/[A-Z]/g, (e) => e.toLowerCase());
}
export {
  o as toArray,
  t as toKebabCase
};
