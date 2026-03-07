import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Classes/CacheStatic - Bộ nhớ đệm tĩnh (Global)"}),`
`,n.jsx(c.h1,{id:"lớp-cachestatic",children:"Lớp CacheStatic"}),`
`,n.jsxs(c.p,{children:["Một lớp định dạng lớp bọc ngoài (wrapper class) đóng vai trò xây dựng lớp giao tiếp toàn cục sử dụng bộ nhớ cache tĩnh (static cache instance). Với ",n.jsx(c.code,{children:"CacheStatic"}),", cơ chế hoạt động giúp bộ nhớ có tính linh hoạt xuyên suốt đoạn code ở mọi nơi trong phân lớp code được thực thi, thay thế và loại bỏ hoàn toàn quá trình tạo đối tượng object ",n.jsx(c.code,{children:"Cache"})," chuyên biệt như cấu trúc gốc."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Lưu Cục Bộ Toàn Phân (Global Accessibility)"})," — mô hình kết nối hoạt động giống singleton thông qua thiết kế pattern là stactic method. Code định dạng luôn chung vùng bộ nhớ, đảm bảo kết nối giữa nhiều lớp dữ liệu đồng thời suốt hệ thống ứng dụng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Cơ Chế Phân Định Ngầm"})," — phần cốt lõi bên trong lớp bọc được nạp một phương thức tham chiếu kế thừa thẳng cấu trúc từ đối tượng ",n.jsx(c.code,{children:"Cache"})," tiêu chuẩn. Toàn bộ hiệu ứng phụ của ",n.jsx(c.code,{children:"Cache"})," bao gồm: Cập nhật dependency, lazy loading/lazy evulation,... đều hoạt động trơn tru."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính Tiện Dụng"})," — tiện lợi tuyệt đối, phù hợp với hệ module/chia sẻ component liên kết đơn giản mà không sinh ra phụ thuộc hay tính kế thừa vòng lặp phức tạp trong cây component."]}),`
`]}),`
`,n.jsxs(c.p,{children:["Về cấu trúc class, tất cả hàm nội bộ gắn định danh ",n.jsx(c.code,{children:"static"}),". Hệ quả là hệ thống sẽ chặn không cho sử dụng trình khởi tạo ",n.jsx(c.code,{children:"new CacheStatic()"}),". Người code sử dụng những hàm này theo cấu trúc thực thi trực tiếp từ class gốc thông qua dấu châm (",n.jsx(c.code,{children:"."}),")."]}),`
`,n.jsx(c.h2,{id:"lưu-trữ-cache-toàn-cục",children:"Lưu trữ cache toàn cục"}),`
`,n.jsx(c.h3,{id:"get",children:n.jsx(c.code,{children:"get"})}),`
`,n.jsxs(c.p,{children:["Hàm chức năng ",n.jsx(c.code,{children:"get()"})," có vai trò lặp tìm phần tử hiện có từ bộ đệm, nếu đối chiếu ra null hoặc undefined nó tự động chạy logic tải và sinh phần tử cache mới thay vào vị trí truy vấn hiện tại."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: string"})," — biến gán để tạo lập index/luồng đối chiếu cho bộ nhớ định tuyến global hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback: () => T"})," — các khối lệnh đóng trong tham chiếu được xử lý thông qua biến này."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"comparison?: any[]"})," — danh sách các đối tượng thay đổi, hay dependency list. Khi chạy hàm, node ",n.jsx(c.code,{children:"CacheItem"})," sẽ đánh mất tình trạng (invalidation) nếu phát hiện bất kì thông số phụ bị sửa bằng biến mảng thay thế (",n.jsx(c.code,{children:"comparison"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"T"})," — biến được gọi là static cache block."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { CacheStatic } from '@dxtmisha/functional'

// Mảng A.js
function calculateHeavyData(id) {
  return CacheStatic.get(
    \`heavy_data_\${id}\`,
    () => {
      console.log('Calculating...')
      return id * 100
    },
    [id] // Biến phụ thuộc (Dependency)
  )
}

// Báo lệnh 'Calculating...' sinh kết quả 500
const res1 = calculateHeavyData(5) 

// Mảng B.js
// Trỏ vào chung dữ liệu id 5, chạy tiếp xúc trực tiếp global cache
// Không thực thi lại callback 'Calculating...', kết xuất liền giá trị 500.
const res2 = calculateHeavyData(5) 
`})})]})}function g(t={}){const{wrapper:c}={...i(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(h,{...t})}):h(t)}export{g as default};
