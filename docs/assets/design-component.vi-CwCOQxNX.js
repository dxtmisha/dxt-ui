import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/bin/dxt-component - Tạo Cấu Trúc Thành Phần"}),`
`,n.jsx(h.h1,{id:"dxt-component",children:"dxt-component"}),`
`,n.jsxs(h.p,{children:["Lệnh ",n.jsx(h.code,{children:"dxt-component"})," cung cấp khả năng tự thiết lập cấu trúc (scaffolding) nhanh chóng cho hệ thống thiết kế. Lệnh này sử dụng các kiến trúc ",n.jsx(h.code,{children:"ComponentCreator"})," và ",n.jsx(h.code,{children:"ComponentItem"})," chuyên dành cho việc tự động thu thập và nạp tự động hệ sinh thái mã chuẩn vào các thư mục cấu thành hiện đang trống rỗng."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tự động Khởi tạo Thư mục"}),": Truy tìm những cấu trúc thư mục rỗng bên trong kiến trúc ",n.jsx(h.code,{children:"src/components"})," để bắt đầu dàn dựng hàng loạt đoạn mã vue từ hệ mẫu tích hợp."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Nạp Mẫu Tự Động Đầu Vào"}),": Quá trình nhanh chóng đẩy mọi khuôn khai báo chuỗi (",n.jsx(h.code,{children:"ComponentDoc"})," hay tên danh định hiện tại ",n.jsx(h.code,{children:"[project]"}),") thế vào tài nguyên chung một cách mượt mà và ẩn danh."]}),`
`]}),`
`,n.jsx(h.h2,{id:"nó-hoạt-động-như-thế-nào",children:"Nó hoạt động như thế nào?"}),`
`,n.jsx(h.p,{children:"Cấu hình phân luồng này chủ động tự thay thế việc tổ chức các thư mục với lặp đi lặp lại:"}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:["Cấu trúc ",n.jsx(h.code,{children:"ComponentCreator"})," với vai trò là một luồng quét, tự động phân hóa các kiến trúc nằm tập trung chặt chẽ tại ",n.jsx(h.code,{children:"src/components"}),". Nó sẽ làm nổi bật các ngăn chứa (directory) đang được cho là hoàn toàn không chứa dữ liệu."]}),`
`,n.jsxs(h.li,{children:["Phân tách mỗi một nhánh rỗng đó, mã sẽ điều phối kích hoạt cấp ",n.jsx(h.code,{children:"ComponentItem"}),". Tại đây công cụ nạp vào những dạng thức tệp khuôn mẫu cấu trúc đã cho trước."]}),`
`,n.jsx(h.li,{children:"Kế tiếp sẽ là một quy trình hoán đổi dữ liệu chuỗi ký tự cơ bản, thay thế nội dung vùng nhắm bằng dữ liệu danh xưng cấu trúc chính xác cộng hưởng cùng bối cảnh ứng dụng hiện hành. Cho ra kết quả mã hóa nguồn cơ bản dán thẳng cập nhật vào định dạng tệp chuẩn."}),`
`]}),`
`,n.jsx(h.h2,{id:"cách-thiết-lập-và-khởi-chạy",children:"Cách thiết lập và khởi chạy"}),`
`,n.jsxs(h.p,{children:["Toàn bộ quy trình sẽ không thiết lập ràng buộc với những cấu hình phức tạp. Công cụ này chủ động phân tích tệp ",n.jsx(h.code,{children:"package.json"})," của bạn nhằm trích xuất trường ",n.jsx(h.code,{children:"name"}),", và nó sẽ tự động được sử dụng để đưa vào thế chỗ cho bất kỳ trình đánh dấu mẫu ",n.jsx(h.code,{children:"[project]"})," nào."]}),`
`,n.jsx(h.p,{children:"Với khả năng nhận diện thư mục rỗng cùng khởi động tự động toàn bộ vùng không gian làm việc, lệnh cần thiết chỉ bao gồm gọi đoạn thực thi sau:"}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-bash",children:`npx dxt-component
`})}),`
`,n.jsx(h.h2,{id:"cấu-trúc-tệp-được-tạo-sinh",children:"Cấu trúc tệp được tạo sinh"}),`
`,n.jsx(h.p,{children:"Khi một thành phần mới được tự động thiết lập khung, nó sẽ kế thừa cấu trúc từ các mẫu nội bộ:"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"[ComponentName].vue"}),": Cấu trúc thành phần Vue 3 dạng chuẩn chứa ",n.jsx(h.code,{children:"<script setup>"}),", khai báo kiểu và khởi tạo sẵn ",n.jsx(h.code,{children:'<style lang="scss">'}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"index.ts"}),": Ánh xạ luồng xuất dữ liệu cho thành phần Vue (",n.jsx(h.code,{children:"export const [ComponentName]"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"types.ts"}),": Các định dạng kiểu cốt lõi TypeScript dành cho hệ ",n.jsx(h.code,{children:"Props"}),", ",n.jsx(h.code,{children:"Emits"}),", ",n.jsx(h.code,{children:"Slots"}),", và ",n.jsx(h.code,{children:"Defaults"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"subcomponents/"}),": Một danh mục trống (đi kèm ",n.jsx(h.code,{children:".gitignore"}),") để sẵn sàng chứa các thành phần con cục bộ bên trong."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"wiki/[ComponentName].mdx"}),": Tệp tài liệu ghi chú Storybook chuẩn MDX gọi cấu trúc tích hợp từ ",n.jsx(h.code,{children:"@dxtmisha/wiki/storybook"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"wiki/[ComponentName].stories.ts"}),": Tệp mã lệnh hoạt động Storybook Vue 3 nguyên bản định danh trực quan của bản demo xuất thành phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"wiki/run.ts"}),": Tệp văn bản thực thi phím tắt node, ra đời nhằm kích hoạt siêu tốc chuỗi lệnh chỉ huy khởi sinh bằng AI (",n.jsx(h.code,{children:"dxt-component-wiki"}),") nhắm đích cụ thể tới duy nhất thành phần tại thư mục đó."]}),`
`]})]})}function u(c={}){const{wrapper:h}={...i(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{u as default};
