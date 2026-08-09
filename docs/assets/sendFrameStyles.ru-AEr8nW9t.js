import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { c as r, f as i, s as a } from './blocks-CKlddtvc.js'; import { t as o } from './mdx-react-shim-B1U8VZv0.js'; function s(e) {
  let n = { code: `code`, h1: `h1`, h2: `h2`, h3: `h3`, li: `li`, p: `p`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(a, { title: `@dxtmisha/ru/figma/Functions/sendFrameStyles - Запрос стилей фреймов` }), `
`, (0, l.jsx)(n.h1, { id: `sendframestyles`, children: (0, l.jsx)(n.code, { children: `sendFrameStyles` }) }), `
`, (0, l.jsx)(n.p, { children: `Утилита для отправки запроса в плагин Figma на получение информации о стилях указанных фреймов.` }), `
`, (0, l.jsx)(n.p, { children: (0, l.jsx)(n.strong, { children: `Параметры:` }) }), `
`, (0, l.jsxs)(n.ul, { children: [`
`, (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.code, { children: `attributes: UiFigmaFrameStylesMessengerAttributes` }), ` — Атрибуты запроса, включая ID фреймов и дополнительные параметры.`] }), `
`] }), `
`, (0, l.jsxs)(n.p, { children: [(0, l.jsx)(n.strong, { children: `Возвращает:` }), `
`, (0, l.jsx)(n.code, { children: `void` })] }), `
`, (0, l.jsx)(n.h2, { id: `примеры`, children: `Примеры` }), `
`, (0, l.jsx)(r, { language: `typescript`, code: `
import { sendFrameStyles } from '@dxtmisha/figma'

// Запросить стили для конкретного фрейма
sendFrameStyles({
ids: '12:34'
})

// Запросить стили для нескольких фреймов, включая дочерние элементы
sendFrameStyles({
ids: ['12:34', '56:78'],
children: true
})
` }), `
`, (0, l.jsx)(n.h2, { id: `типы`, children: `Типы` }), `
`, (0, l.jsx)(n.h3, { id: `uifigmaframestylesmessengerattributes`, children: `UiFigmaFrameStylesMessengerAttributes` }), `
`, (0, l.jsxs)(n.ul, { children: [`
`, (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.code, { children: `ids: string | string[]` }), ` — Уникальный ID фрейма или массив ID.`] }), `
`, (0, l.jsxs)(n.li, { children: [(0, l.jsx)(n.code, { children: `children?: boolean` }), ` — (Опционально) Включать ли стили дочерних элементов.`] }), `
`] })] })
} function c(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(s, { ...e }) }) : s(e) } var l; e(() => { l = n(), o(), i() })(); export { c as default }
