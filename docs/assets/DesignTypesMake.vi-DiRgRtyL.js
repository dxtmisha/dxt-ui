import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesMake - Động cơ tạo và lưu bộ nhớ đệm kiểu cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesmake`,children:`Lớp DesignTypesMake`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignTypesMake`}),` là một động cơ hiệu suất cao dùng để quét các tệp khai báo TypeScript (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`), theo dõi thay đổi bằng mã băm MD5, loại bỏ mã mẫu thừa và tạo ra tệp kiểu hợp nhất `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm theo MD5`}),` — Tính toán mã băm của tệp khai báo và lưu kết quả tối ưu hóa của AI vào thư mục `,(0,c.jsx)(t.code,{children:`ai-types-list/`}),`, tránh các cuộc gọi API tốn kém và lặp lại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Làm sạch khai báo thông minh`}),` — Loại bỏ các import nội bộ, tham chiếu vòng và chú thích thừa, chuẩn hóa thành các hợp đồng kiểu rõ ràng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bổ sung ngữ cảnh mã JS`}),` — Quét và kết hợp các tệp mã nguồn JavaScript tương ứng để cung cấp ngữ cảnh thực thi cho mô hình AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hợp nhất thành một tệp duy nhất`}),` — Gộp hàng chục tệp `,(0,c.jsx)(t.code,{children:`.d.ts`}),` phân mảnh thành một tài liệu `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` gọn gàng, dễ điều hướng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — thực thể AI client để tối ưu hóa khai báo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string`}),` — đường dẫn thư mục khai báo đầu vào (mặc định `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dirDist: string`}),` — đường dẫn thư mục JavaScript đã biên dịch (mặc định `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getDistDir()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMake } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`getfullcontent-string`,children:(0,c.jsx)(t.code,{children:`getFullContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về nội dung định nghĩa kiểu đã được kết hợp và tối ưu hóa trên toàn bộ dự án.`}),`
`,(0,c.jsx)(t.h3,{id:`getfulljscontent-string`,children:(0,c.jsx)(t.code,{children:`getFullJsContent(): string`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về nội dung JavaScript kết hợp từ tất cả các tệp nguồn được lọc.`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thực thi toàn bộ quy trình sinh mã bao gồm kiểm tra bộ nhớ đệm, xử lý qua AI và lưu tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`makesave-this`,children:(0,c.jsx)(t.code,{children:`makeSave(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tổng hợp các định nghĩa kiểu cuối cùng và lưu trực tiếp vào tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesAi, DesignTypesMake } from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const makeTypes = new DesignTypesMake(ai)

await makeTypes.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};