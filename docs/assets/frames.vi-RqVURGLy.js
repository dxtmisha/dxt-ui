import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/3. Figma/2. Làm việc với Frame`}),`
`,(0,c.jsx)(t.h1,{id:`làm-việc-với-frame`,children:`Làm việc với Frame`}),`
`,(0,c.jsx)(t.p,{children:`Thư viện cung cấp các công cụ để quản lý danh sách các frame trên trang Figma hiện tại và theo dõi các phần tử được chọn. Điều này cho phép bạn xây dựng các giao diện điều hướng phức tạp và hệ thống chọn hàng loạt bên trong plugin của mình.`}),`
`,(0,c.jsx)(t.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(t.p,{children:`Để đồng bộ hóa dữ liệu frame tự động, các trình xử lý tương ứng phải được khởi tạo ở phía plugin.`}),`
`,(0,c.jsx)(t.h3,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames, FigmaFramesSelected } from '@dxtmisha/figma-code'

// Kích hoạt trình lắng nghe cho danh sách frame và quản lý vùng chọn
FigmaTopLevelFrames.send()
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(t.h2,{id:`giao-diện-ui--iframe`,children:`Giao diện (UI / Iframe)`}),`
`,(0,c.jsx)(t.p,{children:`Dữ liệu về tất cả các frame trên trang và các công cụ để quản lý danh sách vùng chọn nội bộ của plugin có sẵn trong giao diện.`}),`
`,(0,c.jsx)(t.h3,{id:`danh-sách-frame-của-trang-vue`,children:`Danh sách Frame của trang (Vue)`}),`
`,(0,c.jsx)(t.p,{children:`Cho phép bạn lấy danh sách tất cả các frame và section tại thư mục gốc của trang hiện tại kèm theo ảnh chụp màn hình.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

/* frames.value chứa danh sách các đối tượng:
  {
    id: string,
    name: string,
    image: Uint8Array | string // Ảnh chụp màn hình JPG
  }
*/
`})}),`
`,(0,c.jsx)(t.h3,{id:`các-phần-tử-được-chọn-trong-plugin-vue`,children:`Các phần tử được chọn trong Plugin (Vue)`}),`
`,(0,c.jsx)(t.p,{children:`Một cơ chế để theo dõi và sửa đổi danh sách các phần tử "được chọn" trong giao diện của plugin. Trạng thái này được duy trì trên toàn cầu ở cấp độ phiên plugin.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { 
  selected,       // Danh sách ID các frame được chọn
  isSelected,     // Hàm kiểm tra: isSelected(id)
  toggleSelected, // Hàm chuyển đổi: toggleSelected(id, boolean)
} = useFigmaUiSelected()

// Ví dụ sử dụng:
const active = isSelected('1:123')
const toggle = () => toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};