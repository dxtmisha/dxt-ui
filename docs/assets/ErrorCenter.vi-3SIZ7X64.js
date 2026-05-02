import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ErrorCenter - Quản lý lỗi`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-errorcenter`,children:`Lớp ErrorCenter`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenter`}),` là công cụ trung tâm để quản lý tất cả các lỗi trong ứng dụng. Nó cho phép bạn đăng ký các nguyên nhân lỗi có thể xảy ra ở một nơi, cấu hình phản ứng với chúng (ví dụ: hiển thị thông báo) và kích hoạt chúng từ bất kỳ phần nào của mã.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này hoạt động như một vỏ bọc tĩnh (Static Bridge), chuyển tất cả các yêu cầu đến một `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` duy nhất.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`on(cause: ErrorCenterCauseItem): void`}),` — Bắt đầu quá trình xử lý. Tìm kiếm dữ liệu trong sổ đăng ký, hợp nhất chúng và gọi các callback thích hợp.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xác-minh`,children:`Xác minh`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Kiểm tra xem lỗi đã được đăng ký chưa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Trả về dữ liệu lỗi từ sổ đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): void`}),` — Thêm một nguyên nhân lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): void`}),` — Thêm một danh sách lỗi (đăng ký hàng loạt).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): void`}),` — Đăng ký phản ứng cho một nhóm lỗi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): void`}),` — Đăng ký hàng loạt nhiều trình xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`bổ-trợ`,children:`Bổ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ErrorCenterInstance`}),` — Trả về thực thể nội bộ của lớp.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tên nhóm (ví dụ: 'api', 'auth') hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` cho trình xử lý chung.`]}),`
`,(0,c.jsx)(n.h4,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đối tượng mô tả lỗi: `,(0,c.jsx)(n.code,{children:`group`}),`, `,(0,c.jsx)(n.code,{children:`code`}),` (bắt buộc), `,(0,c.jsx)(n.code,{children:`priority`}),`, `,(0,c.jsx)(n.code,{children:`label`}),`, `,(0,c.jsx)(n.code,{children:`message`}),`, `,(0,c.jsx)(n.code,{children:`details`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`hướng-dẫn-sử-dụng`,children:`Hướng dẫn sử dụng`}),`
`,(0,c.jsx)(n.h3,{id:`bước-1-đăng-ký-registry`,children:`Bước 1: Đăng ký (Registry)`}),`
`,(0,c.jsx)(n.p,{children:`Lập một từ điển lỗi để lưu trữ văn bản tách biệt với mã.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.add({
  group: 'auth',
  code: 'LOGIN_FAILED',
  label: 'Đăng nhập thất bại',
  message: 'Mật khẩu không hợp lệ.'
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`bước-2-đăng-ký-nhận-lỗi-handlers`,children:`Bước 2: Đăng ký nhận lỗi (Handlers)`}),`
`,(0,c.jsx)(n.p,{children:`Chỉ định cách ứng dụng sẽ phản ứng với một nhóm lỗi.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.addHandler('auth', (cause) => {
  alert(cause.message);
});
`})}),`
`,(0,c.jsx)(n.h3,{id:`bước-3-kích-hoạt-execution`,children:`Bước 3: Kích hoạt (Execution)`}),`
`,(0,c.jsx)(n.p,{children:`Kích hoạt lỗi bằng mã và nhóm của nó.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`ErrorCenter.on({ group: 'auth', code: 'LOGIN_FAILED' });
`})}),`
`,(0,c.jsx)(n.h2,{id:`nguyên-nhân-lỗi-tiêu-chuẩn`,children:`Nguyên nhân lỗi tiêu chuẩn`}),`
`,(0,c.jsx)(n.p,{children:`Lớp đã chứa các mô tả sẵn có cho các tình huống phổ biến.`}),`
`,(0,c.jsxs)(n.h4,{id:`nhóm-api-api`,children:[`Nhóm API (`,(0,c.jsx)(n.code,{children:`api`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Được sử dụng cho các lỗi yêu cầu mạng.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`forbidden`}),` — Truy cập bị cấm (403).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`notFound`}),` — Không tìm thấy tài nguyên (404).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`offline`}),` — Không có kết nối internet.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`server`}),` — Lỗi máy chủ nội bộ (500).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`timeout`}),` — Hết thời gian yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`unauthorized`}),` — Lỗi xác thực (401).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`unknown`}),` — Lỗi không xác định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`cacheClear`}),`, `,(0,c.jsx)(n.strong,{children:`cacheGet`}),`, `,(0,c.jsx)(n.strong,{children:`cacheRemove`}),`, `,(0,c.jsx)(n.strong,{children:`cacheSet`}),` — Lỗi khi làm việc với bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`nhóm-intl-intl`,children:[`Nhóm Intl (`,(0,c.jsx)(n.code,{children:`intl`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Lỗi trong quá trình định dạng dữ liệu (ngày tháng, số, v.v.).`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`datetime`}),`, `,(0,c.jsx)(n.strong,{children:`display`}),`, `,(0,c.jsx)(n.strong,{children:`number`}),`, `,(0,c.jsx)(n.strong,{children:`plural`}),`, `,(0,c.jsx)(n.strong,{children:`relative`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`invalid`}),` — Ngày không hợp lệ hoặc định dạng sai.`]}),`
`]}),`
`,(0,c.jsxs)(n.h4,{id:`nhóm-storage-storage`,children:[`Nhóm Storage (`,(0,c.jsx)(n.code,{children:`storage`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Lỗi khi tương tác với bộ lưu trữ cục bộ hoặc máy chủ.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`context`}),` — Thiếu ngữ cảnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`error`}),` — Lỗi đọc/ghi chung.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`các-nhóm-khác`,children:`Các nhóm khác`}),`
`,(0,c.jsxs)(n.p,{children:[`Các nhóm này sử dụng mã lỗi chung `,(0,c.jsx)(n.code,{children:`error`}),`. Việc kích hoạt được thực hiện thông qua `,(0,c.jsx)(n.code,{children:`ErrorCenter.on({ group: 'tên_nhóm', code: 'error' })`}),`.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`broadcast`}),` — Lỗi trong việc trao đổi dữ liệu giữa các tab trình duyệt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`hydration`}),` — Lỗi trong quá trình đồng bộ hóa dữ liệu giữa máy chủ và máy khách.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`share`}),` — Lỗi khi cố gắng chia sẻ nội dung (Sharing API).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`transformation`}),` — Lỗi trong quá trình chuyển đổi hoặc phân tích cú pháp dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`tích-hợp-với-hệ-thống-thông-báo`,children:`Tích hợp với hệ thống thông báo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// Thiết lập một lần khi khởi động ứng dụng
ErrorCenter.addHandler('api', (cause) => {
  Toast.show(cause.label || 'Lỗi', cause.message);
});

// Sử dụng trong bất kỳ dịch vụ nào
async function loadData() {
  try {
    const data = await fetch('/api');
  } catch (e) {
    ErrorCenter.on({ group: 'api', code: 'server', details: e });
  }
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`làm-việc-với-các-nhóm-tùy-chỉnh`,children:`Làm việc với các nhóm tùy chỉnh`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Đăng ký tức thì
ErrorCenter.on({
  group: 'upload',
  code: 'SIZE_LIMIT',
  label: 'Tệp quá lớn',
  message: 'Tối đa 5MB'
});
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};