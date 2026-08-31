import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/6. Thuộc Tính Tính Toán Nâng Cao`}),`
`,(0,c.jsx)(t.h1,{id:`thuộc-tính-tính-toán-nâng-cao-custom-computed`,children:`Thuộc Tính Tính Toán Nâng Cao (Custom Computed)`}),`
`,(0,c.jsxs)(t.p,{children:[`Thư viện cung cấp ba lớp bọc (wrapper) chuyên biệt nâng cấp lên từ thuộc tính `,(0,c.jsx)(t.code,{children:`computed`}),` truyền thống của Vue 3. Chúng giải trừ các bài toán cấu trúc kiến trúc hóc búa: xử lý bất đồng bộ, thoát ly khỏi vòng đời component, và phản xạ dữ liệu tức thời theo đa ngôn ngữ.`]}),`
`,(0,c.jsxs)(t.h2,{id:`1-tính-toán-bất-đồng-bộ-computedasync`,children:[`1. Tính Toán Bất Đồng Bộ (`,(0,c.jsx)(t.code,{children:`computedAsync`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Thuộc tính `,(0,c.jsx)(t.code,{children:`computed`}),` của Vue vốn bị khóa ở đồng bộ chặt chẽ (synchronous). `,(0,c.jsx)(t.code,{children:`computedAsync`}),` xoá bỏ rào cản đó, cho phép bạn thoải mái nhúng logic `,(0,c.jsx)(t.code,{children:`async/await`}),` vào trong getter.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Đặc tính:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Tính năng lười (chỉ thực sự sạc dữ liệu khi được truy vấn lần đầu tiên).`}),`
`,(0,c.jsxs)(t.li,{children:[`Tự động nạp mạng hoặc tính lại khi các dependencies bên trong thay đổi (được dẫn dắt bởi `,(0,c.jsx)(t.code,{children:`watchEffect`}),` ngầm).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Bạn có quyền lọc và quăng bỏ những kết quả không mong muốn thông qua tham số mồi `,(0,c.jsx)(t.code,{children:`ignore`}),` để chặn vòng lặp UI chớp nháy vô ích.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { computedAsync } from '@dxtmisha/functional'

const userId = ref(1)

const userData = computedAsync(async () => {
  // Sẽ tự nã lệnh fetch đi lại mỗi lần userId.value đổi số
  const response = await fetch(\`/api/users/\${userId.value}\`)
  return await response.json()
})
`})}),`
`,(0,c.jsxs)(t.h2,{id:`2-bộ-cất-giữ-bộ-nhớ-vĩnh-cửu-computedeternity`,children:[`2. Bộ Cất Giữ Bộ Nhớ Vĩnh Cửu (`,(0,c.jsx)(t.code,{children:`computedEternity`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Các biểu thức tính toán thông thường sẽ thoi thóp và chết đi nếu linh hồn component chứa chúng bị xóa sổ. Trái lại, `,(0,c.jsx)(t.code,{children:`computedEternity`}),` thâu tóm biểu thức bỏ vào trọn vẹn trong một khoảng không gian biệt lập toàn cục `,(0,c.jsx)(t.code,{children:`effectScope`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Đặc tính:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Sinh ra cho loại dữ liệu siêu nặng. Bạn chỉ tốn công tải về đúng 1 lần khi người dùng đáp đến một trang, rồi từ đó chôn sâu lưu giữ chúng mà vẫn đảm bảo tính react cực chuẩn xác dẫu họ có thao tác lướt đi trang khác.`}),`
`,(0,c.jsx)(t.li,{children:`Giao thức chực chờ: Đè nén tới khi có bất cứ linh kiện nào thật sự chèn tay vào gọi xin dữ liệu.`}),`
`,(0,c.jsx)(t.li,{children:`Chế độ "Sinh Tử cùng Ứng Dụng" — Sống trọn đời trừ khi ứng dụng sập hầm.`}),`
`,(0,c.jsx)(t.li,{children:`Thuộc tính Read-only cứng ngắc.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Theo sát bộ cấu hình hạng nặng này trong RAM tới tận lúc user đóng tab trình duyệt
const heavyGlobalConfig = computedEternity(async () => {
  return await fetch('/api/heavy-config').then(res => res.json())
})
`})}),`
`,(0,c.jsxs)(t.h2,{id:`3-phản-xạ-đa-ngôn-ngữ-chớp-nhoáng-computedbylanguage`,children:[`3. Phản Xạ Đa Ngôn Ngữ Chớp Nhoáng (`,(0,c.jsx)(t.code,{children:`computedByLanguage`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Một cấu trúc đường cú pháp (syntax sugar) lộng lẫy để bắt thóp các dữ liệu cần phải ngay lập tức chuyển ngữ hễ bộ tự điển ứng dụng hoặc thẻ thay đổi ngôn ngữ.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Đặc tính:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Gắn kết số phận mạn hệ mật thiết với cầu nối `,(0,c.jsx)(t.code,{children:`GeoRef`}),` nội hàm lõi hệ thống.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Ban cho quyền lực khống chế các ngoại lệ điều kiện (`,(0,c.jsx)(t.code,{children:`conditions`}),`) ngặt nghèo trước lúc cất công tra ngữ.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Tính năng dự phòng lấp khoảng trống (`,(0,c.jsx)(t.code,{children:`getterNone`}),`) tự tuôn ra kết quả rào chắn trong màn lưới hễ dữ liệu đích vắng mặt hoặc có trục trặc ngoài dự đoán.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedByLanguage } from '@dxtmisha/functional'

const pageTitle = computedByLanguage(
  // Getter chân ái (khi thỏi điều kiện thoả màn)
  () => dictionary.value.title,
  
  // Dữ liệu fallback chắp nối (xử lý khi dữ liệu null/undefined)
  () => 'Default Title',
  
  // Khối băng rào bảo vệ precondition (không ép buộc)
  () => isReady.value === true
)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};