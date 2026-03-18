import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional/Functions/computedByLanguage - Thuộc tính computed theo ngôn ngữ"}),`
`,n.jsx(t.h1,{id:"computedbylanguage",children:n.jsx(t.code,{children:"computedByLanguage"})}),`
`,n.jsx(t.p,{children:"Tạo một thuộc tính computed phản ứng tự động tính toán lại khi ngôn ngữ hiện tại hoặc các phụ thuộc bên trong getter thay đổi."}),`
`,n.jsx(t.h3,{id:"cách-thức-hoạt-động",children:"Cách thức hoạt động"}),`
`,n.jsx(t.p,{children:"Hàm thực hiện các kiểm tra theo thứ tự sau:"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Kiểm tra ngôn ngữ"}),": Xác minh rằng ngôn ngữ đã được thiết lập thông qua ",n.jsx(t.code,{children:"GeoRef.get().value"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Kiểm tra điều kiện"}),": Nếu tham số ",n.jsx(t.code,{children:"conditions"})," được cung cấp, nó sẽ được gọi để kiểm tra bổ sung (ví dụ: kiểm tra quyền truy cập hoặc trạng thái tải dữ liệu)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Thực thi Getter chính"}),": Nếu cả hai kiểm tra trên đều vượt qua, ",n.jsx(t.code,{children:"getter"})," sẽ được gọi. Nếu nó trả về một giá trị (không phải ",n.jsx(t.code,{children:"undefined"}),"), giá trị đó sẽ trở thành kết quả."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tùy chọn dự phòng"}),": Nếu bất kỳ kiểm tra nào thất bại hoặc ",n.jsx(t.code,{children:"getter"})," trả về ",n.jsx(t.code,{children:"undefined"}),", ",n.jsx(t.code,{children:"getterNone"})," sẽ được thực thi/trả về."]}),`
`]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getter: ComputedGetter<R>"})," — Logic chính để lấy giá trị. Chỉ được gọi nếu ngôn ngữ đã thiết lập và các điều kiện được thỏa mãn."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"getterNone: R | (() => R)"}),' — Giá trị dự phòng hoặc hàm trả về giá trị đó. Đóng vai trò là "Phương án B". Mặc định: ',n.jsx(t.code,{children:"() => undefined"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"conditions?: () => boolean"}),' — Một hàm điều kiện. Đóng vai trò là "người gác cổng" (gatekeeper): nếu nó trả về ',n.jsx(t.code,{children:"false"}),", ",n.jsx(t.code,{children:"getter"})," chính thậm chí sẽ không được kích hoạt."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"debugOptions?: DebuggerOptions"})," — Tùy chọn dùng để gỡ lỗi các phép tính phản ứng, được hỗ trợ bởi Vue.js."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ComputedRef<R>"})," — Thuộc tính computed phản ứng."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { computedByLanguage } from '@dxtmisha/functional'
import { ref } from 'vue'

// Sử dụng cơ bản
const label = computedByLanguage(() => translateKey('hello'))

// Với giá trị dự phòng
const title = computedByLanguage(
  () => translateKey('page.title'),
  () => 'Untitled'
)

// Với điều kiện bổ sung
const isReady = ref(true)
const content = computedByLanguage(
  () => translateKey('content'),
  () => 'Loading...',
  () => isReady.value
)
`})})]})}function u(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{u as default};
