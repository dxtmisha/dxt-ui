import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/ru/functional-basic/Functions/sortList - Мультиколоночная сортировка массива` }), `
`, (0, c.jsx)(n.h1, { id: `sortlist`, children: (0, c.jsx)(n.code, { children: `sortList` }) }), `
`, (0, c.jsxs)(n.p, { children: [`Утилита для сортировки массива объектов или элементов по одному или нескольким путям свойств колонок, направлениям (`, (0, c.jsx)(n.code, { children: `'asc'` }), ` или `, (0, c.jsx)(n.code, { children: `'desc'` }), `) или пользовательской функции сравнения. Выполняет локализованное сравнение строк с помощью `, (0, c.jsx)(n.code, { children: `Intl.Collator` }), ` с параметрами числовой сортировки и нечувствительности к регистру, а также помещает значения `, (0, c.jsx)(n.code, { children: `null` }), ` и `, (0, c.jsx)(n.code, { children: `undefined` }), ` в конец отсортированного списка.`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Параметры:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `list: T[]` }), ` — Входной массив элементов для сортировки.`] }), `
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `sortColumns: SortColumnItem[]` }), ` — Массив спецификаций сортировки колонок `, (0, c.jsx)(n.code, { children: `{ column: string, dir: SortDir }` }), `.`] }), `
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `customSort?: SortFunction<T>` }), ` — Необязательная пользовательская функция сравнения.`] }), `
`] }), `
`, (0, c.jsxs)(n.p, { children: [(0, c.jsx)(n.strong, { children: `Возвращает:` }), `
`, (0, c.jsx)(n.code, { children: `T[]` }), ` — Новый отсортированный массив элементов (или исходный массив, если `, (0, c.jsx)(n.code, { children: `sortColumns` }), ` пуст или длина списка меньше 2).`] }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-typescript`, children: `import { sortList } from '@dxtmisha/functional-basic'

const users = [
  { id: 3, category: 'A', name: 'Чарли', age: 30 },
  { id: 1, category: 'B', name: 'Алиса', age: 25 },
  { id: 4, category: 'A', name: 'Алиса', age: 20 },
  { id: 2, category: 'B', name: 'Боб', age: 35 }
]

// Сортировка по категории по возрастанию, затем по возрасту по убыванию
const sorted = sortList(users, [
  { column: 'category', dir: 'asc' },
  { column: 'age', dir: 'desc' }
])

console.log(sorted.map(user => user.id)) // [3, 4, 2, 1]
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
