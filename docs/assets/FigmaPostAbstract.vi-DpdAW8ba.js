import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma/Classes/FigmaPostAbstract - Lớp cơ sở cho nhắn tin`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmapostabstract`,children:`Lớp FigmaPostAbstract`}),`
`,(0,c.jsx)(n.p,{children:`Lớp trừu tượng cơ sở để quản lý việc nhắn tin giữa plugin Figma (backend) và UI (frontend). Nó cung cấp một nền tảng có cấu trúc cho giao tiếp hai chiều với tính năng xác minh tích hợp và quản lý nhiều trình lắng nghe.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ hai chiều`}),` — Nền tảng cho cả `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` và `,(0,c.jsx)(n.code,{children:`FigmaUiMessenger`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác minh tin nhắn`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),` để đảm bảo rằng tin nhắn bắt nguồn từ cùng một phiên bản plugin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trình lắng nghe đa điểm`}),` — Hỗ trợ nhiều callback cho một loại tin nhắn duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuỗi phương thức (Chaining)`}),` — Các phương thức như `,(0,c.jsx)(n.code,{children:`make`}),` và `,(0,c.jsx)(n.code,{children:`add`}),` trả về `,(0,c.jsx)(n.code,{children:`this`}),`, cho phép khởi tạo ngắn gọn hơn.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-công-khai`,children:`Các phương thức công khai`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo trình lắng nghe tin nhắn. Phương thức này đảm bảo rằng việc thiết lập cụ thể cho môi trường (`,(0,c.jsx)(n.code,{children:`prepare`}),`) được thực hiện đúng một lần, bất kể `,(0,c.jsx)(n.code,{children:`make`}),` được gọi bao nhiêu lần.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const messenger = new FigmaPluginMessenger().make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Đăng ký một hàm callback để thực thi khi nhận được tin nhắn thuộc một loại cụ thể.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh duy nhất cho loại tin nhắn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: UiFigmaMessengerCallback<Message>`}),` — Hàm sẽ gọi khi nhận được tin nhắn. Nhận dữ liệu tin nhắn làm đối số đầu tiên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`once: boolean = false`}),` — Nếu được đặt thành `,(0,c.jsx)(n.code,{children:`true`}),`, callback sẽ tự động bị xóa sau khi được gọi một lần.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger
  .add('update-selection', (data) => console.log('Selection:', data.count))
  .add('init', (data) => console.log('Init:', data), true)
  .add('close', () => figma.closePlugin())
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Xóa một hàm callback đã đăng ký trước đó cho một loại tin nhắn cụ thể.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh duy nhất cho loại tin nhắn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: UiFigmaMessengerCallback<Message>`}),` — Hàm sẽ bị xóa khỏi các trình lắng nghe.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const onUpdate = (data) => console.log('Selection:', data.count)

messenger
  .add('update-selection', onUpdate)
  .remove('update-selection', onUpdate)
`})}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-dữ-liệu`,children:`Cấu trúc dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`uifigmamessengerdata`,children:(0,c.jsx)(n.code,{children:`UiFigmaMessengerData`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc của đối tượng dữ liệu được truyền qua đường truyền tin nhắn:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Mã xác minh từ `,(0,c.jsx)(n.code,{children:`FigmaPostCode`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh của tin nhắn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — Dữ liệu payload thực tế.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`mở-rộng-lớp`,children:`Mở rộng lớp`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),` là một lớp trừu tượng và đóng vai trò là nền tảng để tạo các messenger tùy chỉnh. Để sử dụng nó, bạn phải tạo một lớp con và thực hiện hai phương thức bắt buộc:`]}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phương thức trừu tượng để thực hiện logic gửi tin nhắn đến phía bên kia. Trong lớp dẫn xuất, phương thức này sẽ đóng gói lệnh gọi gửi theo hệ thống cụ thể (ví dụ: `,(0,c.jsx)(n.code,{children:`postMessage`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Mã định danh duy nhất cho loại tin nhắn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — Dữ liệu tin nhắn sẽ được gửi.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`post<Message>(type: string, message?: Message): void {
  // Thực hiện gửi theo hệ thống
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`prepare`,children:(0,c.jsx)(n.code,{children:`prepare`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một phương thức được bảo vệ trừu tượng để thiết lập trình lắng nghe sự kiện đến của hệ thống. Phương thức này được gọi tự động một lần khi `,(0,c.jsx)(n.code,{children:`make()`}),` được thực thi. Trong quá trình thực hiện, `,(0,c.jsx)(n.code,{children:`this.onMessage(data)`}),` phải được gọi bất cứ khi nào nhận được dữ liệu.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`protected prepare(): void {
  // Thiết lập đăng ký các sự kiện hệ thống
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`cách-sử-dụng`,children:`Cách sử dụng`}),`
`,(0,c.jsx)(n.p,{children:`Sau khi đã triển khai lớp tùy chỉnh của mình, hãy làm việc với nó như sau:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo`}),`: Gọi phương thức `,(0,c.jsx)(n.code,{children:`make()`}),` để bắt đầu trình lắng nghe (kích hoạt triển khai `,(0,c.jsx)(n.code,{children:`prepare`}),` của bạn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký`}),`: Sử dụng phương thức `,(0,c.jsx)(n.code,{children:`add(type, callback)`}),` để xử lý dữ liệu đến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Gửi`}),`: Sử dụng phương thức `,(0,c.jsx)(n.code,{children:`post(type, data)`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const messenger = new MyMessenger().make();

messenger.add('my-event', (data) => {
  console.log('Nhận được tin nhắn:', data);
});

messenger.post('my-event', { hello: 'world' });
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};