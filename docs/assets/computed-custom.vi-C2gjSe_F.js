import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/# Thuộc Tính Tính Toán Nâng Cao`}),`
`,(0,c.jsx)(n.h1,{id:`thuộc-tính-tính-toán-nâng-cao-custom-computed`,children:`Thuộc Tính Tính Toán Nâng Cao (Custom Computed)`}),`
`,(0,c.jsxs)(n.p,{children:[`Thư viện cung cấp ba lớp bọc (wrapper) chuyên biệt nâng cấp lên từ thuộc tính `,(0,c.jsx)(n.code,{children:`computed`}),` truyền thống của Vue 3. Chúng giải trừ các bài toán cấu trúc kiến trúc hóc búa: xử lý bất đồng bộ, thoát ly khỏi vòng đời component, và phản xạ dữ liệu tức thời theo đa ngôn ngữ.`]}),`
`,(0,c.jsxs)(n.h2,{id:`1-tính-toán-bất-đồng-bộ-computedasync`,children:[`1. Tính Toán Bất Đồng Bộ (`,(0,c.jsx)(n.code,{children:`computedAsync`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Thuộc tính `,(0,c.jsx)(n.code,{children:`computed`}),` của Vue vốn bị khóa ở đồng bộ chặt chẽ (synchronous). `,(0,c.jsx)(n.code,{children:`computedAsync`}),` xoá bỏ rào cản đó, cho phép bạn thoải mái nhúng logic `,(0,c.jsx)(n.code,{children:`async/await`}),` vào trong getter.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc tính:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Tính năng lười (chỉ thực sự sạc dữ liệu khi được truy vấn lần đầu tiên).`}),`
`,(0,c.jsxs)(n.li,{children:[`Tự động nạp mạng hoặc tính lại khi các dependencies bên trong thay đổi (được dẫn dắt bởi `,(0,c.jsx)(n.code,{children:`watchEffect`}),` ngầm).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Bạn có quyền lọc và quăng bỏ những kết quả không mong muốn thông qua tham số mồi `,(0,c.jsx)(n.code,{children:`ignore`}),` để chặn vòng lặp UI chớp nháy vô ích.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { computedAsync } from '@dxtmisha/functional'

const userId = ref(1)

const userData = computedAsync(async () => {
  // Sẽ tự nã lệnh fetch đi lại mỗi lần userId.value đổi số
  const response = await fetch(\`/api/users/\${userId.value}\`)
  return await response.json()
})
`})}),`
`,(0,c.jsxs)(n.h2,{id:`2-bộ-cất-giữ-bộ-nhớ-vĩnh-cửu-computedeternity`,children:[`2. Bộ Cất Giữ Bộ Nhớ Vĩnh Cửu (`,(0,c.jsx)(n.code,{children:`computedEternity`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Các biểu thức tính toán thông thường sẽ thoi thóp và chết đi nếu linh hồn component chứa chúng bị xóa sổ. Trái lại, `,(0,c.jsx)(n.code,{children:`computedEternity`}),` thâu tóm biểu thức bỏ vào trọn vẹn trong một khoảng không gian biệt lập toàn cục `,(0,c.jsx)(n.code,{children:`effectScope`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc tính:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Sinh ra cho loại dữ liệu siêu nặng. Bạn chỉ tốn công tải về đúng 1 lần khi người dùng đáp đến một trang, rồi từ đó chôn sâu lưu giữ chúng mà vẫn đảm bảo tính react cực chuẩn xác dẫu họ có thao tác lướt đi trang khác.`}),`
`,(0,c.jsx)(n.li,{children:`Giao thức chực chờ: Đè nén tới khi có bất cứ linh kiện nào thật sự chèn tay vào gọi xin dữ liệu.`}),`
`,(0,c.jsx)(n.li,{children:`Chế độ "Sinh Tử cùng Ứng Dụng" — Sống trọn đời trừ khi ứng dụng sập hầm.`}),`
`,(0,c.jsx)(n.li,{children:`Thuộc tính Read-only cứng ngắc.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Theo sát bộ cấu hình hạng nặng này trong RAM tới tận lúc user đóng tab trình duyệt
const heavyGlobalConfig = computedEternity(async () => {
  return await fetch('/api/heavy-config').then(res => res.json())
})
`})}),`
`,(0,c.jsxs)(n.h2,{id:`3-phản-xạ-đa-ngôn-ngữ-chớp-nhoáng-computedbylanguage`,children:[`3. Phản Xạ Đa Ngôn Ngữ Chớp Nhoáng (`,(0,c.jsx)(n.code,{children:`computedByLanguage`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Một cấu trúc đường cú pháp (syntax sugar) lộng lẫy để bắt thóp các dữ liệu cần phải ngay lập tức chuyển ngữ hễ bộ tự điển ứng dụng hoặc thẻ thay đổi ngôn ngữ.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc tính:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Gắn kết số phận mạn hệ mật thiết với cầu nối `,(0,c.jsx)(n.code,{children:`GeoRef`}),` nội hàm lõi hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Ban cho quyền lực khống chế các ngoại lệ điều kiện (`,(0,c.jsx)(n.code,{children:`conditions`}),`) ngặt nghèo trước lúc cất công tra ngữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Tính năng dự phòng lấp khoảng trống (`,(0,c.jsx)(n.code,{children:`getterNone`}),`) tự tuôn ra kết quả rào chắn trong màn lưới hễ dữ liệu đích vắng mặt hoặc có trục trặc ngoài dự đoán.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'

const pageTitle = computedByLanguage(
  // Getter chân ái (khi thỏi điều kiện thoả màn)
  () => dictionary.value.title,
  
  // Dữ liệu fallback chắp nối (xử lý khi dữ liệu null/undefined)
  () => 'Default Title',
  
  // Khối băng rào bảo vệ precondition (không ép buộc)
  () => isReady.value === true
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};