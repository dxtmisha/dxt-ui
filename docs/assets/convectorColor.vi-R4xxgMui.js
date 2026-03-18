import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/Functions/convectorColor - Chuyển đổi màu sắc"}),`
`,n.jsx(c.h1,{id:"hàm-convectorcolor",children:"Hàm convectorColor"}),`
`,n.jsxs(c.p,{children:["Hàm ",n.jsx(c.code,{children:"convectorColor"})," là một phần của hệ thống convector để xử lý các token thuộc tính. Vai trò chính của nó là trích xuất siêu dữ liệu màu sắc cụ thể từ các phần mở rộng 'studio.tokens' và áp dụng chúng vào đối tượng thuộc tính. Hiện tại, hàm chuyên về xử lý các sửa đổi độ mờ (alpha)."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp Studio Tokens"})," — hoạt động với các phần mở rộng ",n.jsx(c.code,{children:"$extensions['studio.tokens']"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Sửa đổi độ mờ"})," — trích xuất giá trị ",n.jsx(c.code,{children:"alpha"})," từ các tham số sửa đổi và lưu trữ nó trong khóa hệ thống ",n.jsx(c.code,{children:"cssColorOpacity"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động hóa"})," — được gọi trong quá trình chuẩn hóa thuộc tính khi phát hiện siêu dữ liệu tương ứng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"tham-số",children:"Tham số"}),`
`,n.jsx(c.p,{children:"Hàm chấp nhận một đối số duy nhất:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"item: PropertyItemInput"})," — đối tượng dữ liệu đầu vào của thuộc tính, đối tượng này sẽ được thay đổi (mute) trong quá trình thực thi."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(c.h3,{id:"xử-lý-sửa-đổi-độ-mờ",children:"Xử lý sửa đổi độ mờ"}),`
`,n.jsxs(c.p,{children:["Nếu một token chứa thông tin sửa đổi màu sắc, ",n.jsx(c.code,{children:"convectorColor"})," sẽ trích xuất thông tin đó:"]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { convectorColor, PropertyKey } from '@dxtmisha/scripts'

const item = {
  value: '#ff0000',
  $extensions: {
    'studio.tokens': {
      modify: {
        type: 'alpha',
        value: '0.5'
      }
    }
  }
};

convectorColor(item);

console.log(item[PropertyKey.cssColorOpacity]); // '0.5'
`})}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"cơ-chế-xử-lý",children:"Cơ chế xử lý"}),`
`,n.jsxs(c.p,{children:["Quá trình xử lý dữ liệu trong ",n.jsx(c.code,{children:"convectorColor"})," bao gồm các bước sau:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tìm kiếm phần mở rộng"}),": Hàm tìm kiếm đường dẫn ",n.jsx(c.code,{children:"$extensions['studio.tokens'].modify"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác định kiểu"}),": Nếu kiểu sửa đổi được thiết lập là ",n.jsx(c.code,{children:"alpha"}),", hàm sẽ bắt đầu xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lưu trữ dữ liệu"}),": Giá trị độ mờ (",n.jsx(c.code,{children:"value"}),") được ghi vào thuộc tính của đối tượng ",n.jsx(c.code,{children:"item"})," bằng khóa ",n.jsx(c.code,{children:"_o"})," (được lưu trong ",n.jsx(c.code,{children:"PropertyKey.cssColorOpacity"}),"). Nếu không có giá trị nào được chỉ định, giá trị mặc định là ",n.jsx(c.code,{children:"'1'"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"phạm-vi-ứng-dụng",children:"Phạm vi ứng dụng"}),`
`,n.jsxs(c.p,{children:["Hàm này được dùng trong các lớp xử lý thuộc tính (ví dụ: ",n.jsx(c.code,{children:"PropertiesStandard"}),") để làm phong phú dữ liệu token với thông tin về độ mờ được lấy từ các công cụ thiết kế."]})]})}function m(t={}){const{wrapper:c}={...h(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(i,{...t})}):i(t)}export{m as default};
