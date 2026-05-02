import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/styles/ru/Dimension`}),`
`,(0,c.jsx)(n.h1,{id:`dimension`,children:`Dimension`}),`
`,(0,c.jsx)(n.p,{children:`Набор SCSS функций и миксинов для управления размерами с поддержкой CSS Custom Properties.`}),`
`,(0,c.jsx)(n.h2,{id:`функции`,children:`Функции`}),`
`,(0,c.jsx)(n.h3,{id:`getwidthbyratio`,children:(0,c.jsx)(n.code,{children:`getWidthByRatio`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает ширину на основе значений соотношения сторон.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — строка соотношения сторон (например, '16/9')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$width: getWidthByRatio('16/9'); // "16"
`})}),`
`,(0,c.jsx)(n.h3,{id:`getheightbyratio`,children:(0,c.jsx)(n.code,{children:`getHeightByRatio`})}),`
`,(0,c.jsx)(n.p,{children:`Возвращает высоту на основе значений соотношения сторон.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — строка соотношения сторон (например, '16/9')`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`String`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`$height: getHeightByRatio('16/9'); // "9"
`})}),`
`,(0,c.jsx)(n.h2,{id:`миксины`,children:`Миксины`}),`
`,(0,c.jsx)(n.h3,{id:`width`,children:(0,c.jsx)(n.code,{children:`width`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает ширину с CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение ширины`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include width(200px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`height`,children:(0,c.jsx)(n.code,{children:`height`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает высоту с CSS custom property.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение высоты`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include height(100px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`widthdevice`,children:(0,c.jsx)(n.code,{children:`widthDevice`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает ширину с использованием device viewport width (dvw).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение ширины в единицах dvw`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include widthDevice(100);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`heightdevice`,children:(0,c.jsx)(n.code,{children:`heightDevice`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает высоту с использованием device viewport height (dvh).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение высоты в единицах dvh`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include heightDevice(100);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`maxwidthdevice`,children:(0,c.jsx)(n.code,{children:`maxWidthDevice`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает max-width с использованием device viewport width (dvw).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение max-width в единицах dvw`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include maxWidthDevice(90);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`maxheightdevice`,children:(0,c.jsx)(n.code,{children:`maxHeightDevice`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает max-height с использованием device viewport height (dvh).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение max-height в единицах dvh`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include maxHeightDevice(80);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`widthbasis`,children:(0,c.jsx)(n.code,{children:`widthBasis`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает ширину с flex-basis и ограничением max-width.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение ширины`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include widthBasis(300px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`heightbasis`,children:(0,c.jsx)(n.code,{children:`heightBasis`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает высоту с flex-basis и ограничением max-height.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение высоты`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include heightBasis(200px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`aspectratio`,children:(0,c.jsx)(n.code,{children:`aspectRatio`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает соотношение сторон.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение соотношения сторон`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include aspectRatio(16/9);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`aspectratiowidth`,children:(0,c.jsx)(n.code,{children:`aspectRatioWidth`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает соотношение сторон (псевдоним для aspectRatio).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение соотношения сторон`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include aspectRatioWidth(16/9);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`aspectratioheight`,children:(0,c.jsx)(n.code,{children:`aspectRatioHeight`})}),`
`,(0,c.jsx)(n.p,{children:`Устанавливает соотношение сторон (псевдоним для aspectRatio).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение соотношения сторон`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include aspectRatioHeight(4/3);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`squared`,children:(0,c.jsx)(n.code,{children:`squared`})}),`
`,(0,c.jsx)(n.p,{children:`Создает квадратный элемент с соотношением сторон 1:1.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include squared(100px);
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`circle`,children:(0,c.jsx)(n.code,{children:`circle`})}),`
`,(0,c.jsx)(n.p,{children:`Создает круглый элемент.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`$value`}),` — значение размера`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-scss`,children:`.element {
  @include circle(50px);
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};