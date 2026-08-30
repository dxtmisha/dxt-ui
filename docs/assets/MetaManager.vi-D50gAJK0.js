import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/MetaManager - Quản lý thẻ meta`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-metamanager`,children:`Lớp MetaManager`}),`
`,(0,c.jsx)(t.p,{children:`Lớp generic cơ sở để đồng bộ hóa các thẻ meta HTML của tài liệu. Đọc các thẻ hiện có từ DOM khi khởi tạo và cung cấp giao diện thống nhất để đọc và ghi chúng.`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này là lớp cha của `,(0,c.jsx)(t.code,{children:`MetaOg`}),`, `,(0,c.jsx)(t.code,{children:`MetaTwitter`}),` và `,(0,c.jsx)(t.code,{children:`Meta`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này là `,(0,c.jsx)(t.strong,{children:`trừu tượng (abstract)`}),`. Bạn không thể tạo instance của nó trực tiếp qua `,(0,c.jsx)(t.code,{children:`new MetaManager()`}),`. Thay vào đó, nó phải được kế thừa.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số constructor (cho các lớp con):`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`listMeta: T`}),` — danh sách tên các thẻ meta được quản lý bởi instance này.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isProperty?: boolean`}),` — xác định thuộc tính được sử dụng: `,(0,c.jsx)(t.code,{children:`true`}),` cho `,(0,c.jsx)(t.code,{children:`property`}),` (Open Graph), `,(0,c.jsx)(t.code,{children:`false`}),` for `,(0,c.jsx)(t.code,{children:`name`}),` (thẻ tiêu chuẩn). Mặc định: `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Ví dụ kế thừa
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getListMeta(): T`}),` — trả về danh sách tên thẻ được quản lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(name): string`}),` — trả về nội dung thẻ theo tên. Trả về `,(0,c.jsx)(t.code,{children:`''`}),` nếu chưa đặt.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItems(): MetaList<T>`}),` — trả về đối tượng với tất cả thẻ: `,(0,c.jsx)(t.code,{children:`{ [name]: content }`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(name, content): this`}),` — đặt thẻ trong DOM (tạo nếu chưa có). Hỗ trợ chuỗi phương thức.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setByList(metaList): this`}),` — đặt nhiều thẻ từ một đối tượng. Hỗ trợ chuỗi phương thức.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`tạo-html`,children:`Tạo HTML`}),`
`,(0,c.jsx)(t.h3,{id:`html-string`,children:(0,c.jsx)(t.code,{children:`html(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo chuỗi HTML cho tất cả thẻ có nội dung. Dùng cho SSR.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`manager.set('description', 'Mô tả của tôi').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="Mô tả của tôi"><meta name="keywords" content="vue, typescript">'
`})}),`
`,(0,c.jsx)(t.h3,{id:`htmltitletitle-string-string`,children:(0,c.jsx)(t.code,{children:`htmlTitle(title: string): string`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuyển đổi chuỗi tiêu đề thành thẻ HTML `,(0,c.jsx)(t.code,{children:`<title>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`manager.htmlTitle('Tiêu đề trang')
// '<title>Tiêu đề trang</title>'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};