import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/# Lệnh/dxt-component - Tạo Cấu Trúc Thành Phần`}),`
`,(0,c.jsx)(t.h1,{id:`dxt-component`,children:`dxt-component`}),`
`,(0,c.jsxs)(t.p,{children:[`Lệnh `,(0,c.jsx)(t.code,{children:`dxt-component`}),` cung cấp khả năng tự thiết lập cấu trúc (scaffolding) nhanh chóng cho hệ thống thiết kế. Lệnh này sử dụng các kiến trúc `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` và `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` chuyên dành cho việc tự động thu thập và nạp tự động hệ sinh thái mã chuẩn vào các thư mục cấu thành hiện đang trống rỗng.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động Khởi tạo Thư mục`}),`: Truy tìm những cấu trúc thư mục rỗng bên trong kiến trúc `,(0,c.jsx)(t.code,{children:`src/components`}),` để bắt đầu dàn dựng hàng loạt đoạn mã vue từ hệ mẫu tích hợp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nạp Mẫu Tự Động Đầu Vào`}),`: Quá trình nhanh chóng đẩy mọi khuôn khai báo chuỗi (`,(0,c.jsx)(t.code,{children:`ComponentDoc`}),` hay tên danh định hiện tại `,(0,c.jsx)(t.code,{children:`[project]`}),`) thế vào tài nguyên chung một cách mượt mà và ẩn danh.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`nó-hoạt-động-như-thế-nào`,children:`Nó hoạt động như thế nào?`}),`
`,(0,c.jsx)(t.p,{children:`Cấu hình phân luồng này chủ động tự thay thế việc tổ chức các thư mục với lặp đi lặp lại:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Cấu trúc `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` với vai trò là một luồng quét, tự động phân hóa các kiến trúc nằm tập trung chặt chẽ tại `,(0,c.jsx)(t.code,{children:`src/components`}),`. Nó sẽ làm nổi bật các ngăn chứa (directory) đang được cho là hoàn toàn không chứa dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Phân tách mỗi một nhánh rỗng đó, mã sẽ điều phối kích hoạt cấp `,(0,c.jsx)(t.code,{children:`ComponentItem`}),`. Tại đây công cụ nạp vào những dạng thức tệp khuôn mẫu cấu trúc đã cho trước.`]}),`
`,(0,c.jsx)(t.li,{children:`Kế tiếp sẽ là một quy trình hoán đổi dữ liệu chuỗi ký tự cơ bản, thay thế nội dung vùng nhắm bằng dữ liệu danh xưng cấu trúc chính xác cộng hưởng cùng bối cảnh ứng dụng hiện hành. Cho ra kết quả mã hóa nguồn cơ bản dán thẳng cập nhật vào định dạng tệp chuẩn.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-thiết-lập-và-khởi-chạy`,children:`Cách thiết lập và khởi chạy`}),`
`,(0,c.jsxs)(t.p,{children:[`Toàn bộ quy trình sẽ không thiết lập ràng buộc với những cấu hình phức tạp. Công cụ này chủ động phân tích tệp `,(0,c.jsx)(t.code,{children:`package.json`}),` của bạn nhằm trích xuất trường `,(0,c.jsx)(t.code,{children:`name`}),`, và nó sẽ tự động được sử dụng để đưa vào thế chỗ cho bất kỳ trình đánh dấu mẫu `,(0,c.jsx)(t.code,{children:`[project]`}),` nào.`]}),`
`,(0,c.jsx)(t.p,{children:`Với khả năng nhận diện thư mục rỗng cùng khởi động tự động toàn bộ vùng không gian làm việc, lệnh cần thiết chỉ bao gồm gọi đoạn thực thi sau:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-component
`})}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-tệp-được-tạo-sinh`,children:`Cấu trúc tệp được tạo sinh`}),`
`,(0,c.jsx)(t.p,{children:`Khi một thành phần mới được tự động thiết lập khung, nó sẽ kế thừa cấu trúc từ các mẫu nội bộ:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`[ComponentName].vue`}),`: Cấu trúc thành phần Vue 3 dạng chuẩn chứa `,(0,c.jsx)(t.code,{children:`<script setup>`}),`, khai báo kiểu và khởi tạo sẵn `,(0,c.jsx)(t.code,{children:`<style lang="scss">`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`index.ts`}),`: Ánh xạ luồng xuất dữ liệu cho thành phần Vue (`,(0,c.jsx)(t.code,{children:`export const [ComponentName]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`types.ts`}),`: Các định dạng kiểu cốt lõi TypeScript dành cho hệ `,(0,c.jsx)(t.code,{children:`Props`}),`, `,(0,c.jsx)(t.code,{children:`Emits`}),`, `,(0,c.jsx)(t.code,{children:`Slots`}),`, và `,(0,c.jsx)(t.code,{children:`Defaults`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`subcomponents/`}),`: Một danh mục trống (đi kèm `,(0,c.jsx)(t.code,{children:`.gitignore`}),`) để sẵn sàng chứa các thành phần con cục bộ bên trong.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].mdx`}),`: Tệp tài liệu ghi chú Storybook chuẩn MDX gọi cấu trúc tích hợp từ `,(0,c.jsx)(t.code,{children:`@dxtmisha/wiki/storybook`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/[ComponentName].stories.ts`}),`: Tệp mã lệnh hoạt động Storybook Vue 3 nguyên bản định danh trực quan của bản demo xuất thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`wiki/run.ts`}),`: Tệp văn bản thực thi phím tắt node, ra đời nhằm kích hoạt siêu tốc chuỗi lệnh chỉ huy khởi sinh bằng AI (`,(0,c.jsx)(t.code,{children:`dxt-component-wiki`}),`) nhắm đích cụ thể tới duy nhất thành phần tại thư mục đó.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};