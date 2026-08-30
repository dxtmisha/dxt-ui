import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignStructureStyles - Trình biên dịch kiểu dáng thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designstructurestyles`,children:`Lớp DesignStructureStyles`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignStructureStyles`}),` chịu trách nhiệm chuyển đổi các token thiết kế cấu trúc của thành phần thành một mảng chuẩn hóa các chuỗi thuộc tính CSS. Bằng cách tận dụng động cơ `,(0,c.jsx)(t.code,{children:`StylesProperties`}),`, nó đảm bảo rằng mọi thành phần đều kế thừa bản sắc hình ảnh cơ bản của mình trực tiếp từ cấu hình chủ đề trung tâm của hệ thống thiết kế.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuyển đổi Token sang CSS`}),` — Tự động ánh xạ các token thiết kế trừu tượng sang các thuộc tính CSS cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phạm vi bộ chọn BEM`}),` — Gói các kiểu dáng được tạo trong một bộ chọn cấp thành phần (`,(0,c.jsx)(t.code,{children:`& { ... }`}),`) để đảm bảo cách ly kiểu dáng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kế thừa phân cấp`}),` — Sử dụng siêu dữ liệu cấu trúc của cha để phân giải chính xác các biến thuộc tính lồng nhau.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng chuẩn hóa`}),` — Áp dụng thụt lề và ngắt dòng nhất quán, đảm bảo các tệp kiểu dáng được tạo ra vẫn dễ đọc.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:`Để khởi tạo trình biên dịch kiểu dáng, hãy cung cấp mã định danh của thành phần cần tạo kiểu dáng. Lớp sẽ tự động tải siêu dữ liệu cấu trúc liên quan.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`component: string`}),` — Mã định danh của thành phần (ví dụ: `,(0,c.jsx)(t.code,{children:`'button'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignStructureStyles } from '@dxtmisha/scripts'

const compiler = new DesignStructureStyles('button')
const stylesArray = compiler.get()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — Kích hoạt quá trình chuyển đổi và trả về mảng các chuỗi thuộc tính CSS.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`quy-trình-biên-dịch-kiểu-dáng`,children:`Quy trình biên dịch kiểu dáng`}),`
`,(0,c.jsx)(t.p,{children:`Khi trình biên dịch được khởi tạo, nó tuân theo một quy trình có cấu trúc:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tải siêu dữ liệu`}),`: Nó sử dụng logic của lớp cha `,(0,c.jsx)(t.code,{children:`DesignStructureItemAbstract`}),` để lấy `,(0,c.jsx)(t.code,{children:`PropertyItemsItem`}),` cụ thể liên quan đến thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lựa chọn ngữ cảnh`}),`: Động cơ gói tất cả các thuộc tính đầu ra bên trong một bộ chọn CSS tự tham chiếu (`,(0,c.jsx)(t.code,{children:`& { ... }`}),`) để duy trì tính tương thích với CSS-in-JS và các trình tiền xử lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân giải thuộc tính`}),`: Nó khởi tạo `,(0,c.jsx)(t.code,{children:`StylesProperties`}),`, chuyển siêu dữ liệu đã thu thập. Động cơ phụ này sau đó duyệt qua mọi token, phân giải các biến chủ đề, đơn vị và các phương án dự phòng (fallbacks).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đệm đầu ra`}),`: Danh sách các thuộc tính cuối cùng được kết hợp thành một mảng phẳng các chuỗi, sẵn sàng để tiêm vào tệp CSS hoặc thẻ style.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tích-hợp-với-động-cơ-chủ-đề-theme-engine`,children:`Tích hợp với Động cơ Chủ đề (Theme Engine)`}),`
`,(0,c.jsx)(t.p,{children:`Lớp này đóng vai trò là cầu nối giữa dữ liệu thiết kế thô và biểu diễn hình ảnh cuối cùng. Bằng cách tập trung logic biên dịch kiểu dáng, hệ thống đảm bảo rằng các thay đổi đối với kiến trúc cốt lõi của chủ đề (chẳng hạn như quy ước đặt tên biến hoặc logic đơn vị) sẽ tự động được truyền bá đến tất cả các thành phần trong chu kỳ xây dựng tiếp theo.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};