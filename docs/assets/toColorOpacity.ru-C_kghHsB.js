import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, h2: `h2`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/ru/styles/color/| functions/toColorOpacity - Извлечь прозрачность` }), `
`, (0, c.jsx)(n.h1, { id: `tocoloropacity`, children: (0, c.jsx)(n.code, { children: `toColorOpacity` }) }), `
`, (0, c.jsx)(n.p, { children: `Функция извлекает альфа-канал (прозрачность) из объекта Sass Color или строки пользовательской переменной CSS.` }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Параметры:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `$color: Color | String` }), ` — значение цвета для извлечения прозрачности.`] }), `
`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Возвращает:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `Number | String` }), ` — значение альфа [0..1] или модифицированная строка переменной CSS.`] }), `
`] }), `
`, (0, c.jsx)(n.h2, { id: `пример`, children: `Пример` }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-scss`, children: `@use '@dxtmisha/styles';

$opacity: styles.toColorOpacity(rgba(255, 0, 0, 0.5)); // 0.5
$var-opacity: styles.toColorOpacity(var(--sys-color)); // var(--sys-color-opacity)
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
