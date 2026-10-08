import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/2. Mạng xã hội`}),`
`,(0,c.jsx)(t.h1,{id:`mạng-xã-hội-kết-nối-và-tích-hợp`,children:`Mạng xã hội: Kết nối và tích hợp`}),`
`,(0,c.jsxs)(t.p,{children:[`Gói `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` tích hợp một hệ thống con mạng xã hội toàn diện bao gồm hơn 35 nền tảng quốc tế và khu vực phổ biến (GitHub, Telegram, LinkedIn, X, WeChat, Zalo, Discord, YouTube, v.v.). Gói cung cấp các biểu tượng vector SVG thương hiệu chính thức, tiền tố/hậu tố định dạng URL, trích xuất tên người dùng, mặt nạ nhập liệu và khả năng ghi đè biểu tượng tùy chỉnh linh hoạt.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-cách-tiếp-cận-kết-nối`,children:`Các cách tiếp cận kết nối`}),`
`,(0,c.jsx)(t.p,{children:`Tùy theo yêu cầu của ứng dụng, bạn có thể tích hợp các tài nguyên mạng xã hội theo ba cách:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Từ điển biểu tượng & Đăng ký (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`)`]}),` — truy xuất biểu tượng thương hiệu vector qua từ điển `,(0,c.jsx)(t.code,{children:`socialIcons`}),` hoặc khởi tạo toàn bộ qua `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Quản lý & Phân tích URL qua `,(0,c.jsx)(t.code,{children:`MediaSocial`})]}),` — tự động tạo liên kết hồ sơ chuẩn (`,(0,c.jsx)(t.code,{children:`getUrl`}),`) hoặc trích xuất tên người dùng thuần (`,(0,c.jsx)(t.code,{children:`getValue`}),`) cho các biểu mẫu và trường nhập liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sổ đăng ký biểu tượng tùy chỉnh`}),` — ghi đè các biểu tượng mặc định hoặc thêm các biểu tượng thương hiệu riêng trên toàn bộ ứng dụng.`]}),`
`]}),`
`,(0,c.jsxs)(t.h2,{id:`module-socialsts-dxtmishamediasocials`,children:[`Module `,(0,c.jsx)(t.code,{children:`socials.ts`}),` (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/socials`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Module `,(0,c.jsx)(t.code,{children:`socials.ts`}),` đóng vai trò là nguồn tài nguyên chính của các biểu tượng vector SVG thương hiệu mạng xã hội. Module này cung cấp:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Từ điển `,(0,c.jsx)(t.code,{children:`socialIcons`}),` ánh xạ theo các mã enum `,(0,c.jsx)(t.code,{children:`InputSocialType`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Hàm khởi tạo hàng loạt `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lưu ý: Các biểu tượng mạng xã hội riêng lẻ không được xuất dưới dạng biến riêng biệt; toàn bộ biểu tượng được truy cập thông qua từ điển `,(0,c.jsx)(t.code,{children:`socialIcons`}),` hoặc phương thức của lớp `,(0,c.jsx)(t.code,{children:`MediaSocial`}),`.`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-hàm-registersocialicons`,children:[`1. Hàm `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm `,(0,c.jsx)(t.code,{children:`registerSocialIcons()`}),` tự động đăng ký toàn bộ hơn 35 biểu tượng SVG thương hiệu mặc định từ từ điển `,(0,c.jsx)(t.code,{children:`socialIcons`}),` vào sổ đăng ký tĩnh `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` chỉ với một lệnh gọi:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { registerSocialIcons } from '@dxtmisha/media/socials'

// Đăng ký toàn bộ biểu tượng mạng xã hội mặc định vào MediaSocial
registerSocialIcons()
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sau khi gọi hàm này, phương thức `,(0,c.jsx)(t.code,{children:`MediaSocial.get(code)`}),` sẽ trả về biểu tượng SVG đã đăng ký, được các thành phần biểu mẫu như `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),` tự động sử dụng.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-từ-điển-socialicons`,children:[`2. Từ điển `,(0,c.jsx)(t.code,{children:`socialIcons`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Đối tượng `,(0,c.jsx)(t.code,{children:`socialIcons`}),` là một từ điển có kiểu dữ liệu (`,(0,c.jsx)(t.code,{children:`InputSocialIcons`}),`), có khóa là các giá trị enum của `,(0,c.jsx)(t.code,{children:`InputSocialType`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { socialIcons } from '@dxtmisha/media/socials'
import { InputSocialType } from '@dxtmisha/media'

// Truy cập trực tiếp biểu tượng qua khóa enum
const githubSvg = socialIcons[InputSocialType.github]
const telegramSvg = socialIcons[InputSocialType.telegram]
const linkedinSvg = socialIcons[InputSocialType.linkedin]
`})}),`
`,(0,c.jsx)(t.p,{children:`Trong template Vue 3:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="social-links">
    <a href="https://github.com/dxtmisha" target="_blank" v-html="socialIcons['github']" />
    <a href="https://t.me/dxtmisha" target="_blank" v-html="socialIcons['telegram']" />
  </div>
</template>

<script setup lang="ts">
import { socialIcons } from '@dxtmisha/media/socials'
<\/script>
`})}),`
`,(0,c.jsxs)(t.h2,{id:`quản-lý-url-với-mediasocial`,children:[`Quản lý URL với `,(0,c.jsx)(t.code,{children:`MediaSocial`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`MediaSocial`}),` cung cấp các phương thức tiện ích để xây dựng liên kết hồ sơ chuẩn và trích xuất tên người dùng thuần mà không cần viết biểu thức chính quy (Regex).`]}),`
`,(0,c.jsxs)(t.h3,{id:`tạo-liên-kết-hồ-sơ-geturl`,children:[`Tạo liên kết hồ sơ (`,(0,c.jsx)(t.code,{children:`getUrl`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Tạo liên kết hồ sơ hợp lệ từ mã mạng xã hội và tên người dùng:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Trả về 'https://github.com/dxtmisha'
const githubUrl = MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')

// Trả về 'https://t.me/dxtmisha'
const tgUrl = MediaSocial.getUrl(InputSocialType.telegram, 'dxtmisha')

// Nếu giá trị nhập vào đã có sẵn tiền tố, hàm sẽ trả về nguyên vẹn giá trị đó
const existingUrl = MediaSocial.getUrl(InputSocialType.github, 'https://github.com/dxtmisha')
// Trả về: 'https://github.com/dxtmisha'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`trích-xuất-tên-người-dùng-getvalue`,children:[`Trích xuất tên người dùng (`,(0,c.jsx)(t.code,{children:`getValue`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Trích xuất tên người dùng thuần từ một liên kết hồ sơ đầy đủ bằng cách loại bỏ tiền tố và hậu tố:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Trả về 'dxtmisha'
const username = MediaSocial.getValue(InputSocialType.telegram, 'https://t.me/dxtmisha')

// Trả về 'dxtmisha'
const githubUser = MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha')
`})}),`
`,(0,c.jsx)(t.h2,{id:`đăng-ký-biểu-tượng-mạng-xã-hội-tùy-chỉnh`,children:`Đăng ký biểu tượng mạng xã hội tùy chỉnh`}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu dự án yêu cầu kiểu biểu tượng đơn sắc, màu chủ đạo riêng theo thiết kế hoặc thương hiệu đặc biệt, hãy sử dụng `,(0,c.jsx)(t.code,{children:`MediaSocial.addIcon`}),` hoặc `,(0,c.jsx)(t.code,{children:`MediaSocial.addIcons`}),`:`]}),`
`,(0,c.jsx)(t.h3,{id:`thay-thế-một-biểu-tượng-đơn-lẻ`,children:`Thay thế một biểu tượng đơn lẻ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Ghi đè biểu tượng Telegram bằng mã SVG tùy chỉnh
MediaSocial.addIcon(
  InputSocialType.telegram,
  '<svg class="custom-telegram" viewBox="0 0 24 24"><path d="..."/></svg>'
)
`})}),`
`,(0,c.jsx)(t.h3,{id:`thay-thế-hàng-loạt`,children:`Thay thế hàng loạt`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

MediaSocial.addIcons({
  [InputSocialType.github]: '<svg class="brand-gh">...</svg>',
  [InputSocialType.x]: '<svg class="brand-x">...</svg>'
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sau khi đăng ký, bất kỳ thành phần nào gọi `,(0,c.jsx)(t.code,{children:`MediaSocial.get(code)`}),` hoặc sử dụng `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),` đều sẽ hiển thị biểu tượng tùy chỉnh ngay lập tức.`]}),`
`,(0,c.jsx)(t.h2,{id:`tra-cứu-danh-mục-mạng-xã-hội--siêu-dữ-liệu`,children:`Tra cứu danh mục mạng xã hội & Siêu dữ liệu`}),`
`,(0,c.jsx)(t.p,{children:`Bạn có thể truy vấn danh sách tất cả các nền tảng hoặc tra cứu cấu hình chi tiết:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { MediaSocial, InputSocialType } from '@dxtmisha/media'

// Lấy thông tin cấu hình của một nền tảng
const linkedin = MediaSocial.get(InputSocialType.linkedin)
console.log(linkedin?.name)   // 'LinkedIn'
console.log(linkedin?.prefix) // 'https://www.linkedin.com/in/'
console.log(linkedin?.icon)   // Chuỗi mã SVG vector

// Lấy mảng toàn bộ hơn 35 nền tảng được hỗ trợ
const allSocials = MediaSocial.getList()
`})}),`
`,(0,c.jsx)(t.h2,{id:`tích-hợp-với-các-thành-phần-giao-diện-dxt-ui`,children:`Tích hợp với các thành phần giao diện DXT UI`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`MediaSocial`}),` hoạt động trơn tru với các thành phần biểu mẫu như `,(0,c.jsx)(t.code,{children:`D1InputSocial`}),` trong gói `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <d1-input-social
    v-model="socialHandle"
    :type="InputSocialType.telegram"
    label="Tài khoản Telegram"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputSocialType } from '@dxtmisha/media'

const socialHandle = ref('dxtmisha')
<\/script>
`})}),`
`,(0,c.jsx)(t.h2,{id:`bảng-tham-chiếu-các-nền-tảng-được-hỗ-trợ`,children:`Bảng tham chiếu các nền tảng được hỗ trợ`}),`
`,(0,c.jsxs)(t.p,{children:[`Enum `,(0,c.jsx)(t.code,{children:`InputSocialType`}),` định nghĩa hơn 35 nền tảng mạng xã hội:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`GitHub (`,(0,c.jsx)(t.code,{children:`github`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://github.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Telegram (`,(0,c.jsx)(t.code,{children:`telegram`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://t.me/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`LinkedIn (`,(0,c.jsx)(t.code,{children:`linkedin`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.linkedin.com/in/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`X / Twitter (`,(0,c.jsx)(t.code,{children:`x`}),`, `,(0,c.jsx)(t.code,{children:`twitter`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://x.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Discord (`,(0,c.jsx)(t.code,{children:`discord`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://discord.gg/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`YouTube (`,(0,c.jsx)(t.code,{children:`youtube`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.youtube.com/@`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Instagram (`,(0,c.jsx)(t.code,{children:`instagram`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.instagram.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Facebook (`,(0,c.jsx)(t.code,{children:`facebook`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.facebook.com/`})]}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.strong,{children:[`WeChat (`,(0,c.jsx)(t.code,{children:`wechat`}),`)`]})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Zalo (`,(0,c.jsx)(t.code,{children:`zalo`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://zalo.me/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`VK (`,(0,c.jsx)(t.code,{children:`vk`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://vk.com/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`TikTok (`,(0,c.jsx)(t.code,{children:`tiktok`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.tiktok.com/@`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Reddit (`,(0,c.jsx)(t.code,{children:`reddit`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://www.reddit.com/user/`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Medium (`,(0,c.jsx)(t.code,{children:`medium`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`https://medium.com/@`})]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};