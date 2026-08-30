import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/BrowserItem - Quản lý Trình duyệt Không đầu`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-browseritem`,children:`Lớp BrowserItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`BrowserItem`}),` là một lớp bọc cấp cao xung quanh `,(0,c.jsx)(t.strong,{children:`Puppeteer`}),`, được thiết kế để quản lý các phiên bản trình duyệt Chromium, cấu hình viewport, thực thi script trong ngữ cảnh trình duyệt và chụp ảnh màn hình toàn trang hoặc cắt trang thành nhiều phần.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Vòng đời Tự động`}),` — khởi chạy và quản lý lười biếng một hoặc nhiều phiên bản trình duyệt không đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình Viewport Động`}),` — tự động cấu hình kích thước viewport, tỉ lệ và xử lý các lỗi console khi khởi chạy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quy trình Chụp Linh hoạt`}),` — hỗ trợ chụp toàn bộ trang cuộn hoặc chia trang thành nhiều tệp ảnh lưu tuần tự.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trích xuất DOM & Kiểu dáng`}),` — cung cấp các phương thức trực tiếp để lấy mã nguồn HTML thô, biểu kiểu CSS đang hoạt động hoặc thông số kích thước trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi An toàn trong Sandbox`}),` — thực thi các hàm callback an toàn trong ngữ cảnh cửa sổ trình duyệt đang hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`BrowserItem`}),` được khởi tạo bằng một URL đích và một đối tượng cấu hình tùy chọn.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`url: string`}),` — URL trang web cần tải và chụp ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`options: ScreenshotOptions`}),` — (Tùy chọn) Kích thước viewport, định dạng, chất lượng và thời gian chờ.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BrowserItem } from '@dxtmisha/scripts'

const browserItem = new BrowserItem('http://localhost:5173', {
  width: 1280,
  height: 800,
  format: 'png',
  fullPage: true
})
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`getters`,children:`Getters`}),`
`,(0,c.jsx)(t.h3,{id:`getters-cấu-hình`,children:`Getters Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`args: string[]`}),` — Các đối số khởi chạy trình duyệt của Puppeteer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`waitUntil: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]`}),` — Điều kiện hoàn thành việc tải trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeout: number`}),` — Thời gian chờ tối đa khi tải trang (ms).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`format: 'png' | 'jpeg' | 'webp'`}),` — Định dạng hình ảnh đầu ra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width: number`}),` — Chiều rộng viewport.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height: number`}),` — Chiều cao viewport.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`quality: number`}),` — Chất lượng ảnh chụp (0-100) dành cho định dạng JPEG/WebP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fullPage: boolean`}),` — Trạng thái chụp toàn bộ trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extension: string`}),` — Phần mở rộng tệp tương ứng (ví dụ: `,(0,c.jsx)(t.code,{children:`".png"`}),`, `,(0,c.jsx)(t.code,{children:`".jpg"`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-vòng-đời`,children:`Quản lý Vòng đời`}),`
`,(0,c.jsx)(t.h4,{id:`getbrowser`,children:(0,c.jsx)(t.code,{children:`getBrowser`})}),`
`,(0,c.jsx)(t.p,{children:`Khởi tạo lười biếng và trả về đối tượng trình duyệt Puppeteer.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<Browser>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const browser = await browserItem.getBrowser()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getpage`,children:(0,c.jsx)(t.code,{children:`getPage`})}),`
`,(0,c.jsx)(t.p,{children:`Tạo mới hoặc trả về đối tượng trang trình duyệt, cấu hình kích thước viewport và gắn các trình lắng nghe ghi log lỗi console.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<Page>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const page = await browserItem.getPage()
`})}),`
`,(0,c.jsx)(t.h4,{id:`getresponse`,children:(0,c.jsx)(t.code,{children:`getResponse`})}),`
`,(0,c.jsxs)(t.p,{children:[`Điều hướng trang đến URL đích với các cấu hình `,(0,c.jsx)(t.code,{children:`waitUntil`}),` và `,(0,c.jsx)(t.code,{children:`timeout`}),` tương ứng.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<HTTPResponse | undefined>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const response = await browserItem.getResponse()
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`chụp-ảnh--hành-động`,children:`Chụp ảnh & Hành động`}),`
`,(0,c.jsx)(t.h4,{id:`screenshot`,children:(0,c.jsx)(t.code,{children:`screenshot`})}),`
`,(0,c.jsx)(t.p,{children:`Kích hoạt quy trình chụp ảnh màn hình và lưu vào đường dẫn được chỉ định. Tự động chọn giữa chụp toàn trang hoặc cắt lát trang dựa trên cấu hình.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`outputPath: string`}),` — Đường dẫn lưu tệp hình ảnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<this>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`await browserItem.screenshot('./dist/screenshots/homepage')
`})}),`
`,(0,c.jsx)(t.h4,{id:`evaluate`,children:(0,c.jsx)(t.code,{children:`evaluate`})}),`
`,(0,c.jsx)(t.p,{children:`Thực thi một hàm tùy chỉnh bên trong ngữ cảnh trang trình duyệt.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pageFunction: Func | string`}),` — Đoạn mã hoặc hàm cần thực thi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...args: Params`}),` — Các đối số bổ sung truyền vào hàm.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`Promise<Awaited<ReturnType<Func>> | undefined>`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const title = await browserItem.evaluate(() => document.title)
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`tiện-ích`,children:`Tiện ích`}),`
`,(0,c.jsx)(t.h3,{id:`trích-xuất-dom`,children:`Trích xuất DOM`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getDom(): Promise<string>`}),` — Lấy toàn bộ nội dung HTML của tài liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getBody(): Promise<string>`}),` — Lấy mã nguồn HTML bên trong thẻ `,(0,c.jsx)(t.code,{children:`document.body`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStyles(): Promise<string>`}),` — Trích xuất và hợp nhất tất cả quy tắc CSS đang hoạt động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getMetrics(): Promise<ScreenshotMetrics>`}),` — Đọc tổng chiều rộng và chiều cao có thể cuộn của trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reset(): Promise<this>`}),` — Khởi động lại trạng thái của trang, kích thước mét và phản hồi.`]}),`
`]}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h2,{id:`kiểu-dữ-liệu`,children:`Kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`screenshotoptions`,children:`ScreenshotOptions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`args?: string[]`}),` — Cấu hình cờ Chromium tùy chỉnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]`}),` — Điều kiện dừng để hoàn tất tải trang.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`timeout?: number`}),` — Thời gian chờ tối đa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`format?: 'png' | 'jpeg' | 'webp'`}),` — Định dạng hình ảnh đích.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`width?: number`}),` — Chiều rộng viewport ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`height?: number`}),` — Chiều cao viewport ban đầu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`quality?: number`}),` — Chất lượng nén hình ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fullPage?: boolean`}),` — Chế độ chụp toàn trang.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};