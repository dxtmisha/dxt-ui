import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional/Classes/DesignChanged - Tiện ích theo dõi thay đổi"}),`
`,n.jsx(h.h1,{id:"lớp-designchanged",children:"Lớp DesignChanged"}),`
`,n.jsx(h.p,{children:"Một lớp tiện ích được thiết kế để theo dõi các thay đổi trong thuộc tính đối tượng. Nó duy trì một bộ nhớ đệm (cache) cho các giá trị trước đó và cung cấp các phương thức để phát hiện sự khác biệt giữa trạng thái hiện tại và trạng thái cập nhật lần cuối."}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"So sánh hiệu quả"})," — so sánh các giá trị thuộc tính hiện tại với bộ nhớ đệm cục bộ để xác định các thay đổi."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Theo dõi có chọn lọc"})," — hỗ trợ theo dõi một tập hợp con cụ thể của các thuộc tính thông qua tham số ",n.jsx(h.code,{children:"watch"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Cập nhật hàng loạt"})," — cung cấp cách để đồng bộ hóa toàn bộ bộ nhớ đệm với trạng thái hiện tại của các thuộc tính."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Tạo một thực thể ",n.jsx(h.code,{children:"DesignChanged"})," mới. Lớp này được thiết kế để theo dõi các thay đổi trong thuộc tính đối tượng bằng cách so sánh chúng với một bộ nhớ đệm nội bộ (trạng thái tại thời điểm cập nhật lần cuối)."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"props: T"})," — đối tượng dữ liệu có các thuộc tính cần được theo dõi."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"watch: string[] = Object.keys(props)"})," — một mảng gồm các tên thuộc tính (khóa) để theo dõi. Theo mặc định, tất cả các thuộc tính của đối tượng ",n.jsx(h.code,{children:"props"})," đều được theo dõi."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { DesignChanged } from '@dxtmisha/functional'

// 1. Theo dõi tất cả các thuộc tính theo mặc định
const props = { title: 'Xin chào', count: 1 }
const tracker = new DesignChanged(props)

// 2. Theo dõi các thuộc tính cụ thể (tập hợp con)
const trackerPartial = new DesignChanged(props, ['title'])

console.log(tracker.isChanged()) // false
`})}),`
`,n.jsx(h.h2,{id:"phát-hiện-thay-đổi",children:"Phát hiện thay đổi"}),`
`,n.jsx(h.h3,{id:"is",children:n.jsx(h.code,{children:"is"})}),`
`,n.jsx(h.p,{children:"Kiểm tra xem các thuộc tính cụ thể có bị thay đổi kể từ lần cập nhật cuối cùng hay không."}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"name: string | string[]"})," — tên của một thuộc tính hoặc một mảng các tên thuộc tính cần kiểm tra."]}),`
`]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Trả về:"})," ",n.jsx(h.code,{children:"boolean"})," — ",n.jsx(h.code,{children:"true"})," nếu bất kỳ thuộc tính nào được chỉ định đã thay đổi."]}),`
`,n.jsx(h.h3,{id:"ischanged",children:n.jsx(h.code,{children:"isChanged"})}),`
`,n.jsxs(h.p,{children:["Kiểm tra xem bất kỳ thuộc tính nào đang được theo dõi (được định nghĩa trong danh sách ",n.jsx(h.code,{children:"watch"}),") có thay đổi hay không."]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Trả về:"})," ",n.jsx(h.code,{children:"boolean"})," — ",n.jsx(h.code,{children:"true"})," nếu ít nhất một thuộc tính đang theo dõi có giá trị khác."]}),`
`,n.jsx(h.h2,{id:"đồng-bộ-hóa-dữ-liệu",children:"Đồng bộ hóa dữ liệu"}),`
`,n.jsx(h.h3,{id:"update",children:n.jsx(h.code,{children:"update"})}),`
`,n.jsxs(h.p,{children:["Đồng bộ hóa bộ nhớ đệm nội bộ với giá trị hiện tại của tất cả các thuộc tính đang được theo dõi. Sau khi gọi phương thức này, ",n.jsx(h.code,{children:"isChanged()"})," sẽ trả về ",n.jsx(h.code,{children:"false"})," cho đến khi các thuộc tính được sửa đổi lại."]}),`
`,n.jsxs(h.p,{children:[n.jsx(h.strong,{children:"Trả về:"})," ",n.jsx(h.code,{children:"void"})]})]})}function g(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{g as default};
