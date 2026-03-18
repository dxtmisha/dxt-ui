import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"@dxtmisha/vi/functional-basic/Functions/executePromise - Thực thi Promise hoặc hàm"}),`
`,t.jsx(n.h1,{id:"executepromise",children:t.jsx(n.code,{children:"executePromise"})}),`
`,t.jsx(n.p,{children:"Một tiện ích thực thi an toàn một hàm và/hoặc chờ đợi kết quả bất đồng bộ (Promise) được hoàn thành."}),`
`,t.jsxs(n.p,{children:["Bản chất bên trong, nó sử dụng tiện ích ",t.jsx(n.code,{children:"executeFunction"}),". Nếu truyền vào một hàm trả về một Promise, ",t.jsx(n.code,{children:"executePromise"})," sẽ thực thi hàm đó và đợi ",t.jsx(n.code,{children:"Promise"})," hoàn thành. Nếu truyền vào một giá trị đồng bộ hoặc một hàm thông thường trả về giá trị đồng bộ, tiện ích sẽ trả về ngay kết quả đó."]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Tham số:"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"callback: (() => Promise<T>) | (() => T) | T"})," — Một giá trị, một ",t.jsx(n.code,{children:"Promise"}),", hoặc một hàm có thể trả về một ",t.jsx(n.code,{children:"Promise"})," hoặc một giá trị thông thường."]}),`
`]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"Trả về:"}),`
`,t.jsx(n.code,{children:"Promise<T>"})," — Một promise sẽ được hoàn thành với giá trị được cung cấp hoặc được tính toán."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-typescript",children:`import { executePromise } from '@dxtmisha/functional-basic'

// Với hàm async
const fetchData = async () => {
  return await fetch('/api/data').then(res => res.json())
}
const result1 = await executePromise(fetchData)

// Với hàm đồng bộ
const staticData = () => 'Dữ liệu đồng bộ'
const result2 = await executePromise(staticData)

// Với giá trị tĩnh
const result3 = await executePromise('Dữ liệu')
`})})]})}function d(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(c,{...e})}):c(e)}export{d as default};
