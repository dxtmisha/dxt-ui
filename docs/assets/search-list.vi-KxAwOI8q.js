import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/# Tìm kiếm danh sách`}),`
`,(0,c.jsx)(n.h1,{id:`tìm-kiếm-danh-sách`,children:`Tìm kiếm danh sách`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`SearchList`}),` là một công cụ mạnh mẽ để tổ chức tìm kiếm và lọc phản hồi trong các mảng đối tượng. Nó đóng gói logic so khớp (matcher), quản lý trạng thái truy vấn và định dạng kết quả, bao gồm cả làm nổi bật các kết quả khớp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { SearchList } from '@dxtmisha/functional-basic'

const data = [
  { id: 1, name: 'Apple', Category: 'Fruit' },
  { id: 2, name: 'Banana', Category: 'Fruit' }
]

// 1. Khởi tạo tìm kiếm trên các trường 'name' và 'Category'
const search = new SearchList(data, ['name', 'Category'])

// 2. Thiết lập giá trị tìm kiếm
search.setValue('app')

// 3. Lấy danh sách đã lọc
const results = search.to()
// [{ item: { id: 1, ... }, selected: true, ... }]
`})}),`
`,(0,c.jsx)(n.h2,{id:`quản-lý-dữ-liệu`,children:`Quản lý dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể thay đổi linh hoạt cả danh sách dữ liệu và tập hợp các cột tìm kiếm mà không cần khởi động lại logic tìm kiếm.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Cập nhật danh sách dữ liệu
search.setList(newData)

// Thay đổi các cột mục tiêu
search.setColumns(['Category'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`tinh-chỉnh`,children:`Tinh chỉnh`}),`
`,(0,c.jsxs)(n.p,{children:[`Hành vi tìm kiếm có thể được quản lý thông qua các tùy chọn, chẳng hạn như buộc hệ thống trả về tất cả các mục trong khi đánh dấu các kết quả khớp bằng cờ `,(0,c.jsx)(n.code,{children:`selected`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const search = new SearchList(data, ['name'], '', {
  returnEverything: true // Trả về toàn bộ danh sách, không chỉ các kết quả khớp
})

search.setValue('apple')
const list = search.to() 
// list sẽ chứa tất cả các mục, nhưng 'Apple' sẽ có selected: true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};