import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/computedEternity - Thuộc tính tính toán vĩnh cửu`}),`
`,(0,c.jsx)(n.h1,{id:`computedeternity`,children:(0,c.jsx)(n.code,{children:`computedEternity`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo một thuộc tính tính toán được tính toán theo yêu cầu và được lưu vào bộ nhớ đệm. Giá trị được cập nhật tự động khi các phụ thuộc thay đổi, nhưng chỉ khi nó đã được truy cập ít nhất một lần. Watcher vẫn hoạt động trong suốt vòng đời của ứng dụng. Điều này đặc biệt hữu ích cho các thuộc tính cần tồn tại trên toàn cầu sau lần truy cập đầu tiên.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Các tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: () => Promise<T> | T`}),` — Một hàm trả về giá trị cần tính toán (có thể là đồng bộ hoặc bất đồng bộ).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`CustomRef<T>`}),` — Một ref tùy chỉnh phản ứng chứa kết quả đã giải quyết của getter.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};