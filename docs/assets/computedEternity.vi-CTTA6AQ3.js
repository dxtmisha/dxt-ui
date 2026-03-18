import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional/Functions/computedEternity - Thuộc tính tính toán vĩnh cửu"}),`
`,n.jsx(t.h1,{id:"computedeternity",children:n.jsx(t.code,{children:"computedEternity"})}),`
`,n.jsx(t.p,{children:"Tạo một thuộc tính tính toán được tính toán theo yêu cầu và được lưu vào bộ nhớ đệm. Giá trị được cập nhật tự động khi các phụ thuộc thay đổi, nhưng chỉ khi nó đã được truy cập ít nhất một lần. Watcher vẫn hoạt động trong suốt vòng đời của ứng dụng. Điều này đặc biệt hữu ích cho các thuộc tính cần tồn tại trên toàn cầu sau lần truy cập đầu tiên."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Các tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getter: () => Promise<T> | T"})," — Một hàm trả về giá trị cần tính toán (có thể là đồng bộ hoặc bất đồng bộ)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"CustomRef<T>"})," — Một ref tùy chỉnh phản ứng chứa kết quả đã giải quyết của getter."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { computedEternity } from '@dxtmisha/functional'

// Getter bất đồng bộ - sẽ chỉ được gọi khi 'data.value' được truy cập lần đầu tiên
const data = computedEternity(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Getter đồng bộ
const i = ref(0)
const double = computedEternity(() => i.value * 2)

console.log(double.value) // 0
i.value = 5
// double.value sẽ là 10 trong lần truy cập tiếp theo
`})})]})}function d(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{d as default};
