import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Classes/DesignChanged - Tiện ích theo dõi thay đổi`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designchanged`,children:`Lớp DesignChanged`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp tiện ích được thiết kế để theo dõi các thay đổi trong thuộc tính đối tượng. Nó duy trì một bộ nhớ đệm (cache) cho các giá trị trước đó và cung cấp các phương thức để phát hiện sự khác biệt giữa trạng thái hiện tại và trạng thái cập nhật lần cuối.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`So sánh hiệu quả`}),` — so sánh các giá trị thuộc tính hiện tại với bộ nhớ đệm cục bộ để xác định các thay đổi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theo dõi có chọn lọc`}),` — hỗ trợ theo dõi một tập hợp con cụ thể của các thuộc tính thông qua tham số `,(0,c.jsx)(t.code,{children:`watch`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cập nhật hàng loạt`}),` — cung cấp cách để đồng bộ hóa toàn bộ bộ nhớ đệm với trạng thái hiện tại của các thuộc tính.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một thực thể `,(0,c.jsx)(t.code,{children:`DesignChanged`}),` mới. Lớp này được thiết kế để theo dõi các thay đổi trong thuộc tính đối tượng bằng cách so sánh chúng với một bộ nhớ đệm nội bộ (trạng thái tại thời điểm cập nhật lần cuối).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`props: T`}),` — đối tượng dữ liệu có các thuộc tính cần được theo dõi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`watch: string[] = Object.keys(props)`}),` — một mảng gồm các tên thuộc tính (khóa) để theo dõi. Theo mặc định, tất cả các thuộc tính của đối tượng `,(0,c.jsx)(t.code,{children:`props`}),` đều được theo dõi.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignChanged } from '@dxtmisha/functional'

// 1. Theo dõi tất cả các thuộc tính theo mặc định
const props = { title: 'Xin chào', count: 1 }
const tracker = new DesignChanged(props)

// 2. Theo dõi các thuộc tính cụ thể (tập hợp con)
const trackerPartial = new DesignChanged(props, ['title'])

console.log(tracker.isChanged()) // false
`})}),`
`,(0,c.jsx)(t.h2,{id:`phát-hiện-thay-đổi`,children:`Phát hiện thay đổi`}),`
`,(0,c.jsx)(t.h3,{id:`is`,children:(0,c.jsx)(t.code,{children:`is`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem các thuộc tính cụ thể có bị thay đổi kể từ lần cập nhật cuối cùng hay không.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string | string[]`}),` — tên của một thuộc tính hoặc một mảng các tên thuộc tính cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu bất kỳ thuộc tính nào được chỉ định đã thay đổi.`]}),`
`,(0,c.jsx)(t.h3,{id:`ischanged`,children:(0,c.jsx)(t.code,{children:`isChanged`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem bất kỳ thuộc tính nào đang được theo dõi (được định nghĩa trong danh sách `,(0,c.jsx)(t.code,{children:`watch`}),`) có thay đổi hay không.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu ít nhất một thuộc tính đang theo dõi có giá trị khác.`]}),`
`,(0,c.jsx)(t.h2,{id:`đồng-bộ-hóa-dữ-liệu`,children:`Đồng bộ hóa dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`update`,children:(0,c.jsx)(t.code,{children:`update`})}),`
`,(0,c.jsxs)(t.p,{children:[`Đồng bộ hóa bộ nhớ đệm nội bộ với giá trị hiện tại của tất cả các thuộc tính đang được theo dõi. Sau khi gọi phương thức này, `,(0,c.jsx)(t.code,{children:`isChanged()`}),` sẽ trả về `,(0,c.jsx)(t.code,{children:`false`}),` cho đến khi các thuộc tính được sửa đổi lại.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),` `,(0,c.jsx)(t.code,{children:`void`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};