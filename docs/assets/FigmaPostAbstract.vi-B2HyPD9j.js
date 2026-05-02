import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma/Classes/FigmaPostAbstract - Lớp cơ sở cho nhắn tin`}),`
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
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};