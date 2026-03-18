import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/MetaManager - Quản lý thẻ meta"}),`
`,n.jsx(t.h1,{id:"lớp-metamanager",children:"Lớp MetaManager"}),`
`,n.jsx(t.p,{children:"Lớp generic cơ sở để đồng bộ hóa các thẻ meta HTML của tài liệu. Đọc các thẻ hiện có từ DOM khi khởi tạo và cung cấp giao diện thống nhất để đọc và ghi chúng."}),`
`,n.jsxs(t.p,{children:["Lớp này là lớp cha của ",n.jsx(t.code,{children:"MetaOg"}),", ",n.jsx(t.code,{children:"MetaTwitter"})," và ",n.jsx(t.code,{children:"Meta"}),"."]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Lớp này là ",n.jsx(t.strong,{children:"trừu tượng (abstract)"}),". Bạn không thể tạo instance của nó trực tiếp qua ",n.jsx(t.code,{children:"new MetaManager()"}),". Thay vào đó, nó phải được kế thừa."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số constructor (cho các lớp con):"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"listMeta: T"})," — danh sách tên các thẻ meta được quản lý bởi instance này."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"isProperty?: boolean"})," — xác định thuộc tính được sử dụng: ",n.jsx(t.code,{children:"true"})," cho ",n.jsx(t.code,{children:"property"})," (Open Graph), ",n.jsx(t.code,{children:"false"})," for ",n.jsx(t.code,{children:"name"})," (thẻ tiêu chuẩn). Mặc định: ",n.jsx(t.code,{children:"false"}),"."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { MetaManager } from '@dxtmisha/functional-basic'

// Ví dụ kế thừa
class MyMeta extends MetaManager<string[]> {
  constructor() {
    super(['description', 'keywords'])
  }
}

const myMeta = new MyMeta()
`})}),`
`,n.jsx(t.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getListMeta(): T"})," — trả về danh sách tên thẻ được quản lý."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"get(name): string"})," — trả về nội dung thẻ theo tên. Trả về ",n.jsx(t.code,{children:"''"})," nếu chưa đặt."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getItems(): MetaList<T>"})," — trả về đối tượng với tất cả thẻ: ",n.jsx(t.code,{children:"{ [name]: content }"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"set(name, content): this"})," — đặt thẻ trong DOM (tạo nếu chưa có). Hỗ trợ chuỗi phương thức."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"setByList(metaList): this"})," — đặt nhiều thẻ từ một đối tượng. Hỗ trợ chuỗi phương thức."]}),`
`]}),`
`,n.jsx(t.h2,{id:"tạo-html",children:"Tạo HTML"}),`
`,n.jsx(t.h3,{id:"html-string",children:n.jsx(t.code,{children:"html(): string"})}),`
`,n.jsx(t.p,{children:"Tạo chuỗi HTML cho tất cả thẻ có nội dung. Dùng cho SSR."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-javascript",children:`manager.set('description', 'Mô tả của tôi').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="Mô tả của tôi"><meta name="keywords" content="vue, typescript">'
`})})]})}function x(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{x as default};
