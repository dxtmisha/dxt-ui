import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{d as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/wiki/styles/# Tiện ích Bố cục`}),`
`,(0,l.jsx)(n.h1,{id:`tiện-ích-bố-cục`,children:`Tiện ích Bố cục`}),`
`,(0,l.jsx)(n.p,{children:`Tập hợp các class CSS để tổ chức cấu trúc không gian cho các khu vực trình diễn trong Storybook và Wiki. Những class này giúp bạn nhanh chóng tạo lưới (grid), khung linh hoạt (flex) và giới hạn chiều rộng nội dung.`}),`
`,(0,l.jsxs)(n.p,{children:[`Tất cả các class đều có tiền tố `,(0,l.jsx)(n.code,{children:`.wiki-storybook-`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`thẻ-chứa`,children:`Thẻ chứa`}),`
`,(0,l.jsxs)(n.p,{children:[`Class `,(0,l.jsx)(n.code,{children:`.wiki-storybook-container`}),` khởi tạo một thẻ chứa loại `,(0,l.jsx)(n.code,{children:`inline-size`}),`. Điều này cho phép các phần tử con sử dụng các truy vấn `,(0,l.jsx)(n.code,{children:`@container`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-container">
  <!-- Nội dung phản hồi theo chiều rộng của thẻ chứa này -->
</div>
`})}),`
`,(0,l.jsx)(n.h2,{id:`lưới`,children:`Lưới`}),`
`,(0,l.jsxs)(n.p,{children:[`Class `,(0,l.jsx)(n.code,{children:`.wiki-storybook-group`}),` tạo ra một thẻ chứa CSS Grid với 12 cột và khoảng cách (gap) tiêu chuẩn là `,(0,l.jsx)(n.code,{children:`8px`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-group">
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--xs">Span XS</div>
  <div class="wiki-storybook-item wiki-storybook-item--squared--sm">Span SM</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-group`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--xs`,children:`Span XS`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding wiki-storybook-item--squared--sm`,children:`Span SM`})]})}),`
`,(0,l.jsx)(n.h2,{id:`bố-cục-linh-hoạt`,children:`Bố cục linh hoạt`}),`
`,(0,l.jsx)(n.p,{children:`Các tiện ích để nhanh chóng căn chỉnh các phần tử theo chiều ngang hoặc chiều dọc.`}),`
`,(0,l.jsx)(n.h3,{id:`flex-tiêu-chuẩn`,children:`Flex tiêu chuẩn`}),`
`,(0,l.jsxs)(n.p,{children:[`Class `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex`}),` — sắp xếp theo hàng ngang, tự động xuống dòng với khoảng cách `,(0,l.jsx)(n.code,{children:`8px`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(n.h3,{id:`căn-giữa-flex-center`,children:`Căn giữa (Flex Center)`}),`
`,(0,l.jsxs)(n.p,{children:[`Class `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex-center`}),` căn chỉnh nội dung chính xác ở giữa.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(n.h3,{id:`căn-giữa-theo-chiều-dọc-flex-align-center`,children:`Căn giữa theo chiều dọc (Flex Align Center)`}),`
`,(0,l.jsxs)(n.p,{children:[`Class `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex-align-center`}),` căn chỉnh các phần tử theo chiều ngang với căn giữa theo chiều dọc.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-align-center">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-align-center`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})}),`
`,(0,l.jsx)(n.h3,{id:`xếp-chồng-dọc-flex-column`,children:`Xếp chồng dọc (Flex Column)`}),`
`,(0,l.jsxs)(n.p,{children:[`Class `,(0,l.jsx)(n.code,{children:`.wiki-storybook-flex-column`}),` sắp xếp các phần tử theo chiều dọc với khoảng cách `,(0,l.jsx)(n.code,{children:`16px`}),`.`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-html`,children:`<div class="wiki-storybook-flex-column">
    <div class="wiki-storybook-item">1</div>
    <div class="wiki-storybook-item">2</div>
    <div class="wiki-storybook-item">3</div>
</div>
`})}),`
`,(0,l.jsx)(r,{children:(0,l.jsxs)(`div`,{class:`wiki-storybook-flex-column`,children:[(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`1`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`2`}),(0,l.jsx)(`div`,{class:`wiki-storybook-item wiki-storybook-item--widthAuto wiki-storybook-item--auto wiki-storybook-item--padding`,children:`3`})]})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};