import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesBuildAbstract - Lớp biên dịch trừu tượng khai báo TypeScript`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesbuildabstract`,children:`Lớp DesignTypesBuildAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp cơ sở trừu tượng `,(0,c.jsx)(t.code,{children:`DesignTypesBuildAbstract`}),` định nghĩa giao diện và kiến trúc nền tảng cho việc biên dịch các tệp nguồn TypeScript và Vue thành các tệp khai báo kiểu (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) vào thư mục tạm trước khi xử lý và tối ưu hóa cho AI.`]}),`
`,(0,c.jsx)(t.h2,{id:`hàm-khởi-tạo`,children:`Hàm khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`temporaryDirectory: string`}),` — đường dẫn thư mục tạm để lưu trữ các tệp khai báo. Mặc định lấy từ `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesBuildAbstract } from '@dxtmisha/scripts'

class CustomTypesBuild extends DesignTypesBuildAbstract {
  is(): boolean {
    // Kiểm tra sự tồn tại của thư mục
    return false
  }

  clean(): this {
    // Dọn dẹp thư mục tạm
    return this
  }

  build(): this {
    // Biên dịch khai báo kiểu
    return this
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-is-boolean`,children:(0,c.jsx)(t.code,{children:`abstract is(): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem thư mục biên dịch tạm có tồn tại trên đĩa hay không.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-clean-this`,children:(0,c.jsx)(t.code,{children:`abstract clean(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Dọn dẹp hoặc xóa toàn bộ thư mục biên dịch tạm và các tệp khai báo đã tạo.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-build-this`,children:(0,c.jsx)(t.code,{children:`abstract build(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Thực hiện biên dịch các khai báo TypeScript từ mã nguồn vào thư mục tạm.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};