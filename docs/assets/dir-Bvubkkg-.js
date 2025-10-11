import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-C8vOrmRQ.js";import{M as d}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"@dxtmisha/styles/ru/Dir"}),`
`,n.jsx(s.h1,{id:"dir",children:"Dir"}),`
`,n.jsx(s.p,{children:"Набор SCSS функций и миксинов для управления направлением текста (LTR/RTL) с поддержкой CSS Custom Properties."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Как это работает:"})," Система использует CSS custom properties для управления двунаправленным текстом. По умолчанию установлен LTR (слева направо). При применении ",n.jsx(s.code,{children:'html[dir="rtl"]'})," или класса ",n.jsx(s.code,{children:".dir-rtl"})," все переменные направления автоматически инвертируются, обеспечивая поддержку RTL без дублирования кода."]}),`
`,n.jsx(s.h2,{id:"миксины-инициализации",children:"Миксины инициализации"}),`
`,n.jsx(s.h3,{id:"initdir",children:n.jsx(s.code,{children:"initDir"})}),`
`,n.jsx(s.p,{children:"Инициализирует систему направлений с CSS custom properties для поддержки LTR и RTL."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`@include initDir;
`})}),`
`,n.jsx(s.h3,{id:"dirtortl",children:n.jsx(s.code,{children:"dirToRtl"})}),`
`,n.jsx(s.p,{children:"Применяет стили для RTL (справа налево) направления."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"void"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`html[dir="rtl"] {
  @include dirToRtl;
}
`})}),`
`,n.jsx(s.h2,{id:"функции-валидации",children:"Функции валидации"}),`
`,n.jsx(s.h3,{id:"isdir",children:n.jsx(s.code,{children:"isDir"})}),`
`,n.jsx(s.p,{children:"Возвращает множитель направления (1 для LTR, -1 для RTL)."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`$dir: isDir(); // var(--d-dir, 1)
`})}),`
`,n.jsx(s.h3,{id:"isdirleft",children:n.jsx(s.code,{children:"isDirLeft"})}),`
`,n.jsx(s.p,{children:"Проверяет, является ли текущее направление выровненным по левому краю."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`$isLeft: isDirLeft(); // var(--d-dir-left, 1)
`})}),`
`,n.jsx(s.h3,{id:"isdirright",children:n.jsx(s.code,{children:"isDirRight"})}),`
`,n.jsx(s.p,{children:"Проверяет, является ли текущее направление выровненным по правому краю."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`$isRight: isDirRight(); // var(--d-dir-right, 0)
`})}),`
`,n.jsx(s.h2,{id:"функции-направления",children:"Функции направления"}),`
`,n.jsx(s.h3,{id:"dirleft",children:n.jsx(s.code,{children:"dirLeft"})}),`
`,n.jsx(s.p,{children:"Возвращает значение выравнивания текста для левой стороны."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`text-align: dirLeft(); // left (LTR) или right (RTL)
`})}),`
`,n.jsx(s.h3,{id:"dirright",children:n.jsx(s.code,{children:"dirRight"})}),`
`,n.jsx(s.p,{children:"Возвращает значение выравнивания текста для правой стороны."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`text-align: dirRight(); // right (LTR) или left (RTL)
`})}),`
`,n.jsx(s.h3,{id:"dirleftauto",children:n.jsx(s.code,{children:"dirLeftAuto"})}),`
`,n.jsx(s.p,{children:"Возвращает значение 'auto' для свойства left."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`left: dirLeftAuto(); // auto (LTR) или unset (RTL)
`})}),`
`,n.jsx(s.h3,{id:"dirrightauto",children:n.jsx(s.code,{children:"dirRightAuto"})}),`
`,n.jsx(s.p,{children:"Возвращает значение 'auto' для свойства right."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`right: dirRightAuto(); // unset (LTR) или auto (RTL)
`})}),`
`,n.jsx(s.h3,{id:"dirflexleft",children:n.jsx(s.code,{children:"dirFlexLeft"})}),`
`,n.jsx(s.p,{children:"Возвращает значение flex-выравнивания для левой стороны."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`justify-content: dirFlexLeft(); // flex-start (LTR) или flex-end (RTL)
`})}),`
`,n.jsx(s.h3,{id:"dirflexright",children:n.jsx(s.code,{children:"dirFlexRight"})}),`
`,n.jsx(s.p,{children:"Возвращает значение flex-выравнивания для правой стороны."}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`justify-content: dirFlexRight(); // flex-end (LTR) или flex-start (RTL)
`})}),`
`,n.jsx(s.h2,{id:"функции-позиционирования",children:"Функции позиционирования"}),`
`,n.jsx(s.h3,{id:"dirtoleft",children:n.jsx(s.code,{children:"dirToLeft"})}),`
`,n.jsx(s.p,{children:"Вычисляет значение позиции для свойства left в зависимости от направления."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$left"})," — переменная левой позиции"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$right"})," — переменная правой позиции"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`left: dirToLeft(--pos-left, --pos-right);
`})}),`
`,n.jsx(s.h3,{id:"dirtoright",children:n.jsx(s.code,{children:"dirToRight"})}),`
`,n.jsx(s.p,{children:"Вычисляет значение позиции для свойства right в зависимости от направления."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$left"})," — переменная левой позиции"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$right"})," — переменная правой позиции"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`right: dirToRight(--pos-left, --pos-right);
`})}),`
`,n.jsx(s.h3,{id:"dirorder",children:n.jsx(s.code,{children:"dirOrder"})}),`
`,n.jsx(s.p,{children:"Вычисляет значение order на основе множителя направления."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Параметры:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"$value"})," — значение order"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Возвращает:"})," ",n.jsx(s.code,{children:"String"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`order: dirOrder(2); // 3 (LTR) или 999997 (RTL)
`})})]})}function o(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{o as default};
