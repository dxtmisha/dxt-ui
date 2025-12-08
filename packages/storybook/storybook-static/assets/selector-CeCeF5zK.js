import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-Zkkrlp1B.js";import{M as l}from"./blocks-DcNZdanM.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BlCC38XJ.js";function c(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"@dxtmisha/styles/ru/Selector"}),`
`,n.jsx(e.h1,{id:"selector",children:"Selector"}),`
`,n.jsx(e.p,{children:"Набор SCSS миксинов для управления селекторами состояний элементов с поддержкой CSS Custom Properties."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Как это работает:"})," Система обеспечивает интеллектуальное управление состояниями интерактивных элементов. Миксин ",n.jsx(e.code,{children:"enabled"})," автоматически добавляет селекторы ",n.jsx(e.code,{children:":not()"})," для исключения состояний disabled, readonly и loading. Миксины состояний, такие как ",n.jsx(e.code,{children:"hover"}),", ",n.jsx(e.code,{children:"active"})," и ",n.jsx(e.code,{children:"focus"}),", оборачивают ",n.jsx(e.code,{children:"enabled"}),", гарантируя работу взаимодействий только на активных элементах. Особая обработка для ",n.jsx(e.code,{children:"focus"})," включает ",n.jsx(e.code,{children:":focus"}),", ",n.jsx(e.code,{children:":focus-within"})," и BEM-модификатор для программных состояний фокуса."]}),`
`,n.jsx(e.h2,{id:"базовые-миксины",children:"Базовые миксины"}),`
`,n.jsx(e.h3,{id:"selector-1",children:n.jsx(e.code,{children:"selector"})}),`
`,n.jsx(e.p,{children:"Создает псевдокласс селектор с особой обработкой состояния focus."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$name"})," — имя селектора (например, 'hover', 'active', 'focus')"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.button {
  @include selector('hover') {
    background: blue;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"enabled",children:n.jsx(e.code,{children:"enabled"})}),`
`,n.jsx(e.p,{children:"Применяет стили только к включенным (не disabled, не readonly, не loading) элементам."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.button {
  @include enabled {
    cursor: pointer;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"enabledselector",children:n.jsx(e.code,{children:"enabledSelector"})}),`
`,n.jsx(e.p,{children:"Комбинирует состояние enabled с псевдоклассом селектора."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$name"})," — имя селектора"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.button {
  @include enabledSelector('hover') {
    background: blue;
  }
}
`})}),`
`,n.jsx(e.h2,{id:"миксины-состояний",children:"Миксины состояний"}),`
`,n.jsx(e.h3,{id:"hover",children:n.jsx(e.code,{children:"hover"})}),`
`,n.jsx(e.p,{children:"Применяет стили при наведении только для активных элементов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.button {
  @include hover {
    background: blue;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"active",children:n.jsx(e.code,{children:"active"})}),`
`,n.jsx(e.p,{children:"Применяет стили при активном состоянии только для активных элементов."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.button {
  @include active {
    transform: scale(0.95);
  }
}
`})}),`
`,n.jsx(e.h3,{id:"focus",children:n.jsx(e.code,{children:"focus"})}),`
`,n.jsx(e.p,{children:"Применяет стили при фокусе только для активных элементов. Включает :focus, :focus-within и BEM-модификатор."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.button {
  @include focus {
    outline: 2px solid blue;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"disabled",children:n.jsx(e.code,{children:"disabled"})}),`
`,n.jsx(e.p,{children:"Применяет стили к отключенным элементам."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.button {
  @include disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"readonly",children:n.jsx(e.code,{children:"readonly"})}),`
`,n.jsx(e.p,{children:"Применяет стили к элементам только для чтения."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Параметры:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"$parent: &"})," — родительский селектор"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Возвращает:"})," ",n.jsx(e.code,{children:"void"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-scss",children:`.input {
  @include readonly {
    background: #f5f5f5;
  }
}
`})})]})}function t(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{t as default};
