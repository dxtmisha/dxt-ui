import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Zkkrlp1B.js";import{M as c}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/styles/ru/Flex"}),`
`,n.jsx(e.h1,{id:"flex",children:"Flex"}),`
`,n.jsx(e.p,{children:"Набор SCSS миксинов для работы с flexbox-раскладками с поддержкой CSS Custom Properties."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Как это работает:"})," Система предоставляет удобные миксины для распространенных паттернов flexbox. Каждый миксин объединяет несколько свойств flexbox в одно объявление, уменьшая дублирование кода. Миксины поддерживают как стандартные flex-контейнеры, так и inline-flex варианты, с автоматическими пресетами выравнивания для горизонтальных/вертикальных раскладок."]}),`
`,n.jsx(e.h2,{id:"базовые-миксины",children:"Базовые миксины"}),`
`,n.jsx(e.h3,{id:"flex-1",children:n.jsx(e.code,{children:"flex"})}),`
`,n.jsx(e.p,{children:"Устанавливает display: flex."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flex;
}
`})}),`
`,n.jsx(e.h3,{id:"flexinline",children:n.jsx(e.code,{children:"flexInline"})}),`
`,n.jsx(e.p,{children:"Устанавливает display: inline-flex."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexInline;
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-выравнивания",children:"Миксины выравнивания"}),`
`,n.jsx(e.h3,{id:"flexx",children:n.jsx(e.code,{children:"flexX"})}),`
`,n.jsx(e.p,{children:"Создает горизонтальный flex-контейнер с центрированными элементами."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexX;
  // display: flex;
  // align-items: center;
}
`})}),`
`,n.jsx(e.h3,{id:"flexy",children:n.jsx(e.code,{children:"flexY"})}),`
`,n.jsx(e.p,{children:"Создает вертикальный flex-контейнер с центрированными элементами."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexY;
  // display: flex;
  // align-items: center;
  // flex-flow: column;
}
`})}),`
`,n.jsx(e.h3,{id:"flexstretchx",children:n.jsx(e.code,{children:"flexStretchX"})}),`
`,n.jsx(e.p,{children:"Создает горизонтальный flex-контейнер с растянутыми элементами."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexStretchX;
  // display: flex;
  // align-items: stretch;
}
`})}),`
`,n.jsx(e.h3,{id:"flexstretchy",children:n.jsx(e.code,{children:"flexStretchY"})}),`
`,n.jsx(e.p,{children:"Создает вертикальный flex-контейнер с растянутыми элементами."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexStretchY;
  // display: flex;
  // align-items: stretch;
  // flex-flow: column;
}
`})}),`
`,n.jsx(e.h3,{id:"flexcenter",children:n.jsx(e.code,{children:"flexCenter"})}),`
`,n.jsx(e.p,{children:"Создает центрированный flex-контейнер (по обеим осям)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexCenter;
  // display: flex;
  // align-items: center;
  // justify-content: center;
}
`})}),`
`,n.jsx(e.h3,{id:"flexbetween",children:n.jsx(e.code,{children:"flexBetween"})}),`
`,n.jsx(e.p,{children:"Создает flex-контейнер с выравниванием space-between."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexBetween;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-inline-flex",children:"Миксины inline-flex"}),`
`,n.jsx(e.h3,{id:"flexinlinex",children:n.jsx(e.code,{children:"flexInlineX"})}),`
`,n.jsx(e.p,{children:"Создает горизонтальный inline-flex контейнер с центрированными элементами."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexInlineX;
}
`})}),`
`,n.jsx(e.h3,{id:"flexinliney",children:n.jsx(e.code,{children:"flexInlineY"})}),`
`,n.jsx(e.p,{children:"Создает вертикальный inline-flex контейнер с центрированными элементами."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexInlineY;
}
`})}),`
`,n.jsx(e.h3,{id:"flexinlinecenter",children:n.jsx(e.code,{children:"flexInlineCenter"})}),`
`,n.jsx(e.p,{children:"Создает центрированный inline-flex контейнер (по обеим осям)."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexInlineCenter;
}
`})}),`
`,n.jsx(e.h3,{id:"flexinlinebetween",children:n.jsx(e.code,{children:"flexInlineBetween"})}),`
`,n.jsx(e.p,{children:"Создает inline-flex контейнер с выравниванием space-between."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexInlineBetween;
}
`})}),`
`,n.jsx(e.h2,{id:"утилитарные-миксины",children:"Утилитарные миксины"}),`
`,n.jsx(e.h3,{id:"justifycontent",children:n.jsx(e.code,{children:"justifyContent"})}),`
`,n.jsx(e.p,{children:"Устанавливает свойство justify-content."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение justify-content"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include justifyContent(center);
}
`})}),`
`,n.jsx(e.h3,{id:"flexposition",children:n.jsx(e.code,{children:"flexPosition"})}),`
`,n.jsx(e.p,{children:"Применяет flex-раскладку на основе значения пресета."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — имя пресета ('x', 'y', 'center', 'between', 'inline-x', 'inline-y', 'inline-center', 'inline-between')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.container {
  @include flexPosition('center');
}
`})}),`
`,n.jsx(e.h3,{id:"flexdynamic",children:n.jsx(e.code,{children:"flexDynamic"})}),`
`,n.jsx(e.p,{children:"Создает гибкий элемент, который растет и сжимается."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.item {
  @include flexDynamic;
  // flex-basis: 1px;
  // flex-grow: 1;
  // flex-shrink: 1;
}
`})})]})}function t(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{t as default};
