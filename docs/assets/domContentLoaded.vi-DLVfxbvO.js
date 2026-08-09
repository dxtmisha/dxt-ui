import { i as e } from './preload-helper-Cv19cBWa.js'; import { a as t, t as n } from './jsx-runtime-D1H6-shM.js'; import { f as r, s as i } from './blocks-CKlddtvc.js'; import { t as a } from './mdx-react-shim-B1U8VZv0.js'; function o(e) {
  let n = { code: `code`, h1: `h1`, li: `li`, p: `p`, pre: `pre`, strong: `strong`, ul: `ul`, ...t(), ...e.components }; return (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(i, { title: `@dxtmisha/vi/functional-basic/Functions/domContentLoaded - Thực thi callback khi DOMContentLoaded` }), `
`, (0, c.jsx)(n.h1, { id: `domcontentloaded`, children: (0, c.jsx)(n.code, { children: `domContentLoaded` }) }), `
`, (0, c.jsxs)(n.p, { children: [`Thực thi một hàm callback khi sự kiện `, (0, c.jsx)(n.code, { children: `DOMContentLoaded` }), ` được kích hoạt.`] }), `
`, (0, c.jsxs)(n.p, { children: [`Nếu DOM đã được tải xong (`, (0, c.jsx)(n.code, { children: `document.readyState` }), ` là `, (0, c.jsx)(n.code, { children: `'interactive'` }), ` hoặc `, (0, c.jsx)(n.code, { children: `'complete'` }), `) hoặc khi thực thi trong môi trường không có DOM (như SSR), hàm callback sẽ được thực thi ngay lập tức.`] }), `
`, (0, c.jsx)(n.p, { children: (0, c.jsx)(n.strong, { children: `Tham số:` }) }), `
`, (0, c.jsxs)(n.ul, { children: [`
`, (0, c.jsxs)(n.li, { children: [(0, c.jsx)(n.code, { children: `callback: () => T | Promise<T>` }), ` — Hàm callback được thực thi khi DOM được tải xong.`] }), `
`] }), `
`, (0, c.jsxs)(n.p, { children: [(0, c.jsx)(n.strong, { children: `Trả về:` }), `
`, (0, c.jsx)(n.code, { children: `Promise<T>` }), ` — Một promise giải quyết với kết quả trả về của hàm callback.`] }), `
`, (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: `language-typescript`, children: `import { domContentLoaded } from '@dxtmisha/functional-basic'

// 1. Sử dụng cơ bản với hàm đồng bộ
domContentLoaded(() => {
  console.log('DOM đã sẵn sàng!')
  document.getElementById('app')?.classList.add('ready')
})

// 2. Chờ kết quả của hàm bất đồng bộ
const data = await domContentLoaded(async () => {
  const element = document.querySelector('#content')
  return element?.textContent
})
` }) })] })
} function s(e = {}) { let { wrapper: n } = { ...t(), ...e.components }; return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(o, { ...e }) }) : o(e) } var c; e(() => { c = n(), a(), r() })(); export { s as default }
