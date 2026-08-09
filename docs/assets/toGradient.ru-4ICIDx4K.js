import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, h2: `h2`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/ru/styles/color/| functions/toGradient - Преобразовать в градиент` }), `
`, (0, c.jsx)(n.h1, { id: `togradient`, children: (0, c.jsx)(n.code, { children: `toGradient` }) }), `
`, (0, c.jsxs)(n.p, { children: [`Функция оборачивает значение цвета в функцию `, (0, c.jsx)(n.code, { children: `linear-gradient` }), ` для обеспечения совместимости со свойством `, (0, c.jsx)(n.code, { children: `background-image` }), `.`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Параметры:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `$color: Color | String` }), ` — значение цвета для оборачивания.`] }), `
`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Возвращает:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `String` }), ` — строка в формате `, (0, c.jsx)(n.code, { children: `linear-gradient(0deg, #color, #color)` }), `.`] }), `
`] }), `
`, (0, c.jsx)(n.h2, { id: `пример`, children: `Пример` }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-scss`, children: `@use '@dxtmisha/styles';

$gradient: styles.toGradient(#ff0000); 
// linear-gradient(0deg, #ff0000, #ff0000)
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
