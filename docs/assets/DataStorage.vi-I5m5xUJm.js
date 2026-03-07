import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/DataStorage - Trình Bao bọc Local và Session Storage"}),`
`,n.jsx(c.h1,{id:"lớp-datastorage",children:"Lớp DataStorage"}),`
`,n.jsxs(c.p,{children:["Một lớp linh hoạt để tương tác với ",n.jsx(c.code,{children:"localStorage"})," và ",n.jsx(c.code,{children:"sessionStorage"})," của trình duyệt. Nó bao gồm các tiền tố được tích hợp sẵn, thời gian hết hạn bộ đệm (cache), lưu vào bộ nhớ đệm (memory caching) cho các bản sao hoạt động và chuyển đổi JSON tự động."]}),`
`,n.jsx(c.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi Tự động"})," — tự động xử lý phân tích và chuyển đổi chuỗi JSON cho các cấu hình và đối tượng được lưu trữ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bộ nhớ đệm Dựa trên Thời gian"})," — cho phép lưu các đối tượng cùng với mốc thời gian và tôn trọng các ràng buộc về tuổi đời (age) của dữ liệu trong quá trình truy xuất."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý Tiền tố"})," — hỗ trợ cả tiền tố toàn cục và riêng biệt để cách ly cũng như gom nhóm các khóa trong ",n.jsx(c.code,{children:"localStorage"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tối ưu Bô nhớ"})," — tạo ra các singleton cho những khóa giống nhau nhằm tránh các thao tác đọc đĩa bị lặp lại."]}),`
`]}),`
`,n.jsx(c.h2,{id:"cách-sử-dụng-cơ-bản",children:"Cách sử dụng Cơ bản"}),`
`,n.jsx(c.h2,{id:"cấu-hình-toàn-cục",children:"Cấu hình toàn cục"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"setPrefix(newPrefix: string): void"})," (static) — Thay đổi tên tiền tố toàn cục áp dụng cho những instance mới đang định dùng môi trường ",n.jsx(c.code,{children:"localStorage"}),". Giá trị tiền tố mặc định là ",n.jsx(c.code,{children:"ui-storage"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"quản-lý-dữ-liệu",children:"Quản lý dữ liệu"}),`
`,n.jsx(c.h3,{id:"get",children:n.jsx(c.code,{children:"get"})}),`
`,n.jsx(c.p,{children:"Truy xuất cấu hình đã phân tích hiện tại được lưu lại từ trước."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"defaultValue?: T | (() => T)"})," — giá trị dự phòng được trả về nếu bên trong bộ lưu trữ trống rỗng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"cache?: number"})," — độ tuổi tối đa cho phép (tính bằng giây). Nếu dữ liệu đã cũ hơn mức này, nó sẽ cư xử như thể không có gì được lưu trữ."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"T | undefined"})," — giá trị được lưu trữ hoặc ",n.jsx(c.code,{children:"undefined"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`// Lấy dữ liệu, trả về object rỗng nếu không tìm thấy
const currentSettings = settings.get({})

// Chỉ lấy dữ liệu nếu nó được lưu lại trong vòng 60 giây gần nhất
const cachedItem = settings.get(undefined, 60)
`})}),`
`,n.jsx(c.h3,{id:"set",children:n.jsx(c.code,{children:"set"})}),`
`,n.jsx(c.p,{children:"Thiết lập hoặc cập nhật một giá trị trong cơ chế lưu trữ."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value?: T | (() => T)"})," — giá trị muốn lưu. Việc truyền ",n.jsx(c.code,{children:"undefined"})," sẽ loại bỏ mục đó khỏi kho lưu trữ."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"T | undefined"})," — giá trị được lưu trữ."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`settings.set({ theme: 'dark', notifications: true })
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức-bổ-sung",children:"Các phương thức bổ sung"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"remove(): this"})," — Xóa bỏ chính xác khóa lưu trữ tương ứng từ phần môi trường phần mềm ",n.jsx(c.code,{children:"localStorage"})," hoặc ",n.jsx(c.code,{children:"sessionStorage"}),", đồng thời lập tức dọn sạch dữ liệu khối nhớ hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"update(): this"})," — Buộc bộ đệm đối tượng trong bộ nhớ tự đồng bộ lại thật khít so với dữ liệu rỗng hiện hành bên trong các hàm Storage API vật lý."]}),`
`]})]})}function a(t={}){const{wrapper:c}={...i(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(h,{...t})}):h(t)}export{a as default};
