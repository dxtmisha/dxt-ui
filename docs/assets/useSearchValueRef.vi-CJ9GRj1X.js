import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional/Composables/useSearchValueRef - Trạng thái và logic tìm kiếm"}),`
`,n.jsx(e.h1,{id:"usesearchvalueref",children:n.jsx(e.code,{children:"useSearchValueRef"})}),`
`,n.jsxs(e.p,{children:["Composable cấp thấp để quản lý trạng thái truy vấn tìm kiếm, xử lý độ trễ (debounce) và tạo các biểu thức chính quy (RegExp) để khớp dữ liệu. Thường được sử dụng bên trong ",n.jsx(e.code,{children:"useSearchRef"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"item: SearchList<T, K>"})," — một phiên bản đã được cấu hình của ",n.jsx(e.code,{children:"SearchList"}),", dùng để quản lý các tùy chọn và giá trị."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value?: Ref<string>"})," — tham chiếu phản hồi (Ref) tìm kiếm từ bên ngoài. Nếu không được cung cấp, một Ref nội bộ sẽ được tạo."]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Trả về:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"search: Ref<string>"})," — giá trị tìm kiếm hiện tại (cập nhật ngay lập tức)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"searchDelay: Ref<string>"})," — giá trị tìm kiếm sau khi áp dụng độ trễ (nếu độ trễ được thiết lập)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"loading: Ref<boolean>"})," — ",n.jsx(e.code,{children:"true"})," trong thời gian chờ độ trễ ",n.jsx(e.code,{children:"delay"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"kiến-trúc-và-cách-thức-hoạt-động",children:"Kiến trúc và cách thức hoạt động"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useSearchValueRef"})," cô lập logic độ trễ (",n.jsx(e.code,{children:"debounce delay"}),`) khỏi quá trình lọc dữ liệu thực tế.
Khi người dùng nhập vào `,n.jsx(e.code,{children:"search.value"}),", composable sẽ:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Ngay lập tức đặt ",n.jsx(e.code,{children:"loading.value = true"}),"."]}),`
`,n.jsxs(e.li,{children:["Chờ trong khoảng thời gian ",n.jsx(e.code,{children:"delay"})," (tính bằng mili giây) được chỉ định."]}),`
`,n.jsx(e.li,{children:"Nếu người dùng tiếp tục nhập trong khoảng thời gian chờ, bộ hẹn giờ sẽ đặt lại."}),`
`,n.jsxs(e.li,{children:["Khi bộ đếm thời gian hoàn thành, nó sao chép ",n.jsx(e.code,{children:"search.value"})," vào ",n.jsx(e.code,{children:"searchDelay.value"})," và đặt ",n.jsx(e.code,{children:"loading.value = false"}),"."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Bằng cách sử dụng ",n.jsx(e.code,{children:"searchDelay.value"})," thay vì ",n.jsx(e.code,{children:"search.value"})," trong danh sách đã lọc, bạn đảm bảo rằng các thao tác dữ liệu phức tạp chỉ xảy ra sau khi người dùng ngừng nhập, cải thiện đáng kể hiệu suất trên các tập dữ liệu lớn."]}),`
`,n.jsx(e.h2,{id:"ví-dụ-sử-dụng",children:"Ví dụ sử dụng"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useSearchValueRef } from '@dxtmisha/functional'
import { SearchList } from '@dxtmisha/functional-basic'
import { ref } from 'vue'

const items = [{ id: 1, name: 'Apple' }]
const list = new SearchList(items, ['name'], undefined, { delay: 300 })
const { search, searchDelay, loading } = useSearchValueRef(list)

search.value = 'app'
// loading.value trở thành true
// Sau 300ms searchDelay.value sẽ là 'app' và loading.value trở về false
`})})]})}function u(c={}){const{wrapper:e}={...h(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(i,{...c})}):i(c)}export{u as default};
