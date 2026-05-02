import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/# Giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`làm-việc-với-giá-trị-value`,children:`Làm việc với giá trị (Value)`}),`
`,(0,c.jsxs)(n.p,{children:[`Trường `,(0,c.jsx)(n.code,{children:`value`}),` trong `,(0,c.jsx)(n.code,{children:`properties.json`}),` xác định nội dung cuối cùng của một thuộc tính (màu sắc, kích thước, đường dẫn, v.v.). Nội dung của `,(0,c.jsx)(n.code,{children:`value`}),` có thể là các giá trị hằng số (literals), các tham chiếu động tới các token khác hoặc các dấu hiệu hệ thống (markers).`]}),`
`,(0,c.jsx)(n.h3,{id:`hằng-số-và-kiểu-dữ-liệu`,children:`Hằng số và Kiểu dữ liệu`}),`
`,(0,c.jsx)(n.p,{children:`Hệ thống hỗ trợ các kiểu dữ liệu JSON tiêu chuẩn:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuỗi (Strings)`}),`: `,(0,c.jsx)(n.code,{children:`"12px"`}),`, `,(0,c.jsx)(n.code,{children:`"relative"`}),`, `,(0,c.jsx)(n.code,{children:`"none"`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Số (Numbers)`}),`: `,(0,c.jsx)(n.code,{children:`24`}),`, `,(0,c.jsx)(n.code,{children:`0.5`}),` (tự động chuyển thành chuỗi khi biên dịch).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Màu sắc`}),`: Hỗ trợ các định dạng HEX:`,`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#FFF`}),` / `,(0,c.jsx)(n.code,{children:`#FFFFFF`}),` — màu tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`#FFFFFF80`}),` — màu có kênh alpha (8 ký tự).`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`tham-chiếu-và-nhãn-hệ-thống-`,children:[`Tham chiếu và nhãn hệ thống (`,(0,c.jsx)(n.code,{children:`{...}`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Bạn có thể trích xuất giá trịของ các thuộc tính khác bằng cách sử dụng dấu ngoặc nhọn. Điều này cho phép tạo ra sự phụ thuộc giữa các token.`}),`
`,(0,c.jsx)(n.h4,{id:`quy-tắc-phân-giải-đường-dẫn`,children:`Quy tắc phân giải đường dẫn:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đường dẫn tuyệt đối`}),`: `,(0,c.jsx)(n.code,{children:`{design.component.property}`}),` — chỉ định đầy đủ từ gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đường dẫn tương đối (Tự động Design)`}),`: `,(0,c.jsx)(n.code,{children:`{primary-color}`}),`. Nếu phân đoạn đầu tiên của đường dẫn không phải là tên design đã đăng ký, hệ thống sẽ tự động thêm tên design hiện tại (`,(0,c.jsx)(n.code,{children:`{current-design.primary-color}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân cấp`}),`: Hỗ trợ phân cấp vô hạn thông qua dấu chấm: `,(0,c.jsx)(n.code,{children:`{base.spacing.small}`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`nhãn-đặc-biệt-shortcuts`,children:`Nhãn đặc biệt (Shortcuts):`}),`
`,(0,c.jsx)(n.p,{children:`Các trình giữ chỗ đặc biệt được sử dụng để rút ngắn đường dẫn trong các tham chiếu:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`?`}),` — được thay thế bằng `,(0,c.jsx)(n.code,{children:`[design_hiện_tại].`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`??`}),` — được thay thế bằng `,(0,c.jsx)(n.code,{children:`[design_hiện_tại].[component_hiện_tại].`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",          // Phân giải thành {d1.primary}
    "padding": "{??base-padding}"   // Phân giải thành {d1.button.base-padding}
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Các nhãn này giúp viết mã cấu hình có khả năng di động cao, không bị hỏng khi đổi tên thiết kế hoặc thành phần.`}),`
`,(0,c.jsx)(n.h4,{id:`biểu-thức-và-nội-dung-hỗn-hợp`,children:`Biểu thức và nội dung hỗn hợp:`}),`
`,(0,c.jsxs)(n.p,{children:[`Trường `,(0,c.jsx)(n.code,{children:`value`}),` có thể chứa văn bản tùy ý có chứa một hoặc nhiều tham chiếu `,(0,c.jsx)(n.code,{children:`{...}`}),` bên trong. Hệ thống sẽ tìm và giải quyết từng tham chiếu trong khi vẫn giữ nguyên phần văn bản còn lại.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Điều này cho phép sử dụng các tham chiếu bên trong các hàm CSS (ví dụ: `,(0,c.jsx)(n.code,{children:`calc()`}),`) hoặc kết hợp chúng với các biến CSS gốc.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "var(--sys-height) * {sys.spacing.adaptive.md}"
  }
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`dấu-hiệu-giá-trị-đầy-đủ-`,children:[`Dấu hiệu "Giá trị đầy đủ" (`,(0,c.jsx)(n.code,{children:`=`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu một giá trị bắt đầu bằng ký tự `,(0,c.jsx)(n.code,{children:`=`}),`, trình biên dịch sẽ coi đó là "giá trị đầy đủ" (full value). Giá trị sẽ được truyền vào SCSS "nguyên bản" mà không qua bất kỳ quá trình xử lý tự động nào khác.`]}),`
`,(0,c.jsx)(n.p,{children:`Điều này hữu ích cho các hàm CSS phức tạp hoặc khi cần truyền các đường dẫn thô.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "color": "{?primary}",           // Tham chiếu qua nhãn design
    "padding": "{??base-padding}",   // Tham chiếu qua nhãn component
    "width": "=calc(100% - 20px)",   // Giá trị đầy đủ (không xử lý)
    "border": "1px solid #00000030"  // HEX có độ trong suốt
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`các-tham-số-meta-bổ-sung`,children:`Các tham số Meta bổ sung`}),`
`,(0,c.jsxs)(n.p,{children:[`Để kiểm soát giá trị chính xác hơn, có thể sử dụng các cờ dịch vụ đặc biệt (bắt đầu bằng `,(0,c.jsx)(n.code,{children:`_`}),`):`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_important: boolean`}),` — thêm chỉ thị `,(0,c.jsx)(n.code,{children:`!important`}),` vào thuộc tính trong CSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_fullValue: boolean`}),` — tương đương lập trình của dấu hiệu `,(0,c.jsx)(n.code,{children:`=`}),`. Vô hiệu hóa việc tự động thêm đơn vị (`,(0,c.jsx)(n.code,{children:`px`}),`) và giải quyết tham chiếu `,(0,c.jsx)(n.code,{children:`{}`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_replace: object`}),` — cho phép thực hiện thay thế văn bản trong giá trị cuối cùng bằng biểu thức chính quy. Chấp nhận một đối tượng `,(0,c.jsx)(n.code,{children:`{ pattern, flags, replace }`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`_modification: boolean`}),` — kiểm soát xem thuộc tính có thể được sửa đổi trong SCSS hay không (mặc định là `,(0,c.jsx)(n.code,{children:`true`}),`). Nếu đặt thành `,(0,c.jsx)(n.code,{children:`false`}),`, thuộc tính được coi là tĩnh.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "width": { 
      "value": "100%", 
      "_important": true      // Kết quả: width: 100% !important;
    },
    "padding": { 
      "value": "16px", 
      "_replace": {           // Kết quả: padding: 16rem;
        "pattern": "px", 
        "replace": "rem", 
        "flags": "g" 
      }
    },
    "height": { 
      "value": "calc(100vh - 20px)", 
      "_fullValue": true      // Kết quả: height: calc(100vh - 20px);
    }
  }
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};