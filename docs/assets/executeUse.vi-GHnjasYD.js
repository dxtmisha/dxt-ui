import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(t){const c={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional/Functions/executeUse - Singleton với quản lý vòng đời"}),`
`,n.jsx(c.h1,{id:"executeuse",children:n.jsx(c.code,{children:"executeUse"})}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"executeUse"})," là một factory bao bọc bất kỳ hàm khởi tạo nào và biến kết quả của nó thành một ",n.jsx(c.strong,{children:"singleton được quản lý"}),". Đối tượng được tạo đúng một lần, đóng băng (",n.jsx(c.code,{children:"Object.freeze"}),") và tái sử dụng trong mỗi lần gọi tiếp theo. Tùy theo loại được chọn, singleton có thể là phạm vi component, toàn cục, hoặc cục bộ."]}),`
`,n.jsxs(c.p,{children:["Để đảm bảo định danh duy nhất, thư viện kết hợp mã code toàn cục nội bộ và hàm ",n.jsx(c.code,{children:"getElementId()"}),", giúp ngăn chặn hoàn toàn việc trùng lặp ID ngay cả khi sử dụng trong nhiều module khác nhau."]}),`
`,n.jsx(c.h3,{id:"giới-hạn-generics-generic-constraints",children:"Giới hạn Generics (Generic Constraints)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"R"})," — kiểu đối tượng được trả về bởi hàm khởi tạo (",n.jsx(c.code,{children:"callback"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"O extends any[]"})," — kiểu của các tham số đầu vào cho ",n.jsx(c.code,{children:"callback"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"RI extends ExecuteUseReturn<R>"})," — kiểu kết quả của singleton, bao gồm các phương thức quản lý."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`function executeUse<R, O extends any[], RI extends ExecuteUseReturn<R>>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): (...args: O) => RI

function executeUseGlobal<R>(callback: () => R): () => ExecuteUseReturn<R>
function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>
`})}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"callback: (...args: O) => R"})," — Hàm khởi tạo. Được gọi khi truy cập lần đầu và trả về đối tượng sẽ được đóng băng và cache. Tham số chỉ được truyền vào ở lần gọi đầu tiên."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"type: ExecuteUseType"})," — Loại singleton (mặc định: ",n.jsx(c.code,{children:"ExecuteUseType.provide"}),")."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"})," ",n.jsx(c.code,{children:"ExecuteUseReturn<R>"})," — đối tượng đóng băng mở rộng ",n.jsx(c.code,{children:"R"})," với các phương thức:"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"init(): Readonly<R>"})," — trả về kết quả gốc của ",n.jsx(c.code,{children:"callback"})," mà không có các phương thức quản lý (",n.jsx(c.code,{children:"init"}),", ",n.jsx(c.code,{children:"destroyExecute"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"destroyExecute?(): void"})," — chỉ có ở ",n.jsx(c.code,{children:"local"})," và ",n.jsx(c.code,{children:"global"}),". Đặt lại cache, cho phép tạo lại đối tượng ở lần gọi tiếp theo."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"hàm-khởi-tạo-callback-và-tham-số-đầu-vào-args-o",children:["Hàm Khởi Tạo (",n.jsx(c.code,{children:"callback"}),") và Tham Số Đầu Vào (",n.jsx(c.code,{children:"...args: O"}),")"]}),`
`,n.jsxs(c.p,{children:["Đặc điểm chính của ",n.jsx(c.code,{children:"executeUse"})," là hàm factory (",n.jsx(c.code,{children:"callback"}),") và các tham số được truyền vào nó (",n.jsx(c.code,{children:"...args"}),") chỉ được sử dụng ",n.jsx(c.strong,{children:"đúng một lần"})," — trong quá trình khởi tạo thực tế (ngay ở lần gọi đầu tiên)."]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:n.jsx(c.code,{children:"callback"})}),": Đây là một factory mô tả logic tạo lập trạng thái. Bên trong đó, bạn thường khai báo các biến phản ứng (",n.jsx(c.code,{children:"ref"}),", ",n.jsx(c.code,{children:"reactive"}),"), các hàm để thay đổi chúng, và các giá trị tính toán (",n.jsx(c.code,{children:"computed"}),"). Đối tượng trả về từ ",n.jsx(c.code,{children:"callback"})," sẽ đóng băng và được đưa vào cache."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:n.jsx(c.code,{children:"...args: O"})}),": Bạn có thể truyền bất kỳ tham số nào vào hàm khởi tạo của mình (ví dụ: trạng thái ban đầu, ID của thực thể đang tải hoặc API client). Các tham số này sẽ được chuyển trực tiếp vào bên trong ",n.jsx(c.code,{children:"callback"}),"."]}),`
`]}),`
`,n.jsxs(c.blockquote,{children:[`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Lưu ý quan trọng về tham số:"})," Vì ",n.jsx(c.code,{children:"executeUse"})," ghi nhớ rất chặt (cache) kết quả của lần gọi đầu tiên, mọi tham số được truyền vào ở các lần gọi ",n.jsx(c.strong,{children:"tiếp theo"})," của cùng hook đó ở những component khác ",n.jsx(c.strong,{children:"sẽ bị bỏ qua hoàn toàn"}),". Đối tượng sẽ không được tạo lại và hàm ",n.jsx(c.code,{children:"callback"})," cũng không chạy lại với tham số mới (trừ phi bạn đã chủ động đặt lại cache trước đó thông qua ",n.jsx(c.code,{children:"destroyExecute()"}),")."]}),`
`]}),`
`,n.jsxs(c.h3,{id:"phương-thức-ký-hiệu-init",children:["Phương Thức Ký Hiệu ",n.jsx(c.code,{children:"init()"})]}),`
`,n.jsxs(c.p,{children:["Phương thức ",n.jsx(c.code,{children:"init"})," chỉ đơn thuần là một hàm trống, chức năng duy nhất là trả về chính xác cùng một đối tượng trạng thái đã được đóng băng. Nó tồn tại ",n.jsx(c.strong,{children:"hoàn toàn vì mục đích dễ đọc mã nguồn và trải nghiệm của lập trình viên (DX)"}),"."]}),`
`,n.jsxs(c.p,{children:["Mục đích chính của nó là cung cấp cho lập trình viên một cách để đánh dấu một cách tường minh và trực quan ngay trong mã nguồn vị trí chính xác xảy ra quá trình khởi tạo (lần gọi đầu tiên) của singleton. Từ góc độ kỹ thuật, ",n.jsx(c.code,{children:"const state = useTheme()"})," và ",n.jsx(c.code,{children:"const state = useTheme().init()"})," hoạt động hoàn toàn giống hệt nhau."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`// Ở một nơi nào đó sâu trong cây component, chúng ta chỉ cần lấy trạng thái đã sẵn sàng
const theme = useTheme()

// Còn ở đây, trong component gốc (hoặc main.ts), 
// chúng ta chủ động hiển thị cho các lập trình viên khác thấy: "Quá trình khởi tạo diễn ra ngay TẠI ĐÂY"
const theme = useTheme().init()
`})}),`
`,n.jsxs(c.h2,{id:"enum-executeusetype",children:["Enum ",n.jsx(c.code,{children:"ExecuteUseType"})]}),`
`,n.jsxs(c.h3,{id:"provide-singleton-phạm-vi-component-mặc-định",children:[n.jsx(c.code,{children:"provide"})," (singleton phạm vi component, mặc định)"]}),`
`,n.jsxs(c.p,{children:["Đây là một singleton định hướng component, được liên kết chặt chẽ với vòng đời của một component Vue và toàn bộ cây con của nó. Bên dưới, nó sử dụng cơ chế truyền ngữ cảnh và phản ứng tích hợp sẵn của Vue (",n.jsx(c.code,{children:"provide"}),"/",n.jsx(c.code,{children:"inject"}),"), cho phép bạn truyền cùng một phiên bản trạng thái (state instance) sâu xuống cây component một cách an toàn mà không cần phải truyền qua các props."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Khi nào sử dụng:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"Để chia sẻ trạng thái trong một nhánh component được chỉ định (component cha -> nhiều cấp lồng nhau -> component con), tránh làm ô nhiễm kho lưu trữ (store) toàn cục."}),`
`,n.jsx(c.li,{children:"Khi cần hiển thị nhiều khối độc lập trên cùng một trang (ví dụ: một vài widget tải tệp lên phức tạp), mỗi khối cần có một trạng thái duy nhất, dùng chung riêng bên trong widget đó."}),`
`,n.jsx(c.li,{children:'Nếu bạn cần dọn dẹp bộ nhớ tự động (garbage collection) ngay khi "component chủ" bị hủy (unmount).'}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Cách hoạt động:"}),`
Component gọi hàm này đầu tiên tự động trở thành "chủ sở hữu" (owner). Hàm tạo đối tượng và ngay lập tức gọi `,n.jsx(c.code,{children:"provide(id, instance)"}),". Mọi component con (bên trong) khi gọi cùng một hàm này sẽ không tạo ra đối tượng mới mà lấy đối tượng đã tạo trước đó qua ",n.jsx(c.code,{children:"inject(id)"}),"."]}),`
`,n.jsxs(c.blockquote,{children:[`
`,n.jsxs(c.p,{children:["Chú ý: Loại này thiếu phương thức ",n.jsx(c.code,{children:"destroyExecute()"})," vì bộ nhớ được tự do hóa một cách tự động nhờ hệ thống phản ứng (reactivity) của Vue tại thời điểm hủy component."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { executeUseProvide } from '@dxtmisha/functional'
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
`,n.jsxs(c.h3,{id:"global-singleton-toàn-ứng-dụng",children:[n.jsx(c.code,{children:"global"})," (singleton toàn ứng dụng)"]}),`
`,n.jsx(c.p,{children:"Đây là một mẫu kiến trúc (architectural pattern) Singleton cổ điển, tồn tại như một phiên bản duy nhất cực kỳ nghiêm ngặt trong toàn bộ thời gian tồn tại của ứng dụng của bạn (từ lúc tạo cho đến khi đóng tab trình duyệt). Nó cung cấp một điểm truy cập toàn cục vào trạng thái từ bất kỳ vị trí thực tế nào trong mã nguồn."}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Khi nào sử dụng:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"Dùng cho trạng thái toàn cục của ứng dụng: thông tin xác thực, tài khoản người dùng, thiết lập ngôn ngữ, giỏ hàng toàn cục."}),`
`,n.jsx(c.li,{children:"Khi một dữ liệu cần được chia sẻ cho các khối thành phần khác biệt, độc lập nhau trong chương trình (hoặc bên ngoài component Vue, như ở router)."}),`
`,n.jsx(c.li,{children:"Như một biện pháp thay thế dung lượng nhỏ cho Vuex / Pinia trong các tác vụ đơn giản."}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Cách hoạt động:"}),`
Hàm khởi tạo sẽ `,n.jsx(c.strong,{children:"không thực thi ngay khi gọi"}),". Tuy nhiên, nó sẽ được chuyển tới một hàm đợi bên trong (",n.jsx(c.code,{children:"globalMethods"}),"). Mọi đối tượng toàn cục chỉ khởi tạo đầy đủ khi trực tiếp gọi hàm ",n.jsx(c.code,{children:"executeUseGlobalInit()"}),", chủ yếu thường nằm trong tệp ",n.jsx(c.code,{children:"main.ts"})," trước khi ứng dụng được mount. Kể từ lúc ấy, mọi khối sẽ chia sẻ với nhau cùng một đối tượng được cache trong bộ nhớ."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { executeUseGlobal, executeUseGlobalInit } from '@dxtmisha/functional'
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
`,n.jsxs(c.h3,{id:"local-singleton-lưu-trong-closure",children:[n.jsx(c.code,{children:"local"})," (singleton lưu trong closure)"]}),`
`,n.jsxs(c.p,{children:["Đây là một singleton hoạt động độc lập, dựa trên cơ chế kết thúc từ vựng (",n.jsx(c.code,{children:"closure caching"}),") trong JavaScript. Thay vì dùng ngữ cảnh Vue hay phạm vi toàn cục, nó bảo tồn kết quả đã tạo ra một lần trực tiếp ngay trong bộ nhớ nội bộ của hàm, và trả về nó ngay lập tức trong tất cả các lần gọi tiếp theo."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Khi nào sử dụng:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["Dùng cho utilities, các tác vụ nhà máy (factory) hay các service riêng biệt không quy bám vào Vue (bởi vì ",n.jsx(c.code,{children:"provide"}),"/",n.jsx(c.code,{children:"inject"})," chỉ tác dụng bên trong scope của ",n.jsx(c.code,{children:"setup"}),")."]}),`
`,n.jsx(c.li,{children:"Tại lúc muốn lấy cá thể độc quyền dành cho những dịch vụ nặng hoặc tốn kém chỉ duy nhất tại lúc nào thiệt cần (khởi động trễ thụy động laziness on demand), mà không phải thời gian đầu trong chu kỳ chung."}),`
`,n.jsx(c.li,{children:"Ở những lần dùng phép lưu hệ số tạm thời (cache) những hoạt hóa tính toán, chuyển đổi của phép hệ thống lớn."}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Cách hoạt động:"}),`
Loại này không màng đến cơ chế Vue. Ngay gọi hàm lần bước 1 tiên phong, các chức năng hàm của tham số đưa lên sẽ lập tức thi triển. Hệ trả xuất ra định chặt `,n.jsx(c.code,{children:"Object.freeze"})," (bị đóng băng hoàn trả) lại cất vào trong một biến thể nội bộ giữa đám đóng của hàm ",n.jsx(c.code,{children:"executeUse"}),`. Những lần thứ kế theo (đôi khi cho là tham số sai số) nó vẫn nhả thẳng dữ liệu từ cùng cái chỗ kia nhanh chóng.
Phương pháp `,n.jsx(c.code,{children:"destroyExecute()"})," quét dọn biến của đợt trong vòng, châm ngọn cho sự tái bật khởi động cho thời kỳ lần tiếp khởi xưởng sau này."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { executeUseLocal } from '@dxtmisha/functional'
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
`,n.jsx(c.h2,{id:"executeuseglobalinit",children:n.jsx(c.code,{children:"executeUseGlobalInit"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`function executeUseGlobalInit(): void
`})}),`
`,n.jsxs(c.p,{children:["Gọi tất cả các hàm khởi tạo toàn cục đã đăng ký (",n.jsx(c.code,{children:"ExecuteUseType.global"}),") và xóa hàng đợi. Gọi lại lần nữa sẽ không khởi tạo lại các singleton đã tồn tại. Cần được gọi ",n.jsx(c.strong,{children:"một lần"})," khi khởi động ứng dụng — trước khi mount component gốc."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { createApp } from 'vue'
import { executeUseGlobalInit } from '@dxtmisha/functional'
import App from './App.vue'

executeUseGlobalInit()
createApp(App).mount('#app')
`})})]})}function a(t={}){const{wrapper:c}={...h(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(e,{...t})}):e(t)}export{a as default};
