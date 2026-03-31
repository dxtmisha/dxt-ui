import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/TranslateFile - Quản Lý Tập Tin Dịch`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-translatefile`,children:`Lớp TranslateFile`}),`
`,(0,c.jsx)(n.p,{children:`Lớp dùng để quản lý dữ liệu dịch thuật từ các tập tin bên ngoài. Nó hỗ trợ tải chậm (lazy loading) các bộ dịch, tự động khớp mã vùng và bộ nhớ đệm nội bộ để tối ưu hóa hiệu suất.`}),`
`,(0,c.jsxs)(n.p,{children:[`Khác với các công cụ tĩnh (static utilities), `,(0,c.jsx)(n.code,{children:`TranslateFile`}),` là một lớp có thể khởi tạo (instantiable), cho phép tạo nhiều bộ dịch với các thiết lập ngôn ngữ và khu vực độc lập.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các Tính Năng Chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tải chậm (Lazy Loading)`}),` — Hỗ trợ tải bất đồng bộ các tập tin dịch chỉ khi cần thiết cho mã vùng hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ nhớ đệm thông minh`}),` — Tự động lưu trữ nội dung các tập tin đã tải, ngăn chặn việc đọc tập tin lặp lại hoặc các yêu cầu mạng không cần thiết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ưu tiên Mã vùng`}),` — Tự động chọn tập tin phù hợp nhất dựa trên vị trí (Vị trí > Ngôn ngữ > Toàn cầu).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ngữ cảnh Linh hoạt`}),` — Hỗ trợ các trình cung cấp vị trí và ngôn ngữ tùy chỉnh, mặc định sử dụng thiết lập toàn cục của `,(0,c.jsx)(n.code,{children:`Geo`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm tạo `,(0,c.jsx)(n.code,{children:`TranslateFile(data, language, location)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: TranslateDataFile`}),` — ánh xạ ban đầu của mã vùng và các trình tải tập tin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language: string | (() => string) = () => Geo.getLanguage()`}),` — ngôn ngữ hiện tại hoặc một hàm trả về giá trị đó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`location: string | (() => string) = () => Geo.getLocation()`}),` — vị trí hiện tại hoặc một hàm trả về giá trị đó.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile, Geo } from '@dxtmisha/functional-basic'

// 1. Khởi tạo đơn giản
const files = new TranslateFile({
  'en-US': () => import('./locales/en-US.json'),
  'vi': () => import('./locales/vi.json'),
  'global': () => import('./locales/global.json')
})

// 2. Sử dụng các trình cung cấp ngữ cảnh tùy chỉnh
const customFiles = new TranslateFile(
  {}, 
  () => 'fr', 
  () => 'fr-FR'
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`lấy-dữ-liệu`,children:`Lấy Dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList(): Promise<TranslateDataFileList | undefined>`}),` — Trả về danh sách các bản dịch cho vị trí hiện tại. Nó kiểm tra bộ nhớ đệm trước, sau đó thử tải từ các trình tải tập tin đã đăng ký.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFile(): boolean`}),` — Kiểm tra xem có trình tải tập tin nào phù hợp với vị trí hoặc ngôn ngữ hiện tại hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLocation(): string`}),` — Trả về chuỗi vị trí hiện tại (phụ thuộc vào trình cung cấp nếu nó là một hàm).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLanguage(): string`}),` — Trả về chuỗi ngôn ngữ hiện tại (phụ thuộc vào trình cung cấp nếu nó là một hàm).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-dữ-liệu`,children:`Quản lý Dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(data: TranslateDataFile): void`}),` — Thêm ánh xạ mã vùng vào các trình tải tập tin dịch tương ứng (các hàm trả về Promise).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các Kiểu Dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafile`,children:(0,c.jsx)(n.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsx)(n.p,{children:`Một tập hợp các hàm tải bất đồng bộ được lập chỉ mục bởi các chuỗi mã vùng/khu vực:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khóa`}),`: Mã vùng (ví dụ: `,(0,c.jsx)(n.code,{children:`'en-US'`}),`, `,(0,c.jsx)(n.code,{children:`'vi'`}),`, `,(0,c.jsx)(n.code,{children:`'global'`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giá trị`}),`: Hàm trả về một `,(0,c.jsx)(n.code,{children:`Promise`}),` của `,(0,c.jsx)(n.code,{children:`TranslateDataFileList`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafilelist`,children:(0,c.jsx)(n.code,{children:`TranslateDataFileList`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một bản ghi khóa-giá trị đơn giản của các bản dịch: `,(0,c.jsx)(n.code,{children:`Record<string, string>`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`tích-hợp-với-translateinstance`,children:`Tích hợp với TranslateInstance`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateFile, TranslateInstance } from '@dxtmisha/functional-basic'

const translationFiles = new TranslateFile({
  'en-US': () => Promise.resolve({ hello: 'Hello US' }),
  'vi': () => Promise.resolve({ hello: 'Xin chào' })
})

const translate = new TranslateInstance(
  '/api/translate',
  'list',
  translationFiles
)

const message = await translate.get('hello')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};