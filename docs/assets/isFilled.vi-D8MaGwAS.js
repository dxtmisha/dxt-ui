import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function l(e){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/isFilled - Kiểm tra dữ liệu được điền"}),`
`,n.jsx(i.h1,{id:"isfilled",children:n.jsx(i.code,{children:"isFilled"})}),`
`,n.jsx(i.p,{children:'Là một tiện ích đa năng để xét duyệt xem giá trị truyền vào có đang được lấp "đầy" dữ liệu cụ thể hay không. Cơ chế hàm này vận dụng thông minh các cách xử lý qua nhiều kiểu dữ liệu từ chuỗi ký tự, chữ số, kiểu quyết định, danh sách mảng cho tới khái niệm đối tượng nhằm giám định độ "trống" hiệu quả hơn việc xác nhận giá trị đúng/sai mặc định rập khuôn của JavaScript.'}),`
`,n.jsxs(i.p,{children:["Khác với hàm xét nhánh điều kiện truthy (",n.jsx(i.code,{children:"if (value)"}),"), ",n.jsx(i.code,{children:"isFilled"})," sở hữu những ngoại lệ:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Quét các mảng (array) trả kết quả trống rỗng (",n.jsx(i.code,{children:"false"}),") nếu tham số ",n.jsx(i.code,{children:".length"})," của nó hiển thị bằng 0."]}),`
`,n.jsxs(i.li,{children:["Xét diện đối tượng (object) là trống (",n.jsx(i.code,{children:"false"}),") khi tất cả các định danh nội trú bị gán ngược bằng ",n.jsx(i.code,{children:"null"}),"."]}),`
`,n.jsxs(i.li,{children:["Tách bóc các thẻ định nghĩa ảo cấu tạo bằng lớp màng kiểu string ví dụ như ",n.jsx(i.code,{children:"'undefined'"}),", ",n.jsx(i.code,{children:"'null'"}),", ",n.jsx(i.code,{children:"'false'"}),", ",n.jsx(i.code,{children:"'[]'"})," và coi nó đều là trống."]}),`
`,n.jsxs(i.li,{children:["Kể cả chuỗi ",n.jsx(i.code,{children:"'0'"})," mặc định coi là rỗng hụt trừ khi có cấu hình thông báo ngoại lệ lọt qua nhờ tham số ",n.jsx(i.code,{children:"zeroTrue"}),"."]}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"value: T"})," — Mẫu giá trị bất kỳ được truyền đến để chèn thử nghiệm rà soát."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"zeroTrue: boolean"})," — (Tùy chọn) Nếu được áp bằng ",n.jsx(i.code,{children:"true"}),", giá trị chuỗi ",n.jsx(i.code,{children:"'0'"})," đó sẽ đột nhiên vượt cấp được hệ thống thâu nhận là có chữa dữ liệu (hoàn trả ",n.jsx(i.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"boolean"})," (",n.jsx(i.code,{children:"value is Exclude<T, EmptyValue>"}),") — Kết suất gởi trả về ",n.jsx(i.code,{children:"true"})," chừng nào mẫu số đang có mang dữ liệu thông tin, hoặc ",n.jsx(i.code,{children:"false"})," nếu trắng tinh. Cánh cổng hàm hoạt động song song chức năng khóa loại chặt kiểu TypeScript ",n.jsx(i.code,{children:"EmptyValue"}),"."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { isFilled } from '@dxtmisha/functional-basic'

console.log(isFilled('Một văn bản')) // true
console.log(isFilled(100)) // true
console.log(isFilled([1, 2, 3])) // true
console.log(isFilled({ data: 'ok' })) // true

// Tình huống giá trị cạn hụt
console.log(isFilled('')) // false
console.log(isFilled([])) // false
console.log(isFilled({ a: null })) // false
console.log(isFilled('null')) // false
console.log(isFilled('0')) // false

// Ứng dụng ngoại lệ zeroTrue
console.log(isFilled('0', true)) // true
`})})]})}function g(e={}){const{wrapper:i}={...c(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(l,{...e})}):l(e)}export{g as default};
