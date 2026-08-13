import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/computedEternity - Thuộc tính tính toán vĩnh cửu`}),`
`,(0,c.jsx)(t.h1,{id:`computedeternity`,children:(0,c.jsx)(t.code,{children:`computedEternity`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo một thuộc tính tính toán được tính toán theo yêu cầu và được lưu vào bộ nhớ đệm. Giá trị được cập nhật tự động khi các phụ thuộc thay đổi, nhưng chỉ khi nó đã được truy cập ít nhất một lần. Watcher vẫn hoạt động trong suốt vòng đời của ứng dụng. Điều này đặc biệt hữu ích cho các thuộc tính cần tồn tại trên toàn cầu sau lần truy cập đầu tiên.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Các tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: () => Promise<T> | T`}),` — Một hàm trả về giá trị cần tính toán (có thể là đồng bộ hoặc bất đồng bộ).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initialState?: T`}),` — Giá trị ban đầu của kết quả.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`CustomRef<T>`}),` — Một ref tùy chỉnh phản ứng chứa kết quả đã giải quyết của getter.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Trạng thái ban đầu
const status = computedEternity(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'online'
}, 'offline')
// Status.value là 'offline' cho đến khi getter được giải quyết

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};