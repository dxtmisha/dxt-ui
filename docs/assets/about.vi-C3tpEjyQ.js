import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/# Về phương pháp tiếp cận`}),`
`,(0,c.jsx)(t.h1,{id:`khái-niệm-ai-driven-development-aidd`,children:`Khái niệm AI-Driven Development (AIDD)`}),`
`,(0,c.jsxs)(t.p,{children:[`Quá trình phát triển trong hệ sinh thái `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` được thiết kế để tích hợp sâu rộng và chặt chẽ với các trợ lý trí tuệ nhân tạo (LLM). Dự án xây dựng một cơ sở hạ tầng hoàn chỉnh cho AI, vượt xa các gợi ý tự động hoàn thành mã nguồn thông thường.`]}),`
`,(0,c.jsx)(t.p,{children:`Khái niệm cốt lõi dựa trên việc tự động cung cấp dữ liệu có cấu trúc cho AI trước khi bắt đầu tạo mã. Mỗi package trong monorepo đều chứa các quy tắc, hợp đồng kiểu và bộ nhớ máy có thể đọc được, sau đó được tổng hợp thành một ngữ cảnh toàn cục duy nhất.`}),`
`,(0,c.jsx)(t.h2,{id:`thách-thức-của-phương-pháp-tiếp-cận-thông-thường`,children:`Thách thức của phương pháp tiếp cận thông thường`}),`
`,(0,c.jsx)(t.p,{children:`Việc sử dụng AI mà không có cơ sở hạ tầng chuyên biệt thường gặp phải những vấn đề sau:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thiếu ngữ cảnh dự án.`}),` AI không có kiến thức cập nhật về kiến trúc, hệ thống thiết kế, SCSS token và tiêu chuẩn đặt tên của repository cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biến dạng dữ liệu và ảo giác (Hallucinations).`}),` Do thiếu thông tin chính xác về kiểu dữ liệu và các tiện ích có sẵn, mã nguồn do AI tạo ra thường chứa các phương thức không tồn tại hoặc chữ ký cũ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phụ thuộc công cụ (Vendor Lock-in).`}),` Các hướng dẫn thường bị gắn chặt vào định dạng của một công cụ cụ thể (ví dụ: `,(0,c.jsx)(t.code,{children:`.cursorrules`}),` hoặc Claude Projects). Khi đổi trợ lý hoặc IDE, lập trình viên phải cấu hình lại từ đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Không truy cập được thư viện bên ngoài (`,(0,c.jsx)(t.code,{children:`node_modules`}),`).`]}),` Các trợ lý lập trình thường bỏ qua thư mục `,(0,c.jsx)(t.code,{children:`node_modules`}),` do giới hạn ngữ cảnh token. Do đó, AI không nhìn thấy các hàm, component và kiểu dữ liệu được export, dẫn đến việc tự bịa ra chữ ký hàm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thu thập ngữ cảnh thủ công.`}),` Lập trình viên phải tự đính kèm hàng chục tệp mã nguồn vào khung chat để giải thích kiến trúc component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mất ngữ cảnh giữa các phiên làm việc.`}),` Các sửa đổi kiến trúc và ràng buộc được thống nhất trong một nhiệm vụ sẽ bị mất trong các phiên hội thoại tiếp theo.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Mục tiêu của kiến trúc AIDD trong `,(0,c.jsx)(t.code,{children:`dxt-ui`}),` là loại bỏ hoàn toàn các rủi ro này bằng cách xác định rõ phạm vi trách nhiệm của AI và cung cấp ngữ cảnh tất định, đáng tin cậy và độc lập với nền tảng.`]}),`
`,(0,c.jsx)(t.h2,{id:`nguyên-tắc-cốt-lõi-của-phương-pháp-tiếp-cận`,children:`Nguyên tắc cốt lõi của phương pháp tiếp cận`}),`
`,(0,c.jsxs)(t.p,{children:[`Nền tảng của AIDD là `,(0,c.jsx)(t.strong,{children:`quản lý ngữ cảnh tất định`}),` và bắt buộc AI phải nghiên cứu kỹ lưỡng trước khi viết dòng mã đầu tiên. Cầu nối trung tâm và nguồn chân lý duy nhất cho mọi AI agent là tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Các nguyên tắc kiến trúc chính:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Nguồn chân lý duy nhất (Single Source of Truth)`}),`
Thay vì hướng dẫn phân mảnh và sao chép thủ công, AI nhận được tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` tập trung được tự động tổng hợp từ hợp đồng, tài liệu và quy tắc của tất cả các package trong monorepo cũng như các dependency trong `,(0,c.jsx)(t.code,{children:`node_modules`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Bắt buộc nghiên cứu kỹ lưỡng trước khi sinh mã (Chronological Guard)`}),`
AI bị nghiêm cấm viết mã hoặc đưa ra kế hoạch sơ sài mà chưa đọc ngữ cảnh. Trình tự đọc bắt buộc bao gồm:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Đọc bộ nhớ cục bộ của package (`,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`);`]}),`
`,(0,c.jsxs)(t.li,{children:[`Nghiên cứu lời nhắc toàn cục (`,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`) và yêu cầu của các thư viện được sử dụng (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, v.v.);`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đọc chính xác các hợp đồng kiểu (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`), tiêu chuẩn nội bộ (`,(0,c.jsx)(t.code,{children:`ai-developer.md`}),`) và quy tắc chuyên biệt (`,(0,c.jsx)(t.code,{children:`ai-resources/`}),`) của package liên quan;`]}),`
`,(0,c.jsx)(t.li,{children:`Đọc toàn bộ tệp mục tiêu trước khi chỉnh sửa.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Phát triển dựa trên hợp đồng & Không ảo giác (Zero Hallucinations)`}),`
AI chỉ dựa vào các export thực tế từ `,(0,c.jsx)(t.code,{children:`ai-types.md`}),` và dependency đã khai báo trong `,(0,c.jsx)(t.code,{children:`package.json`}),`. Nghiêm cấm bịa ra phương thức không tồn tại. Mã nguồn sinh ra phải đầy đủ, có kiểu dữ liệu chặt chẽ và sẵn sàng chạy ngay («Copy-Paste Ready») mà không có phần giữ chỗ (placeholders).`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Khóa phạm vi nghiêm ngặt (Strict Scope Lock)`}),`
AI thực hiện chính xác và duy nhất những gì được yêu cầu trong nhiệm vụ, không vượt ra ngoài phạm vi component hoặc package mục tiêu. Nghiêm cấm tự ý tái cấu trúc mã (refactoring) hoặc chạy các lệnh build không được yêu cầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Phân tán quy tắc & Lưu giữ kinh nghiệm`}),`
Các quy tắc và quyết định kiến trúc được mô tả ở cấp độ từng package riêng biệt, đồng thời cơ chế bộ nhớ cục bộ (`,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`) giúp ghi lại các chỉ dẫn quan trọng của lập trình viên để tránh lặp lại lỗi trong các phiên làm việc sau.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Tự kiểm tra bắt buộc (Self-Audit)`}),`
Trước khi hoàn thành nhiệm vụ, AI bắt buộc phải rà soát từng dòng mã đã thay đổi để đảm bảo tuân thủ 100% tất cả các tiêu chuẩn trong `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`so-sánh-cách-đặt-yêu-cầu-khi-không-có-aidd-vs-khi-có-aidd`,children:`So sánh cách đặt yêu cầu: Khi không có AIDD vs Khi có AIDD`}),`
`,(0,c.jsxs)(t.p,{children:[`Dưới đây là minh họa trực quan về sự khác biệt khi giao việc cho AI giữa phương pháp thông thường và hệ sinh thái `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`yêu-cầu-khi-không-có-cơ-sở-hạ-tầng-aidd-phương-pháp-thông-thường`,children:`Yêu cầu KHI KHÔNG CÓ cơ sở hạ tầng AIDD (Phương pháp thông thường)`}),`
`,(0,c.jsx)(t.p,{children:`Lập trình viên liên tục phải mất thời gian viết các prompt dài hàng trang, sao chép thủ công hàng chục đoạn mã và nhắc lại các quy tắc kiến trúc:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`«Hãy tạo component Vue 3 thông báo D1Notification.
CHÚ Ý: bắt buộc dùng <script setup lang="ts">, tuyệt đối không dùng any!
Props phải định kiểu qua TypeScript interface, emits cũng phải có interface chặt chẽ.
Đặt tên class theo chuẩn BEM, class gốc là d1-notification.
Đây là mixin SCSS từ package @dxtmisha/styles của chúng tôi (dán 200 dòng SCSS).
Đây là danh sách token màu (dán JSON). Không dùng inline style!
Để quản lý logic hãy dùng constructor từ @dxtmisha/constructor (dán 150 dòng mã ví dụ).
Đừng quên trạng thái skeleton! Đây là quy tắc cho skeleton (dán thêm tệp nữa).
Và nhớ: khoảng cách icon phải là sm, không phải md như lần trước bạn làm sai!
Để hiển thị thông báo dùng composable useSnackbar từ functional, đây là chữ ký hàm...»
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả:`}),` Tiêu tốn lượng lớn token ngữ cảnh, dễ trôi thông tin, nguy cơ ảo giác cao, phát sinh nhiều lỗi và phải sửa thủ công nhiều lần.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`yêu-cầu-khi-có-cơ-sở-hạ-tầng-aidd-hệ-sinh-thái-dxt-ui`,children:`Yêu cầu KHI CÓ cơ sở hạ tầng AIDD (Hệ sinh thái dxt-ui)`}),`
`,(0,c.jsxs)(t.p,{children:[`Nhờ khả năng tự động tạo `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-resources/`}),` và bộ nhớ cục bộ `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),`, lập trình viên chỉ cần diễn đạt yêu cầu ngắn gọn trong một câu:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`«Tạo component D1Notification trong package @dxtmisha/d1»
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`AI tự động nắm vững toàn bộ tiêu chuẩn BEM, SCSS và Vue Style Guide từ `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`AI tự động đọc các ràng buộc và kinh nghiệm đã lưu từ `,(0,c.jsx)(t.code,{children:`packages/d1/ai-memory.md`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`AI mở `,(0,c.jsx)(t.code,{children:`ai-resources/colors-and-palettes.md`}),` và `,(0,c.jsx)(t.code,{children:`ai-resources/skeleton.md`}),` theo nhu cầu dựa trên trigger trong `,(0,c.jsx)(t.code,{children:`Mandatory Rules`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`AI tạo ra mã nguồn sạch sẽ, có kiểu chặt chẽ và sẵn sàng sử dụng ngay («Copy-Paste Ready»).`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dễ dàng điều chỉnh nhanh:`}),` Ngay cả khi mô hình đôi lúc mắc lỗi nhỏ, việc chỉnh sửa trở nên đơn giản và nhanh chóng hơn rất nhiều: lập trình viên không cần giải thích lại toàn bộ kiến trúc hay dán mã thư viện — chỉ cần một câu nhắc ngắn gọn hoặc lệnh «Запомни: ...» / «Remember: ...» là AI lập tức sửa đổi chính xác và lưu kinh nghiệm cho các phiên sau.`]}),`
`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};