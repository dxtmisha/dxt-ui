import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/Classes/MediaFile - Quản lý siêu dữ liệu và biểu tượng tệp`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-mediafile`,children:`Lớp MediaFile`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`MediaFile`}),` là một tiện ích gọn nhẹ được thiết kế để phân tích đường dẫn tệp, URL, tên tệp, mã loại tệp và đối tượng `,(0,c.jsx)(t.code,{children:`File`}),`. Lớp này hỗ trợ phân giải biểu tượng SVG của tệp, trích xuất phần mở rộng và tên cơ sở, đồng thời phân loại tệp thành các danh mục (hình ảnh, video, tài liệu, lưu trữ, v.v.) dựa trên `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` và `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân tích cú pháp tệp toàn diện`}),` — xử lý liền mạch đối tượng `,(0,c.jsx)(t.code,{children:`File`}),`, URL đầy đủ có tham số truy vấn và đoạn mã hash, đường dẫn tuyệt đối/tương đối, tên tệp, phần mở rộng có dấu chấm (`,(0,c.jsx)(t.code,{children:`.png`}),`) và mã loại thuần túy (`,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân giải biểu tượng SVG`}),` — ánh xạ trực tiếp từ thư viện tích hợp hơn 85 biểu tượng tệp vector, tự động dự phòng về biểu tượng danh mục hoặc biểu tượng trung tính mặc định chung khi không nhận diện được định dạng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ biểu tượng tùy chỉnh`}),` — tự động áp dụng các biểu tượng SVG tùy chỉnh đã được đăng ký trong `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phân loại danh mục và kiểm tra định dạng`}),` — xác định ngay lập tức danh mục tệp và cung cấp các hàm logic hỗ trợ (`,(0,c.jsx)(t.code,{children:`isImage`}),`, `,(0,c.jsx)(t.code,{children:`isVideo`}),`, `,(0,c.jsx)(t.code,{children:`isDocument`}),`, `,(0,c.jsx)(t.code,{children:`isStandard`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Không có phụ thuộc runtime`}),` — hoàn toàn dựa trên xử lý chuỗi và tra cứu danh mục, an toàn cho môi trường SSR và isomorphic.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một thực thể bằng cách cung cấp đối tượng `,(0,c.jsx)(t.code,{children:`File`}),`, liên kết tệp, URL, tên tệp hoặc mã loại tệp, kèm theo tham số MIME type tùy chọn:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile } from '@dxtmisha/media'

// Từ URL đầy đủ
const fileFromUrl = new MediaFile('https://example.com/assets/report.pdf?v=2#page=1')

// Từ tên tệp
const fileFromName = new MediaFile('archive.tar.gz')

// Từ phần mở rộng hoặc mã loại
const fileFromCode = new MediaFile('png')

// Từ đối tượng File trong trình duyệt
const fileFromInput = new MediaFile(uploadedFile)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thuộc-tính-và-đặc-tính-tệp`,children:`Thuộc tính và đặc tính tệp`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`baseName: string`}),` — trả về tên tệp không bao gồm phần mở rộng (ví dụ: `,(0,c.jsx)(t.code,{children:`'archive.tar'`}),` cho `,(0,c.jsx)(t.code,{children:`'archive.tar.gz'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category: MediaFileCategory | undefined`}),` — trả về giá trị enum danh mục tệp (ví dụ: `,(0,c.jsx)(t.code,{children:`'image'`}),`, `,(0,c.jsx)(t.code,{children:`'video'`}),`, `,(0,c.jsx)(t.code,{children:`'document'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extension: string`}),` — trả về phần mở rộng tệp viết thường đã được chuẩn hóa không có dấu chấm (ví dụ: `,(0,c.jsx)(t.code,{children:`'png'`}),`, `,(0,c.jsx)(t.code,{children:`'pdf'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions: string[] | undefined`}),` — trả về danh sách các phần mở rộng được hỗ trợ liên kết với định dạng tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`file: File | undefined`}),` — trả về đối tượng `,(0,c.jsx)(t.code,{children:`File`}),` của trình duyệt nếu thực thể được khởi tạo bằng đối tượng File.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group: MediaFileGroup | undefined`}),` — trả về nhóm phân loại của phần tử tệp (`,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon: string`}),` — trả về chuỗi mã SVG của biểu tượng đã được phân giải.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: MediaFileItem | undefined`}),` — trả về mục siêu dữ liệu hoàn chỉnh từ danh mục tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string | undefined`}),` — trả về kiểu MIME được phát hiện hoặc được chỉ định rõ ràng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — trả về tên tệp đầy đủ được trích xuất từ đường dẫn hoặc URL (đã loại bỏ query parameter và hash).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-tra-danh-mục-và-phân-loại`,children:`Kiểm tra danh mục và phân loại`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isArchive(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp thuộc danh mục lưu trữ (`,(0,c.jsx)(t.code,{children:`zip`}),`, `,(0,c.jsx)(t.code,{children:`rar`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`, `,(0,c.jsx)(t.code,{children:`tar`}),`, `,(0,c.jsx)(t.code,{children:`gz`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isAudio(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp thuộc danh mục âm thanh (`,(0,c.jsx)(t.code,{children:`mp3`}),`, `,(0,c.jsx)(t.code,{children:`wav`}),`, `,(0,c.jsx)(t.code,{children:`flac`}),`, `,(0,c.jsx)(t.code,{children:`aac`}),`, `,(0,c.jsx)(t.code,{children:`ogg`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCategory(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp đại diện cho biểu tượng trung tính cấp danh mục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isCode(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp là mã nguồn hoặc tệp dữ liệu (`,(0,c.jsx)(t.code,{children:`ts`}),`, `,(0,c.jsx)(t.code,{children:`js`}),`, `,(0,c.jsx)(t.code,{children:`json`}),`, `,(0,c.jsx)(t.code,{children:`html`}),`, `,(0,c.jsx)(t.code,{children:`css`}),`, `,(0,c.jsx)(t.code,{children:`py`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isDocument(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp là tài liệu văn bản (`,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`doc`}),`, `,(0,c.jsx)(t.code,{children:`docx`}),`, `,(0,c.jsx)(t.code,{children:`odt`}),`, `,(0,c.jsx)(t.code,{children:`rtf`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isImage(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp là hình ảnh (`,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`jpg`}),`, `,(0,c.jsx)(t.code,{children:`jpeg`}),`, `,(0,c.jsx)(t.code,{children:`gif`}),`, `,(0,c.jsx)(t.code,{children:`svg`}),`, `,(0,c.jsx)(t.code,{children:`webp`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isNeutral(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp đại diện cho biểu tượng tệp trung tính mặc định chung.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isPresentation(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp là bài thuyết trình (`,(0,c.jsx)(t.code,{children:`ppt`}),`, `,(0,c.jsx)(t.code,{children:`pptx`}),`, `,(0,c.jsx)(t.code,{children:`odp`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isStandard(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp đại diện cho định dạng hoặc phần mở rộng tệp tiêu chuẩn cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isTable(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp là bảng tính hoặc dữ liệu dạng bảng (`,(0,c.jsx)(t.code,{children:`xls`}),`, `,(0,c.jsx)(t.code,{children:`xlsx`}),`, `,(0,c.jsx)(t.code,{children:`csv`}),`, `,(0,c.jsx)(t.code,{children:`ods`}),`, v.v.).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isVideo(): boolean`}),` — trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp là video (`,(0,c.jsx)(t.code,{children:`mp4`}),`, `,(0,c.jsx)(t.code,{children:`webm`}),`, `,(0,c.jsx)(t.code,{children:`mkv`}),`, `,(0,c.jsx)(t.code,{children:`avi`}),`, `,(0,c.jsx)(t.code,{children:`mov`}),`, v.v.).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`mediafilecategory`,children:`MediaFileCategory`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum đại diện cho các danh mục tệp: `,(0,c.jsx)(t.code,{children:`archive`}),`, `,(0,c.jsx)(t.code,{children:`audio`}),`, `,(0,c.jsx)(t.code,{children:`code`}),`, `,(0,c.jsx)(t.code,{children:`config`}),`, `,(0,c.jsx)(t.code,{children:`database`}),`, `,(0,c.jsx)(t.code,{children:`document`}),`, `,(0,c.jsx)(t.code,{children:`executable`}),`, `,(0,c.jsx)(t.code,{children:`folder`}),`, `,(0,c.jsx)(t.code,{children:`font`}),`, `,(0,c.jsx)(t.code,{children:`image`}),`, `,(0,c.jsx)(t.code,{children:`presentation`}),`, `,(0,c.jsx)(t.code,{children:`system`}),`, `,(0,c.jsx)(t.code,{children:`table`}),`, `,(0,c.jsx)(t.code,{children:`text`}),`, `,(0,c.jsx)(t.code,{children:`vector`}),`, `,(0,c.jsx)(t.code,{children:`video`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafilegroup`,children:`MediaFileGroup`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum đại diện cho các nhóm phân loại phần tử tệp: `,(0,c.jsx)(t.code,{children:`neutral`}),`, `,(0,c.jsx)(t.code,{children:`category`}),`, `,(0,c.jsx)(t.code,{children:`standard`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`mediafileitem`,children:`MediaFileItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — mã tệp duy nhất hoặc phần mở rộng chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên hiển thị trực quan của định dạng tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extensions?: string[]`}),` — danh sách các phần mở rộng tệp được hỗ trợ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime?: string`}),` — kiểu MIME tương ứng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — chuỗi mã SVG biểu tượng đã được giải quyết hoặc liên kết URL.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`category?: MediaFileCategoryValue`}),` — giá trị enum danh mục tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: MediaFileGroupValue`}),` — giá trị enum nhóm phân loại phần tử.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile, MediaFileCategory } from '@dxtmisha/media'

const file = new MediaFile('https://domain.com/downloads/invoice.2026.pdf?download=true#top')

console.log(file.name) // 'invoice.2026.pdf'
console.log(file.baseName) // 'invoice.2026'
console.log(file.extension) // 'pdf'
console.log(file.category) // MediaFileCategory.document
console.log(file.isDocument()) // true
console.log(file.isImage()) // false

// Chuỗi SVG biểu tượng sẵn sàng để hiển thị
const svgString = file.icon
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};