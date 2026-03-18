import{j as h}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return h.jsxs(h.Fragment,{children:[h.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/SearchListMatcher - Logic So khớp Tìm kiếm"}),`
`,h.jsx(n.h1,{id:"lớp-searchlistmatcher",children:"Lớp SearchListMatcher"}),`
`,h.jsxs(n.p,{children:["Lớp ",h.jsx(n.code,{children:"SearchListMatcher"})," chịu trách nhiệm về logic so khớp cốt lõi. Nó chuyển đổi chuỗi tìm kiếm hiện tại thành một biểu thức chính quy (regular expression) và cung cấp các phương thức để kiểm tra xem các giá trị dữ liệu khác nhau có khớp với biểu thức đó hay không."]}),`
`,h.jsx(n.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,h.jsxs(n.ul,{children:[`
`,h.jsxs(n.li,{children:[h.jsx(n.strong,{children:"Tạo RegExp động"})," — tự động xây dựng hoặc thiết lập lại trình so khớp khi cụm từ tìm kiếm hoặc tùy chọn thay đổi."]}),`
`,h.jsxs(n.li,{children:[h.jsx(n.strong,{children:"Chế độ tìm kiếm"})," — hỗ trợ cả chế độ khớp một phần tiêu chuẩn và khớp chính xác dựa trên ",h.jsx(n.code,{children:"SearchListOptions"}),"."]}),`
`,h.jsxs(n.li,{children:[h.jsx(n.strong,{children:"Kiểm tra hiệu quả"})," — sử dụng kiểm tra biểu thức chính quy hiệu suất cao để xác định các kết quả khớp trong dữ liệu."]}),`
`]}),`
`,h.jsx(n.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,h.jsxs(n.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",h.jsx(n.code,{children:"SearchListMatcher(item, options)"}),"."]}),`
`,h.jsx(n.p,{children:h.jsx(n.strong,{children:"Tham số:"})}),`
`,h.jsxs(n.ul,{children:[`
`,h.jsxs(n.li,{children:[h.jsx(n.code,{children:"item: SearchListItem"})," — trạng thái thành phần tìm kiếm chứa giá trị."]}),`
`,h.jsxs(n.li,{children:[h.jsx(n.code,{children:"options: SearchListOptions"})," — các tùy chọn cấu hình (ví dụ: ",h.jsx(n.code,{children:"findExactMatch"}),")."]}),`
`]}),`
`,h.jsx(n.pre,{children:h.jsx(n.code,{className:"language-typescript",children:`import { SearchListMatcher, SearchListItem, SearchListOptions } from '@dxtmisha/functional-basic'

const options = new SearchListOptions({ findExactMatch: false })
const item = new SearchListItem('admin', options)
const matcher = new SearchListMatcher(item, options)

console.log(matcher.isSelection('System Administrator')) // true
`})}),`
`,h.jsx(n.h2,{id:"phương-thức",children:"Phương thức"}),`
`,h.jsx(n.h3,{id:"thông-tin",children:"Thông tin"}),`
`,h.jsxs(n.ul,{children:[`
`,h.jsxs(n.li,{children:[h.jsx(n.code,{children:"is(): boolean"})," — Kiểm tra xem trình so khớp biểu thức chính quy nội bộ đã được khởi tạo hay chưa."]}),`
`,h.jsxs(n.li,{children:[h.jsx(n.code,{children:"isSelection(value: string): boolean"})," — Kiểm tra xem giá trị đã cho có khớp với biểu thức tìm kiếm hiện tại hay không."]}),`
`,h.jsxs(n.li,{children:[h.jsx(n.code,{children:"get(): RegExp | undefined"})," — Trả về thực thể biểu thức chính quy hiện tại."]}),`
`]}),`
`,h.jsx(n.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,h.jsxs(n.ul,{children:[`
`,h.jsxs(n.li,{children:[h.jsx(n.code,{children:"update(): void"})," — Khởi tạo lại trình so khớp dựa trên trạng thái hiện tại của thành phần tìm kiếm và các tùy chọn."]}),`
`]}),`
`,h.jsx(n.h2,{id:"chế-độ-tìm-kiếm",children:"Chế độ tìm kiếm"}),`
`,h.jsxs(n.p,{children:["Lớp hỗ trợ hai chế độ so khớp chính, được điều khiển bởi tùy chọn ",h.jsx(n.code,{children:"findExactMatch"})," trong ",h.jsx(n.code,{children:"SearchListOptions"}),":"]}),`
`,h.jsx(n.h3,{id:"1-chứa-tất-cả-các-từ-mặc-định",children:"1. Chứa tất cả các từ (Mặc định)"}),`
`,h.jsxs(n.p,{children:["Когда ",h.jsx(n.code,{children:"findExactMatch"})," là ",h.jsx(n.code,{children:"false"}),", chuỗi tìm kiếm được chia thành các từ riêng lẻ. Kết quả khớp chỉ được tìm thấy nếu ",h.jsx(n.strong,{children:"mọi từ"})," đều có mặt trong chuỗi đích, bất kể thứ tự của chúng."]}),`
`,h.jsxs(n.ul,{children:[`
`,h.jsxs(n.li,{children:[h.jsx(n.strong,{children:"Ví dụ"}),": Tìm kiếm ",h.jsx(n.code,{children:'"chuột chơi game"'})," sẽ khớp với ",h.jsx(n.code,{children:'"Chuột dành cho chơi game"'})," và ",h.jsx(n.code,{children:'"Chơi game Pro Chuột"'}),"."]}),`
`]}),`
`,h.jsx(n.h3,{id:"2-cụm-từ-chính-xác",children:"2. Cụm từ chính xác"}),`
`,h.jsxs(n.p,{children:["Когда ",h.jsx(n.code,{children:"findExactMatch"})," là ",h.jsx(n.code,{children:"true"}),", chuỗi tìm kiếm được xử lý như một cụm từ liên tục duy nhất. Kết quả khớp chỉ được tìm thấy nếu ",h.jsx(n.strong,{children:"chính xác trình tự"})," các ký tự (không phân biệt hoa thường) tồn tại trong chuỗi đích."]}),`
`,h.jsxs(n.ul,{children:[`
`,h.jsxs(n.li,{children:[h.jsx(n.strong,{children:"Ví dụ"}),": Tìm kiếm ",h.jsx(n.code,{children:'"chuột chơi game"'})," sẽ khớp với ",h.jsx(n.code,{children:'"Chuột chơi game cực ngầu"'}),", nhưng sẽ ",h.jsx(n.strong,{children:"không"})," khớp với ",h.jsx(n.code,{children:'"Chuột dành cho chơi game"'}),"."]}),`
`]}),`
`,h.jsx(n.h2,{id:"các-kiểu-dữ-liệu-types",children:"Các kiểu dữ liệu (Types)"}),`
`,h.jsxs(n.p,{children:["Lớp này chủ yếu sử dụng kiểu gốc ",h.jsx(n.code,{children:"RegExp"})," và logic nội bộ được quản lý bởi ",h.jsx(n.code,{children:"SearchListOptions"}),"."]})]})}function a(c={}){const{wrapper:n}={...t(),...c.components};return n?h.jsx(n,{...c,children:h.jsx(i,{...c})}):i(c)}export{a as default};
