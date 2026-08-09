import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/ru/functional-basic/Functions/getRandomItem - Получение случайного элемента` }), `
`, (0, c.jsx)(n.h1, { id: `getrandomitem`, children: (0, c.jsx)(n.code, { children: `getRandomItem` }) }), `
`, (0, c.jsxs)(n.p, { children: [`Возвращает случайный элемент из массива или объекта. Если массив или объект пуст или значение отсутствует, возвращает `, (0, c.jsx)(n.code, { children: `undefined` }), `. Для примитивных значений возвращает само значение.`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Параметры:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `value?: T | T[] | Record<string, T>` }), ` — (Необязательно) входной массив, объект или значение.`] }), `
`] }), `
`, (0, c.jsxs)(n.p, { children: [(0, c.jsx)(n.strong, { children: `Возвращает:` }), `
`, (0, c.jsx)(n.code, { children: `T | undefined` }), ` — случайный элемент из массива или объекта, или `, (0, c.jsx)(n.code, { children: `undefined` }), `, если данных нет.`] }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-typescript`, children: `import { getRandomItem } from '@dxtmisha/functional-basic'

console.log(getRandomItem([1, 2, 3, 4, 5])) // Например: 3
console.log(getRandomItem({ a: 10, b: 20 })) // Например: 20
console.log(getRandomItem([])) // undefined
console.log(getRandomItem({})) // undefined
console.log(getRandomItem('text')) // 'text'
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
