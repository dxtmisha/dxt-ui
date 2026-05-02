import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/StorageCallback - Storage Callbacks`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-storagecallback`,children:`Lớp StorageCallback`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích để quản lý các nhóm hàm callback liên kết với các khóa lưu trữ cụ thể. Nó cho phép nhiều thành phần hoặc chức năng phản hồi các thay đổi hoặc kích hoạt lưu trữ một cách phối hợp, bất đồng bộ.`}),`
`,(0,c.jsx)(n.h2,{id:`các-đặc-điểm-chính`,children:`Các đặc điểm chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Các thực thể có tên`}),` — thực hiện mô hình singleton, trong đó các thực thể được truy xuất theo tên và nhóm, đảm bảo rằng các phần khác nhau của ứng dụng chia sẻ cùng một danh sách callback cho cùng một tài nguyên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân tách theo nhóm`}),` — cho phép tách biệt các danh sách callback theo nhóm (ví dụ: 'main', 'global', 'local'), ngăn chặn xung đột tên giữa các mô-đun khác nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi bất đồng bộ`}),` — hỗ trợ các callback dựa trên `,(0,c.jsx)(n.code,{children:`Promise`}),` và thực thi chúng theo trình tự trong quá trình `,(0,c.jsx)(n.code,{children:`run`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi trạng thái tải`}),` — cung cấp cờ `,(0,c.jsx)(n.code,{children:`loading`}),` có sẵn, được quản lý tự động trong giai đoạn thực thi callback.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm tạo `,(0,c.jsx)(n.code,{children:`StorageCallback(name, group)`}),` hoặc sử dụng phương thức tĩnh `,(0,c.jsx)(n.code,{children:`getInstance(name, group)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`các-ràng-buộc-generic`,children:`Các ràng buộc Generic`}),`
`,(0,c.jsx)(n.p,{children:`Để đảm bảo kiểu dữ liệu nghiêm ngặt, lớp hỗ trợ các generic sau:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T = any`}),` — Kiểu dữ liệu được truyền cho các callback.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Callback = (value: T) => void | Promise<void>`}),` — Cấu trúc hàm callback.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — định danh duy nhất cho mục nhập lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group: string = 'main'`}),` — phân loại tùy chọn để ngăn chặn xung đột tên.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StorageCallback } from '@dxtmisha/functional-basic'

// 1. Khởi tạo đơn giản (nhóm mặc định là 'main')
const storage = new StorageCallback('user-data')

// 2. Sử dụng phương thức tĩnh getInstance
const sharedStorage = StorageCallback.getInstance('settings', 'global')

// 3. Sử dụng generic để kiểm soát kiểu dữ liệu
const numberStorage = new StorageCallback<number>('counter')
numberStorage.addCallback((val) => console.log(val + 1))
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(): string`}),` — trả về tên của thực thể lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isLoading(): boolean`}),` — trả về trạng thái tải hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getLoading(): boolean`}),` — trả về trạng thái tải hiện tại (tương tự `,(0,c.jsx)(n.code,{children:`isLoading`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý`,children:`Quản lý`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addCallback(callback: Callback, isOnce?: boolean): this`}),` — thêm một callback mới vào danh sách thực thi. Nếu `,(0,c.jsx)(n.code,{children:`isOnce: true`}),`, callback sẽ bị xóa sau lần thực thi đầu tiên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeCallback(callback: Callback): this`}),` — xóa một callback cụ thể khỏi danh sách.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển-control`,children:`Điều khiển (Control)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`preparation(): this`}),` — chuẩn bị trạng thái trước khi thực thi (đặt `,(0,c.jsx)(n.code,{children:`loading`}),` thành `,(0,c.jsx)(n.code,{children:`true`}),`). Được sử dụng thủ công khi bắt đầu các hoạt động bất đồng bộ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`run(value: T): Promise<this>`}),` — thực thi tất cả các callback theo trình tự với giá trị được cung cấp. Đặt `,(0,c.jsx)(n.code,{children:`loading`}),` về `,(0,c.jsx)(n.code,{children:`false`}),` khi bắt đầu thực thi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-trạng-thái-tải-thủ-công`,children:`Quản lý trạng thái tải thủ công`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi dữ liệu được lấy bất đồng bộ từ nguồn bên ngoài (ví dụ: Figma storage), bạn có thể quản lý trạng thái `,(0,c.jsx)(n.code,{children:`loading`}),` thủ công để điều phối nhiều yêu cầu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const storage = new StorageCallback('figma-data')

// 1. Kiểm tra nếu không phải đang tải
if (!storage.isLoading()) {
  // 2. Thiết lập trạng thái đang tải
  storage.preparation()
  
  // 3. Yêu cầu dữ liệu
  fetchFromFigma((data) => {
    // 4. Thực thi callback (run sẽ đưa loading về false)
    storage.run(data)
  })
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`callback-một-lần`,children:`Callback một lần`}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn chỉ cần một hàm kích hoạt một lần (ví dụ: để nạp dữ liệu ban đầu), hãy sử dụng cờ `,(0,c.jsx)(n.code,{children:`isOnce`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const storage = new StorageCallback('initial-data')

storage.addCallback((data) => {
  console.log('Đã thực thi một lần:', data)
}, true)

await storage.run('update 1') // 'Đã thực thi một lần: update 1'
await storage.run('update 2') // (không có đầu ra, callback đã bị xóa)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};