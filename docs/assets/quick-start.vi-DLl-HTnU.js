import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI/properties/! Bắt đầu nhanh`}),`
`,(0,c.jsx)(n.h1,{id:`bắt-đầu-nhanh`,children:`Bắt đầu nhanh`}),`
`,(0,c.jsxs)(n.p,{children:[`Hướng dẫn này giúp bạn nhanh chóng nắm vững cách làm việc với tệp `,(0,c.jsx)(n.code,{children:`properties.json`}),` thông qua ví dụ về một UI component điển hình. Tệp này đóng vai trò là `,(0,c.jsx)(n.strong,{children:`nguồn chân lý duy nhất (single source of truth)`}),` — từ đó cả style (SCSS) và giao diện lập trình (TypeScript Props) đều được tạo ra tự động.`]}),`
`,(0,c.jsx)(n.h2,{id:`1-thuộc-tính-cơ-bản-và-tokens`,children:`1. Thuộc tính cơ bản và Tokens`}),`
`,(0,c.jsxs)(n.p,{children:[`Thay vì sử dụng các giá trị cố định (HEX, px), hãy luôn sử dụng hệ thống design token `,(0,c.jsx)(n.code,{children:`{sys...}`}),`. Điều này đảm bảo hỗ trợ thay đổi giao diện (themes) và tính nhất quán của thiết kế.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "padding": "{sys.spacing.md}",
  "background-color": "{sys.palette.surface}",
  "border-radius": "{sys.rounded.md}"
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  padding: var(--sys-spacing-md);
  background-color: var(--sys-palette-surface);
  border-radius: var(--sys-rounded-md);
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`2-các-trạng-thái-states`,children:`2. Các trạng thái (States)`}),`
`,(0,c.jsx)(n.p,{children:`Sử dụng các khóa đã được quy định sẵn để mô tả tính tương tác (hover, focus, active, disabled).`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "hover": {
    "background-color": "{sys.palette.surfaceVariant}"
  },
  "disabled": {
    "opacity": "{sys.opacity.disabled}",
    "cursor": "not-allowed"
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  &:hover { background-color: var(--sys-palette-surfaceVariant); }
  &:disabled { 
    opacity: var(--sys-opacity-disabled);
    cursor: not-allowed;
  }
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`3-các-biến-thể-dấu-hiệu-`,children:[`3. Các biến thể (Dấu hiệu `,(0,c.jsx)(n.code,{children:`~`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Để tạo ra một biến thể của component (ví dụ: `,(0,c.jsx)(n.code,{children:`primary`}),` hoặc `,(0,c.jsx)(n.code,{children:`secondary`}),`), hãy sử dụng tiền tố `,(0,c.jsx)(n.code,{children:`~`}),`. Các khóa này sẽ tự động được chuyển đổi thành `,(0,c.jsx)(n.strong,{children:`Props`}),` trong Vue/React và các BEM modifiers trong CSS.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "~primary": {
    "color": "{sys.palette.onPrimary}",
    "background-color": "{sys.palette.primary}",
    "_default": true
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  &--primary {
    color: var(--sys-palette-onPrimary);
    background-color: var(--sys-palette-primary);
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (TypeScript Props):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type PropsToken = {
  primary?: boolean // Được tạo tự động
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`4-các-biến-tùy-chỉnh-_var`,children:[`4. Các biến tùy chỉnh (`,(0,c.jsx)(n.code,{children:`_var`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn cần một thuộc tính có sẵn dưới dạng biến CSS để điều khiển từ bên ngoài hoặc sử dụng trong script, hãy thêm cờ `,(0,c.jsx)(n.code,{children:`_var: true`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`{
  "height": {
    "value": "48px",
    "_var": true
  }
}
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Kết quả (SCSS):`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.component {
  --component-height: 48px;
  height: var(--component-height);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};