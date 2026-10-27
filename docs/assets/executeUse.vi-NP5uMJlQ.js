import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/executeUse - Singleton với quản lý vòng đời`}),`
`,(0,c.jsx)(t.h1,{id:`executeuse`,children:(0,c.jsx)(t.code,{children:`executeUse`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`executeUse`}),` là một factory bao bọc bất kỳ hàm khởi tạo nào và biến kết quả của nó thành một `,(0,c.jsx)(t.strong,{children:`singleton được quản lý`}),`. Đối tượng được tạo đúng một lần, đóng băng (`,(0,c.jsx)(t.code,{children:`Object.freeze`}),`) và tái sử dụng trong mỗi lần gọi tiếp theo. Tùy theo loại được chọn, singleton có thể là phạm vi component, toàn cục, hoặc cục bộ.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Để đảm bảo định danh duy nhất, thư viện kết hợp mã code toàn cục nội bộ và hàm `,(0,c.jsx)(t.code,{children:`getElementId()`}),`, giúp ngăn chặn hoàn toàn việc trùng lặp ID ngay cả khi sử dụng trong nhiều module khác nhau.`]}),`
`,(0,c.jsx)(t.h3,{id:`giới-hạn-generics-generic-constraints`,children:`Giới hạn Generics (Generic Constraints)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`R extends object | void`}),` — đối tượng chứa thông thường do hàm khởi tạo trả về, hoặc `,(0,c.jsx)(t.code,{children:`void`}),` khi không cần kết quả.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`O extends unknown[]`}),` — kiểu của các tham số đầu vào cho `,(0,c.jsx)(t.code,{children:`callback`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`RI extends ExecuteUseReturn<R>`}),` — kiểu kết quả của singleton, bao gồm các phương thức quản lý.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function executeUse<R extends object | void, O extends unknown[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R extends object | void>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (...args: O) => R`}),` — Hàm khởi tạo. Được gọi khi truy cập lần đầu và trả về đối tượng sẽ được đóng băng và cache. Tham số chỉ được truyền vào ở lần gọi đầu tiên.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: ExecuteUseType`}),` — Loại singleton (mặc định: `,(0,c.jsx)(t.code,{children:`ExecuteUseType.provide`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`ExecuteUseReturn<R>`}),` — đối tượng đóng băng mở rộng `,(0,c.jsx)(t.code,{children:`R`}),` với các phương thức:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): Readonly<R>`}),` — trả về kết quả gốc của `,(0,c.jsx)(t.code,{children:`callback`}),` mà không có các phương thức quản lý (`,(0,c.jsx)(t.code,{children:`init`}),`, `,(0,c.jsx)(t.code,{children:`destroyExecute`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroyExecute?(): void`}),` — chỉ có ở `,(0,c.jsx)(t.code,{children:`local`}),` và `,(0,c.jsx)(t.code,{children:`global`}),`. Đặt lại cache, cho phép tạo lại đối tượng ở lần gọi tiếp theo.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`instance-của-class-bên-trong-đối-tượng-chứa`,children:`Instance của class bên trong đối tượng chứa`}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về đối tượng thông thường với các thuộc tính riêng có thể liệt kê, hoặc `,(0,c.jsx)(t.code,{children:`void`}),` nếu factory chỉ dùng để khởi tạo. Lớp quản lý sao chép các trường của đối tượng chứa. Trả trực tiếp instance của class không được hỗ trợ: kiểm tra khi chạy ném `,(0,c.jsx)(t.code,{children:`TypeError`}),` để tránh âm thầm làm mất phương thức prototype.`]}),`
`,(0,c.jsx)(t.p,{children:`Kiểu của đối tượng chứa có thể được khai báo bằng interface có tên mà không cần chữ ký chỉ mục. TypeScript sử dụng kiểu cấu trúc, nên yêu cầu đối tượng thông thường được kiểm tra khi chạy.`}),`
`,(0,c.jsxs)(t.p,{children:[`Đặt instance của class bên trong đối tượng chứa. Chỉ đối tượng chứa được đóng băng nông: instance lồng bên trong giữ nguyên danh tính, phương thức prototype, accessor, trường riêng tư và trạng thái có thể thay đổi. Quy tắc này áp dụng cho `,(0,c.jsx)(t.code,{children:`executeUse`}),`, `,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`, `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),` và `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'

class Service {
  #value = 'ready'

  read(): string {
    return this.#value
  }
}

export const useService = /*#__PURE__*/ executeUseLocal(() => ({ service: new Service() }))

// Cả hai cách truy cập đều trả về cùng instance gốc của class.
useService().service.read()
useService().init().service.read()
`})}),`
`,(0,c.jsxs)(t.h3,{id:`hàm-khởi-tạo-callback-và-tham-số-đầu-vào-args-o`,children:[`Hàm Khởi Tạo (`,(0,c.jsx)(t.code,{children:`callback`}),`) và Tham Số Đầu Vào (`,(0,c.jsx)(t.code,{children:`...args: O`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Đặc điểm chính của `,(0,c.jsx)(t.code,{children:`executeUse`}),` là hàm factory (`,(0,c.jsx)(t.code,{children:`callback`}),`) và các tham số được truyền vào nó (`,(0,c.jsx)(t.code,{children:`...args`}),`) chỉ được sử dụng `,(0,c.jsx)(t.strong,{children:`đúng một lần`}),` — trong quá trình khởi tạo thực tế (ngay ở lần gọi đầu tiên).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`callback`})}),`: Đây là một factory mô tả logic tạo lập trạng thái. Bên trong đó, bạn thường khai báo các biến phản ứng (`,(0,c.jsx)(t.code,{children:`ref`}),`, `,(0,c.jsx)(t.code,{children:`reactive`}),`), các hàm để thay đổi chúng, và các giá trị tính toán (`,(0,c.jsx)(t.code,{children:`computed`}),`). Đối tượng trả về từ `,(0,c.jsx)(t.code,{children:`callback`}),` sẽ đóng băng và được đưa vào cache.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`...args: O`})}),`: Bạn có thể truyền bất kỳ tham số nào vào hàm khởi tạo của mình (ví dụ: trạng thái ban đầu, ID của thực thể đang tải hoặc API client). Các tham số này sẽ được chuyển trực tiếp vào bên trong `,(0,c.jsx)(t.code,{children:`callback`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu ý quan trọng về tham số:`}),` Vì `,(0,c.jsx)(t.code,{children:`executeUse`}),` ghi nhớ rất chặt (cache) kết quả của lần gọi đầu tiên, mọi tham số được truyền vào ở các lần gọi `,(0,c.jsx)(t.strong,{children:`tiếp theo`}),` của cùng hook đó ở những component khác `,(0,c.jsx)(t.strong,{children:`sẽ bị bỏ qua hoàn toàn`}),`. Đối tượng sẽ không được tạo lại và hàm `,(0,c.jsx)(t.code,{children:`callback`}),` cũng không chạy lại với tham số mới (trừ phi bạn đã chủ động đặt lại cache trước đó thông qua `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`phương-thức-ký-hiệu-init`,children:[`Phương Thức Ký Hiệu `,(0,c.jsx)(t.code,{children:`init()`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức `,(0,c.jsx)(t.code,{children:`init`}),` chỉ đơn thuần là một hàm trống, chức năng duy nhất là trả về chính xác cùng một đối tượng trạng thái đã được đóng băng. Nó tồn tại `,(0,c.jsx)(t.strong,{children:`hoàn toàn vì mục đích dễ đọc mã nguồn và trải nghiệm của lập trình viên (DX)`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Mục đích chính của nó là cung cấp cho lập trình viên một cách để đánh dấu một cách tường minh và trực quan ngay trong mã nguồn vị trí chính xác xảy ra quá trình khởi tạo (lần gọi đầu tiên) của singleton. Từ góc độ kỹ thuật, `,(0,c.jsx)(t.code,{children:`const state = useTheme()`}),` và `,(0,c.jsx)(t.code,{children:`const state = useTheme().init()`}),` hoạt động hoàn toàn giống hệt nhau.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Ở một nơi nào đó sâu trong cây component, chúng ta chỉ cần lấy trạng thái đã sẵn sàng
const theme = useTheme()

// Còn ở đây, trong component gốc (hoặc main.ts), 
// chúng ta chủ động hiển thị cho các lập trình viên khác thấy: "Quá trình khởi tạo diễn ra ngay TẠI ĐÂY"
const theme = useTheme().init()
`})}),`
`,(0,c.jsx)(t.h2,{id:`hướng-dẫn-từng-bước-cách-tạo-và-sử-dụng-dịch-vụ-của-riêng-bạn`,children:`Hướng Dẫn Từng Bước: Cách Tạo và Sử Dụng Dịch Vụ Của Riêng Bạn`}),`
`,(0,c.jsxs)(t.p,{children:[`Việc tạo một singleton được quản lý bằng `,(0,c.jsx)(t.code,{children:`executeUse`}),` thường bao gồm ba bước đơn giản.`]}),`
`,(0,c.jsx)(t.h3,{id:`bước-1-định-nghĩa-trạng-thái-factory`,children:`Bước 1: Định Nghĩa Trạng Thái (Factory)`}),`
`,(0,c.jsxs)(t.p,{children:[`Trước tiên, hãy quyết định bạn cần loại trạng thái nào (`,(0,c.jsx)(t.code,{children:`global`}),`, `,(0,c.jsx)(t.code,{children:`local`}),` hoặc `,(0,c.jsx)(t.code,{children:`provide`}),`). Tạo một tệp riêng biệt (ví dụ: `,(0,c.jsx)(t.code,{children:`useMyService.ts`}),`). Sử dụng một trong các hàm factory (ví dụ: `,(0,c.jsx)(t.code,{children:`executeUseGlobal`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Bên trong hàm callback, hãy định nghĩa tất cả các biến phản ứng (`,(0,c.jsx)(t.code,{children:`ref`}),`, `,(0,c.jsx)(t.code,{children:`reactive`}),`), thuộc tính tính toán (`,(0,c.jsx)(t.code,{children:`computed`}),`) và các hàm để thay đổi trạng thái:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/composables/useMyService.ts
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
`,(0,c.jsxs)(t.h3,{id:`bước-2-khởi-tạo-chỉ-dành-cho-global`,children:[`Bước 2: Khởi Tạo (Chỉ dành cho `,(0,c.jsx)(t.code,{children:`global`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu bạn chọn chế độ `,(0,c.jsx)(t.code,{children:`global`}),` (như trong ví dụ trên), bạn cần báo cho ứng dụng biết chính xác thời điểm thể hiện nó. Điều này thường được thực hiện một lần tại điểm xâm nhập (`,(0,c.jsx)(t.code,{children:`main.ts`}),`):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// src/main.ts
import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

// Khởi tạo toàn bộ các global singleton cùng một lúc
executeUseGlobalInit() 

createApp(App).mount('#app')
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu ý:`}),` Nếu ứng dụng của bạn sử dụng `,(0,c.jsx)(t.code,{children:`dxtFunctionalPlugin`}),`, bạn `,(0,c.jsx)(t.strong,{children:`không cần phải`}),` gọi `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` một cách thủ công lúc khởi động — plugin đã tự động xử lý việc này ở hậu trường.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`bước-3-sử-dụng-trong-component`,children:`Bước 3: Sử Dụng trong Component`}),`
`,(0,c.jsxs)(t.p,{children:[`Bây giờ bạn có thể nhập hàm `,(0,c.jsx)(t.code,{children:`useMyService`}),` của mình vào bất kỳ component Vue nào. Tại lần gọi định danh đầu tiên, hãy sử dụng phương thức `,(0,c.jsx)(t.code,{children:`init()`}),` để mã rõ ràng hơn.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-vue`,children:`<!-- src/components/MyComponent.vue -->
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
`,(0,c.jsxs)(t.p,{children:[`Để đặt lại dịch vụ dùng chung, gọi phương thức có sẵn. Với `,(0,c.jsx)(t.code,{children:`global`}),` trong SSR, thao tác này ảnh hưởng toàn bộ tiến trình máy chủ:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const service = useMyService()
if (service.destroyExecute) {
  service.destroyExecute()
}
`})}),`
`,(0,c.jsxs)(t.h2,{id:`enum-executeusetype`,children:[`Enum `,(0,c.jsx)(t.code,{children:`ExecuteUseType`})]}),`
`,(0,c.jsxs)(t.h3,{id:`provide-singleton-phạm-vi-component-mặc-định`,children:[(0,c.jsx)(t.code,{children:`provide`}),` (singleton phạm vi component, mặc định)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Đây là một singleton định hướng component, được liên kết chặt chẽ với vòng đời của một component Vue và toàn bộ cây con của nó. Bên dưới, nó sử dụng cơ chế truyền ngữ cảnh và phản ứng tích hợp sẵn của Vue (`,(0,c.jsx)(t.code,{children:`provide`}),`/`,(0,c.jsx)(t.code,{children:`inject`}),`), cho phép bạn truyền cùng một phiên bản trạng thái (state instance) sâu xuống cây component một cách an toàn mà không cần phải truyền qua các props.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Khi nào sử dụng:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Để chia sẻ trạng thái trong một nhánh component được chỉ định (component cha -> nhiều cấp lồng nhau -> component con), tránh làm ô nhiễm kho lưu trữ (store) toàn cục.`}),`
`,(0,c.jsx)(t.li,{children:`Khi cần hiển thị nhiều khối độc lập trên cùng một trang (ví dụ: một vài widget tải tệp lên phức tạp), mỗi khối cần có một trạng thái duy nhất, dùng chung riêng bên trong widget đó.`}),`
`,(0,c.jsx)(t.li,{children:`Nếu bạn cần dọn dẹp bộ nhớ tự động (garbage collection) ngay khi "component chủ" bị hủy (unmount).`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cách hoạt động:`}),`
Component gọi hàm này đầu tiên tự động trở thành "chủ sở hữu" (owner). Hàm tạo đối tượng và ngay lập tức gọi `,(0,c.jsx)(t.code,{children:`provide(id, instance)`}),`. Mọi component con (bên trong) khi gọi cùng một hàm này sẽ không tạo ra đối tượng mới mà lấy đối tượng đã tạo trước đó qua `,(0,c.jsx)(t.code,{children:`inject(id)`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Chú ý: Loại này thiếu phương thức `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),` vì bộ nhớ được tự do hóa một cách tự động nhờ hệ thống phản ứng (reactivity) của Vue tại thời điểm hủy component.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseProvide } from '@dxtmisha/functional'
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
`,(0,c.jsxs)(t.h3,{id:`global-singleton-dùng-chung-cho-môi-trường-thực-thi`,children:[(0,c.jsx)(t.code,{children:`global`}),` (singleton dùng chung cho môi trường thực thi)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Registry của các factory và mỗi instance `,(0,c.jsx)(t.code,{children:`global`}),` được dùng chung trong toàn bộ môi trường JavaScript. Trong trình duyệt, instance tồn tại trong phạm vi module đã tải. Với SSR, `,(0,c.jsx)(t.strong,{children:`mọi request trong cùng một tiến trình máy chủ đều dùng chung một instance`}),`. Các tiến trình, worker, replica và trình duyệt có instance riêng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Khi nào sử dụng:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Cho cấu hình công khai, dữ liệu tham chiếu hoặc dịch vụ có trạng thái không phụ thuộc vào người dùng, phiên, tenant hay request.`}),`
`,(0,c.jsx)(t.li,{children:`Khi các phần độc lập của ứng dụng cần dùng chung một dịch vụ trong toàn tiến trình.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cách hoạt động:`}),`
`,(0,c.jsx)(t.code,{children:`executeUseGlobal(callback)`}),` đăng ký factory mà chưa thực thi. Lần đầu gọi hook được trả về hoặc `,(0,c.jsx)(t.code,{children:`executeUseGlobalInit()`}),` sẽ tạo instance trong một effect scope độc lập. Những lần gọi sau dùng lại instance đó bất kể ngữ cảnh SSR request. Registry được giữ lại, nên các lần khởi tạo tiếp theo cũng xử lý factory đăng ký sau khi ứng dụng khởi động.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cảnh báo khi dùng SSR:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Không lưu trạng thái xác thực, token, cookie, hồ sơ người dùng, giỏ hàng hay ngôn ngữ/tenant của từng request trong instance toàn cục: request khác có thể đọc cùng trạng thái.`}),`
`,(0,c.jsxs)(t.li,{children:[`Không giữ dependency thuộc request như header, router hiện tại hoặc instance `,(0,c.jsx)(t.code,{children:`Api`}),` lấy từ ngữ cảnh request. Singleton giữ lại dependency của lần khởi tạo đầu tiên.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Khai báo factory một lần ở cấp module, không khai báo trong trình xử lý request hoặc component. Với trạng thái riêng cho request, dùng `,(0,c.jsx)(t.code,{children:`executeUseLocal`}),` cùng ngữ cảnh `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` đã cấu hình, hoặc `,(0,c.jsx)(t.code,{children:`executeUseProvide`}),` trong cây component.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroyExecute()`}),` đặt lại singleton cho toàn tiến trình và dừng các effect của nó. Lần gọi hook hoặc khởi tạo tiếp theo tạo instance dùng chung mới; tham chiếu đã trả về vẫn trỏ đến đối tượng cũ. Instance trên máy chủ và trình duyệt độc lập; helper này không tự động hydrate trạng thái giữa chúng.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
import { ref } from 'vue'

// Cấu hình công khai dùng chung cho mọi request trong tiến trình máy chủ.
export const usePublicConfig = /*#__PURE__*/ executeUseGlobal(() => {
  const apiVersion = ref('v1')
  return { apiVersion }
})

executeUseGlobalInit()

const configuration = /*#__PURE__*/ usePublicConfig()
// Thay đổi được hiển thị cho mọi nơi sử dụng trong môi trường này.
configuration.apiVersion.value = 'v2'
`})}),`
`,(0,c.jsxs)(t.h3,{id:`local-singleton-khởi-tạo-trễ-theo-ngữ-cảnh`,children:[(0,c.jsx)(t.code,{children:`local`}),` (singleton khởi tạo trễ theo ngữ cảnh)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Đây là singleton khởi tạo trễ, lưu instance thông qua `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. Trong trình duyệt, các lần gọi dùng lại instance đã cache. Với SSR, ngữ cảnh request đã khởi tạo sẽ cung cấp instance riêng cho từng request.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Khi nào sử dụng:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Dùng cho utilities, các tác vụ nhà máy (factory) hay các service riêng biệt không quy bám vào Vue (bởi vì `,(0,c.jsx)(t.code,{children:`provide`}),`/`,(0,c.jsx)(t.code,{children:`inject`}),` chỉ tác dụng bên trong scope của `,(0,c.jsx)(t.code,{children:`setup`}),`).`]}),`
`,(0,c.jsx)(t.li,{children:`Tại lúc muốn lấy cá thể độc quyền dành cho những dịch vụ nặng hoặc tốn kém chỉ duy nhất tại lúc nào thiệt cần (khởi động trễ thụy động laziness on demand), mà không phải thời gian đầu trong chu kỳ chung.`}),`
`,(0,c.jsx)(t.li,{children:`Ở những lần dùng phép lưu hệ số tạm thời (cache) những hoạt hóa tính toán, chuyển đổi của phép hệ thống lớn.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Cách hoạt động:`}),`
Lần gọi đầu thực thi hàm khởi tạo với các tham số, đóng băng kết quả (`,(0,c.jsx)(t.code,{children:`Object.freeze`}),`) và lưu vào `,(0,c.jsx)(t.code,{children:`ServerStorage`}),`. Các lần gọi sau trong cùng ngữ cảnh trả về instance đã lưu và bỏ qua tham số mới. `,(0,c.jsx)(t.code,{children:`destroyExecute()`}),` xóa mục cache của ngữ cảnh hiện tại. Cách ly SSR yêu cầu ngữ cảnh request `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` đã cấu hình; kho dự phòng không cách ly các request.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executeUseLocal } from '@dxtmisha/functional'
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
`,(0,c.jsx)(t.h2,{id:`executeuseglobalinit`,children:(0,c.jsx)(t.code,{children:`executeUseGlobalInit`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`function executeUseGlobalInit(): void
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo mọi singleton toàn cục đã đăng ký (`,(0,c.jsx)(t.code,{children:`ExecuteUseType.global`}),`) và giữ lại registry dùng chung. Các lần gọi tiếp theo dùng lại instance hiện có, đồng thời khởi tạo factory mới hoặc đã được đặt lại. Nhập module dịch vụ trước khi gọi hàm. Trong SSR, plugin có thể gọi hàm cho từng ứng dụng/request, nhưng mỗi instance toàn cục vẫn được dùng chung trong tiến trình máy chủ.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};