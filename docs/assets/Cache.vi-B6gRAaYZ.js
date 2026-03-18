import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Classes/Cache - Bộ nhớ đệm cơ bản"}),`
`,n.jsx(c.h1,{id:"lớp-cache",children:"Lớp Cache"}),`
`,n.jsx(c.p,{children:'Một cơ chế caching dựa trên lưu trữ bộ nhớ nhẹ. Chức năng này cung cấp cách làm hiệu quả để thực thi các tác vụ hay hàm tìm nạp dữ liệu tiêu tốn năng lượng hoạt động và thời gian chỉ khi thực sự cần thiết, phụ thuộc vào "mảng so sánh" (comparison array) để tiến hành invalidation cache cũng như việc tính toán ghi đè lại.'}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thực thi trên nhu cầu (On-Demand Evaluation)"})," — các function chỉ chạy khi không tìm thấy bộ nhớ cache mong muốn do rỗng hoặc vô hiệu (invalidation)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Vô hiệu qua phép so sánh mảng"})," — Cache module sẽ tự vô hiệu và tiến hành nạp lại hoàn toàn dữ liệu vào array nếu giá trị phần tử thuộc mảng nhận chỉ định không giống với lúc lưu. Chức năng khá giống dependency arrays ở ",n.jsx(c.code,{children:"useEffect"})," hoặc ",n.jsx(c.code,{children:"useMemo"})," của React."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ chạy Async"})," — quá trình đồng bộ hoạt động dựa vào cách kết nối của phương pháp ",n.jsx(c.code,{children:"Promise"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"Cache()"}),"."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { Cache } from '@dxtmisha/functional'

// 1. Khởi tạo bộ lưu trữ
const cache = new Cache()

// 2. Lấy hoặc tính toán giá trị
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,n.jsx(c.h2,{id:"lấy-dữ-liệu",children:"Lấy dữ liệu"}),`
`,n.jsx(c.h3,{id:"get",children:n.jsx(c.code,{children:"get"})}),`
`,n.jsxs(c.p,{children:["Sử dụng phương thức ",n.jsx(c.code,{children:"get()"})," kết nối trực tiếp với giá trị cache được gắn cố định hoặc thay mới ngay nếu dữ liệu hiện thuộc trạng thái lưu đã ngừng hoạt động/quá hạn/bị lỗi (stale block)."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: string"})," — mã định danh để nạp bộ nhớ đệm cache."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback: () => T"})," — đoạn code (function) định nghĩa cho mảng trả về (value computation)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"comparison?: any[]"})," — thiết lập phụ array lưu trữ độ gắn kết. Nếu nhận thấy biến bên mảng khác hoàn toàn sau bước thực hiện lấy cache gần nhất thì class tự reset tính hợp lệ và cho hàm ",n.jsx(c.code,{children:"callback"})," rà lại quá trình khởi tạo một lần nữa."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"T"})," — dữ liệu cache."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`let counter = 0

// Tính và thiết lập cache nhận: "User 1"
const user1 = cache.get('user', () => \`User \${++counter}\`, [1])

// KHÔNG CHẠY CODE, chỉ kéo cache được ghi từ "User 1"
const unchanged = cache.get('user', () => \`User \${++counter}\`, [1])

// Mảng gắn kết thay đổi từ [1] sang [2]
// Xóa cache và nạp vào: "User 2"
const changed = cache.get('user', () => \`User \${++counter}\`, [2])
`})}),`
`,n.jsx(c.h3,{id:"getasync",children:n.jsx(c.code,{children:"getAsync"})}),`
`,n.jsxs(c.p,{children:["Tương tự như ",n.jsx(c.code,{children:"get()"})," nhưng cấu hình định hướng đến Async calls."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: string"})," — mã định danh bộ nhớ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback: () => Promise<T>"})," — hàm bất đồng bộ trả về kết quả."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"comparison?: any[]"})," — danh sách các đối tượng kèm theo."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"Promise<T>"})," — dữ liệu ",n.jsx(c.code,{children:"Promise"})," được tạo mới hoặc lấy từ cache."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`async function fetchUser(id) {
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
`})})]})}function g(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(e,{...h})}):e(h)}export{g as default};
