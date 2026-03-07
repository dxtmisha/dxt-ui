import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/MetaManager - Quản lý thẻ meta"}),`
`,n.jsx(e.h1,{id:"lớp-metamanager",children:"Lớp MetaManager"}),`
`,n.jsx(e.p,{children:"Lớp generic cơ sở để đồng bộ hóa các thẻ meta HTML của tài liệu. Đọc các thẻ hiện có từ DOM khi khởi tạo và cung cấp giao diện thống nhất để đọc và ghi chúng."}),`
`,n.jsxs(e.p,{children:["Lớp này là lớp cha của ",n.jsx(e.code,{children:"MetaOg"}),", ",n.jsx(e.code,{children:"MetaTwitter"})," và ",n.jsx(e.code,{children:"Meta"}),"."]}),`
`,n.jsx(e.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`new MetaManager(listMeta, isProperty?)
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"listMeta: readonly string[]"})," — danh sách tên thẻ meta được quản lý bởi instance này."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isProperty?: boolean"})," — nếu ",n.jsx(e.code,{children:"true"}),", dùng thuộc tính ",n.jsx(e.code,{children:"property"})," thay vì ",n.jsx(e.code,{children:"name"})," (cần thiết cho Open Graph). Mặc định: ",n.jsx(e.code,{children:"false"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getListMeta(): T"})," — trả về danh sách tên thẻ được quản lý."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"get(name): string"})," — trả về nội dung thẻ theo tên. Trả về ",n.jsx(e.code,{children:"''"})," nếu chưa đặt."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getItems(): MetaList<T>"})," — trả về đối tượng với tất cả thẻ: ",n.jsx(e.code,{children:"{ [name]: content }"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"set(name, content): this"})," — đặt thẻ trong DOM (tạo nếu chưa có). Hỗ trợ chuỗi phương thức."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setByList(metaList): this"})," — đặt nhiều thẻ từ một đối tượng. Hỗ trợ chuỗi phương thức."]}),`
`]}),`
`,n.jsx(e.h2,{id:"tạo-html",children:"Tạo HTML"}),`
`,n.jsx(e.h3,{id:"html-string",children:n.jsx(e.code,{children:"html(): string"})}),`
`,n.jsx(e.p,{children:"Tạo chuỗi HTML cho tất cả thẻ có nội dung. Dùng cho SSR."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`manager.set('description', 'Mô tả của tôi').set('keywords', 'vue, typescript')

manager.html()
// '<meta name="description" content="Mô tả của tôi"><meta name="keywords" content="vue, typescript">'
`})})]})}function x(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{x as default};
