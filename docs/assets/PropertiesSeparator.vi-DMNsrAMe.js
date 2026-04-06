import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesSeparator - Phân tách thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiesseparator`,children:`Lớp PropertiesSeparator`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesSeparator`}),` được thiết kế để tự động chuyển đổi cấu trúc phẳng của các token có tên phức hợp (sử dụng dấu phân cách) thành cấu trúc phân cấp của các đối tượng lồng nhau. Điều này cho phép tổ chức thuộc tính một cách logic, ví dụ: biến `,(0,c.jsx)(n.code,{children:`button.primary.background`}),` thành `,(0,c.jsx)(n.code,{children:`{ button: { primary: { background: ... } } }`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lồng ghép tự động`}),` — chuyển đổi các khóa phẳng với dấu phân cách (mặc định là `,(0,c.jsx)(n.code,{children:`.`}),`) thành các đối tượng lồng nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý đệ quy`}),` — hỗ trợ độ sâu lồng nhau không giới hạn (với khả năng giới hạn thông qua cấu hình).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất thông minh`}),` — hợp nhất chính xác các thuộc tính con mới với các đối tượng hiện có bằng cách thay thế đệ quy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Làm sạch tên`}),` — tự động loại bỏ các tiền tố và hậu tố kỹ thuật (ví dụ: tên cơ bản của dấu phân cách) trước khi xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này cung cấp các phương thức tĩnh, vì vậy không cần phải khởi tạo thông qua `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

// Sử dụng các phương thức tĩnh
const results = PropertiesSeparator.to(rawProperties)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`is`,children:(0,c.jsx)(n.code,{children:`is`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phương thức tĩnh để kiểm tra nhanh xem danh sách thuộc tính được cung cấp có chứa bất kỳ khóa nào yêu cầu phân tách hay không. Nó quét cấp độ cao nhất (và các cấp độ lồng nhau lên đến giới hạn `,(0,c.jsx)(n.code,{children:`limit`}),`) để tìm các ký tự phân cách trong tên.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — danh sách các thuộc tính cần phân tích.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit: number`}),` — độ sâu tối đa của việc kiểm tra (mặc định được lấy từ `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu có ít nhất một khóa chứa dấu phân cách.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const needsSplitting = PropertiesSeparator.is(myProperties);
// Kết quả: true nếu tồn tại các khóa như "color.blue.50"
`})}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsx)(n.p,{children:`Một phương thức tĩnh thực hiện quá trình chuyển đổi thực tế từ danh sách thuộc tính phẳng thành cấu trúc lồng nhau. Phương thức lặp lại đệ quy qua tất cả các phần tử và nếu tìm thấy một khóa có dấu phân cách, nó sẽ "bao bọc" thuộc tính vào một chuỗi các đối tượng lồng nhau theo các phân đoạn tên.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — danh sách các thuộc tính cần chuyển đổi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`PropertyList`}),` — một danh sách thuộc tính mới với cấu trúc phân cấp.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const nestedProperties = PropertiesSeparator.to({
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
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`cơ-chế-phân-tách-tên-the-name-splitting-mechanism`,children:`Cơ chế phân tách tên (The Name Splitting Mechanism)`}),`
`,(0,c.jsxs)(n.p,{children:[`Quá trình chuyển đổi trong `,(0,c.jsx)(n.code,{children:`PropertiesSeparator`}),` bao gồm các bước sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phát hiện dấu phân cách`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`to`}),` kiểm tra từng tên thuộc tính thông qua `,(0,c.jsx)(n.code,{children:`PropertiesKeys.isSeparator`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân đoạn`}),`: Nếu tìm thấy dấu phân cách, tên sẽ được chia thành các phần (ví dụ: `,(0,c.jsx)(n.code,{children:`a.b.c`}),` -> `,(0,c.jsx)(n.code,{children:`['a', 'b', 'c']`}),`). Các ký tự kỹ thuật sẽ được loại bỏ trước đó thông qua `,(0,c.jsx)(n.code,{children:`removeBasicName`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bao bọc (Wrapping)`}),`: Phương thức `,(0,c.jsx)(n.code,{children:`wrap`}),` tạo đệ quy các đối tượng `,(0,c.jsx)(n.code,{children:`value`}),` lồng nhau, đặt phần tử thuộc tính ban đầu ở cấp sâu nhất. Các đối tượng trung gian được đánh dấu bằng `,(0,c.jsx)(n.code,{children:`__wrap: true`}),` để chỉ định bản chất cấu trúc của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất đệ quy`}),`: "Nhánh" kết quả được hợp nhất với đối tượng `,(0,c.jsx)(n.code,{children:`data`}),` chính thông qua `,(0,c.jsx)(n.code,{children:`replaceRecursive`}),`, cho phép nhiều thuộc tính có cùng gốc (ví dụ: `,(0,c.jsx)(n.code,{children:`blue.50`}),` và `,(0,c.jsx)(n.code,{children:`blue.100`}),`) tập hợp chính xác dưới một đối tượng `,(0,c.jsx)(n.code,{children:`blue`}),` duy nhất.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`nhóm-các-màu-sắc-bảng-màu-palette`,children:`Nhóm các màu sắc bảng màu (Palette)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesSeparator } from '@dxtmisha/scripts'

const flatPalette = {
  'blue.50': { value: '#eef' },
  'blue.100': { value: '#ccf' }
}

const tree = PropertiesSeparator.to(flatPalette)
// Các thuộc tính hiện được nhóm trong đối tượng tree.blue.value
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};