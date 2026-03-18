import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/PropertiesWrap - Tối ưu hóa cấu trúc"}),`
`,n.jsx(t.h1,{id:"lớp-propertieswrap",children:"Lớp PropertiesWrap"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"PropertiesWrap"})," được thiết kế để tự động tối ưu hóa cấu trúc token trong hệ thống thiết kế. Nhiệm vụ chính của nó là tìm các giá trị thuộc tính lặp lại ở cùng một mức lồng nhau và đưa chúng lên mức cha. Điều này giúp giảm đáng kể kích thước của các tệp cấu hình JSON/JS và đơn giản hóa việc bảo trì chúng."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Loại bỏ trùng lặp"})," — tự động chuyển các thuộc tính chung của một nhóm thành phần lên cao hơn trong hệ phân cấp."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tối ưu hóa đệ quy"})," — xử lý cây thuộc tính ở bất kỳ độ sâu nào."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hợp nhất thông minh"})," — xác định các thuộc tính có số lần lặp lại tối đa để nén cấu trúc hiệu quả nhất."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tính minh bạch"})," — sử dụng khóa hệ thống ",n.jsx(t.code,{children:"wrap"})," để xác định các khối yêu cầu tối ưu hóa."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Lớp này cung cấp các phương thức tĩnh và không yêu cầu khởi tạo thông qua ",n.jsx(t.code,{children:"new"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { PropertiesWrap } from '@dxtmisha/scripts'

// Tối ưu hóa cấu trúc thuộc tính (làm thay đổi đối tượng gốc)
PropertiesWrap.to(myProperties)
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"to",children:n.jsx(t.code,{children:"to"})}),`
`,n.jsxs(t.p,{children:["Một phương thức tĩnh khởi động quá trình tối ưu hóa. Nó duyệt qua cây thuộc tính và khi gặp một khối có cờ ",n.jsx(t.code,{children:"_wrap"}),", nó sẽ phân tích nội dung của khối đó. Nếu tìm thấy các thuộc tính giống hệt nhau giữa các phần tử con trong khối, chúng sẽ được chuyển lên mức của khối hiện tại và các bản trùng lặp ở các phần tử con sẽ bị xóa bỏ."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"properties: PropertyList"})," — đối tượng chứa danh sách các thuộc tính cần được tối ưu hóa."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`const tokens = {
  button: {
    _wrap: true,
    value: {
      primary: { value: { padding: '10px', color: 'red' } },
      secondary: { value: { padding: '10px', color: 'blue' } }
    }
  }
};

PropertiesWrap.to(tokens);

/* Kết quả tối ưu hóa:
{
  button: {
    padding: '10px', // Được chuyển lên trên một mức
    value: {
      primary: { value: { color: 'red' } },
      secondary: { value: { color: 'blue' } }
    }
  }
}
*/
`})}),`
`,n.jsx(t.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(t.h3,{id:"thuật-toán-tối-ưu-hóa-cách-thức-hoạt-động",children:"Thuật toán tối ưu hóa (Cách thức hoạt động)"}),`
`,n.jsx(t.p,{children:"Quá trình nén cấu trúc diễn ra qua các giai đoạn sau:"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tìm kiếm cờ"}),": Hệ thống tìm kiếm trong đối tượng thuộc tính ",n.jsx(t.code,{children:"_wrap"})," (được định nghĩa trong ",n.jsx(t.code,{children:"PropertyKey.wrap"}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Thu thập thống kê (getSelectors)"}),": Nếu tìm thấy cờ, lớp sẽ thu thập thông tin về tất cả các thuộc tính của các phần tử con (tên và giá trị của chúng)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Phân tích lặp lại (getMaxRepeat)"}),": Nó xác định thuộc tính xuất hiện thường xuyên nhất với cùng một giá trị."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Chuyển dữ liệu"}),": Thuộc tính chung đã xác định được thêm vào khối hiện tại (khối cha)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Làm sạch (removeProperties)"}),": Thuộc tính này được xóa khỏi tất cả các phần tử con nơi nó có giá trị giống hệt nhau."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hoàn tất"}),": Cờ ",n.jsx(t.code,{children:"_wrap"})," được gỡ bỏ khỏi đối tượng."]}),`
`]}),`
`,n.jsx(t.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(t.h3,{id:"nén-cấu-trúc-cấu-hình-chủ-đề-theme",children:"Nén cấu trúc cấu hình chủ đề (Theme)"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { PropertiesWrap } from '@dxtmisha/scripts'

const designData = {
  typography: {
    _wrap: true,
    value: {
      h1: { value: { 'font-family': 'Inter', 'font-size': '32px' } },
      h2: { value: { 'font-family': 'Inter', 'font-size': '24px' } },
      p: { value: { 'font-family': 'Inter', 'font-size': '16px' } }
    }
  }
}

PropertiesWrap.to(designData)
// Kết quả: 'font-family': 'Inter' sẽ được chuyển vào gốc của đối tượng typography
`})})]})}function d(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{d as default};
