import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/MetaManager - Quản lý thẻ meta`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-metamanager`,children:`Lớp MetaManager`}),`
`,(0,c.jsx)(n.p,{children:`Lớp generic cơ sở để đồng bộ hóa các thẻ meta HTML của tài liệu. Đọc các thẻ hiện có từ DOM khi khởi tạo và cung cấp giao diện thống nhất để đọc và ghi chúng.`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này là lớp cha của `,(0,c.jsx)(n.code,{children:`MetaOg`}),`, `,(0,c.jsx)(n.code,{children:`MetaTwitter`}),` và `,(0,c.jsx)(n.code,{children:`Meta`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này là `,(0,c.jsx)(n.strong,{children:`trừu tượng (abstract)`}),`. Bạn không thể tạo instance của nó trực tiếp qua `,(0,c.jsx)(n.code,{children:`new MetaManager()`}),`. Thay vào đó, nó phải được kế thừa.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số constructor (cho các lớp con):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`listMeta: T`}),` — danh sách tên các thẻ meta được quản lý bởi instance này.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isProperty?: boolean`}),` — xác định thuộc tính được sử dụng: `,(0,c.jsx)(n.code,{children:`true`}),` cho `,(0,c.jsx)(n.code,{children:`property`}),` (Open Graph), `,(0,c.jsx)(n.code,{children:`false`}),` for `,(0,c.jsx)(n.code,{children:`name`}),` (thẻ tiêu chuẩn). Mặc định: `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Ví dụ kế thừa
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListMeta(): T`}),` — trả về danh sách tên thẻ được quản lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(name): string`}),` — trả về nội dung thẻ theo tên. Trả về `,(0,c.jsx)(n.code,{children:`''`}),` nếu chưa đặt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItems(): MetaList<T>`}),` — trả về đối tượng với tất cả thẻ: `,(0,c.jsx)(n.code,{children:`{ [name]: content }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(name, content): this`}),` — đặt thẻ trong DOM (tạo nếu chưa có). Hỗ trợ chuỗi phương thức.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByList(metaList): this`}),` — đặt nhiều thẻ từ một đối tượng. Hỗ trợ chuỗi phương thức.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tạo-html`,children:`Tạo HTML`}),`
`,(0,c.jsx)(n.h3,{id:`html-string`,children:(0,c.jsx)(n.code,{children:`html(): string`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo chuỗi HTML cho tất cả thẻ có nội dung. Dùng cho SSR.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`manager.set('description', 'Mô tả của tôi').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="Mô tả của tôi"><meta name="keywords" content="vue, typescript">'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};