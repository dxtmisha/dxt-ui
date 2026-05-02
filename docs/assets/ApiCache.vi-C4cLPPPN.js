import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Classes/ApiCache - Bộ nhớ đệm phản hồi API`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-apicache`,children:`Lớp ApiCache`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp để lưu bộ nhớ đệm (caching) cho các phản hồi API. Nó cho phép lưu trữ kết quả truy vấn trong bộ nhớ hoặc kho lưu trữ bên ngoài, ngăn chặn các cuộc gọi mạng dư thừa trong một khoảng thời gian cụ thể. Trong phiên bản hiện tại, việc lưu bộ nhớ đệm chỉ hoạt động ở phía máy chủ (SSR) để tăng tốc độ hiển thị và giảm tải API trong quá trình xử lý nhiều yêu cầu đồng thời.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiCache`}),` là một `,(0,c.jsx)(n.strong,{children:`lớp bổ trợ`}),`, được thiết kế để quản lý bộ nhớ đệm ở cấp độ thấp. Trong hầu hết các trường hợp, bạn nên tương tác với việc lưu bộ nhớ đệm thông qua tham số `,(0,c.jsx)(n.code,{children:`cache`}),` trong `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` hoặc đối tượng `,(0,c.jsx)(n.code,{children:`Api`}),` toàn cục.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý khóa tự động`}),` — tạo các khóa cache duy nhất dựa trên các tham số yêu cầu (đường dẫn, phương thức, thân yêu cầu, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`TTL linh hoạt (Time To Live)`}),` — cho phép thiết lập thời gian lưu trữ cho từng yêu cầu riêng lẻ hoặc sử dụng mặc định (24 giờ).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tối ưu hóa SSR`}),` — ngăn chặn các cuộc gọi API không cần thiết trong môi trường Node.js. Chế độ này mặc định bị tắt trong trình duyệt.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Bộ lắng nghe (Listener)`}),` — khả năng kết nối kho lưu trữ bên ngoài (ví dụ: Redis, Nitro Storage) thông qua các hàm callback.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dọn dẹp chạy ngầm`}),` — tự động xóa các mục đã hết hạn khi truy cập bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`hành-động`,children:`Hành động`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức để quản lý các mục lưu trữ trong cache.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<T>(key: string): Promise<T | undefined>`}),` — Lấy một giá trị từ cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getByFetch<T>(fetch: ApiFetch): Promise<T | undefined>`}),` — Lấy một giá trị sử dụng các tùy chọn yêu cầu làm nguồn tạo khóa.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set<T>(key: string, value: T, age?: number): Promise<void>`}),` — Lưu một giá trị vào cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setByFetch<T>(fetch: ApiFetch, value: T): Promise<void>`}),` — Lưu một giá trị dựa trên các tùy chọn yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(key: string): Promise<void>`}),` — Xóa một mục cache thủ công.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(getListener, setListener, removeListener, cacheStepAgeClearOld?): void`}),` — Cấu hình cache với các listener của bộ lưu trữ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): void`}),` — Xóa các mục trong bộ nhớ RAM và ngắt kết nối các listener.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`apicacheitemt`,children:(0,c.jsx)(n.code,{children:`ApiCacheItem<T>`})}),`
`,(0,c.jsx)(n.p,{children:`Cấu trúc của một bản ghi trong bộ nhớ đệm.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Dữ liệu được lưu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age: number`}),` — TTL tính bằng giây.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cacheAge: number`}),` — Dấu thời gian (ms) khi bản ghi được tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.h4,{id:`apicachelist`,children:(0,c.jsx)(n.code,{children:`ApiCacheList`})}),`
`,(0,c.jsx)(n.p,{children:`Từ điển nội bộ dành cho việc lưu trữ dự phòng trong bộ nhớ RAM.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`[key: string]: ApiCacheItem`}),` — Các cặp khóa-giá trị của các mục được lưu vào bộ nhớ đệm.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo-và-kho-lưu-trữ-bên-ngoài`,children:`Khởi tạo và Kho lưu trữ bên ngoài`}),`
`,(0,c.jsxs)(n.p,{children:[`Theo mặc định, `,(0,c.jsx)(n.code,{children:`ApiCache`}),` lưu trữ các bản ghi trong RAM của tiến trình. Mặc dù cách này rất nhanh, nhưng nó có những hạn chế khi triển khai thực tế:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa trong cụм (Cluster)`}),`: Trong thiết lập đa thực thể, bộ nhớ đệm không được chia sẻ giữa các tiến trình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi động lại tiến trình`}),`: Bộ nhớ sẽ bị xóa bất khi nào máy chủ khởi động lại hoặc có một "cold start" của các hàm serverless.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giới hạn bộ nhớ`}),`: Lưu trữ lượng lớn dữ liệu trong RAM có thể dẫnถึง việc tiêu thụ bộ nhớ quá mức.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Để giải quyết những vấn đề này, bạn phải khởi tạo `,(0,c.jsx)(n.code,{children:`ApiCache`}),` bằng phương thức `,(0,c.jsx)(n.code,{children:`init`}),`, cung cấp các bộ lắng nghe (listeners) đóng vai trò cầu nối với cơ chế lưu trữ bên ngoài.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Quan trọng: Bạn phải gọi `,(0,c.jsx)(n.code,{children:`ApiCache.init()`}),` trong giai đoạn khởi tạo ứng dụng (trước yêu cầu API đầu tiên) để đảm bảo bộ nhớ đệm được cấu hình chính xác.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nodejs-kho-lưu-trữ-tùy-chỉnh`,children:`Node.js (Kho lưu trữ tùy chỉnh)`}),`
`,(0,c.jsx)(n.p,{children:`Trong môi trường Node.js tiêu chuẩn, bạn có thể sử dụng các bộ lắng nghe để tương tác với một cơ sở dữ liệu tập trung hoặc một bộ nhớ đệm bền vững như Redis.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiCache } from '@dxtmisha/functional-basic'

// Cấu hình với các bộ lắng nghe lưu trữ
ApiCache.init(
  // 1. Lấy dữ liệu từ kho lưu trữ bên ngoài
  async (key) => await myExternalStorage.get(key),
  
  // 2. Lưu dữ liệu vào kho lưu trữ bên ngoài
  async (key, value) => {
    await myExternalStorage.put(key, value)
    return true // Trả về true để xác nhận đã lưu trữ bên ngoài thành công
  },
  
  // 3. Xóa dữ liệu khỏi kho lưu trữ bên ngoài
  async (key) => {
    await myExternalStorage.delete(key)
    return true
  },
  
  // 4. Tùy chọn: ngưỡng kích hoạt dọn dẹp chạy ngầm
  16384
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`nuxt--nitro`,children:`Nuxt / Nitro`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong Nuxt/Nitro, cách tiếp cận được khuyến nghị là sử dụng helper `,(0,c.jsx)(n.code,{children:`useStorage`}),` tích hợp sẵn bên trong một plugin máy chủ. Điều này cho phép bạn tận dụng Redis, FS, hoặc bất kỳ trình điều khiển lưu trữ nào khác được Nitro hỗ trợ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// server/plugins/api-cache.ts
import { ApiCache } from '@dxtmisha/functional-basic'

export default defineNitroPlugin(() => {
  const storage = useStorage('cache') // Nitro Cache region

  ApiCache.init(
    async (key) => await storage.getItem(key),
    async (key, value) => {
      await storage.setItem(key, value)
      return true
    },
    async (key) => {
      await storage.removeItem(key)
      return true
    }
  )
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};