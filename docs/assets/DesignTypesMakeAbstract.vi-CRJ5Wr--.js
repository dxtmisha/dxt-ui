import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesMakeAbstract - Lớp tạo định nghĩa kiểu trừu tượng cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesmakeabstract`,children:`Lớp DesignTypesMakeAbstract`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp cơ sở trừu tượng `,(0,c.jsx)(t.code,{children:`DesignTypesMakeAbstract`}),` thiết lập giao diện và kiến trúc quy chuẩn cho việc xử lý các tệp khai báo TypeScript, theo dõi thay đổi qua mã băm MD5 và tạo tệp hướng dẫn kiểu được tối ưu hóa cho AI (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`hàm-khởi-tạo`,children:`Hàm khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — thực thể `,(0,c.jsx)(t.code,{children:`DesignTypesAi`}),` để tối ưu hóa và cấu hình xử lý AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — đường dẫn thư mục đầu vào chứa các tệp khai báo. Mặc định lấy từ `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirDist: string`}),` — đường dẫn thư mục đầu vào chứa các tệp JavaScript đã biên dịch. Mặc định lấy từ `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getDistDir()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMakeAbstract } from '@dxtmisha/scripts'

class CustomTypesMake extends DesignTypesMakeAbstract {
  getFullContent(): string {
    return ''
  }

  getFullJsContent(): string {
    return ''
  }

  async make(): Promise<this> {
    return this
  }

  makeSave(): this {
    return this
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getfullcontent-string`,children:(0,c.jsx)(t.code,{children:`abstract getFullContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Đọc các tệp khai báo đã xử lý, hợp nhất chúng thành một chuỗi duy nhất và làm sạch mã khuôn mẫu thừa.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-getfulljscontent-string`,children:(0,c.jsx)(t.code,{children:`abstract getFullJsContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Truy xuất và hợp nhất nội dung của tất cả các tệp JavaScript đã được lọc.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-make-promisethis`,children:(0,c.jsx)(t.code,{children:`abstract make(): Promise<this>`})}),`
`,(0,c.jsx)(t.p,{children:`Thực thi toàn bộ quy trình tạo định nghĩa kiểu, bao gồm kiểm tra bộ nhớ đệm MD5, xử lý AI và lưu kết quả.`}),`
`,(0,c.jsx)(t.h3,{id:`abstract-makesave-this`,children:(0,c.jsx)(t.code,{children:`abstract makeSave(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tổng hợp nội dung kiểu dữ liệu hoàn chỉnh và lưu trực tiếp vào tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};