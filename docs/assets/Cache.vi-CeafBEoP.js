import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Classes/Cache - Bộ nhớ đệm cơ bản`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-cache`,children:`Lớp Cache`}),`
`,(0,c.jsx)(n.p,{children:`Một cơ chế caching dựa trên lưu trữ bộ nhớ nhẹ. Chức năng này cung cấp cách làm hiệu quả để thực thi các tác vụ hay hàm tìm nạp dữ liệu tiêu tốn năng lượng hoạt động và thời gian chỉ khi thực sự cần thiết, phụ thuộc vào "mảng so sánh" (comparison array) để tiến hành invalidation cache cũng như việc tính toán ghi đè lại.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi trên nhu cầu (On-Demand Evaluation)`}),` — các function chỉ chạy khi không tìm thấy bộ nhớ cache mong muốn do rỗng hoặc vô hiệu (invalidation).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Vô hiệu qua phép so sánh mảng`}),` — Cache module sẽ tự vô hiệu và tiến hành nạp lại hoàn toàn dữ liệu vào array nếu giá trị phần tử thuộc mảng nhận chỉ định không giống với lúc lưu. Chức năng khá giống dependency arrays ở `,(0,c.jsx)(n.code,{children:`useEffect`}),` hoặc `,(0,c.jsx)(n.code,{children:`useMemo`}),` của React.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ chạy Async`}),` — quá trình đồng bộ hoạt động dựa vào cách kết nối của phương pháp `,(0,c.jsx)(n.code,{children:`Promise`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`Cache()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cache } from '@dxtmisha/functional'

// 1. Khởi tạo bộ lưu trữ
const cache = new Cache()

// 2. Lấy hoặc tính toán giá trị
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,(0,c.jsx)(n.h2,{id:`lấy-dữ-liệu`,children:`Lấy dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Sử dụng phương thức `,(0,c.jsx)(n.code,{children:`get()`}),` kết nối trực tiếp với giá trị cache được gắn cố định hoặc thay mới ngay nếu dữ liệu hiện thuộc trạng thái lưu đã ngừng hoạt động/quá hạn/bị lỗi (stale block).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — mã định danh để nạp bộ nhớ đệm cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — đoạn code (function) định nghĩa cho mảng trả về (value computation).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — thiết lập phụ array lưu trữ độ gắn kết. Nếu nhận thấy biến bên mảng khác hoàn toàn sau bước thực hiện lấy cache gần nhất thì class tự reset tính hợp lệ và cho hàm `,(0,c.jsx)(n.code,{children:`callback`}),` rà lại quá trình khởi tạo một lần nữa.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — dữ liệu cache.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let counter = 0

// Tính và thiết lập cache nhận: "User 1"
const user1 = cache.get('user', () => \`User \${++counter}\`, [1])

// KHÔNG CHẠY CODE, chỉ kéo cache được ghi từ "User 1"
const unchanged = cache.get('user', () => \`User \${++counter}\`, [1])

// Mảng gắn kết thay đổi từ [1] sang [2]
// Xóa cache và nạp vào: "User 2"
const changed = cache.get('user', () => \`User \${++counter}\`, [2])
`})}),`
`,(0,c.jsx)(n.h3,{id:`getasync`,children:(0,c.jsx)(n.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tương tự như `,(0,c.jsx)(n.code,{children:`get()`}),` nhưng cấu hình định hướng đến Async calls.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — mã định danh bộ nhớ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => Promise<T>`}),` — hàm bất đồng bộ trả về kết quả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — danh sách các đối tượng kèm theo.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — dữ liệu `,(0,c.jsx)(n.code,{children:`Promise`}),` được tạo mới hoặc lấy từ cache.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`async function fetchUser(id) {
  return cache.getAsync('user_api', async () => {
    const res = await fetch(\`/api/users/\${id}\`)
    return res.json()
  }, [id])
}

// Bắn thông tin vào luồng network ban đầu
const u1 = await fetchUser(5)

// Chạy lại hàm cũ gọi trực tiếp từ cache đã tạo
const u1Cached = await fetchUser(5)

// Tham số gắn kết biến đổi \`id\` đã chạy (5 !== 6), bắn luồng lên node mới
const u2 = await fetchUser(6)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};