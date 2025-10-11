import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-C8vOrmRQ.js";import{M as c}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/styles/ru/Dimension"}),`
`,e.jsx(n.h1,{id:"dimension",children:"Dimension"}),`
`,e.jsx(n.p,{children:"Набор SCSS функций и миксинов для управления размерами с поддержкой CSS Custom Properties."}),`
`,e.jsx(n.h2,{id:"функции",children:"Функции"}),`
`,e.jsx(n.h3,{id:"getwidthbyratio",children:e.jsx(n.code,{children:"getWidthByRatio"})}),`
`,e.jsx(n.p,{children:"Возвращает ширину на основе значений соотношения сторон."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — строка соотношения сторон (например, '16/9')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$width: getWidthByRatio('16/9'); // "16"
`})}),`
`,e.jsx(n.h3,{id:"getheightbyratio",children:e.jsx(n.code,{children:"getHeightByRatio"})}),`
`,e.jsx(n.p,{children:"Возвращает высоту на основе значений соотношения сторон."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — строка соотношения сторон (например, '16/9')"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"String"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`$height: getHeightByRatio('16/9'); // "9"
`})}),`
`,e.jsx(n.h2,{id:"миксины",children:"Миксины"}),`
`,e.jsx(n.h3,{id:"width",children:e.jsx(n.code,{children:"width"})}),`
`,e.jsx(n.p,{children:"Устанавливает ширину с CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение ширины"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include width(200px);
}
`})}),`
`,e.jsx(n.h3,{id:"height",children:e.jsx(n.code,{children:"height"})}),`
`,e.jsx(n.p,{children:"Устанавливает высоту с CSS custom property."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение высоты"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include height(100px);
}
`})}),`
`,e.jsx(n.h3,{id:"widthdevice",children:e.jsx(n.code,{children:"widthDevice"})}),`
`,e.jsx(n.p,{children:"Устанавливает ширину с использованием device viewport width (dvw)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение ширины в единицах dvw"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include widthDevice(100);
}
`})}),`
`,e.jsx(n.h3,{id:"heightdevice",children:e.jsx(n.code,{children:"heightDevice"})}),`
`,e.jsx(n.p,{children:"Устанавливает высоту с использованием device viewport height (dvh)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение высоты в единицах dvh"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include heightDevice(100);
}
`})}),`
`,e.jsx(n.h3,{id:"maxwidthdevice",children:e.jsx(n.code,{children:"maxWidthDevice"})}),`
`,e.jsx(n.p,{children:"Устанавливает max-width с использованием device viewport width (dvw)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение max-width в единицах dvw"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include maxWidthDevice(90);
}
`})}),`
`,e.jsx(n.h3,{id:"maxheightdevice",children:e.jsx(n.code,{children:"maxHeightDevice"})}),`
`,e.jsx(n.p,{children:"Устанавливает max-height с использованием device viewport height (dvh)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение max-height в единицах dvh"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include maxHeightDevice(80);
}
`})}),`
`,e.jsx(n.h3,{id:"widthbasis",children:e.jsx(n.code,{children:"widthBasis"})}),`
`,e.jsx(n.p,{children:"Устанавливает ширину с flex-basis и ограничением max-width."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение ширины"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include widthBasis(300px);
}
`})}),`
`,e.jsx(n.h3,{id:"heightbasis",children:e.jsx(n.code,{children:"heightBasis"})}),`
`,e.jsx(n.p,{children:"Устанавливает высоту с flex-basis и ограничением max-height."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение высоты"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include heightBasis(200px);
}
`})}),`
`,e.jsx(n.h3,{id:"aspectratio",children:e.jsx(n.code,{children:"aspectRatio"})}),`
`,e.jsx(n.p,{children:"Устанавливает соотношение сторон."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение соотношения сторон"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include aspectRatio(16/9);
}
`})}),`
`,e.jsx(n.h3,{id:"aspectratiowidth",children:e.jsx(n.code,{children:"aspectRatioWidth"})}),`
`,e.jsx(n.p,{children:"Устанавливает соотношение сторон (псевдоним для aspectRatio)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение соотношения сторон"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include aspectRatioWidth(16/9);
}
`})}),`
`,e.jsx(n.h3,{id:"aspectratioheight",children:e.jsx(n.code,{children:"aspectRatioHeight"})}),`
`,e.jsx(n.p,{children:"Устанавливает соотношение сторон (псевдоним для aspectRatio)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение соотношения сторон"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include aspectRatioHeight(4/3);
}
`})}),`
`,e.jsx(n.h3,{id:"squared",children:e.jsx(n.code,{children:"squared"})}),`
`,e.jsx(n.p,{children:"Создает квадратный элемент с соотношением сторон 1:1."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение размера"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include squared(100px);
}
`})}),`
`,e.jsx(n.h3,{id:"circle",children:e.jsx(n.code,{children:"circle"})}),`
`,e.jsx(n.p,{children:"Создает круглый элемент."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Параметры:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$value"})," — значение размера"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Возвращает:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.element {
  @include circle(50px);
}
`})})]})}function o(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default};
