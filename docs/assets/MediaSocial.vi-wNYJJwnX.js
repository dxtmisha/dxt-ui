import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/Classes/MediaSocial - Hồ sơ mạng xã hội và URL`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-mediasocial`,children:`Lớp MediaSocial`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` là một `,(0,c.jsx)(t.strong,{children:`Lớp chính (Tĩnh)`}),` được thiết kế để quản lý cấu hình các mạng xã hội, tạo liên kết hồ sơ người dùng, trích xuất tên người dùng (handle), và quản lý biểu tượng tùy chỉnh cho hơn 35 nền tảng được hỗ trợ.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Danh mục mạng xã hội tích hợp`}),` — hỗ trợ sẵn hơn 35 mạng xã hội toàn cầu và khu vực (như GitHub, Telegram, LinkedIn, X, WeChat, Zalo).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo URL hồ sơ cá nhân`}),` — tự động xây dựng liên kết hồ sơ chuẩn từ tên người dùng hoặc handle (`,(0,c.jsx)(t.code,{children:`getUrl`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Trích xuất tên người dùng`}),` — phân tích liên kết hồ sơ đầy đủ để trích xuất handle một cách an toàn bằng cách loại bỏ tiền tố và hậu tố (`,(0,c.jsx)(t.code,{children:`getValue`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký biểu tượng tùy chỉnh`}),` — hỗ trợ đăng ký biểu tượng SVG hoặc tên biểu tượng tùy chỉnh cho từng nền tảng (`,(0,c.jsx)(t.code,{children:`addIcon`}),`, `,(0,c.jsx)(t.code,{children:`addIcons`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giao diện tĩnh tiện lợi`}),` — thực thi mọi tác vụ trực tiếp trên lớp mà không cần khởi tạo đối tượng thủ công.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-url-và-giá-trị`,children:`Quản lý URL và giá trị`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getUrl(code: InputSocialType | InputSocialTypeValue, value: string): string`}),` — xây dựng URL hồ sơ đầy đủ từ tên người dùng hoặc chuỗi giá trị dựa trên tiền tố và hậu tố đã cấu hình của nền tảng. Trả về nguyên giá trị nếu nó đã bắt đầu bằng tiền tố.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getValue(code: InputSocialType | InputSocialTypeValue, url: string): string`}),` — trích xuất tên người dùng hoặc handle gốc từ một URL hồ sơ đầy đủ bằng cách loại bỏ tiền tố và hậu tố đã đăng ký.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`đăng-ký-tĩnh-và-biểu-tượng`,children:`Đăng ký tĩnh và biểu tượng`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static get(code: InputSocialType | InputSocialTypeValue): InputSocialItem | undefined`}),` — trả về cấu hình của mạng xã hội theo mã định danh, kết hợp với biểu tượng tùy chỉnh nếu đã đăng ký.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getList(): InputSocialList`}),` — trả về mảng đầy đủ cấu hình của tất cả các mạng xã hội được hỗ trợ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addIcon(code: InputSocialTypeValue, icon: string): void`}),` — đăng ký một biểu tượng hoặc mã SVG tùy chỉnh cho mạng xã hội cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static addIcons(icons: InputSocialIcons): void`}),` — đăng ký hàng loạt nhiều biểu tượng tùy chỉnh cùng lúc.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`kiểu-dữ-liệu`,children:`Kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`inputsocialitem`,children:`InputSocialItem`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: InputSocialType | InputSocialTypeValue`}),` — mã định danh duy nhất của mạng xã hội.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên hiển thị trực quan của mạng xã hội.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefix?: string`}),` — tiền tố URL cho liên kết hồ sơ người dùng (ví dụ: `,(0,c.jsx)(t.code,{children:`'https://github.com/'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`suffix?: string`}),` — hậu tố URL cho liên kết hồ sơ người dùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mask?: any`}),` — cấu hình mặt nạ nhập liệu (mask) cho trường biểu mẫu nếu có.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icon?: string`}),` — tên biểu tượng hoặc mã SVG của biểu tượng.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`inputsocialtype`,children:`InputSocialType`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum các mã mạng xã hội được hỗ trợ: `,(0,c.jsx)(t.code,{children:`alipay`}),`, `,(0,c.jsx)(t.code,{children:`baidu`}),`, `,(0,c.jsx)(t.code,{children:`dingtalk`}),`, `,(0,c.jsx)(t.code,{children:`discord`}),`, `,(0,c.jsx)(t.code,{children:`douyin`}),`, `,(0,c.jsx)(t.code,{children:`dzen`}),`, `,(0,c.jsx)(t.code,{children:`facebook`}),`, `,(0,c.jsx)(t.code,{children:`github`}),`, `,(0,c.jsx)(t.code,{children:`gitlab`}),`, `,(0,c.jsx)(t.code,{children:`habr`}),`, `,(0,c.jsx)(t.code,{children:`instagram`}),`, `,(0,c.jsx)(t.code,{children:`line`}),`, `,(0,c.jsx)(t.code,{children:`linkedin`}),`, `,(0,c.jsx)(t.code,{children:`medium`}),`, `,(0,c.jsx)(t.code,{children:`messenger`}),`, `,(0,c.jsx)(t.code,{children:`ok`}),`, `,(0,c.jsx)(t.code,{children:`pinterest`}),`, `,(0,c.jsx)(t.code,{children:`qq`}),`, `,(0,c.jsx)(t.code,{children:`reddit`}),`, `,(0,c.jsx)(t.code,{children:`skype`}),`, `,(0,c.jsx)(t.code,{children:`snapchat`}),`, `,(0,c.jsx)(t.code,{children:`telegram`}),`, `,(0,c.jsx)(t.code,{children:`tiktok`}),`, `,(0,c.jsx)(t.code,{children:`tumblr`}),`, `,(0,c.jsx)(t.code,{children:`twitter`}),`, `,(0,c.jsx)(t.code,{children:`viber`}),`, `,(0,c.jsx)(t.code,{children:`vk`}),`, `,(0,c.jsx)(t.code,{children:`wechat`}),`, `,(0,c.jsx)(t.code,{children:`weibo`}),`, `,(0,c.jsx)(t.code,{children:`whatsapp`}),`, `,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`xiaohongshu`}),`, `,(0,c.jsx)(t.code,{children:`youtube`}),`, `,(0,c.jsx)(t.code,{children:`zalo`}),`, `,(0,c.jsx)(t.code,{children:`zhihu`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Xây dựng liên kết hồ sơ đầy đủ từ tên người dùng
const profileUrl = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')
// Kết quả: 'https://github.com/dxtmisha'

// Trích xuất tên người dùng từ liên kết đầy đủ
const username = MediaSocial.getValue(InputSocialType.telegram, 'https://t.me/dxtmisha')
// Kết quả: 'dxtmisha'

// Lấy thông tin cấu hình của nền tảng
const githubConfig = MediaSocial.get(InputSocialType.github)
console.log(githubConfig?.name) // 'GitHub'
console.log(githubConfig?.prefix) // 'https://github.com/'

// Thêm hoặc ghi đè biểu tượng tùy chỉnh
MediaSocial.addIcon(InputSocialType.telegram, '<svg class="custom-tg">...</svg>')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};