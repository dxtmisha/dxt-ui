import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/PropertiesSeparator - Phân tách thuộc tính"}),`
`,n.jsx(c.h1,{id:"lớp-propertiesseparator",children:"Lớp PropertiesSeparator"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PropertiesSeparator"})," được thiết kế để tự động chuyển đổi cấu trúc phẳng của các token có tên phức hợp (sử dụng dấu phân cách) thành cấu trúc phân cấp của các đối tượng lồng nhau. Điều này cho phép tổ chức thuộc tính một cách logic, ví dụ: biến ",n.jsx(c.code,{children:"button.primary.background"})," thành ",n.jsx(c.code,{children:"{ button: { primary: { background: ... } } }"}),"."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lồng ghép tự động"})," — chuyển đổi các khóa phẳng với dấu phân cách (mặc định là ",n.jsx(c.code,{children:"."}),") thành các đối tượng lồng nhau."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xử lý đệ quy"})," — hỗ trợ độ sâu lồng nhau không giới hạn (với khả năng giới hạn thông qua cấu hình)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất thông minh"})," — hợp nhất chính xác các thuộc tính con mới với các đối tượng hiện có bằng cách thay thế đệ quy."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Làm sạch tên"})," — tự động loại bỏ các tiền tố và hậu tố kỹ thuật (ví dụ: tên cơ bản của dấu phân cách) trước khi xử lý."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Lớp này cung cấp các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua ",n.jsx(c.code,{children:"new"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

// Sử dụng các phương thức tĩnh
const results = PropertiesSeparator.to(rawProperties)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"is",children:n.jsx(c.code,{children:"is"})}),`
`,n.jsxs(c.p,{children:["Một phương thức tĩnh để kiểm tra nhanh xem danh sách thuộc tính được cung cấp có chứa bất kỳ khóa nào yêu cầu phân tách hay không. Nó quét cấp độ cao nhất (và các cấp độ lồng nhau lên đến giới hạn ",n.jsx(c.code,{children:"limit"}),") để tìm các ký tự phân cách trong tên."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"properties: PropertyList"})," — danh sách các thuộc tính cần phân tích."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"limit: number"})," — độ sâu tối đa của việc kiểm tra (mặc định được lấy từ ",n.jsx(c.code,{children:"PropertiesConfig"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"boolean"})," — ",n.jsx(c.code,{children:"true"})," nếu có ít nhất một khóa chứa dấu phân cách."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const needsSplitting = PropertiesSeparator.is(myProperties);
// Kết quả: true nếu tồn tại các khóa như "color.blue.50"
`})}),`
`,n.jsx(c.h3,{id:"to",children:n.jsx(c.code,{children:"to"})}),`
`,n.jsx(c.p,{children:'Một phương thức tĩnh thực hiện quá trình chuyển đổi thực tế từ danh sách thuộc tính phẳng thành cấu trúc lồng nhau. Phương thức lặp lại đệ quy qua tất cả các phần tử và nếu tìm thấy một khóa có dấu phân cách, nó sẽ "bao bọc" thuộc tính vào một chuỗi các đối tượng lồng nhau theo các phân đoạn tên.'}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"properties: PropertyList"})," — danh sách các thuộc tính cần chuyển đổi."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"PropertyList"})," — một danh sách thuộc tính mới với cấu trúc phân cấp."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`const nestedProperties = PropertiesSeparator.to({
  'palette.blue.50': { value: '#e3f2fd' }
});
/* Kết quả:
{
  palette: {
    value: {
      blue: {
        value: {
          '50': { value: '#e3f2fd', __wrap: true }
        }
      }
    }
  }
}
*/
`})}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"cơ-chế-phân-tách-tên-the-name-splitting-mechanism",children:"Cơ chế phân tách tên (The Name Splitting Mechanism)"}),`
`,n.jsxs(c.p,{children:["Quá trình chuyển đổi trong ",n.jsx(c.code,{children:"PropertiesSeparator"})," bao gồm các bước sau:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phát hiện dấu phân cách"}),": Phương thức ",n.jsx(c.code,{children:"to"})," kiểm tra từng tên thuộc tính thông qua ",n.jsx(c.code,{children:"PropertiesKeys.isSeparator"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân đoạn"}),": Nếu tìm thấy dấu phân cách, tên sẽ được chia thành các phần (ví dụ: ",n.jsx(c.code,{children:"a.b.c"})," -> ",n.jsx(c.code,{children:"['a', 'b', 'c']"}),"). Các ký tự kỹ thuật sẽ được loại bỏ trước đó thông qua ",n.jsx(c.code,{children:"removeBasicName"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bao bọc (Wrapping)"}),": Phương thức ",n.jsx(c.code,{children:"wrap"})," tạo đệ quy các đối tượng ",n.jsx(c.code,{children:"value"})," lồng nhau, đặt phần tử thuộc tính ban đầu ở cấp sâu nhất. Các đối tượng trung gian được đánh dấu bằng ",n.jsx(c.code,{children:"__wrap: true"})," để chỉ định bản chất cấu trúc của chúng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hợp nhất đệ quy"}),': "Nhánh" kết quả được hợp nhất với đối tượng ',n.jsx(c.code,{children:"data"})," chính thông qua ",n.jsx(c.code,{children:"replaceRecursive"}),", cho phép nhiều thuộc tính có cùng gốc (ví dụ: ",n.jsx(c.code,{children:"blue.50"})," và ",n.jsx(c.code,{children:"blue.100"}),") tập hợp chính xác dưới một đối tượng ",n.jsx(c.code,{children:"blue"})," duy nhất."]}),`
`]}),`
`,n.jsx(c.h2,{id:"ví-dụ-examples",children:"Ví dụ (Examples)"}),`
`,n.jsx(c.h3,{id:"nhóm-các-màu-sắc-bảng-màu-palette",children:"Nhóm các màu sắc bảng màu (Palette)"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

const flatPalette = {
  'blue.50': { value: '#eef' },
  'blue.100': { value: '#ccf' }
}

const tree = PropertiesSeparator.to(flatPalette)
// Các thuộc tính hiện được nhóm trong đối tượng tree.blue.value
`})})]})}function a(h={}){const{wrapper:c}={...e(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{a as default};
