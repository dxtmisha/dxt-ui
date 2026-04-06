import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/# Hook phản hồi (Composables)`}),`
`,(0,c.jsx)(n.h1,{id:`hook-phản-hồi-composables`,children:`Hook phản hồi (Composables)`}),`
`,(0,c.jsxs)(n.p,{children:[`Một tập hợp các công cụ để làm việc với các API trình duyệt, lưu trữ và quốc tế hóa theo phong cách phản hồi của `,(0,c.jsx)(n.strong,{children:`Vue 3 (Composition API)`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`đặc-điểm`,children:`Đặc điểm`}),`
`,(0,c.jsx)(n.p,{children:`Ý tưởng cốt lõi của các hook này là cung cấp một giao diện đơn giản và đáng tin cậy để làm việc với dữ liệu và trạng thái bên ngoài. Chúng tự động đồng bộ hóa các giá trị với kho lưu trữ, theo dõi các thay đổi trong các tab khác và đảm bảo cập nhật giao diện người dùng tức thì khi các cài đặt toàn cầu (như ngôn ngữ hoặc đơn vị tiền tệ) thay đổi.`}),`
`,(0,c.jsx)(n.h2,{id:`các-hook-hiện-có`,children:`Các hook hiện có`}),`
`,(0,c.jsx)(n.h3,{id:`lưu-trữ-dữ-liệu`,children:`Lưu trữ dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useStorageRef`}),` — Lớp vỏ phản hồi cho `,(0,c.jsx)(n.code,{children:`localStorage`}),`. Hỗ trợ thời gian tồn tại (cache) và đồng bộ hóa giữa các tab.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useSessionRef`}),` — Để làm việc với `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useCookieRef`}),` — Quản lý cookie phản hồi.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`quốc-tế-hóa-i18n`,children:`Quốc tế hóa (I18n)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useTranslateRef`}),` — Truy xuất phản hồi các chuỗi bản dịch. Tự động cập nhật khi ngôn ngữ được thay đổi trong `,(0,c.jsx)(n.code,{children:`GeoRef`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useGeoIntlRef`}),` — Định dạng số, tiền tệ và ngày tháng dựa trên ngôn ngữ hiện tại.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xử-lý-dữ-liệu-và-tìm-kiếm`,children:`Xử lý dữ liệu và tìm kiếm`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useSearchRef`}),` — Tìm kiếm phía máy khách cho các mảng dữ liệu với hỗ trợ lọc nhiều cột.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useFormattersRef`}),` — Định dạng hàng loạt danh sách đối tượng dựa trên các quy tắc được xác định trước.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`api-trình-duyệt-và-trạng-thái`,children:`API trình duyệt và Trạng thái`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useBroadcastValueRef`}),` — Truyền và đồng bộ hóa dữ liệu giữa các cửa sổ/tab thông qua `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useHashRef`}),` — Quản lý phản hồi mã băm URL (`,(0,c.jsx)(n.code,{children:`window.location.hash`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`useLoadingRef`}),` — Quản lý dễ dàng các trạng thái tải (cục bộ và toàn cầu).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cách-làm-việc-với-chúng`,children:`Cách làm việc với chúng`}),`
`,(0,c.jsxs)(n.p,{children:[`Các hook được thiết kế để giảm thiểu mã mẫu. Ví dụ: khi làm việc với bộ lưu trữ cục bộ, bạn không cần gọi `,(0,c.jsx)(n.code,{children:`getItem`}),` và `,(0,c.jsx)(n.code,{children:`setItem`}),` một cách thủ công. Chỉ cần tạo một biến và mọi thay đổi đối với biến đó sẽ tự động được lưu vào `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useStorageRef } from '@dxtmisha/functional'

// Giá trị 'theme' sẽ được tự động lưu và tải
const theme = useStorageRef('theme', 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Đối với quốc tế hóa, một sự kết hợp giữa các lớp quản lý và các hook được sử dụng. Nếu bạn thay đổi ngôn ngữ thông qua `,(0,c.jsx)(n.code,{children:`GeoRef.set()`}),`, tất cả các biến được tạo qua `,(0,c.jsx)(n.code,{children:`useTranslateRef`}),` sẽ ngay lập tức cập nhật giá trị của chúng trên toàn bộ ứng dụng mà không cần tải lại trang.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useTranslateRef, useGeoIntlRef } from '@dxtmisha/functional'

const title = useTranslateRef('main.title')
const intl = useGeoIntlRef()

// Giá đã định dạng sẽ tự cập nhật khi tiền tệ hoặc ngôn ngữ thay đổi
const priceDisplay = intl.currency(12500, 'RUB')
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Các hook tìm kiếm và định dạng (`,(0,c.jsx)(n.code,{children:`useSearchRef`}),`, `,(0,c.jsx)(n.code,{children:`useFormattersRef`}),`) thường được sử dụng như các khối xây dựng cho các công cụ phức tạp hơn như `,(0,c.jsx)(n.code,{children:`useApiManagementRef`}),`, nhưng chúng cũng có thể được sử dụng độc lập để xử lý các mảng dữ liệu cục bộ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { useSearchRef } from '@dxtmisha/functional'

const items = ref([{ name: 'Táo' }, { name: 'Chuối' }])
const search = ref('')

const { listSearch } = useSearchRef(items, ['name'], search)
// listSearch sẽ luôn chỉ chứa các mục đã được lọc
`})}),`
`,(0,c.jsx)(n.p,{children:`Cách tiếp cận này cho phép bạn xây dựng giao diện một cách khai báo: bạn mô tả dữ liệu nào bạn cần và cách chúng được liên kết, và các hook sẽ đảm nhận tất cả công việc đồng bộ hóa và cập nhật.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};