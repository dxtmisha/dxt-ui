import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function c(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/styles/ru/Font"}),`
`,n.jsx(e.h1,{id:"font",children:"Font"}),`
`,n.jsx(e.p,{children:"Набор SCSS миксинов для управления типографикой и стилями текста с поддержкой CSS Custom Properties."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Как это работает:"})," Система предоставляет миксины для стилизации текста с автоматической поддержкой RTL через интеграцию с dir. Миксины выравнивания текста автоматически инвертируются для RTL-раскладок. CSS custom properties используются для font-size, line-height и paragraph spacing, позволяя динамическое изменение темы и адаптивную типографику."]}),`
`,n.jsx(e.h2,{id:"миксины-инициализации",children:"Миксины инициализации"}),`
`,n.jsx(e.h3,{id:"initparagraphspacing",children:n.jsx(e.code,{children:"initParagraphSpacing"})}),`
`,n.jsx(e.p,{children:"Инициализирует систему отступов между последовательными параграфами."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`@include initParagraphSpacing;
// p + p { padding-top: var(--sys-paragraph-spacing, 0); }
`})}),`
`,n.jsx(e.h2,{id:"миксины-типографики",children:"Миксины типографики"}),`
`,n.jsx(e.h3,{id:"fontsize",children:n.jsx(e.code,{children:"fontSize"})}),`
`,n.jsx(e.p,{children:"Устанавливает размер шрифта с CSS custom property."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение размера шрифта"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include fontSize(16px);
}
`})}),`
`,n.jsx(e.h3,{id:"lineheight",children:n.jsx(e.code,{children:"lineHeight"})}),`
`,n.jsx(e.p,{children:"Устанавливает межстрочный интервал с CSS custom property."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение межстрочного интервала"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include lineHeight(1.5);
}
`})}),`
`,n.jsx(e.h3,{id:"paragraphspacing",children:n.jsx(e.code,{children:"paragraphSpacing"})}),`
`,n.jsx(e.p,{children:"Устанавливает отступ между последовательными параграфами."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение отступа"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.content {
  @include paragraphSpacing(1em);
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-выравнивания-текста",children:"Миксины выравнивания текста"}),`
`,n.jsx(e.h3,{id:"textalign",children:n.jsx(e.code,{children:"textAlign"})}),`
`,n.jsx(e.p,{children:"Устанавливает выравнивание текста с автоматической поддержкой RTL."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение выравнивания ('left', 'right', 'center', 'justify')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include textAlign('left'); // автоматически инвертируется для RTL
}
`})}),`
`,n.jsx(e.h3,{id:"textcase",children:n.jsx(e.code,{children:"textCase"})}),`
`,n.jsx(e.p,{children:"Устанавливает преобразование текста."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение text-transform ('uppercase', 'lowercase', 'capitalize', 'none')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include textCase('uppercase');
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-переполнения-текста",children:"Миксины переполнения текста"}),`
`,n.jsx(e.h3,{id:"textoverflow",children:n.jsx(e.code,{children:"textOverflow"})}),`
`,n.jsx(e.p,{children:"Устанавливает поведение при переполнении текста."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$value"})," — значение переполнения ('truncate', 'ellipsis', 'clip')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include textOverflow('truncate');
}
`})}),`
`,n.jsx(e.h3,{id:"truncate",children:n.jsx(e.code,{children:"truncate"})}),`
`,n.jsx(e.p,{children:"Обрезает текст с многоточием на одной строке."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include truncate;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
}
`})}),`
`,n.jsx(e.h3,{id:"clamp",children:n.jsx(e.code,{children:"clamp"})}),`
`,n.jsx(e.p,{children:"Ограничивает текст указанным количеством строк с многоточием."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$clamp"})," — количество строк"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include clamp(3);
  // -webkit-line-clamp: 3;
}
`})}),`
`,n.jsx(e.h2,{id:"утилитарные-миксины",children:"Утилитарные миксины"}),`
`,n.jsx(e.h3,{id:"textselectnone",children:n.jsx(e.code,{children:"textSelectNone"})}),`
`,n.jsx(e.p,{children:"Отключает выделение текста."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Параметры:"})," нет"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.text {
  @include textSelectNone;
  // user-select: none;
}
`})})]})}function o(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{o as default};
