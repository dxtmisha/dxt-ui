import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-DGqIrx_S.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-7QgoPoUg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/media/3. Quốc kỳ`}),`
`,(0,c.jsx)(t.h1,{id:`quốc-kỳ-kết-nối-và-tích-hợp`,children:`Quốc kỳ: Kết nối và tích hợp`}),`
`,(0,c.jsxs)(t.p,{children:[`Gói `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` cung cấp hệ thống tài nguyên quốc kỳ và siêu dữ liệu địa lý toàn diện với hiệu năng cao, bao phủ hơn 250 quốc gia và vùng lãnh thổ theo chuẩn ISO 3166-1 alpha-2. Gói hỗ trợ hai cơ chế hiển thị linh hoạt — nhập trực tiếp vector SVG và sprite raster WebP siêu nhẹ kết hợp các lớp CSS, đồng thời tích hợp bộ dữ liệu địa lý chi tiết (`,(0,c.jsx)(t.code,{children:`geo.json`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`các-cách-tiếp-cận-kết-nối`,children:`Các cách tiếp cận kết nối`}),`
`,(0,c.jsx)(t.p,{children:`Tùy thuộc vào yêu cầu giao diện và tối ưu hóa hiệu năng, bạn có thể kết nối quốc kỳ theo hai phương thức chính:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Nhập trực tiếp SVG Vector (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`)`]}),` — lý tưởng cho các phần tử độc lập, biểu ngữ lớn, phần hero banner và các màn hình yêu cầu độ phân giải vector sắc nét ở mọi kích thước.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Sprite WebP kết hợp lớp CSS (`,(0,c.jsx)(t.code,{children:`@dxtmisha/media/style.css`}),`)`]}),` — tối ưu hóa cho danh sách chọn quốc gia, trường nhập số điện thoại (`,(0,c.jsx)(t.code,{children:`D1InputPhone`}),`) và bảng dữ liệu dày đặc, nơi việc tải hàng trăm tệp SVG riêng lẻ sẽ gây nghẽn mạng hoặc làm phình to DOM.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`1-nhập-trực-tiếp-tệp-svg-vector`,children:`1. Nhập trực tiếp tệp SVG Vector`}),`
`,(0,c.jsxs)(t.p,{children:[`Bạn có thể nhập trực tiếp các chuỗi mã SVG vector từ đường dẫn phụ `,(0,c.jsx)(t.code,{children:`@dxtmisha/media/flags`}),`. Mỗi quốc kỳ được đặt tên theo mã quốc gia ISO 3166-1 alpha-2 kèm hậu tố `,(0,c.jsx)(t.code,{children:`Svg`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  UsSvg,
  VnSvg,
  DeSvg,
  GbSvg,
  FrSvg,
  JpSvg
} from '@dxtmisha/media/flags'

// Sử dụng trực tiếp trong mã
const vietnamFlag = VnSvg
`})}),`
`,(0,c.jsx)(t.p,{children:`Trong template Vue 3:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="country-badge">
    <span class="flag-icon" v-html="VnSvg" />
    <span class="country-name">Việt Nam</span>
  </div>
</template>

<script setup lang="ts">
import { VnSvg } from '@dxtmisha/media/flags'
<\/script>
`})}),`
`,(0,c.jsx)(t.p,{children:`Bạn cũng có thể nhập đối tượng xuất mặc định chứa toàn bộ hơn 250 cờ SVG:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import flags from '@dxtmisha/media/flags'

const svgMarkup = flags.UsSvg
`})}),`
`,(0,c.jsxs)(t.h2,{id:`2-sprite-webp-hiệu-năng-cao-stylecss`,children:[`2. Sprite WebP hiệu năng cao (`,(0,c.jsx)(t.code,{children:`style.css`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Đối với trường nhập số điện thoại quốc tế, bộ chuyển đổi ngôn ngữ và các menu thả xuống với hàng trăm quốc gia, việc nhập nhiều tệp SVG riêng biệt tạo ra chi phí lớn. `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),` tích hợp sẵn ảnh sprite WebP tối ưu hóa cao mà không cần JavaScript khi hiển thị.`]}),`
`,(0,c.jsx)(t.h3,{id:`cài-đặt-và-nhập-kiểu-dáng`,children:`Cài đặt và nhập kiểu dáng`}),`
`,(0,c.jsx)(t.p,{children:`Nhập tệp CSS đã biên dịch một lần tại điểm bắt đầu ứng dụng:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Trong main.ts, App.vue hoặc tệp kiểu dáng
import '@dxtmisha/media/style.css'
`})}),`
`,(0,c.jsx)(t.h3,{id:`sử-dụng-với-các-lớp-css`,children:`Sử dụng với các lớp CSS`}),`
`,(0,c.jsxs)(t.p,{children:[`Hiển thị bất kỳ quốc kỳ nào bằng lớp cơ sở `,(0,c.jsx)(t.code,{children:`.ui-sys-flags`}),` kết hợp với lớp sửa đổi quốc gia `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--<MÃ>`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<!-- Quốc kỳ Việt Nam -->
<span class="ui-sys-flags ui-sys-flags--VN" />

<!-- Quốc kỳ Hoa Kỳ -->
<span class="ui-sys-flags ui-sys-flags--US" />

<!-- Quốc kỳ Đức -->
<span class="ui-sys-flags ui-sys-flags--DE" />

<!-- Quốc kỳ Nhật Bản -->
<span class="ui-sys-flags ui-sys-flags--JP" />
`})}),`
`,(0,c.jsx)(t.h3,{id:`điều-chỉnh-kích-thước-và-tùy-biến`,children:`Điều chỉnh kích thước và tùy biến`}),`
`,(0,c.jsx)(t.p,{children:`Kích thước của ảnh sprite có thể được điều chỉnh linh hoạt bằng các biến tùy chỉnh CSS:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.custom-flag {
  --sys-flags-width: 32px;
  --sys-flags-height: 24px;
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<span class="ui-sys-flags ui-sys-flags--VN custom-flag" />
`})}),`
`,(0,c.jsxs)(t.h2,{id:`3-siêu-dữ-liệu-địa-lý-geojson`,children:[`3. Siêu dữ liệu địa lý (`,(0,c.jsx)(t.code,{children:`geo.json`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Thư viện xuất toàn bộ tập dữ liệu `,(0,c.jsx)(t.code,{children:`geo`}),` chứa thông tin chi tiết về quốc gia, mã điện thoại, mặt nạ nhập liệu số điện thoại và múi giờ:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { geo } from '@dxtmisha/media'

// Tìm kiếm thông tin quốc gia
const vietnam = geo.find(item => item.country === 'VN')

console.log(vietnam?.country)   // 'VN'
console.log(vietnam?.phoneCode) // '84'
console.log(vietnam?.phoneMask) // ['+84-**-***-****', ...]
console.log(vietnam?.zone)      // 'Asia/Ho_Chi_Minh'
`})}),`
`,(0,c.jsx)(t.h3,{id:`xây-dựng-bộ-chọn-quốc-gia-động`,children:`Xây dựng bộ chọn quốc gia động`}),`
`,(0,c.jsxs)(t.p,{children:[`Kết hợp dữ liệu `,(0,c.jsx)(t.code,{children:`geo`}),` với ảnh sprite CSS cho phép bạn tạo ra các menu chọn quốc gia cực kỳ gọn nhẹ:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<template>
  <div class="country-list">
    <div
      v-for="item in geo"
      :key="item.country"
      class="country-option"
      @click="selectCountry(item.country)"
    >
      <span :class="['ui-sys-flags', \`ui-sys-flags--\${item.country}\`]" />
      <span class="country-code">+{{ item.phoneCode }}</span>
      <span class="country-name">{{ item.country }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { geo } from '@dxtmisha/media'
import '@dxtmisha/media/style.css'

function selectCountry(code: string) {
  console.log('Quốc gia đã chọn:', code)
}
<\/script>
`})}),`
`,(0,c.jsx)(t.h2,{id:`4-tích-hợp-với-các-thành-phần-dxt-ui`,children:`4. Tích hợp với các thành phần DXT UI`}),`
`,(0,c.jsxs)(t.p,{children:[`Hệ thống quốc kỳ được tích hợp nguyên bản trong các thành phần của thư viện `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1InputPhone`})}),` — tự động hiển thị quốc kỳ tương ứng từ sprite dựa trên mã số điện thoại đã nhập hoặc quốc gia được chọn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`D1MenuCountry`})}),` — danh mục chọn quốc gia tải tức thì qua sprite và hỗ trợ điều hướng bàn phím đầy đủ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`danh-mục-các-mã-quốc-gia-phổ-biến`,children:`Danh mục các mã quốc gia phổ biến`}),`
`,(0,c.jsx)(t.p,{children:`Các mã quốc gia phổ biến và định danh xuất tương ứng:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Việt Nam (`,(0,c.jsx)(t.code,{children:`VN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`VnSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--VN`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+84`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Hoa Kỳ (`,(0,c.jsx)(t.code,{children:`US`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`UsSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--US`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+1`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Vương quốc Anh (`,(0,c.jsx)(t.code,{children:`GB`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`GbSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--GB`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+44`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Đức (`,(0,c.jsx)(t.code,{children:`DE`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`DeSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--DE`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+49`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Pháp (`,(0,c.jsx)(t.code,{children:`FR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`FrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--FR`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+33`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Nhật Bản (`,(0,c.jsx)(t.code,{children:`JP`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`JpSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--JP`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+81`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Trung Quốc (`,(0,c.jsx)(t.code,{children:`CN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`CnSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--CN`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+86`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Hàn Quốc (`,(0,c.jsx)(t.code,{children:`KR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`KrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--KR`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+82`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Úc (`,(0,c.jsx)(t.code,{children:`AU`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`AuSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--AU`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+61`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Canada (`,(0,c.jsx)(t.code,{children:`CA`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`CaSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--CA`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+1`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Brazil (`,(0,c.jsx)(t.code,{children:`BR`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`BrSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--BR`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+55`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Ấn Độ (`,(0,c.jsx)(t.code,{children:`IN`}),`)`]}),` — `,(0,c.jsx)(t.code,{children:`InSvg`}),`, `,(0,c.jsx)(t.code,{children:`.ui-sys-flags--IN`}),`, mã vùng điện thoại `,(0,c.jsx)(t.code,{children:`+91`})]}),`
`,(0,c.jsx)(t.li,{children:`cùng toàn bộ hơn 240 mã quốc gia khác theo chuẩn ISO 3166-1 alpha-2.`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};