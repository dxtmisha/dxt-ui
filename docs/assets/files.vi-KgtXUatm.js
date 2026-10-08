import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/1. Biểu tượng tệp`}),`
`,(0,c.jsx)(t.h1,{id:`biểu-tượng-tệp-kết-nối-và-tích-hợp`,children:`Biểu tượng tệp: Kết nối và tích hợp`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` cung cấp một hệ thống con biểu tượng và siêu dữ liệu tệp độc lập, không phụ thuộc bên ngoài, được tối ưu hóa cho các ứng dụng web hiện đại và hệ thống thiết kế. Gói bao gồm hơn 85 biểu tượng vector SVG, phân loại định dạng tệp tự động và cung cấp nhiều mô hình kết nối linh hoạt từ từ điển biểu tượng đến nhận diện động và ghi đè biểu tượng tùy chỉnh.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-cách-tiếp-cận-kết-nối`,children:`Các cách tiếp cận kết nối`}),`
`,(0,c.jsx)(t.p,{children:`Tùy theo cấu trúc dự án của bạn, có ba cách chính để kết nối và sử dụng biểu tượng tệp:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Từ điển biểu tượng tệp & Đăng ký (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`)`]}),` — truy xuất biểu tượng theo mã từ từ điển `,(0,c.jsx)(t.code,{children:`fileIcons`}),` hoặc khởi tạo toàn bộ qua `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Nhận diện động qua `,(0,c.jsx)(t.code,{children:`MediaFile`})]}),` — lý tưởng cho chức năng tải tệp lên, danh sách tệp đính kèm và bảng dữ liệu khi đường dẫn hoặc đối tượng `,(0,c.jsx)(t.code,{children:`File`}),` chỉ có trong runtime.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Sổ đăng ký biểu tượng tùy chỉnh qua `,(0,c.jsx)(t.code,{children:`MediaFileIcon`})]}),` — cho phép ứng dụng hoặc giao diện ghi đè các biểu tượng tích hợp sẵn hoặc đăng ký các định dạng độc quyền trên phạm vi toàn cục.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`module-filests-dxtmishamediafiles`,children:[`Module `,(0,c.jsx)(t.code,{children:`files.ts`}),` (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/files`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Module `,(0,c.jsx)(t.code,{children:`files.ts`}),` đóng vai trò là nguồn tài nguyên chính của các biểu tượng vector SVG của tệp. Module này cung cấp:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Từ điển `,(0,c.jsx)(t.code,{children:`fileIcons`}),` tập hợp tất cả các biểu tượng được lập chỉ mục theo mã định dạng và danh mục.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Hàm khởi tạo hàng loạt `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lưu ý: Các biểu tượng riêng lẻ không được xuất dưới dạng biến riêng biệt; toàn bộ biểu tượng được truy cập thông qua từ điển `,(0,c.jsx)(t.code,{children:`fileIcons`}),` hoặc giải quyết động qua các lớp `,(0,c.jsx)(t.code,{children:`MediaFile`}),` / `,(0,c.jsx)(t.code,{children:`MediaFiles`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-hàm-registerfileicons`,children:[`1. Hàm `,(0,c.jsx)(t.code,{children:`registerFileIcons()`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm `,(0,c.jsx)(t.code,{children:`registerFileIcons()`}),` tự động đăng ký tất cả các biểu tượng vector mặc định từ từ điển `,(0,c.jsx)(t.code,{children:`fileIcons`}),` vào sổ đăng ký tĩnh `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),` chỉ với một lệnh gọi:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { registerFileIcons } from '@dxtmisha/media/files'

// Đăng ký toàn bộ biểu tượng tệp mặc định vào MediaFileIcon
registerFileIcons()
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sau khi gọi, `,(0,c.jsx)(t.code,{children:`MediaFileIcon.get(code)`}),` và `,(0,c.jsx)(t.code,{children:`MediaFiles.get(code)`}),` lập tức truy cập được tất cả các biểu tượng vector mặc định trên toàn ứng dụng.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-từ-điển-fileicons`,children:[`2. Từ điển `,(0,c.jsx)(t.code,{children:`fileIcons`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Đối tượng `,(0,c.jsx)(t.code,{children:`fileIcons`}),` là một từ điển có kiểu dữ liệu (`,(0,c.jsx)(t.code,{children:`MediaFileIcons`}),`) ánh xạ mã định dạng, danh mục và mã trung tính sang chuỗi mã SVG:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biểu tượng tệp trung tính mặc định`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['file']`}),` — biểu tượng tệp mặc định chung.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biểu tượng trung tính cấp danh mục`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['archive']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['audio']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['code']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['config']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['database']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['document']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['executable']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['folder']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['font']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['image']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['presentation']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['table']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['text']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['vector']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['video']`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng cụ thể`}),`: `,(0,c.jsx)(t.code,{children:`fileIcons['7z']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['pdf']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['docx']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['png']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['zip']`}),`, `,(0,c.jsx)(t.code,{children:`fileIcons['xlsx']`}),` và hơn 70 định dạng khác.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { fileIcons } from '@dxtmisha/media/files'

// Truy cập trực tiếp qua mã định dạng hoặc danh mục
const pdfSvg = fileIcons['pdf']
const documentCategorySvg = fileIcons['document']
const defaultFileSvg = fileIcons['file']
`})}),`
`,(0,c.jsx)(t.p,{children:`Trong template Vue 3:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="file-item">
    <span class="file-icon" v-html="fileIcons['pdf']" />
    <span class="file-name">Bao_Cao_Tai_Chinh.pdf</span>
  </div>
</template>

<script setup lang="ts">
import { fileIcons } from '@dxtmisha/media/files'
<\/script>
`})}),`
`,(0,c.jsxs)(t.h2,{id:`nhận-diện-động-qua-mediafile`,children:[`Nhận diện động qua `,(0,c.jsx)(t.code,{children:`MediaFile`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Khi xử lý tệp do người dùng tải lên, liên kết từ xa hoặc bản ghi từ máy chủ, hãy sử dụng lớp `,(0,c.jsx)(t.code,{children:`MediaFile`}),`. Lớp này phân tích tên tệp, đường dẫn và đối tượng `,(0,c.jsx)(t.code,{children:`File`}),` để tự động xác định phần mở rộng, danh mục và biểu tượng SVG tương ứng:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFile, MediaFileCategory } from '@dxtmisha/media'

// Từ URL từ xa có tham số truy vấn và đoạn mã hash
const remoteFile = new MediaFile('https://cdn.example.com/docs/spec.2026.docx?v=3#summary')

console.log(remoteFile.name)        // 'spec.2026.docx'
console.log(remoteFile.baseName)    // 'spec.2026'
console.log(remoteFile.extension)   // 'docx'
console.log(remoteFile.category)    // MediaFileCategory.document
console.log(remoteFile.isDocument()) // true

// Chuỗi mã SVG biểu tượng đã được giải quyết (dùng biểu tượng tùy chỉnh nếu có, hoặc SVG mặc định)
const svgMarkup = remoteFile.icon
`})}),`
`,(0,c.jsxs)(t.h3,{id:`hỗ-trợ-đối-tượng-file-của-trình-duyệt`,children:[`Hỗ trợ đối tượng `,(0,c.jsx)(t.code,{children:`File`}),` của trình duyệt`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MediaFile`}),` nhận diện tự nhiên các đối tượng `,(0,c.jsx)(t.code,{children:`File`}),` chuẩn của trình duyệt (ví dụ từ `,(0,c.jsx)(t.code,{children:`<input type="file">`}),` hoặc vùng kéo thả Dropzone):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const media = new MediaFile(file)

    console.log(media.name)        // Tên tệp từ trình duyệt
    console.log(media.mime)        // MIME type chuẩn (ví dụ: 'image/png')
    console.log(media.isImage())   // true
    console.log(media.icon)        // Mã SVG biểu tượng vector
  }
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`đăng-ký-biểu-tượng-tùy-chỉnh-với-mediafileicon`,children:[`Đăng ký biểu tượng tùy chỉnh với `,(0,c.jsx)(t.code,{children:`MediaFileIcon`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu dự án yêu cầu bộ biểu tượng riêng theo nhận diện thương hiệu hoặc cần hỗ trợ định dạng tệp chuyên biệt, bạn có thể đăng ký toàn cục bằng `,(0,c.jsx)(t.code,{children:`MediaFileIcon`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`đăng-ký-một-biểu-tượng-đơn-lẻ`,children:`Đăng ký một biểu tượng đơn lẻ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

// Đăng ký biểu tượng SVG cho một phần mở rộng hoặc mã định dạng
MediaFileIcon.add('fig', '<svg viewBox="0 0 24 24"><path d="..."/></svg>')

// Kiểm tra và lấy biểu tượng tùy chỉnh
if (MediaFileIcon.has('fig')) {
  console.log(MediaFileIcon.get('fig'))
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`đăng-ký-hàng-loạt-biểu-tượng`,children:`Đăng ký hàng loạt biểu tượng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFileIcon } from '@dxtmisha/media'

MediaFileIcon.addList({
  sketch: '<svg class="custom-sketch">...</svg>',
  blender: '<svg class="custom-blend">...</svg>',
  cad: '<svg class="custom-cad">...</svg>'
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sau khi đăng ký, bất kỳ lệnh gọi `,(0,c.jsx)(t.code,{children:`new MediaFile('design.sketch').icon`}),` hoặc `,(0,c.jsx)(t.code,{children:`MediaFiles.get('sketch')`}),` nào cũng sẽ tự động trả về biểu tượng SVG tùy chỉnh của bạn.`]}),`
`,(0,c.jsxs)(t.h2,{id:`tra-cứu-danh-mục-qua-mediafiles`,children:[`Tra cứu danh mục qua `,(0,c.jsx)(t.code,{children:`MediaFiles`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`MediaFiles`}),` cung cấp các phương thức tĩnh để kiểm tra danh mục định dạng tệp tích hợp sẵn mà không cần tạo thực thể:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaFiles, MediaFileCategory } from '@dxtmisha/media'

// Kiểm tra xem chuỗi có phải là đường dẫn hoặc liên kết hay không
MediaFiles.isLink('https://example.com/asset.zip') // true
MediaFiles.isLink('archive.zip')                   // false

// Lấy thông tin cấu hình theo phần mở rộng
const item = MediaFiles.get('xlsx')
console.log(item?.name)       // 'Excel'
console.log(item?.category)   // 'table'
console.log(item?.extensions) // ['xls', 'xlsx']

// Lấy biểu tượng trung tính của danh mục (ví dụ cho ảnh hoặc bảng chưa rõ định dạng)
const categoryNeutral = MediaFiles.getByCategory(MediaFileCategory.image)

// Biểu tượng trung tính mặc định chung
const defaultNeutral = MediaFiles.getNeutral()
`})}),`
`,(0,c.jsxs)(t.h2,{id:`tích-hợp-với-dxtmishafunctional-basic-icons`,children:[`Tích hợp với `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),` (`,(0,c.jsx)(t.code,{children:`Icons`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Bạn có thể đăng ký biểu tượng tệp vào sổ đăng ký `,(0,c.jsx)(t.code,{children:`Icons`}),` toàn cục để sử dụng thống nhất trên tất cả các thành phần giao diện:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional-basic'
import { fileIcons } from '@dxtmisha/media/files'

// Đăng ký vào kho biểu tượng toàn cục từ từ điển fileIcons
Icons.add('file-pdf', fileIcons['pdf'])
Icons.add('file-zip', fileIcons['zip'])

// Truy xuất ở bất kỳ đâu trong ứng dụng
const iconSvg = await Icons.get('file-pdf')
`})}),`
`,(0,c.jsx)(t.h2,{id:`danh-mục-tệp-được-hỗ-trợ`,children:`Danh mục tệp được hỗ trợ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Archive (`,(0,c.jsx)(t.code,{children:`archive`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`zip`}),`, `,(0,c.jsx)(t.code,{children:`rar`}),`, `,(0,c.jsx)(t.code,{children:`7z`}),`, `,(0,c.jsx)(t.code,{children:`tar`}),`, `,(0,c.jsx)(t.code,{children:`gz`}),`, `,(0,c.jsx)(t.code,{children:`iso`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Audio (`,(0,c.jsx)(t.code,{children:`audio`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`mp3`}),`, `,(0,c.jsx)(t.code,{children:`wav`}),`, `,(0,c.jsx)(t.code,{children:`flac`}),`, `,(0,c.jsx)(t.code,{children:`aac`}),`, `,(0,c.jsx)(t.code,{children:`ogg`}),`, `,(0,c.jsx)(t.code,{children:`m4a`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Code (`,(0,c.jsx)(t.code,{children:`code`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`ts`}),`, `,(0,c.jsx)(t.code,{children:`js`}),`, `,(0,c.jsx)(t.code,{children:`json`}),`, `,(0,c.jsx)(t.code,{children:`html`}),`, `,(0,c.jsx)(t.code,{children:`css`}),`, `,(0,c.jsx)(t.code,{children:`py`}),`, `,(0,c.jsx)(t.code,{children:`cpp`}),`, `,(0,c.jsx)(t.code,{children:`php`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Document (`,(0,c.jsx)(t.code,{children:`document`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`pdf`}),`, `,(0,c.jsx)(t.code,{children:`doc`}),`, `,(0,c.jsx)(t.code,{children:`docx`}),`, `,(0,c.jsx)(t.code,{children:`odt`}),`, `,(0,c.jsx)(t.code,{children:`rtf`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Image (`,(0,c.jsx)(t.code,{children:`image`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`png`}),`, `,(0,c.jsx)(t.code,{children:`jpg`}),`, `,(0,c.jsx)(t.code,{children:`jpeg`}),`, `,(0,c.jsx)(t.code,{children:`gif`}),`, `,(0,c.jsx)(t.code,{children:`svg`}),`, `,(0,c.jsx)(t.code,{children:`webp`}),`, `,(0,c.jsx)(t.code,{children:`bmp`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Presentation (`,(0,c.jsx)(t.code,{children:`presentation`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`ppt`}),`, `,(0,c.jsx)(t.code,{children:`pptx`}),`, `,(0,c.jsx)(t.code,{children:`odp`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Table (`,(0,c.jsx)(t.code,{children:`table`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`xls`}),`, `,(0,c.jsx)(t.code,{children:`xlsx`}),`, `,(0,c.jsx)(t.code,{children:`csv`}),`, `,(0,c.jsx)(t.code,{children:`ods`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Video (`,(0,c.jsx)(t.code,{children:`video`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`mp4`}),`, `,(0,c.jsx)(t.code,{children:`webm`}),`, `,(0,c.jsx)(t.code,{children:`mkv`}),`, `,(0,c.jsx)(t.code,{children:`avi`}),`, `,(0,c.jsx)(t.code,{children:`mov`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`System (`,(0,c.jsx)(t.code,{children:`system`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`exe`}),`, `,(0,c.jsx)(t.code,{children:`apk`}),`, `,(0,c.jsx)(t.code,{children:`dmg`}),`, `,(0,c.jsx)(t.code,{children:`app`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};