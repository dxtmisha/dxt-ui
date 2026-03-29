import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/# Trung tâm Lỗi (Error Center)`}),`
`,(0,c.jsx)(n.h1,{id:`trung-tâm-lỗi`,children:`Trung tâm Lỗi`}),`
`,(0,c.jsxs)(n.p,{children:[`Mô-đun `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` cung cấp một hệ thống tập trung, mạnh mẽ để quản lý các lỗi ứng dụng. Nó cho phép bạn tạo ánh xạ dạng từ điển giữa mã lỗi và thông báo thân thiện với người dùng, phân loại lỗi thành các nhóm và triển khai các bộ lắng nghe (listener) mục tiêu để xử lý lỗi chính xác nơi cần thiết.`]}),`
`,(0,c.jsx)(n.h2,{id:`bắt-đầu-nhanh`,children:`Bắt đầu nhanh`}),`
`,(0,c.jsxs)(n.p,{children:[`Cách nhanh nhất để bắt đầu là sử dụng lớp tĩnh `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),`, hoạt động như một thực thể (singleton) toàn cục cho toàn bộ ứng dụng của bạn.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// 1. Thêm định nghĩa lỗi của bạn
ErrorCenter.add({
  group: 'network',
  code: '503',
  label: 'Dịch vụ không khả dụng',
  message: 'Máy chủ hiện không thể xử lý yêu cầu.'
})

// 2. Gắn bộ lắng nghe vào các nhóm lỗi cụ thể
ErrorCenter.addHandler('network', (cause) => {
  // Thực thi phản hồi UI (ví dụ: hiển thị thông báo)
  alert(\`[LỖI MẠNG] \${cause.label}: \${cause.message}\`)
})

// 3. Kích hoạt lỗi ở bất kỳ đâu trong mã ứng dụng của bạn
ErrorCenter.on({ group: 'network', code: '503' })
`})}),`
`,(0,c.jsxs)(n.h2,{id:`kiến-trúc-errorcenter-và-errorcenterinstance`,children:[`Kiến trúc: `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` và `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`})]}),`
`,(0,c.jsx)(n.p,{children:`Mô-đun được xây dựng trên hai lớp chính: một lớp bọc tĩnh cầu nối (static bridge) và một cỗ máy cốt lõi có thể khởi tạo. Hiểu rõ thời điểm sử dụng lớp nào là yếu tố then chốt để duy trì kiến trúc rõ ràng.`}),`
`,(0,c.jsxs)(n.h3,{id:`khi-nào-sử-dụng-errorcenter-lớp-bọc-tĩnh`,children:[`Khi nào sử dụng `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` (Lớp bọc tĩnh)`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` là một lớp tĩnh có thể truy cập toàn cục, quản lý lỗi ở mức độ ứng dụng. Về mặt nội bộ, nó tự động khởi tạo một `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` duy nhất.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trường hợp sử dụng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Yêu cầu mạng toàn cục:`}),` Bắt các mã trạng thái HTTP không được xử lý (`,(0,c.jsx)(n.code,{children:`401`}),`, `,(0,c.jsx)(n.code,{children:`403`}),`, `,(0,c.jsx)(n.code,{children:`500`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo ứng dụng:`}),` Đăng ký các ranh giới xác thực cốt lõi hoặc tình trạng phiên hết hạn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa Micro-frontend:`}),` Chia sẻ ngữ cảnh lỗi toàn cục mà không cần truyền thuộc tính (props) hay tiêm phụ thuộc (dependencies).`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`khi-nào-sử-dụng-new-errorcenterinstance`,children:[`Khi nào sử dụng `,(0,c.jsx)(n.code,{children:`new ErrorCenterInstance()`})]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` là cỗ máy nền tảng thực sự quản lý các trạng thái và trình xử lý. Bạn có thể khởi tạo trực tiếp nó để tạo các vùng quản lý lỗi `,(0,c.jsx)(n.strong,{children:`bị cô lập`}),` (isolated).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trường hợp sử dụng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Biểu mẫu & Xác thực phức tạp:`}),` Một component biểu mẫu cụ thể muốn theo dõi và phản hồi chính xác các lỗi xác thực cục bộ của nó mà không làm ô nhiễm nhật ký lỗi toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hệ thống phụ dạng mô-đun:`}),` Các plugin, widget độc lập hoặc tích hợp bên thứ ba chạy bên trong ứng dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiểm thử đơn vị (Unit Testing):`}),` Bắt chước (mock) an toàn và kiểm tra hành vi của các bộ lắng nghe lỗi mà không gây ra tác dụng phụ giữa các bộ kiểm thử.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

// Môi trường lỗi cô lập cho một mô-đun cụ thể
const formErrorCenter = new ErrorCenterInstance()

formErrorCenter.add({
  group: 'validation',
  code: 'missing_field',
  message: 'Trường này là bắt buộc.'
})

formErrorCenter.addHandler('validation', (cause) => {
  // Cập nhật trạng thái UI cục bộ dành riêng cho biểu mẫu này
  showLocalFieldError(cause)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};