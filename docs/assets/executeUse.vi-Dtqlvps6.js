import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/executeUse - Singleton với quản lý vòng đời`}),`
`,(0,c.jsx)(n.h1,{id:`executeuse`,children:(0,c.jsx)(n.code,{children:`executeUse`})}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`executeUse`}),` là một factory bao bọc bất kỳ hàm khởi tạo nào và biến kết quả của nó thành một `,(0,c.jsx)(n.strong,{children:`singleton được quản lý`}),`. Đối tượng được tạo đúng một lần, đóng băng (`,(0,c.jsx)(n.code,{children:`Object.freeze`}),`) và tái sử dụng trong mỗi lần gọi tiếp theo. Tùy theo loại được chọn, singleton có thể là phạm vi component, toàn cục, hoặc cục bộ.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Để đảm bảo định danh duy nhất, thư viện kết hợp mã code toàn cục nội bộ và hàm `,(0,c.jsx)(n.code,{children:`getElementId()`}),`, giúp ngăn chặn hoàn toàn việc trùng lặp ID ngay cả khi sử dụng trong nhiều module khác nhau.`]}),`
`,(0,c.jsx)(n.h3,{id:`giới-hạn-generics-generic-constraints`,children:`Giới hạn Generics (Generic Constraints)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`R`}),` — kiểu đối tượng được trả về bởi hàm khởi tạo (`,(0,c.jsx)(n.code,{children:`callback`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`O extends any[]`}),` — kiểu của các tham số đầu vào cho `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`RI extends ExecuteUseReturn<R>`}),` — kiểu kết quả của singleton, bao gồm các phương thức quản lý.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (...args: O) => R`}),` — Hàm khởi tạo. Được gọi khi truy cập lần đầu và trả về đối tượng sẽ được đóng băng và cache. Tham số chỉ được truyền vào ở lần gọi đầu tiên.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: ExecuteUseType`}),` — Loại singleton (mặc định: `,(0,c.jsx)(n.code,{children:`ExecuteUseType.provide`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),` `,(0,c.jsx)(n.code,{children:`ExecuteUseReturn<R>`}),` — đối tượng đóng băng mở rộng `,(0,c.jsx)(n.code,{children:`R`}),` với các phương thức:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): Readonly<R>`}),` — trả về kết quả gốc của `,(0,c.jsx)(n.code,{children:`callback`}),` mà không có các phương thức quản lý (`,(0,c.jsx)(n.code,{children:`init`}),`, `,(0,c.jsx)(n.code,{children:`destroyExecute`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`destroyExecute?(): void`}),` — chỉ có ở `,(0,c.jsx)(n.code,{children:`local`}),` và `,(0,c.jsx)(n.code,{children:`global`}),`. Đặt lại cache, cho phép tạo lại đối tượng ở lần gọi tiếp theo.`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`hàm-khởi-tạo-callback-và-tham-số-đầu-vào-args-o`,children:[`Hàm Khởi Tạo (`,(0,c.jsx)(n.code,{children:`callback`}),`) và Tham Số Đầu Vào (`,(0,c.jsx)(n.code,{children:`...args: O`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Đặc điểm chính của `,(0,c.jsx)(n.code,{children:`executeUse`}),` là hàm factory (`,(0,c.jsx)(n.code,{children:`callback`}),`) và các tham số được truyền vào nó (`,(0,c.jsx)(n.code,{children:`...args`}),`) chỉ được sử dụng `,(0,c.jsx)(n.strong,{children:`đúng một lần`}),` — trong quá trình khởi tạo thực tế (ngay ở lần gọi đầu tiên).`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`callback`})}),`: Đây là một factory mô tả logic tạo lập trạng thái. Bên trong đó, bạn thường khai báo các biến phản ứng (`,(0,c.jsx)(n.code,{children:`ref`}),`, `,(0,c.jsx)(n.code,{children:`reactive`}),`), các hàm để thay đổi chúng, và các giá trị tính toán (`,(0,c.jsx)(n.code,{children:`computed`}),`). Đối tượng trả về từ `,(0,c.jsx)(n.code,{children:`callback`}),` sẽ đóng băng và được đưa vào cache.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`...args: O`})}),`: Bạn có thể truyền bất kỳ tham số nào vào hàm khởi tạo của mình (ví dụ: trạng thái ban đầu, ID của thực thể đang tải hoặc API client). Các tham số này sẽ được chuyển trực tiếp vào bên trong `,(0,c.jsx)(n.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Lưu ý quan trọng về tham số:`}),` Vì `,(0,c.jsx)(n.code,{children:`executeUse`}),` ghi nhớ rất chặt (cache) kết quả của lần gọi đầu tiên, mọi tham số được truyền vào ở các lần gọi `,(0,c.jsx)(n.strong,{children:`tiếp theo`}),` của cùng hook đó ở những component khác `,(0,c.jsx)(n.strong,{children:`sẽ bị bỏ qua hoàn toàn`}),`. Đối tượng sẽ không được tạo lại và hàm `,(0,c.jsx)(n.code,{children:`callback`}),` cũng không chạy lại với tham số mới (trừ phi bạn đã chủ động đặt lại cache trước đó thông qua `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.h3,{id:`phương-thức-ký-hiệu-init`,children:[`Phương Thức Ký Hiệu `,(0,c.jsx)(n.code,{children:`init()`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`init`}),` chỉ đơn thuần là một hàm trống, chức năng duy nhất là trả về chính xác cùng một đối tượng trạng thái đã được đóng băng. Nó tồn tại `,(0,c.jsx)(n.strong,{children:`hoàn toàn vì mục đích dễ đọc mã nguồn và trải nghiệm của lập trình viên (DX)`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Mục đích chính của nó là cung cấp cho lập trình viên một cách để đánh dấu một cách tường minh và trực quan ngay trong mã nguồn vị trí chính xác xảy ra quá trình khởi tạo (lần gọi đầu tiên) của singleton. Từ góc độ kỹ thuật, `,(0,c.jsx)(n.code,{children:`const state = useTheme()`}),` và `,(0,c.jsx)(n.code,{children:`const state = useTheme().init()`}),` hoạt động hoàn toàn giống hệt nhau.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Ở một nơi nào đó sâu trong cây component, chúng ta chỉ cần lấy trạng thái đã sẵn sàng
const theme = useTheme()

// Còn ở đây, trong component gốc (hoặc main.ts), 
// chúng ta chủ động hiển thị cho các lập trình viên khác thấy: "Quá trình khởi tạo diễn ra ngay TẠI ĐÂY"
const theme = useTheme().init()
`})}),`
`,(0,c.jsx)(n.h2,{id:`hướng-dẫn-từng-bước-cách-tạo-và-sử-dụng-dịch-vụ-của-riêng-bạn`,children:`Hướng Dẫn Từng Bước: Cách Tạo và Sử Dụng Dịch Vụ Của Riêng Bạn`}),`
`,(0,c.jsxs)(n.p,{children:[`Việc tạo một singleton được quản lý bằng `,(0,c.jsx)(n.code,{children:`executeUse`}),` thường bao gồm ba bước đơn giản.`]}),`
`,(0,c.jsx)(n.h3,{id:`bước-1-định-nghĩa-trạng-thái-factory`,children:`Bước 1: Định Nghĩa Trạng Thái (Factory)`}),`
`,(0,c.jsxs)(n.p,{children:[`Trước tiên, hãy quyết định bạn cần loại trạng thái nào (`,(0,c.jsx)(n.code,{children:`global`}),`, `,(0,c.jsx)(n.code,{children:`local`}),` hoặc `,(0,c.jsx)(n.code,{children:`provide`}),`). Tạo một tệp riêng biệt (ví dụ: `,(0,c.jsx)(n.code,{children:`useMyService.ts`}),`). Sử dụng một trong các hàm factory (ví dụ: `,(0,c.jsx)(n.code,{children:`executeUseGlobal`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Bên trong hàm callback, hãy định nghĩa tất cả các biến phản ứng (`,(0,c.jsx)(n.code,{children:`ref`}),`, `,(0,c.jsx)(n.code,{children:`reactive`}),`), thuộc tính tính toán (`,(0,c.jsx)(n.code,{children:`computed`}),`) và các hàm để thay đổi trạng thái:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/composables/useMyService.ts
import { ref, computed } from 'vue'
import { executeUseGlobal } from '@dxtmisha/functional'

// Tạo singleton và đóng gói cơ chế logic
const instance = executeUseGlobal(() => {
  // 1. Trạng thái phản hồi
  const count = ref(0)
  
  // 2. Thuộc tính tính toán
  const isPositive = computed(() => count.value > 0)
  
  // 3. Phương thức quản lý
  const increment = () => count.value++
  const reset = () => { count.value = 0 }

  // Trả về những gì cần được bộc lộ ra bên ngoài
  return { count, isPositive, increment, reset }
})

// Xuất ra một hàm bọc ngoài (wrapper).
// Cú pháp () => instance() là điều cần thiết để giúp các trình soạn thảo mã (IDE)
// nhận diện useMyService chính xác là một hàm composable.
// Điều này đảm bảo tính năng tự động hoàn thành mã (autocomplete) và suy luận kiểu hoạt động đúng.
export const useMyService = () => instance()
`})}),`
`,(0,c.jsxs)(n.h3,{id:`bước-2-khởi-tạo-chỉ-dành-cho-global`,children:[`Bước 2: Khởi Tạo (Chỉ dành cho `,(0,c.jsx)(n.code,{children:`global`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu bạn chọn chế độ `,(0,c.jsx)(n.code,{children:`global`}),` (như trong ví dụ trên), bạn cần báo cho ứng dụng biết chính xác thời điểm thể hiện nó. Điều này thường được thực hiện một lần tại điểm xâm nhập (`,(0,c.jsx)(n.code,{children:`main.ts`}),`):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

// Khởi tạo toàn bộ các global singleton cùng một lúc
executeUseGlobalInit() 

createApp(App).mount('#app')
`})}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Lưu ý:`}),` Nếu ứng dụng của bạn sử dụng `,(0,c.jsx)(n.code,{children:`dxtFunctionalPlugin`}),`, bạn `,(0,c.jsx)(n.strong,{children:`không cần phải`}),` gọi `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),` một cách thủ công lúc khởi động — plugin đã tự động xử lý việc này ở hậu trường.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`bước-3-sử-dụng-trong-component`,children:`Bước 3: Sử Dụng trong Component`}),`
`,(0,c.jsxs)(n.p,{children:[`Bây giờ bạn có thể nhập hàm `,(0,c.jsx)(n.code,{children:`useMyService`}),` của mình vào bất kỳ component Vue nào. Tại lần gọi định danh đầu tiên, hãy sử dụng phương thức `,(0,c.jsx)(n.code,{children:`init()`}),` để mã rõ ràng hơn.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-vue`,children:`<!-- src/components/MyComponent.vue -->
<script setup lang="ts">
import { useMyService } from '@/composables/useMyService'

// Nhận trực tiếp trạng thái. Phương thức init() cho biết
// lệnh gọi (truy cập) chính đầu tiên đang xảy ra ở đây.
const { count, isPositive, increment } = useMyService().init()
<\/script>

<template>
  <div>
    <p>Số đếm hiện tại: {{ count }}</p>
    <p>Có dương không? {{ isPositive ? 'Có' : 'Không' }}</p>
    <button @click="increment">Tăng Dần</button>
  </div>
</template>
`})}),`
`,(0,c.jsx)(n.p,{children:`Nếu vì lý do nào đó, bạn cần thiết lập lại trạng thái (ví dụ: khi người dùng đăng xuất), bạn chỉ cần gọi phương thức reset tích hợp sẵn:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const service = useMyService()
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(n.h2,{id:`enum-executeusetype`,children:[`Enum `,(0,c.jsx)(n.code,{children:`ExecuteUseType`})]}),`
`,(0,c.jsxs)(n.h3,{id:`provide-singleton-phạm-vi-component-mặc-định`,children:[(0,c.jsx)(n.code,{children:`provide`}),` (singleton phạm vi component, mặc định)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Đây là một singleton định hướng component, được liên kết chặt chẽ với vòng đời của một component Vue và toàn bộ cây con của nó. Bên dưới, nó sử dụng cơ chế truyền ngữ cảnh và phản ứng tích hợp sẵn của Vue (`,(0,c.jsx)(n.code,{children:`provide`}),`/`,(0,c.jsx)(n.code,{children:`inject`}),`), cho phép bạn truyền cùng một phiên bản trạng thái (state instance) sâu xuống cây component một cách an toàn mà không cần phải truyền qua các props.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Khi nào sử dụng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Để chia sẻ trạng thái trong một nhánh component được chỉ định (component cha -> nhiều cấp lồng nhau -> component con), tránh làm ô nhiễm kho lưu trữ (store) toàn cục.`}),`
`,(0,c.jsx)(n.li,{children:`Khi cần hiển thị nhiều khối độc lập trên cùng một trang (ví dụ: một vài widget tải tệp lên phức tạp), mỗi khối cần có một trạng thái duy nhất, dùng chung riêng bên trong widget đó.`}),`
`,(0,c.jsx)(n.li,{children:`Nếu bạn cần dọn dẹp bộ nhớ tự động (garbage collection) ngay khi "component chủ" bị hủy (unmount).`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Cách hoạt động:`}),`
Component gọi hàm này đầu tiên tự động trở thành "chủ sở hữu" (owner). Hàm tạo đối tượng và ngay lập tức gọi `,(0,c.jsx)(n.code,{children:`provide(id, instance)`}),`. Mọi component con (bên trong) khi gọi cùng một hàm này sẽ không tạo ra đối tượng mới mà lấy đối tượng đã tạo trước đó qua `,(0,c.jsx)(n.code,{children:`inject(id)`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Chú ý: Loại này thiếu phương thức `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),` vì bộ nhớ được tự do hóa một cách tự động nhờ hệ thống phản ứng (reactivity) của Vue tại thời điểm hủy component.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'
import { ref } from 'vue'

const useTheme = executeUseProvide(() => {
  const mode = ref<'light' | 'dark'>('light')
  const toggle = () => { mode.value = mode.value === 'light' ? 'dark' : 'light' }
  return { mode, toggle }
})

// Trong component cha (chủ) — đối tượng được tạo và phát đi (provide):
const theme = useTheme()
theme.toggle()

// Trong component con lồng sâu — nó nhận về cùng một đối tượng qua inject:
const theme = useTheme()

// Ở một cây component hoàn toàn khác biệt, độc lập — một đối tượng MỚI sẽ được tạo:
const theme2 = useTheme()
`})}),`
`,(0,c.jsxs)(n.h3,{id:`global-singleton-toàn-ứng-dụng`,children:[(0,c.jsx)(n.code,{children:`global`}),` (singleton toàn ứng dụng)`]}),`
`,(0,c.jsx)(n.p,{children:`Đây là một mẫu kiến trúc (architectural pattern) Singleton cổ điển, tồn tại như một phiên bản duy nhất cực kỳ nghiêm ngặt trong toàn bộ thời gian tồn tại của ứng dụng của bạn (từ lúc tạo cho đến khi đóng tab trình duyệt). Nó cung cấp một điểm truy cập toàn cục vào trạng thái từ bất kỳ vị trí thực tế nào trong mã nguồn.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Khi nào sử dụng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Dùng cho trạng thái toàn cục của ứng dụng: thông tin xác thực, tài khoản người dùng, thiết lập ngôn ngữ, giỏ hàng toàn cục.`}),`
`,(0,c.jsx)(n.li,{children:`Khi một dữ liệu cần được chia sẻ cho các khối thành phần khác biệt, độc lập nhau trong chương trình (hoặc bên ngoài component Vue, như ở router).`}),`
`,(0,c.jsx)(n.li,{children:`Như một biện pháp thay thế dung lượng nhỏ cho Vuex / Pinia trong các tác vụ đơn giản.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Cách hoạt động:`}),`
Hàm khởi tạo sẽ `,(0,c.jsx)(n.strong,{children:`không thực thi ngay khi gọi`}),`. Tuy nhiên, nó sẽ được chuyển tới một hàm đợi bên trong (`,(0,c.jsx)(n.code,{children:`globalMethods`}),`). Mọi đối tượng toàn cục chỉ khởi tạo đầy đủ khi trực tiếp gọi hàm `,(0,c.jsx)(n.code,{children:`executeUseGlobalInit()`}),`, chủ yếu thường nằm trong tệp `,(0,c.jsx)(n.code,{children:`main.ts`}),` trước khi ứng dụng được mount. Kể từ lúc ấy, mọi khối sẽ chia sẻ với nhau cùng một đối tượng được cache trong bộ nhớ.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
import { ref } from 'vue'

const useAuth = executeUseGlobal(() => {
  const user = ref<string | null>(null)
  const login = (name: string) => { user.value = name }
  const logout = () => { user.value = null }
  return { user, login, logout }
})

// Trong tệp main.ts — tuân thủ TRƯỚC thời điểm mount app (app.mount()):
executeUseGlobalInit()

// Ở mọi block component, utility hay router:
const auth = useAuth()
auth.login('Alice')

// Trong trường hợp bắt buộc phải đặt lại trạng thái (tạo lại trạng thái nguyên mẫu từ đầu):
auth.destroyExecute?.() 
`})}),`
`,(0,c.jsxs)(n.h3,{id:`local-singleton-lưu-trong-closure`,children:[(0,c.jsx)(n.code,{children:`local`}),` (singleton lưu trong closure)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Đây là một singleton hoạt động độc lập, dựa trên cơ chế kết thúc từ vựng (`,(0,c.jsx)(n.code,{children:`closure caching`}),`) trong JavaScript. Thay vì dùng ngữ cảnh Vue hay phạm vi toàn cục, nó bảo tồn kết quả đã tạo ra một lần trực tiếp ngay trong bộ nhớ nội bộ của hàm, và trả về nó ngay lập tức trong tất cả các lần gọi tiếp theo.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Khi nào sử dụng:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Dùng cho utilities, các tác vụ nhà máy (factory) hay các service riêng biệt không quy bám vào Vue (bởi vì `,(0,c.jsx)(n.code,{children:`provide`}),`/`,(0,c.jsx)(n.code,{children:`inject`}),` chỉ tác dụng bên trong scope của `,(0,c.jsx)(n.code,{children:`setup`}),`).`]}),`
`,(0,c.jsx)(n.li,{children:`Tại lúc muốn lấy cá thể độc quyền dành cho những dịch vụ nặng hoặc tốn kém chỉ duy nhất tại lúc nào thiệt cần (khởi động trễ thụy động laziness on demand), mà không phải thời gian đầu trong chu kỳ chung.`}),`
`,(0,c.jsx)(n.li,{children:`Ở những lần dùng phép lưu hệ số tạm thời (cache) những hoạt hóa tính toán, chuyển đổi của phép hệ thống lớn.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Cách hoạt động:`}),`
Loại này không màng đến cơ chế Vue. Ngay gọi hàm lần bước 1 tiên phong, các chức năng hàm của tham số đưa lên sẽ lập tức thi triển. Hệ trả xuất ra định chặt `,(0,c.jsx)(n.code,{children:`Object.freeze`}),` (bị đóng băng hoàn trả) lại cất vào trong một biến thể nội bộ giữa đám đóng của hàm `,(0,c.jsx)(n.code,{children:`executeUse`}),`. Những lần thứ kế theo (đôi khi cho là tham số sai số) nó vẫn nhả thẳng dữ liệu từ cùng cái chỗ kia nhanh chóng.
Phương pháp `,(0,c.jsx)(n.code,{children:`destroyExecute()`}),` quét dọn biến của đợt trong vòng, châm ngọn cho sự tái bật khởi động cho thời kỳ lần tiếp khởi xưởng sau này.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'
import { ref } from 'vue'

const useHeavyConfig = executeUseLocal((env: string) => {
  // Thực hiện một thao tác phân giải số liệu config tải siêu lớn...
  const config = ref({ api: \`https://\${env}.example.com\` })
  return { config }
})

// Chạy lần đầu — Quá trình sinh diễn
const devConfig = useHeavyConfig('dev')
console.log(devConfig.config.value.api) // https://dev.example.com

// Lần gọi hai bên file nào đi tữa — Sẽ luôn ra đúng một đằng, mọi lệnh chèn sau vô tác dụng
const sameConfig = useHeavyConfig('prod') 
console.log(sameConfig.config.value.api) // Vẫn là kết quả cũ: https://dev.example.com

// Ép việc phá hủy kho tạm
sameConfig.destroyExecute?.()
const newConfig = useHeavyConfig('prod') // Bắt đầu tái xuất bản quy trình một lần nữa
`})}),`
`,(0,c.jsx)(n.h2,{id:`executeuseglobalinit`,children:(0,c.jsx)(n.code,{children:`executeUseGlobalInit`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`function executeUseGlobalInit(): void
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Gọi tất cả các hàm khởi tạo toàn cục đã đăng ký (`,(0,c.jsx)(n.code,{children:`ExecuteUseType.global`}),`) và xóa hàng đợi. Gọi lại lần nữa sẽ không khởi tạo lại các singleton đã tồn tại. Cần được gọi `,(0,c.jsx)(n.strong,{children:`một lần`}),` khi khởi động ứng dụng — trước khi mount component gốc.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};