import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { c as r, f as i, s as a } from './blocks-CKlddtvc.js'; import { t as o } from './mdx-react-shim-B1U8VZv0.js'; function s(e) {
  let n = { code: `code`, h1: `h1`, h2: `h2`, li: `li`, p: `p`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(a, { title: `@dxtmisha/ru/functional-basic/Functions/toString - Преобразование значения в строку` }), `
`, (0, l.jsx)(n.h1, { id: `tostring`, children: (0, l.jsx)(n.code, { children: `toString` }) }), `
`, (0, l.jsx)(n.p, { children: `Утилита для преобразования значения в строку. Возвращает пустую строку, если значение равно null или undefined.` }), `
`, (0, l.jsx)(n.p, { children: (0, l.jsx)(n.strong, { children: `Параметры:` }) }), `
`, (0, l.jsxs)(n.ul, { children: [`
`, (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.code, { children: `value: string | null | undefined` }), ` — Значение для преобразования.`] }), `
`] }), `
`, (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: `Возвращает:` }), `
`, (0, l.jsx)(n.code, { children: `string` }), ` — Строковое представление значения.`] }), `
`, (0, l.jsx)(n.h2, { id: `примеры`, children: `Примеры` }), `
`, (0, l.jsx)(r, { language: `typescript`, code: `
import { toString } from '@dxtmisha/functional-basic'

toString('Привет')        // 'Привет'
toString(null)            // ''
toString(undefined)       // ''

` })] })
} function c(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e) } var l; e(() => { l = n(), o(), i() })(); export { c as default }
