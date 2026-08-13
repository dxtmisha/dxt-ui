import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Classes/Cache - Bộ nhớ đệm cơ bản`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-cache`,children:`Lớp Cache`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`⚠️ Đã lỗi thời`}),` — Lớp này đã lỗi thời và không nên được sử dụng.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Một cơ chế lưu trữ đệm trong bộ nhớ (memory-based) nhẹ nhàng. Nó cung cấp một cách hiệu quả để thực thi các hàm truy xuất dữ liệu tốn kém chỉ khi cần thiết, dựa trên "mảng so sánh" (comparison arrays) để kích hoạt việc hủy bỏ và tính toán lại bộ nhớ đệm.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đánh giá theo yêu cầu`}),` — các hàm chỉ được thực thi khi giá trị được lưu trong bộ nhớ đệm bị thiếu hoặc bị hủy bỏ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hủy bỏ theo mảng so sánh`}),` — tự động tính toán lại bộ nhớ đệm nếu mảng phụ thuộc được cung cấp thay đổi (tương tự như mảng phụ thuộc của `,(0,c.jsx)(t.code,{children:`useMemo`}),` hoặc `,(0,c.jsx)(t.code,{children:`useEffect`}),` trong React).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ không đồng bộ`}),` — hoạt động liền mạch với việc truy xuất dữ liệu dựa trên `,(0,c.jsx)(t.code,{children:`Promise`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`Cache()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Cache } from '@dxtmisha/functional'

// 1. Khởi tạo bộ lưu trữ
const cache = new Cache()

// 2. Lấy hoặc tính toán giá trị
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(t.h4,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sử dụng phương thức `,(0,c.jsx)(t.code,{children:`get()`}),` để truy xuất một giá trị được lưu trong bộ nhớ đệm hoặc tính toán nó nếu nó không tồn tại hoặc đã cũ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — một mã định danh duy nhất cho mục nhập bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T`}),` — hàm tính toán giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — mảng phụ thuộc tùy chọn. Nếu bất kỳ giá trị nào trong mảng này thay đổi so với lần gọi cuối cùng, bộ nhớ đệm sẽ bị hủy và `,(0,c.jsx)(t.code,{children:`callback`}),` sẽ chạy lại.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`T`}),` — giá trị đã lưu đệm hoặc giá trị mới được tính toán.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let counter = 0

// Sẽ đánh giá và lưu trữ "User 1"
const user1 = cache.get('user', () => \`User \${++counter}\`, [1])

// KHÔNG đánh giá lại, trả về "User 1" đã lưu đệm
const unchanged = cache.get('user', () => \`User \${++counter}\`, [1])

// Mảng phụ thuộc thay đổi từ [1] thành [2]
// Sẽ đánh giá lại và lưu trữ "User 2"
const changed = cache.get('user', () => \`User \${++counter}\`, [2])
`})}),`
`,(0,c.jsx)(t.h4,{id:`getasync`,children:(0,c.jsx)(t.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hoạt động tương tự như `,(0,c.jsx)(t.code,{children:`get()`}),`, nhưng được thiết kế cho các cuộc gọi không đồng bộ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — một mã định danh duy nhất cho mục nhập bộ nhớ đệm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => Promise<T>`}),` — hàm không đồng bộ tính toán giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — mảng phụ thuộc tùy chọn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — giá trị không đồng bộ đã lưu đệm hoặc giá trị mới được tính toán.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`async function fetchUser(id) {
  return cache.getAsync('user_api', async () => {
    const res = await fetch(\`/api/users/\${id}\`)
    return res.json()
  }, [id])
}

// Cuộc gọi đầu tiên truy cập mạng
const u1 = await fetchUser(5)

// Cuộc gọi thứ hai trả về dữ liệu đã lưu đệm ngay lập tức (không truy cập mạng)
const u1Cached = await fetchUser(5)

// Phụ thuộc \`id\` thay đổi (5 !== 6), truy cập mạng một lần nữa
const u2 = await fetchUser(6)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};