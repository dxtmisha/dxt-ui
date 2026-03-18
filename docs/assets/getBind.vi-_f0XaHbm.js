import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional/Functions/getBind - Tạo liên kết"}),`
`,n.jsx(t.h1,{id:"getbind",children:n.jsx(t.code,{children:"getBind"})}),`
`,n.jsx(t.p,{children:"Hàm tiện ích cơ bản để tạo đối tượng các thuộc tính cho một thành phần phụ dựa trên các giá trị bình thường (không phản ứng). Nó xử lý các loại đầu vào khác nhau và đảm bảo cấu trúc nhất quán cho việc liên kết thuộc tính."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: T | R | undefined | null"})," — Giá trị đầu vào cần liên kết. Có thể là kiểu nguyên thủy hoặc đối tượng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"nameExtra: ItemList | string = {}"})," — Các thuộc tính bổ sung để hợp nhất hoặc tên của thuộc tính sẽ sử dụng nếu ",n.jsx(t.code,{children:"value"})," không phải là một đối tượng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"name: string = 'value'"})," — Tên thuộc tính mặc định (mặc định là ",n.jsx(t.code,{children:"'value'"}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"except: boolean = false"})," — Nếu true, sẽ bỏ qua việc kiểm tra yêu cầu khóa chính trong đối tượng ",n.jsx(t.code,{children:"value"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ConstrBind<R>"})," — Một đối tượng chứa các thuộc tính sẵn sàng để liên kết."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getBind } from '@dxtmisha/functional'

// Trường hợp 1: Giá trị đơn giản
const bind1 = getBind('Xin chào', {}, 'label') 
// Kết quả: { label: 'Xin chào' }

// Trường hợp 2: Đối tượng với các thuộc tính bổ sung
const bind2 = getBind({ id: 1 }, { class: 'active' }, 'data')
// Kết quả: { id: 1, class: 'active' }
`})})]})}function a(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(i,{...c})}):i(c)}export{a as default};
