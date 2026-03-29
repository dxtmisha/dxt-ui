import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/PropertiesWrap - Tối ưu hóa cấu trúc`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertieswrap`,children:`Lớp PropertiesWrap`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesWrap`}),` được thiết kế để tự động tối ưu hóa cấu trúc token trong hệ thống thiết kế. Nhiệm vụ chính của nó là tìm các giá trị thuộc tính lặp lại ở cùng một mức lồng nhau và đưa chúng lên mức cha. Điều này giúp giảm đáng kể kích thước của các tệp cấu hình JSON/JS và đơn giản hóa việc bảo trì chúng.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Loại bỏ trùng lặp`}),` — tự động chuyển các thuộc tính chung của một nhóm thành phần lên cao hơn trong hệ phân cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa đệ quy`}),` — xử lý cây thuộc tính ở bất kỳ độ sâu nào.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hợp nhất thông minh`}),` — xác định các thuộc tính có số lần lặp lại tối đa để nén cấu trúc hiệu quả nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính minh bạch`}),` — sử dụng khóa hệ thống `,(0,c.jsx)(n.code,{children:`wrap`}),` để xác định các khối yêu cầu tối ưu hóa.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này cung cấp các phương thức tĩnh và không yêu cầu khởi tạo thông qua `,(0,c.jsx)(n.code,{children:`new`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesWrap } from '@dxtmisha/scripts'

// Tối ưu hóa cấu trúc thuộc tính (làm thay đổi đối tượng gốc)
PropertiesWrap.to(myProperties)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`to`,children:(0,c.jsx)(n.code,{children:`to`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phương thức tĩnh khởi động quá trình tối ưu hóa. Nó duyệt qua cây thuộc tính và khi gặp một khối có cờ `,(0,c.jsx)(n.code,{children:`_wrap`}),`, nó sẽ phân tích nội dung của khối đó. Nếu tìm thấy các thuộc tính giống hệt nhau giữa các phần tử con trong khối, chúng sẽ được chuyển lên mức của khối hiện tại và các bản trùng lặp ở các phần tử con sẽ bị xóa bỏ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`properties: PropertyList`}),` — đối tượng chứa danh sách các thuộc tính cần được tối ưu hóa.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const tokens = {
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
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`thuật-toán-tối-ưu-hóa-cách-thức-hoạt-động`,children:`Thuật toán tối ưu hóa (Cách thức hoạt động)`}),`
`,(0,c.jsx)(n.p,{children:`Quá trình nén cấu trúc diễn ra qua các giai đoạn sau:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tìm kiếm cờ`}),`: Hệ thống tìm kiếm trong đối tượng thuộc tính `,(0,c.jsx)(n.code,{children:`_wrap`}),` (được định nghĩa trong `,(0,c.jsx)(n.code,{children:`PropertyKey.wrap`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thu thập thống kê (getSelectors)`}),`: Nếu tìm thấy cờ, lớp sẽ thu thập thông tin về tất cả các thuộc tính của các phần tử con (tên và giá trị của chúng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tích lặp lại (getMaxRepeat)`}),`: Nó xác định thuộc tính xuất hiện thường xuyên nhất với cùng một giá trị.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển dữ liệu`}),`: Thuộc tính chung đã xác định được thêm vào khối hiện tại (khối cha).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Làm sạch (removeProperties)`}),`: Thuộc tính này được xóa khỏi tất cả các phần tử con nơi nó có giá trị giống hệt nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hoàn tất`}),`: Cờ `,(0,c.jsx)(n.code,{children:`_wrap`}),` được gỡ bỏ khỏi đối tượng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`nén-cấu-trúc-cấu-hình-chủ-đề-theme`,children:`Nén cấu trúc cấu hình chủ đề (Theme)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesWrap } from '@dxtmisha/scripts'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};