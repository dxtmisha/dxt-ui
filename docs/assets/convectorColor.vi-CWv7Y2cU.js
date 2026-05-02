import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Functions/convectorColor - Chuyển đổi màu sắc`}),`
`,(0,c.jsx)(n.h1,{id:`hàm-convectorcolor`,children:`Hàm convectorColor`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm `,(0,c.jsx)(n.code,{children:`convectorColor`}),` là một phần của hệ thống convector để xử lý các token thuộc tính. Vai trò chính của nó là trích xuất siêu dữ liệu màu sắc cụ thể từ các phần mở rộng 'studio.tokens' và áp dụng chúng vào đối tượng thuộc tính. Hiện tại, hàm chuyên về xử lý các sửa đổi độ mờ (alpha).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Studio Tokens`}),` — hoạt động với các phần mở rộng `,(0,c.jsx)(n.code,{children:`$extensions['studio.tokens']`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sửa đổi độ mờ`}),` — trích xuất giá trị `,(0,c.jsx)(n.code,{children:`alpha`}),` từ các tham số sửa đổi và lưu trữ nó trong khóa hệ thống `,(0,c.jsx)(n.code,{children:`cssColorOpacity`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động hóa`}),` — được gọi trong quá trình chuẩn hóa thuộc tính khi phát hiện siêu dữ liệu tương ứng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tham-số`,children:`Tham số`}),`
`,(0,c.jsx)(n.p,{children:`Hàm chấp nhận một đối số duy nhất:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PropertyItemInput`}),` — đối tượng dữ liệu đầu vào của thuộc tính, đối tượng này sẽ được thay đổi (mute) trong quá trình thực thi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-examples`,children:`Ví dụ (Examples)`}),`
`,(0,c.jsx)(n.h3,{id:`xử-lý-sửa-đổi-độ-mờ`,children:`Xử lý sửa đổi độ mờ`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu một token chứa thông tin sửa đổi màu sắc, `,(0,c.jsx)(n.code,{children:`convectorColor`}),` sẽ trích xuất thông tin đó:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { convectorColor, PropertyKey } from '@dxtmisha/scripts'

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
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`cơ-chế-xử-lý`,children:`Cơ chế xử lý`}),`
`,(0,c.jsxs)(n.p,{children:[`Quá trình xử lý dữ liệu trong `,(0,c.jsx)(n.code,{children:`convectorColor`}),` bao gồm các bước sau:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tìm kiếm phần mở rộng`}),`: Hàm tìm kiếm đường dẫn `,(0,c.jsx)(n.code,{children:`$extensions['studio.tokens'].modify`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác định kiểu`}),`: Nếu kiểu sửa đổi được thiết lập là `,(0,c.jsx)(n.code,{children:`alpha`}),`, hàm sẽ bắt đầu xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ dữ liệu`}),`: Giá trị độ mờ (`,(0,c.jsx)(n.code,{children:`value`}),`) được ghi vào thuộc tính của đối tượng `,(0,c.jsx)(n.code,{children:`item`}),` bằng khóa `,(0,c.jsx)(n.code,{children:`_o`}),` (được lưu trong `,(0,c.jsx)(n.code,{children:`PropertyKey.cssColorOpacity`}),`). Nếu không có giá trị nào được chỉ định, giá trị mặc định là `,(0,c.jsx)(n.code,{children:`'1'`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`phạm-vi-ứng-dụng`,children:`Phạm vi ứng dụng`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này được dùng trong các lớp xử lý thuộc tính (ví dụ: `,(0,c.jsx)(n.code,{children:`PropertiesStandard`}),`) để làm phong phú dữ liệu token với thông tin về độ mờ được lấy từ các công cụ thiết kế.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};