import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/# Geo và Định dạng`}),`
`,(0,c.jsx)(n.h1,{id:`geo-và-định-dạng`,children:`Geo và Định dạng`}),`
`,(0,c.jsx)(n.p,{children:`Công cụ quản lý địa phương hóa (i18n), dữ liệu địa lý và định dạng thông minh. Hệ thống tự động phát hiện cài đặt người dùng, đảm bảo hiển thị con số, ngày tháng và tiền tệ chuẩn xác.`}),`
`,(0,c.jsx)(n.h2,{id:`địa-phương-hóa-geo`,children:`Địa phương hóa (Geo)`}),`
`,(0,c.jsx)(n.p,{children:`Quản lý trạng thái quốc gia, ngôn ngữ và múi giờ. Hỗ trợ tự động phát hiện và lưu trữ trình duyệt.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Geo } from '@dxtmisha/functional-basic'

// Cài đặt toàn cục
Geo.set('vi-VN', true)      // Thiết lập locale và lưu lại
Geo.setTimezone('+07:00')   // Ghi đè múi giờ
Geo.getCountry()            // 'VN'

// Dữ liệu tham khảo
const list = Geo.getList()  // Danh sách đầy đủ quốc gia và ngôn ngữ
const current = Geo.getItem() // Đối tượng dữ liệu locale hiện tại
const hasJP = Geo.hasCountry('JP') // Kiểm tra hỗ trợ quốc gia
`})}),`
`,(0,c.jsx)(n.h2,{id:`định-dạng-geointl`,children:`Định dạng (GeoIntl)`}),`
`,(0,c.jsxs)(n.p,{children:[`Công cụ vạn năng để định dạng dữ liệu dựa trên native `,(0,c.jsx)(n.code,{children:`Intl`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoIntl } from '@dxtmisha/functional-basic'

const intl = GeoIntl.getInstance()

// Số & Tiền tệ
intl.currency(1000, 'VND')          // '1.000 ₫'
intl.percent(0.15)                  // '15%'

// Ngày & Giờ
intl.date(new Date(), 'full')       // Ngày định dạng đầy đủ
intl.relative(new Date() - 3600000) // '1 giờ trước'
intl.relativeLimit(pastDate, 7)     // Tương đối (tới 7 ngày) hoặc tuyệt đối

// Tiện ích
intl.plural(5, 'quả táo|quả táo')   // Chia số nhiều
intl.sizeFile(1024 * 1024)          // '1 MB'
intl.sort(['táo', 'Voi', 'chuối'])  // Sắp xếp thông minh theo locale
intl.displayNames('DE', 'region')   // 'Đức' (đã địa phương hóa)
`})}),`
`,(0,c.jsx)(n.h2,{id:`cờ-quốc-gia-geoflag`,children:`Cờ quốc gia (GeoFlag)`}),`
`,(0,c.jsx)(n.p,{children:`Lấy biểu tượng cờ và tên quốc gia bằng ngôn ngữ bản địa hoặc hệ thống.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

const geoFlag = new GeoFlag('vi-VN')

// Dữ liệu quốc gia cụ thể
const ru = geoFlag.get('RU') // { icon: 'f-ru', country: 'Nga', area: '7', ... }

// Danh sách tên bằng ngôn ngữ gốc
const native = geoFlag.getNational(['DE']) 
// [{ country: 'Đức', nationalCountry: 'Deutschland', ... }]
`})}),`
`,(0,c.jsx)(n.h2,{id:`điện-thoại-geophone`,children:`Điện thoại (GeoPhone)`}),`
`,(0,c.jsx)(n.p,{children:`Tự động xác định quốc gia qua số điện thoại và làm việc với mặt nạ quốc tế.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoPhone } from '@dxtmisha/functional-basic'

// Nhận diện thông minh
const { item, phone } = GeoPhone.getByPhone('84900123456') 
// item — dữ liệu VN, phone — số đã làm sạch

// Định dạng
GeoPhone.toMask(phone, item.mask) // '+84 (900) 123-456'
GeoPhone.clear(' +84 (900) 123-456 ') // '84900123456' (làm sạch)
`})}),`
`,(0,c.jsx)(n.h2,{id:`danh-sách-formatters`,children:`Danh sách (Formatters)`}),`
`,(0,c.jsxs)(n.p,{children:[`Chuyển đổi hàng loạt mảng đối tượng. Tự động tạo các thuộc tính mới với hậu tố `,(0,c.jsx)(n.code,{children:`Format`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Formatters } from '@dxtmisha/functional-basic'

const options = {
  price: { type: 'currency', options: 'VND' },
  birthday: { type: 'date' },
  'user.name': { type: 'name' }, // Kết hợp firstName/lastName
  count: { type: 'plural', options: 'quả|quả' },
  status: { 
    transformation: (v) => v === 1 ? 'Ok' : 'Lỗi' 
  }
}

// transformed — bản sao của data với các trường priceFormat, birthdayFormat...
const transformed = new Formatters(options, data).to()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};