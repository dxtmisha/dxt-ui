import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/types/Thuộc tính (property)`}),`
`,(0,c.jsx)(n.h1,{id:`thuộc-tính-property`,children:`Thuộc tính (property)`}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểu kiến trúc `,(0,c.jsx)(n.code,{children:`property`}),` đóng vai trò là nền tảng cốt lõi cơ sở của bộ máy generator. Việc thiết lập type này chỉ đạo trực tiếp compiler tiến hành kết xuất node mục tiêu thành một quy chuẩn thuộc tính Native CSS phổ quát đi kèm giá trị.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Nhận diện Tự động Phân bổ:`}),` Nếu không khai báo rõ tham số `,(0,c.jsx)(n.code,{children:`_type`}),` và bộ Parser không quét ra bất kỳ mã alias phím tắt nào gắn ở tiền tố key, hệ thống sẽ `,(0,c.jsx)(n.strong,{children:`tự động fallback mặc định`}),` gán node đó thành chuẩn `,(0,c.jsx)(n.code,{children:`property`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khai-báo-tiêu-chuẩn-ngầm-định-tĩnh`,children:`Khai báo Tiêu chuẩn (Ngầm định tĩnh)`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong phần lớn nhu cầu sử dụng, việc gọi khai báo mảng `,(0,c.jsx)(n.code,{children:`property`}),` thủ công hoàn toàn thừa thãi. Bạn chỉ việc truyền vô một cặp key-value cơ bản (dạng số hoặc chuỗi literal), bộ máy Engine tự ngầm nắm thóp và xuất ra thuộc tính CSS tuần tự.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "padding": "12px 16px",
    "border-radius": "8px"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  padding: 12px 16px;
  border-radius: 8px;
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`khai-báo-cấu-trúc-mở-rộng-cứng-type-property`,children:[`Khai báo Cấu trúc Mở rộng (Cứng type `,(0,c.jsx)(n.code,{children:`property`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Việc ép thẳng tham số mảng khai báo type thủ công chỉ được trưng dụng một khi tham số node vượt quy chuẩn primitive, đòi hỏi khai báo mảng object sâu lồng các flag logic của compiler (chẳng hạn ép cờ `,(0,c.jsx)(n.code,{children:`_var: true`}),` hoặc kích nổ bộ thay tên `,(0,c.jsx)(n.code,{children:`_rename`}),`), nhưng vẫn một mực bám lấy kết xuất là thuộc tính gốc của CSS.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:[`File Cấu hình Đầu vào (`,(0,c.jsx)(n.code,{children:`properties.json`}),`):`]})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "button": {
    "custom-offset": {
      "_type": "property",
      "value": "24px",
      "_rename": "margin-bottom"
    }
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả Biên dịch Dự kiến (SCSS Output):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.button {
  margin-bottom: 24px;
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Kiểu phân bổ `,(0,c.jsx)(n.code,{children:`property`}),` là trọng điểm cấu trúc mọi file cục diện style nội tại của `,(0,c.jsx)(n.code,{children:`dxt-ui`}),`, tạo móng CSS vững chắc trước khi những tầng nâng cao (logic BEM, media query, variable động) nhào lộn xâm nhập.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};