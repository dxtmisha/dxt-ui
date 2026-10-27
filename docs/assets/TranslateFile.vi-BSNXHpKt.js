import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/TranslateFile - Quản Lý Tập Tin Dịch`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-translatefile`,children:`Lớp TranslateFile`}),`
`,(0,c.jsx)(t.p,{children:`Lớp dùng để quản lý dữ liệu dịch thuật từ các tập tin bên ngoài. Nó hỗ trợ tải chậm (lazy loading) các bộ dịch, tự động khớp mã vùng và bộ nhớ đệm nội bộ để tối ưu hóa hiệu suất.`}),`
`,(0,c.jsxs)(t.p,{children:[`Khác với các công cụ tĩnh (static utilities), `,(0,c.jsx)(t.code,{children:`TranslateFile`}),` là một lớp có thể khởi tạo (instantiable), cho phép tạo nhiều bộ dịch với các thiết lập ngôn ngữ và khu vực độc lập.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các Tính Năng Chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tải chậm (Lazy Loading)`}),` — Hỗ trợ tải bất đồng bộ các tập tin dịch chỉ khi cần thiết cho mã vùng hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ nhớ đệm thông minh`}),` — Tự động lưu trữ nội dung các tập tin đã tải, ngăn chặn việc đọc tập tin lặp lại hoặc các yêu cầu mạng không cần thiết.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khử trùng lặp yêu cầu (Deduplication)`}),` — Các yêu cầu đồng thời cho cùng một mã vùng sẽ dùng chung một promise đang thực thi được theo dõi bằng mã định danh duy nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ưu tiên Mã vùng`}),` — Tự động chọn tập tin phù hợp nhất dựa trên vị trí (Vị trí > Ngôn ngữ > Toàn cầu).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ngữ cảnh Linh hoạt`}),` — Hỗ trợ các trình cung cấp vị trí và ngôn ngữ tùy chỉnh, mặc định sử dụng thiết lập toàn cục của `,(0,c.jsx)(t.code,{children:`Geo`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm tạo `,(0,c.jsx)(t.code,{children:`TranslateFile(data, location, language)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data?: TranslateDataFile`}),` — ánh xạ ban đầu của mã vùng và các trình tải tập tin.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`location: string | (() => string) = () => Geo.getLocation()`}),` — vị trí hiện tại hoặc một hàm trả về giá trị đó.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`language: string | (() => string) = () => Geo.getLanguage()`}),` — ngôn ngữ hiện tại hoặc một hàm trả về giá trị đó.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { TranslateFile, Geo } from '@dxtmisha/functional-basic'

// 1. Khởi tạo đơn giản
const files = new TranslateFile({
  'en-US': () => import('./locales/en-US.json'),
  'vi': () => import('./locales/vi.json'),
  'global': () => import('./locales/global.json')
})

// 2. Sử dụng các trình cung cấp ngữ cảnh tùy chỉnh
const customFiles = new TranslateFile(
  {}, 
  () => 'fr-FR', 
  () => 'fr'
)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`lấy-dữ-liệu`,children:`Lấy Dữ liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`async getList(location?: string, language?: string): Promise<TranslateDataFileList | undefined>`}),` — Trả về bản dịch cho vị trí và ngôn ngữ được chỉ định. Nếu bỏ qua tham số, dùng các trình cung cấp hiện tại. Kiểm tra bộ nhớ đệm trước khi tải tập tin.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isFile(location?: string, language?: string): boolean`}),` — Kiểm tra tập tin phù hợp với vị trí và ngôn ngữ được chỉ định; nếu bỏ qua tham số, dùng giá trị hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): string`}),` — Trả về chuỗi vị trí hiện tại (phụ thuộc vào trình cung cấp nếu nó là một hàm).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): string`}),` — Trả về chuỗi ngôn ngữ hiện tại (phụ thuộc vào trình cung cấp nếu nó là một hàm).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-dữ-liệu`,children:`Quản lý Dữ liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(data: TranslateDataFile): void`}),` — Thêm ánh xạ mã vùng vào các trình tải tập tin dịch tương ứng (các hàm trả về Promise).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): this`}),` — Đặt lại bộ nhớ đệm của dữ liệu dịch đã tải và các promise đang hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các Kiểu Dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`translatedatafile`,children:(0,c.jsx)(t.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsx)(t.p,{children:`Một tập hợp các hàm tải bất đồng bộ được lập chỉ mục bởi các chuỗi mã vùng/khu vực:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khóa`}),`: Mã vùng (ví dụ: `,(0,c.jsx)(t.code,{children:`'en-US'`}),`, `,(0,c.jsx)(t.code,{children:`'vi'`}),`, `,(0,c.jsx)(t.code,{children:`'global'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giá trị`}),`: Hàm trả về một `,(0,c.jsx)(t.code,{children:`Promise`}),` của `,(0,c.jsx)(t.code,{children:`TranslateDataFileList`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`translatedatafilelist`,children:(0,c.jsx)(t.code,{children:`TranslateDataFileList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một bản ghi khóa-giá trị đơn giản của các bản dịch: `,(0,c.jsx)(t.code,{children:`Record<string, string>`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`translatepromiseitem`,children:(0,c.jsx)(t.code,{children:`TranslatePromiseItem`})}),`
`,(0,c.jsx)(t.p,{children:`Phần tử dùng để theo dõi các promise tải bản dịch đang hoạt động:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: number`}),` — Mã định danh số duy nhất của yêu cầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`promise: Promise<TranslateDataFileList | undefined>`}),` — Promise tải đang hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`tích-hợp-với-translateinstance`,children:`Tích hợp với TranslateInstance`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`TranslateInstance`}),` ghi lại ngôn ngữ và vị trí khi đưa yêu cầu vào hàng đợi. Các biến mã vùng trong đường dẫn API cũng được thay thế tại thời điểm đó. Các mã vùng khác nhau dùng các nhóm riêng; tập tin được chọn và khóa bộ nhớ đệm giữ nguyên mã vùng ban đầu sau khi tải bất đồng bộ. Phản hồi đến muộn của ngôn ngữ trước vẫn được lưu trong bộ nhớ đệm của ngôn ngữ đó.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { TranslateFile, TranslateInstance } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};