import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/# UI Figma/# Làm việc với Frame`}),`
`,(0,c.jsx)(n.h1,{id:`làm-việc-với-frame`,children:`Làm việc với Frame`}),`
`,(0,c.jsx)(n.p,{children:`Thư viện cung cấp các công cụ để quản lý danh sách các frame trên trang Figma hiện tại và theo dõi các phần tử được chọn. Điều này cho phép bạn xây dựng các giao diện điều hướng phức tạp và hệ thống chọn hàng loạt bên trong plugin của mình.`}),`
`,(0,c.jsx)(n.h2,{id:`backend-backend--plugincodets`,children:`Backend (Backend / plugin/code.ts)`}),`
`,(0,c.jsx)(n.p,{children:`Để đồng bộ hóa dữ liệu frame tự động, các trình xử lý tương ứng phải được khởi tạo ở phía plugin.`}),`
`,(0,c.jsx)(n.h3,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames, FigmaFramesSelected } from '@dxtmisha/figma-code'

// Kích hoạt trình lắng nghe cho danh sách frame và quản lý vùng chọn
FigmaTopLevelFrames.send()
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`giao-diện-ui--iframe`,children:`Giao diện (UI / Iframe)`}),`
`,(0,c.jsx)(n.p,{children:`Dữ liệu về tất cả các frame trên trang và các công cụ để quản lý danh sách vùng chọn nội bộ của plugin có sẵn trong giao diện.`}),`
`,(0,c.jsx)(n.h3,{id:`danh-sách-frame-của-trang-vue`,children:`Danh sách Frame của trang (Vue)`}),`
`,(0,c.jsx)(n.p,{children:`Cho phép bạn lấy danh sách tất cả các frame và section tại thư mục gốc của trang hiện tại kèm theo ảnh chụp màn hình.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

const { frames, loading } = useFigmaUiFrames()

/* frames.value chứa danh sách các đối tượng:
  {
    id: string,
    name: string,
    image: Uint8Array | string // Ảnh chụp màn hình JPG
  }
*/
`})}),`
`,(0,c.jsx)(n.h3,{id:`các-phần-tử-được-chọn-trong-plugin-vue`,children:`Các phần tử được chọn trong Plugin (Vue)`}),`
`,(0,c.jsx)(n.p,{children:`Một cơ chế để theo dõi và sửa đổi danh sách các phần tử "được chọn" trong giao diện của plugin. Trạng thái này được duy trì trên toàn cầu ở cấp độ phiên plugin.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

const { 
  selected,       // Danh sách ID các frame được chọn
  isSelected,     // Hàm kiểm tra: isSelected(id)
  toggleSelected, // Hàm chuyển đổi: toggleSelected(id, boolean)
} = useFigmaUiSelected()

// Ví dụ sử dụng:
const active = isSelected('1:123')
const toggle = () => toggleSelected('1:123', !active.value)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};